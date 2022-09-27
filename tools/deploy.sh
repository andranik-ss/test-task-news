#!/bin/sh

RED="\e[1;31m"
GREEN="\e[1;32m"
CYAN="\e[0;36m"
NORMAL="\e[0m"
DIR_PATH="/var/www/test-task-news/"

echo $CYAN → Remove last build $NORMAL
rm -rf $DIR_PATH*

echo $CYAN → Copy new build to serve dir $NORMAL
cp -r ./build/* $DIR_PATH

echo $GREEN → Done $NORMAL