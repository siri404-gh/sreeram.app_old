#!/bin/sh
git remote add heroku git@heroku.com:sreeram-stage.git
echo "Host heroku.com" >> ~/.ssh/config
echo "   StrictHostKeyChecking no" >> ~/.ssh/config
echo "   CheckHostIP no" >> ~/.ssh/config
echo "   UserKnownHostsFile=/dev/null" >> ~/.ssh/config
heroku keys:clear
yes | heroku keys:add
git push --force heroku master
