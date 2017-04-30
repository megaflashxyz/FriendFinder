'use strict'
let friends  = require('../data/friends.js');
const router = require('express').Router();
const _ = require('lodash');

router.get('/api/friends', function(req, res){
	res.json(friends);
});

router.post('/api/friends', function(req, res){
	let differential_score = 100000; //Var for lowest difference between quiz scores
	var best_match_data = {};
	let user_scores = req.body.scores;

	//You have to parse the user scores into ints
	for(var score in user_scores){
		user_scores[score] = parseInt(user_scores[score], 10);
	}
	let user_total = _.sum(user_scores);
	console.log('User score' , user_total)
	//Loop through friends and calculate the difference in score from user
	for (var person in friends){
		let friend_total = _.sum(friends[person].scores);
		console.log(friends[person].name + ' total', friend_total);
		let difference = Math.abs(user_total - friend_total);
		console.log(difference, differential_score);
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
