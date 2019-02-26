var adminUsername='admin';
var adminPassword='admin';

var menelaosUsername='mendev';
var menelaosPassword='mendev';

// to authenticate, paste the following to the mongo shell after running the configuration script:
// $ db.auth('admin','admin')
// make sure you use db corresponding to authenticating user

var mockParties =
[
	{
		"_id" : ObjectId("5c48daea4109ab902700c911"),
		"userId": ObjectId("9ab902704109ab902700c911"),
		"partyName": "Urodziny Krzyśka",
		"date": ISODate("2003-05-13T20:00:09Z"),
		"description": "najebaem sie z marcinem i wojtkiem",
		"partyEntries": [
			{
				"alcoholName": "beer",
				"volumeKind": "BUTELKA_500",
				"quantity": 3,
				"date": ISODate("2003-05-13T20:23:34Z")
			},
			{
				"alcoholName": "vodka",
				"volumeKind": "KIELISZEK_50",
				"quantity": 6,
				"date": ISODate("2003-05-13T22:12:24Z")
			}
		]
	},
	{
		"_id" : ObjectId("5c48daea4109ab902700c912"),
		"userId": ObjectId("9ab902704109ab902700c911"),
		"partyName": "Impreza Kaftu - Jagiellonska",
		"date": ISODate("2019-01-25T16:30:32Z"),
		"description": "dywanu nie bylo ale byly muzea",
		"partyEntries": [
			{
				"alcoholName": "vodka",
				"volumeKind": "MALPKA_200",
				"quantity": 1,
				"date": ISODate("2019-01-25T17:03:18Z")
			},
			{
				"alcoholName": "beer",
				"volumeKind": "BUTELKA_500",
				"quantity": 1,
				"date": ISODate("2019-01-25T18:50:10Z")
			},
			{
				"alcoholName": "russian_champagne",
				"volumeKind": "BUTELKA_700",
				"quantity": 1,
				"date": ISODate("2019-01-25T20:00:05Z")
			}
		]
	}
];


var mockUsers =
[
	{
		"_id" : ObjectId("9ab902704109ab902700c911"),
		"email": "krzysiek@email.com",
		"password": "abc123",
		"firstName": "Krzysztof",
		"lastName": "Mumbach",
		"joinDate": ISODate("2008-05-13T20:00:09Z"),
		"weight": 93,
		"age": 29,
		"gender": "MALE"
	}
];