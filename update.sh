#!/usr/bin/env sh

# 当发生错误时中止脚本
# set -e

# 
cnpm install
svn update
npm run build
kill -9 $(netstat -nlp | grep :8090 | awk '{print $7}' | awk -F"/" '{ print $1 }')
#kill -9 $(lsof -i:8090 |awk '{print $2}' | tail -n 2)
nohup npm start &
 


