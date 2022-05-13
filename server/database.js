//'use strict';
/*
 * НИКИТА, ОТКРОЙ ЗАГРУЗКУ ФАЙЛОВ!!!1!!11!!!!!1
 *  
 */
var RiddlesDB = {
	Riddle:
	[
		{
		Riddle: "100 одёжек и все без застёжек",
		Answer: "Капуста"
		}
	]
};

var UserDB = {
	User:
	[
		{
			Username: "TheBest",
			Password: 12345,
			Attempts_amount: 0,
			Wins_amount: 0
		}
	]
};

// Конвертация
function ToJS(obj) {
	obj = JSON.stringify(obj);
	return JSON.parse(obj);
}

function ToJSON(obj) {
	return JSON.stringify(obj);
}

// Добавление в БД
function AddRiddle(riddle, answer) {
	RiddlesDB.Riddle.push({
		Riddle: riddle,
		Answer: answer
	});
}

function AddUser(username, password) {
	UserDB.User.push({
		Username: username,
		Password: password,
		Attempts_amount: 0,
		Wins_amount: 0
	});
}

// Удаление из БД
function DeleteRiddle(rid) {
	RiddlesDB.Riddle.splice(rid, 1);
}

function DeleteUser(uid) {
	UserDB.User.splice(uid, 1);
}

