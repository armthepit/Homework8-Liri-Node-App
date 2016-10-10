// Requires

var fs = require('fs');
var request = require('request');
var spotify = require('spotify');
var twitter = require('twitter');

// Get Liri command

liriCommand = process.argv[2];
console.log(liriCommand);

switch(liriCommand) {
	case "my-tweets":
	console.log("my-tweets");
		break;
	case "spotify-this-song":
		console.log("spotify");
		break;
	case "movie-this":
		console.log("movie");
		break;
	case "do-what-it-says":
		console.log("do what");
		break;
	default:
		console.log("no choice");
}