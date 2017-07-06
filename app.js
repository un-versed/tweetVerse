const client = require('./modules/client');
const pageCrawl = require('./modules/pageCrawl');

module.exports = {
    crawl: function(p) {
        const config = p.config;
        pageCrawl.page({
            config: config,
            uri: p.uri,
            selector: p.selector,
            cb: function(title) {
                p.cb(title);
            }
        });
    },

    crawlImage: function(p) {
        const config = p.config;
        pageCrawl.page({
            config: config,
            uri: p.uri,
            selector: p.selector,
            cb: function(title) {
                p.cb(title);
            }
        });
    },

    tweet: function(p) {
        client.tweetNoticia(p.body, p.config);
    }
};