load('mock-parties.js');

var db = connect('127.0.0.1:27017/admin');

//user that can do anything in mongo
db.createUser({
    user:adminUsername,
    pwd:adminPassword,
		roles: [
				{ role: "userAdminAnyDatabase", db: "admin" },
				{ role: "readWriteAnyDatabase", db: "admin" },
				{ role: "dbAdminAnyDatabase", db: "admin" },
				{ role: "clusterAdmin", db: "admin" }
			]
});

db = connect('127.0.0.1:27017/menelaosDB');

//user for menelaosDB database
db.createUser({
	user:menelaosPassword,
	pwd:menelaosUsername,
	roles: [
		{ role: "readWrite", db: "menelaosDB" }
	]
});

db.createCollection('parties');
db.createCollection('users');
