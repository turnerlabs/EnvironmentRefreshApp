#!/bin/bash
cd /root/server
dotnet watch run &
cd /root/client
ng serve --host 0.0.0.0 --watch --hmr -e=hmr --proxy-config ./proxy.conf.json
