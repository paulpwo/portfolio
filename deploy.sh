#!/bin/sh
# -S 52.27.38.82 -U ubuntu -P '/Users/developer/DEVPWO.pem'  -D 1a.devpwo.com  -E paulpwo@gmail.com -I n



RED='\033[0;31m'
NC='\033[0m' # No Color
ORANGE='\033[0;33m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
# To pass three arguments
# CONFIG AUTOMATIC SCRIPT
echo "${ORANGE}===================================================================================="
echo "⚙️⚙️⚙️⚙️ INITIALIZE SCRIPT  AUTO CONFIGURA AWS EC2 BY Paul Osinga ⚙️⚙️⚙️⚙️ "
echo "REQUIERE EL USO DE UN ARCHIVO PEM PARA LA CONFIGURACION DE LA INSTANCIA "
echo ${RED}"NO SE DEBE UTILIZAR EN INSTANCIAS PREVIAMENTE CONFIGURADAS ${NC}"
echo ${RED}"REQUIERE UNA IP ELASTICA CONFIGURADA Y ASIGNADA (VALIDEZ DEL SSL) ${NC}"
echo ${RED}"RECUERDE QUE SE ELEVARAN ALGUNOS PERSMISOS SOBRE CARPETAS PARA EL USUARIO SSH ${NC}"
echo "${ORANGE}==================================================================================== ${NC}"

USER="ubuntu"
helpFunction()
{
   echo " NO USE EN ENTORNOS PREVIAMENTE CONFIGURADOS"
   echo "Usage: $0 -S 0.0.0.0 -U ubuntu -P ./pem.pem -D midominio.com -E miemail@gmail.com"
   echo "\t-S Requerido, IP del servidor"
   echo "\t-U Requerido, user del servidor"
   echo "\t-P Requerido, ruta del fichero pem o certificado"


   exit 1 # Exit script after printing help
}
echo $opt

while getopts "S:U:P:D:E:X:Z:L:I:" opt
do
   case "$opt" in
      S ) serverIP="$OPTARG" ;;
      U ) userServer="$OPTARG" ;;
      P ) pemOrcertFile="$OPTARG" ;;

    #   ? ) helpFunction ;; # Print helpFunction in case parameter is non-existent
   esac
done

# Print helpFunction in case parameters are empty
if [ -z "$serverIP" ] || [ -z "$userServer" ] || [ -z "$pemOrcertFile" ]

then
   echo "Parametros requeridos";
   helpFunction
fi

# Begin script in case all parameters are correct
echo "${YELLOW}================================================================"
echo "Ejecutando tareas con la siguiente configuracion"
echo "================================================================${NC}"
echo "Server:   $serverIP"
echo "User SSH: $userServer"
echo "Pem File: $pemOrcertFile"
echo "Email:    $USER_SSL_EMAIL"
echo "${YELLOW}================================================================${NC}"
# echo $(cat ./$CLOUDFLARE_PEM)

echo "⚡⚡⚡⚡ Deploying file... ⚡⚡⚡⚡"
echo "connecting to server... ssh $userServer@$serverIP"

ssh -o StrictHostKeyChecking=no -i $pemOrcertFile $userServer@$serverIP "echo 'Connection success!'; exit"


# rsync -avz -e "ssh -i $pemOrcertFile" --exclude '.env' . $userServer@$serverIP:"/var/www/html"
# rsync rsync build/ -e "ssh -i $pemOrcertFile" $userServer@$serverIP:/var/www/html
rsync -avz --rsync-path="sudo rsync" -e "ssh -i $pemOrcertFile" --exclude '.env' ./build/ $userServer@$serverIP:"/var/www/html"

