const tweetVerse = require('./../app');

tweetVerse.crawl({
    config: {
        consumer_key: '?',
        consumer_secret: '?',
        access_token_key: '?',
        access_token_secret: '?'
    },
    uri: 'https://noticias.uol.com.br/',
    selector: '.manchete-sem-foto-3colunas h1',
    cb: function(title) {
        tweetVerse.tweet({
            body: 'tweetVerse: "' + title + '"',
            config: this.config
        });
    }
});