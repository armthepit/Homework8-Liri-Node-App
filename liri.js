// Requires

var fs = require('fs');
var request = require('request');
var spotify = require('spotify');
var twitter = require('twitter');

// Get Liri command

liriCommand = process.argv[2];
console.log(liriCommand);

switch (liriCommand) {
    case "my-tweets":
        myTweets();
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

function myTweets() {
	// Read in the key file.
    var keys = require('./keys.js');
    // Read in the keyList and an assign the keys to the Twitter client
    var keyList = keys.twitterKeys;

    var client = new twitter({
        consumer_key: keyList.consumer_key,
        consumer_secret: keyList.consumer_secret,
        access_token_key: keyList.access_token_key,
        access_token_secret: keyList.access_token_secret
    });
    // Assign the screen name and number of tweets to return.
    // var params = { screen_name: 'john_nowinsky', count: 20 };
    var params = { count: 7 };
    // Get the tweets
    client.get('statuses/user_timeline.json', params, function(error, tweets, response) {
    	// Display the tweets and show error if there is an error
        if (!error) {
        	for(var i = 0; i < 7; i++) {
            	console.log(tweets[i].created_at); 
            	console.log(tweets[i].text);
            	console.log('-----------')    
            }      
        } else {
        	console.log(error);
        }
    });
}

