# Circle CI Integration

#### Sep 1, 2018 by Sreeram Padmanabhan

## Register
Register at travis-ci.com and allow travis access to your repo.

## Install
Create a file called `.travis.yml` and add the following code.

    sudo: required
    language: node_js
    node_js:
      - '8'
    cache:
      directories:
        - node_modules
    install: skip
    jobs:
      include:
      - stage: dependencies
        script:
          - npm i
        name: Setup
      - stage: build
        script:
          - npm run build
        name: Build
