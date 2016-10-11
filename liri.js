
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
	        if (process.argv.length > 3) {
	            var song = process.argv[3];
	        } else {
	            var song = "The Sign";
	        }
	        spotifyThisSong(song);
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
    		count: 7 
    	};
    // Get the tweets
    client.get('statuses/user_timeline.json', params, function(error, tweets, response) {
        // Display the tweets and show error if there is an error
        if (!error) {
            for (var i = 0; i < 7; i++) {
                console.log(tweets[i].created_at);
                console.log(tweets[i].text);
                console.log('-----------')
            }
        } else {
            console.log('Error occurred: ' + error);
        }
    });
}

function spotifyThisSong(song) {
	song = song.replace(" ","+");
	console.log(song);
    spotify.search({ type: 'track', query: song }, function(error, response) {
        if (!error) {
        	console.log('response: '+response.artists.items.external_urls);	
        } else {    
        	console.log('Error occurred: ' + error);
        }
    });
}

liri(liriCommand,liriData);