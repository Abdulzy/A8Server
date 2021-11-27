const model = require('./profile-model');
var objectId = require('mongodb').ObjectId

const getProfile = () => model.findOne();

const updateProfile = (id, profile) => model.updateOne({_id: new objectId(id)}, {$set: profile});



module.exports = {
    getProfile, updateProfile
};