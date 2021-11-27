let dao = require('../db/tweets/tweet-dao');

module.exports = (app) => {
    
    const findAllTweets = (req, res) => {
        dao.findAllTweets()
        .then(tweets => res.json(tweets));
    }
    
    app.get('/rest/tweets', findAllTweets);

    const createTweet = (req, res) => {
        const newTweet = {
            "topic": "Web Development",
            "title" : "",
            "userName": "ReactJS",
            "liked":false,
            "verified": false,
            "handle": "ReactJS",
            "tweet": req.body.tweet,
            "time": "2h",
            "avatar-image": "/a5/images/potrait.png",
            "logo-image": "/a5/images/potrait.png",
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345
            }
        }
        dao.createTweet(newTweet)
        .then((tweet) => res.json(tweet));
    }

    app.post('/rest/tweets', createTweet);

    const deleteTweet = (req, res) => {
        dao.deleteTweet(req.params.id)
        .then((status) => res.send(status));
    }
    app.delete('/rest/tweets/:id', deleteTweet);

    const likeTweet = (req, res) => {
        const id = req.params.id;
        dao.findTweetById(id)
        .then((tweet) => {
            if (tweet.liked === true) {
                tweet.liked = false;
                tweet.stats.likes--;
            } else {
                tweet.liked = true;
                tweet.stats.likes++;
            }
            dao.updateTweet(id, tweet)
                .then(status => res.send(status));
        });
    }
    app.put('/rest/tweets/:id/like', likeTweet);
};
