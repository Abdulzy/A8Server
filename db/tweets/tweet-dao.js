const model = require('./tweet-model');
var objectId = require('mongodb').ObjectId

const findAllTweets = () => model.find();
const createTweet = (tweet) => model.create(tweet);
const deleteTweet = (id) => model.deleteOne({_id: new objectId(id)});

const findTweetById = (id) => model.findById(new objectId(id));
const updateTweet = (id, tweet) => model.updateOne({_id: new objectId(id)},
    {$set: tweet});

module.exports = {
  findAllTweets, createTweet,findTweetById,
  deleteTweet, updateTweet
};
