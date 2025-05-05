#!/bin/bash

REPO_DIR="/usr/src/app"

# Clone or pull the latest code
if [ ! -d "$REPO_DIR/.git" ]; then
    git clone https://github.com/ShadowRL76/Little-Kevin "$REPO_DIR"
else
    cd "$REPO_DIR" || exit
    git pull origin main
fi

# Go to repo dir and install dependencies
cd "$REPO_DIR" || exit
npm install

# Start the bot
npm start
