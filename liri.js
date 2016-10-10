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

    var keys = require('./keys.js');

    var keyList = keys.twitterKeys;

    var client = new twitter({
        consumer_key: keyList.consumer_key,
        consumer_secret: keyList.consumer_secret,
        access_token_key: keyList.access_token_key,
        access_token_secret: keyList.access_token_secret
    });

    var params = { screen_name: 'john_nowinsky', count: 20 };
    client.get('statuses/user_timeline.json', params, function(error, tweets, response) {

        if (!error) {
            console.log(tweets);
        }
    });
}