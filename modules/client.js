var Twitter = require('twitter');

module.exports = {
    tweetNoticia: function(tweetBody, config) {
        var client = new Twitter({
            consumer_key: config.consumer_key,
            consumer_secret: config.consumer_secret,
            access_token_key: config.access_token_key,
            access_token_secret: config.access_token_secret
        });

        client.post('statuses/update', { status: tweetBody }, function(error, tweet, response) {
            if (error) {
                console.log(error);
            };
            console.log('Versed!');
        });
    }
}