# Liri

### Build an Siri Like app that uses the command line to take in parameters and give back data using node packages and the Twitter, Spotify, OMDB, and IMDB API's.

![Liri] (assets/images/trainscheduler.gif)

### Design Notes
	* Use Node packages to extract data passed to it from the command line and console it out.
	* node liri.js my-tweets
		* Show last 20 tweets and when they were created.
	* node liri.js spotify-this-song 'song name'
		* Artist
		* Song Title
		* Preview Link
		* Album
		* if no song title passed in will default to "The Sign" by Ace of Base
	* node liri.js movie-this 'movie title'
		* Movie Title
		* Release Year
		* IMDB Rating
		* Country
		* Language
		* Plot
		* Actors
		* Rotten Tomatoes Rating
		* Rotten Tomatoes URL
		* if no movie title passed in will default to "Mr. Nobody"
	* node liri do-what-it-says
		* Uses the fs Node package to take the text from random.txt and run a Liri command.
		* Defaults to spotify-this-song "I Want it That Way" 

### Stack Used
	* Javascript
	* JQuery
	* Node Packages
		* Request
		* Spotify
		* Twitter