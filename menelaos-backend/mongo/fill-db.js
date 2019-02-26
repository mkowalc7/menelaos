load('mock-parties.js');

var menelaosDB = connect('127.0.0.1:27017/menelaosDB');

menelaosDB.auth(menelaosUsername, menelaosPassword);

for (idx in mockParties) {
	var doc = mockParties[idx];
	menelaosDB.parties.insert(doc);
}

for (idx in mockUsers) {
	var doc = mockUsers[idx];
	menelaosDB.users.insert(doc);
}