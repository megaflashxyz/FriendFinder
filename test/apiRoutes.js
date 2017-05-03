const assert = require('assert');
const calculateCompatibility = require('../app/routing/apiRoutes.js').calculateCompatibility;
const request = require('request');
const expect = require('chai').expect;
const friends = [
	{
		name: 'foo',
		photo: 'bar',
		scores:[
			3,
			4,
			1,
			2,
			3,
			5,
			3,
			1,
			2,
			5
		]
	},{
		name: 'nim',
		photo: 'nom', 
		scores:[
			5,
			2,
			3,
			2,
			1,
			1,
			4,
			4,
			2,
			3
		]
	},{ 
		//copy of scores form friends[0]
		name: 'foo2',
		photo: 'bar2',
		scores:[
			3,
			4,
			1,
			2,
			3,
			5,
			3,
			1,
			2,
			5
		]
	}

];

describe('Routes', function(){

	describe('Home route', function(){
		let url  = 'http://localhost:3000/';
		it("returns status 200", function(done) {
    		request(url, function(error, res, body){
    			expect(res.statusCode).to.equal(200);
    			done();
    		});
    	});
    });

	describe('Survey route', function(){
		var url  = 'http://localhost:3000/survey';
		it("returns status 200", function(done) {
    		request(url, function(error, res, body){
    			expect(res.statusCode).to.equal(200);
    			done();
    		});
    	});
    });


	describe('Friends route', function(){
		let url  = 'http://localhost:3000/api/friends';
		it("returns status 200", function(done) {
    		request(url, function(error, res, body){
    			expect(res.statusCode).to.equal(200);
    			done();
    		});
    	});
    });

});

describe('User survey', function(){
	describe('Compatibility Calculation', function() {
	

		it('should return compatibility score of 0 (perfect match)', function(){
			let user_scores = [
				3,
				4,
				1,
				2,
				3,
				5,
				3,
				1,
				2,
			];
			assert.equal(0,calculateCompatibility(user_scores, friends[0].scores))
		});
	});
});


