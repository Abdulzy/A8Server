let profile = require('../data/profile.json');

module.exports = (app) => {
    
    const getCurrentProfile = (req, res) => {
        res.json(profile);
    }
    
    app.get('/api/profile', getCurrentProfile);

    const updateCurrentProfile = (req, res) => {
        profile = {
            ...profile,
            name: req.body.newName,
            bio: req.body.newBio,
            location: req.body.newLocation,
            website: req.body.website,
            dateOfBirth: req.body.newDateOfBirth,
        };
        res.json(profile);
    }

    app.put('/api/profile', updateCurrentProfile);
};
