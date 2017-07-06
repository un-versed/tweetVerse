# tweetVerse.js
###### Crawl Websites and Tweet the content.

# Install

`npm install tweetverse --save`

# Usage

```
const tweetVerse = require('tweetverse');

tweetVerse.crawl({
    config: {
        consumer_key: 'consumer_key',
        consumer_secret: 'consumer_secret',
        access_token_key: 'access_token_key',
        access_token_secret: 'access_token_secret'
    },
    uri: 'url-to-crawl',
    selector: 'jquery-selector-of-element-on-page',
    cb: function(title) {
        // Title is the element you have selected
        tweetVerse.tweet({
            body: 'tweet-body',
            config: this.config // Line required to pass config (you can try different one)
        });
    }
});
```

# Example

```
const tweetVerse = require('tweetverse');

tweetVerse.crawl({
    config: {
        // Replace With Your Information
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
```
# Example 2 - Crawl Random Wikipedia Page
```
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
```