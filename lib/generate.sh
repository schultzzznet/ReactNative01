#!/bin/sh

rm -rf pure-api

brew upgrade
brew update

brew install wget
brew install npm

#sudo chown -R schultzc /usr/local/lib/node_modules
#sudo npm install -g npm
npm install @openapitools/openapi-generator-cli -g
npm update openapi-generator

rm openapi.yaml
wget https://api.elsevierpure.com/ws/api/openapi.yaml

#openapi-generator-cli generate -i openapi.yaml --generator-name typescript-axios --output pure-api --strict-spec true --additional-properties=pubVersion=1.0-SNAPSHOT
#npm run api

openapi-generator-cli generate -i openapi.yaml --generator-name typescript --output pure-api --strict-spec true --additional-properties=pubVersion=1.0-SNAPSHOT

rm -rf pure-api/test

