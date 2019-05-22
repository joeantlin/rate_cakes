const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/angular_api', { useNewUrlParser: true});

var ReviewSchema = new mongoose.Schema({
    comment: {
        type: String, 
        required: true, 
        minlength: 2
    },
    rating: {
        type: Number,
        default: 5
    }
}, {timestamps: true})

var CakeSchema = new mongoose.Schema({
    baker: { 
        type: String, 
        required: true, 
        minlength: 2
    },
    image: { 
        type: String,
        required: true, 
        minlength: 5
    },
    reviews: [ReviewSchema]
}, {timestamps: true})
module.exports = mongoose.model('Cake', CakeSchema);
