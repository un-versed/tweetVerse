const tweetVerse = require('./../app');

setInterval(function() {
    tweetVerse.crawl({
        config: {
            consumer_key: '?',
            consumer_secret: '?',
            access_token_key: '?',
            access_token_secret: '?'
        },
        uri: 'https://pt.wikipedia.org/wiki/Especial:Aleat%C3%B3ria',
        selector: '#mw-content-text p:nth-child(2)',
        cb: function(title) {
            // tweetVerse.tweet({
            //     body: 'tweetVerse: "' + title + '"',
            //     config: this.config
            // });
            console.log(title);
            if (title != '') {
                if (title.length <= 140) {
                    tweetVerse.tweet({
                        body: title,
                        config: this.config
                    });
                }
            }
        }
    });
}, 1000)