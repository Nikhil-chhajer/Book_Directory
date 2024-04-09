const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    book:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Book', 

    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
    },
    text: { 
        type: String, 
        required: true 
    }
}, { timestamps: true });
const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;