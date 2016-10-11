
// Get Node File System 
var fs = require('fs');
// Get Node Request
var request = require('request');
// Get Node Spotify
var spotify = require('spotify');
// Get Node Twitter
var twitter = require('twitter');

// Get Liri command and data from the command prompt

var liriArgs = process.argv.slice(2);
console.log(liriArgs);
var liriCommand = liriArgs[0];
var liriData = liriArgs[1];

// Main function to process the Liri Commands and Data entered from the command prompt

function liri(liriCommand, liriData) {
	switch (liriCommand) {
	    case "my-tweets":
	        myTweets();
	        break;
	    case "spotify-this-song":
			console.log('song');
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
}

// Function to process the Liri my-tweets command and show the first 20 twitts.

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
    var params = { 
    		screen_name: liriData,
    	};
    // Get the tweets
    client.get('statuses/user_timeline.json', params, function(error, tweets, response) {
        // Display the tweets and show error if there is an error
        if (!error) {
        	if ( tweets.length < 20) {
        		var numberTweets = tweets.length;
        	} else {
        		var numberTweets = 20;
        	}
            for (var i = 0; i < numberTweets; i++) {
            	console.log(tweets[i].created_at);
                console.log(tweets[i].text);
                console.log('-----------');
            }
        } else {
            console.log('Error occurred: ' + error);
        }
    });
}

liri(liriCommand,liriData);