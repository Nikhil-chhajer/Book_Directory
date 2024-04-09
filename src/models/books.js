const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
    },
    authorId: {
        type: String,
        required: true,
    },
    bookId: {
        type: String,
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review',
        }
    ]



}, { timestamps: true });
const Books = mongoose.model('Books', BookSchema);
module.exports = Books;