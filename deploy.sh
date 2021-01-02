#!/bin/bash
yarn build
scp -r ./dist/* root@95.179.168.245:/home/hasip/domains/agency.hasip.dev/public_html/