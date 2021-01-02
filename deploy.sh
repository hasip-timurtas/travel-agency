#!/bin/bash
yarn
yarn build
scp -r ./dist/* dist/.htaccess root@95.179.168.245:/home/hasip/domains/agency.hasip.dev/public_html/