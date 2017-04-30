'use strict'
let friends  = require('../data/friends.js');
const router = require('express').Router();
const _ = require('lodash');

function calculateCompatibility(userArray, friendArray){
	var difference = 0;
	for(let answer in userArray){
		console.log('User:' + userArray[answer], 'Friend' + friendArray[answer]);
		difference += (Math.abs(userArray[answer] - friendArray[answer]));;
		console.log(difference);
	}
	return difference;
}

router.get('/api/friends', function(req, res){
	res.json(friends);
});

router.post('/api/friends', function(req, res){
	let differential_score = 100000; //Var for lowest difference between quiz scores
	var best_match_data = {};
	let user_scores = req.body.scores;

	// You have to parse the user scores into ints
	for(var score in user_scores){
		user_scores[score] = parseInt(user_scores[score], 10);
	}
	console.log('User score' , user_scores)
	//Loop through friends and calculate the difference in score from user on each ?
	for (var person in friends){
		console.log("Friend: " + friends[person].name, "Answers " + friends[person].scores)
		let difference = calculateCompatibility(user_scores, friends[person].scores)
		if(difference < differential_score){
			differential_score = difference;
			best_match_data.name = friends[person].name;
			best_match_data.photo = friends[person].photo;
		}
	}
	console.log(best_match_data);
	res.json(best_match_data);
})

module.exports = router;
