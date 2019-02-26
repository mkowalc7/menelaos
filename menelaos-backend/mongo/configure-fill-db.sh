#!/usr/bin/env bash

#this script:
# - creates admin-super-user, normal-user and fills db with mock data
# - leaves mongod service in authentication required mode

#before running:
# - ensure mongod service is down

#start without auth to configure db
sudo mongod --dbpath /var/lib/mongodb --fork --logpath /var/log/mongod.log

mongo < configure-db.js

sudo mongod --dbpath /var/lib/mongodb --shutdown

#start with auth
sudo mongod --dbpath /var/lib/mongodb --auth --fork --logpath /var/log/mongod.log

mongo < fill-db.js
