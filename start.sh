#!/usr/bin/env sh

# 
yum install node -y
yum install lsof -y
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install
npm run build
nohup npm start &
exit


