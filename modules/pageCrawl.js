const Crawler = require('crawler');

var c = new Crawler({
    maxConnections: 10
});

module.exports = {
    page: function(p) {
        c.queue([{
            uri: p.uri,
            jQuery: true,

            // The global callback won't be called 
            callback: function(error, res, done) {
                if (error) {
                    p.cb(title);
                } else {
                    let $ = res.$;
                    p.cb($(p.selector).text());
                }
                done();
            }
        }]);
    }
}