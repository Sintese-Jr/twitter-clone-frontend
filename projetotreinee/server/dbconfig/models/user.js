const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
        },
        password: {
            type: String,
            required: true
        },
        nome: {
            type: String,
            required: true,
            unique: true,
        },
        followingCount: {
            type: Number,
            required: false,
            default: 0
        },
        followersCount: {
            type: Number,
            required: false,
            default: 0
        },
        fotoPerfil:{
            type: String,
            required: false,
            default: null
        },
        fotoFundo:{
            type: String,
            required: false,
            default: null
        },
        bio:{
            type: String,
            required: false,
            default: "Nada por aqui..."
        },
        followersIds: {
            type: Array,
            required: false,
            default: []
        },
        followingIds: {
            type: Array,
            required: false,
            default: []
        },
        tweetsProprios: {
            type: Array,
            required: false,
            default: []
        },
        tweetsFollowing: {
            type: Array,
            required: false,
            default: []
        },
        recommended: {
            type: Array,
            required: false,
            default: []
        },
        trends: {
            type: Array,
            required: false,
            default: ["#semTrends","#semTrends","#semTrends","#semTrends","#semTrends"]
        },
        followSugestions: {
            type: Array,
            required: false,
            default: []
        },
        saved: {
            type: Array,
            required: false,
            default: []
        },
        retweets: {
            type: Array,
            required: false,
            default: []
        },
    }
)

// userSchema.methods.toJSON = function () {
//     const userObj = this.toObject();
//     delete userObj.password;
// }

module.exports = mongoose.model("User", userSchema );