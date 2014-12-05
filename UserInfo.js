// count tweets from twitter
//
// Henry Chu Fall 2014

var ntwitter = require("ntwitter"),
    credentials = require("./credentials.json"),
    twitter,
    redis = require("redis"),
    redisClient,
    user = {};

// set up counters; initialize to 0


// twitter object


user.id = 0;
user.username = 0;
user.screen_name=0;
user.location=0;
user.profile_image_url=0;
user.followers_count=0;
user.friends_count=0;
twitter = ntwitter(credentials);
// create a client to connect to Redis
client = redis.createClient();
twitter.getTimeLine(
		'',function(data,response) {
			
			if(response.error)
				{
				console.log("My error: " + response.error);
				}
			else
				{
			for(var i=0;i<response.length;i++)
				{
				user.id  = response[i].user.id;
				user.username=response[i].user.name;
				user.screen_name=response[i].user.screen_name;
				user.location=response[i].user.location;
				user.profile_image_url=response[i].user.profile_image_url;
				user.followers_count=response[i].user.followers_count;
				user.friends_count=response[i].user.friends_count;
				}
				}
			
			
			}
);

module.exports = user;
