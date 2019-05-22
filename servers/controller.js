//Models
const Cake = require("./models")

module.exports = {
    allcakes:(req, res) => {
        Cake.find({})
            .then(cake=> res.json({cake: cake}))
            .catch(err => res.json({error: err}));
    },
    newcake:(req, res) => {
        Cake.create(req.body)
            .then(data => res.json({cake: data}))
            .catch(err => res.json({error: err}));
    },
    findcake: (req, res) => {
        Cake.findById(req.params.id)
            .then(data => res.json({cake: data}))
            .catch(err => res.json({error: err}));
    },
    updatecake: (req, res) => {
        Cake.findByIdAndUpdate(req.params.id, req.body)
            .then(data => res.json({cake: data}))
            .catch(err => res.json({error: err}));
    },
    deletecake: (req, res) => {
        Cake.findByIdAndRemove(req.params.id)
            .then(data => res.json({cake: data}))
            .catch(err => res.json({error: err}));
    },
    addreview: (req, res) => {
        Cake.findByIdAndUpdate(req.params.id, {$push: {reviews: req.body}})
            .then(data => res.json({review: data}))
            .catch(err => res.json({error: err}));
    }
}

