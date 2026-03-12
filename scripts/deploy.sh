#!/usr/bin/env bash
set -euo pipefail

# ============================================================
# Build & Deploy to Cloudflare Pages
# Usage: npm run deploy
# ============================================================

export CLOUDFLARE_ACCOUNT_ID="16a20b705cad29938201ef8e6ce7f14e"
PROJECT_NAME="paul-portfolio"

cd "$(dirname "$0")/.."

# Load .env
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

: "${CLOUDFLARE_API_TOKEN:?Missing CLOUDFLARE_API_TOKEN in .env}"

echo "=========================================="
echo " Deploy Portfolio to Cloudflare Pages"
echo "=========================================="

# 1. Build
echo ""
echo "[1/2] Building site..."
npm run build

# 2. Deploy via wrangler
echo ""
echo "[2/2] Deploying to Cloudflare Pages..."
npx wrangler pages deploy dist --project-name="$PROJECT_NAME" --branch=main

echo ""
echo "Live: https://paulosinga.net"
