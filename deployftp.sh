#!/bin/sh
# -S 52.27.38.82 -U ubuntu -P '/Users/developer/DEVPWO.pem'  -D 1a.devpwo.com  -E paulpwo@gmail.com -I n



RED='\033[0;31m'
NC='\033[0m' # No Color
ORANGE='\033[0;33m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'

helpFunction()
{
   echo " NO USE EN ENTORNOS PREVIAMENTE CONFIGURADOS"
   echo "Usage: $0 -S 0.0.0.0 -U xuser -D midominio.com -P password"
   echo "\t-S Requerido, IP del servidor"
   echo "\t-U Requerido, user del servidor"


   exit 1 # Exit script after printing help
}
echo $opt

while getopts "S:U:P:" opt
do
   case "$opt" in
      S ) SERVER="$OPTARG" ;;
      U ) USER="$OPTARG" ;;
      P ) PASSWORD="$OPTARG" ;;

    #   ? ) helpFunction ;; # Print helpFunction in case parameter is non-existent
   esac
done

# Print helpFunction in case parameters are empty
if [ -z "$SERVER" ] || [ -z "$USER" ] || [ -z "$PASSWORD" ]

then
   echo "Parametros requeridos";
   helpFunction
fi

# Begin script in case all parameters are correct
echo "${YELLOW}================================================================"
echo "Ejecutando tareas con la siguiente configuracion"
echo "================================================================${NC}"
echo "Server:   $SERVER"
echo "User SSH: $USER"
echo "${YELLOW}================================================================${NC}"


#build 
echo "${YELLOW}================================================================"
echo "Build"
echo "================================================================${NC}"
# npm run build

# copy .env file to build folder
echo "${YELLOW}================================================================"
echo "Copy .env file to build folder"
echo "================================================================${NC}"
# cp .env build/.env

# send build folder to server via ftp
echo "${YELLOW}================================================================"
echo "Send build folder to server via ftp"
echo "================================================================${NC}"

CARPETA_LOCAL="./build/*"

# lftp -c "set ftp:ssl-allow no; open -u $USER,$PASSWORD $SERVER; mirror -R --verbose $CARPETA_LOCAL $CARPETA_REMOTA; bye"



# Función para subir archivos usando ftp
subir_carpeta_ftp() {
    
    ncftpput -R -v -u $USER -p $PASSWORD $SERVER / $CARPETA_LOCAL
EOF
}

# Ejecutar la función
subir_carpeta_ftp

exit 0