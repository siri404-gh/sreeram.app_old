#!/bin/sh
./node_modules/.bin/codecov --disable=gcov --file=mycache/test/lcov.txt
./node_modules/.bin/codeclimate-test-reporter < mycache/test/lcov.txt
./node_modules/.bin/codacy-coverage --accountToken $CODACY_TOKEN --username $CODACY_USERNAME --projectName $CODACY_PROJECT < mycache/test/lcov.txt
node sonarqube.js
