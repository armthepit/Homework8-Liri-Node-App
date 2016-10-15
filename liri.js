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
var liriCommand = liriArgs[0];
var liriData = liriArgs[1];

// Main function to process the Liri Commands and Data entered from the command prompt

function liri(liriCommand, liriData) {
    switch (liriCommand) {
        case "my-tweets":
            myTweets();
            break;
        case "spotify-this-song":
            if (liriArgs.length === 1) {
                var song = "The Sign Ace of Base";
            } else if (liriArgs.length === 2) {
                var song = liriData;
            } else {
                var song = '';
                for (var i = 1; i < liriArgs.length; i++) {
                    song = song + ' ' + liriArgs[i];
                }
            }
            spotifyThisSong(song);
            break;
        case "movie-this":
       		console.log("movie this");
            break;
        case "do-what-it-says":
            console.log("do what it says");
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
            if (tweets.length < 20) {
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

// Function to process the Liri spotify-this-song command and search for song.

function spotifyThisSong(song) {
    // Search for song 
    spotify.search({ type: 'track', query: song }, function(error, response) {
        // Display song details and show error if there is an error
        if (!error) {
            console.log('Artist Name: ' + response.tracks.items[0].artists[0].name);
            console.log('Song Name: ' + response.tracks.items[0].name);
            console.log('Preview URL: ' + response.tracks.items[0].preview_url);
            console.log('Album Name: ' + response.tracks.items[0].album.name);
        } else {
            console.log('Error occurred: ' + error);
        }
    });
}

liri(liriCommand, liriData);