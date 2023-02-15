const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema(
    {
        writerId: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now
        },
        text: {
            type: String,
            required: false,
            default: ""
        },
        imagem: {
            type: String,
            required: false,
            default: null
        },
        saves: {
            type: Number,
            required: false,
            default: 0
        },
        retweets: {
            type: Number,
            required: false,
            default: 0
        },
        comments: {
            type: Number,
            required: false,
            default: 0
        },
        likes: {
            type: Number,
            required: false,
            default: 0
        },
        answers: {
            type: Array,
            required: false, 
            default: [],
        }
    }
)
module.exports = mongoose.model("Tweet", tweetSchema );