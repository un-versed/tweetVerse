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
