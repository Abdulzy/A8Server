let dao = require("../db/profile/profile-dao");

module.exports = (app) => {
    const getProfile = (req, res) => {
        dao.getProfile()
            .then(profile => res.json(profile));
    }
    app.get('/rest/profile', getProfile);

    const updateProfile = (req, res) => {
        const id = req.params.id;
        dao.updateProfile(id, req.body)
            .then(updatedProfile => {
                return res.json(updatedProfile)
            });
    }
    app.put('/rest/profile/:id', updateProfile);
};