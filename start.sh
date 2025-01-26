#!/bin/bash

REPO_DIR="/usr/src/app"

if [ ! -d "$REPO_DIR" ]; then
    git clone https://github.com/ShadowRL76/Little-Kevin $REPO_DIR
else
    cd $REPO_DIR || exit
    git pull origin main
fi

cd $REPO_DIR || exit
npm install

docker run -d --name discord-bot $REPO_DIR
