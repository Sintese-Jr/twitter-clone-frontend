const Tweet = require("../dbconfig/models/tweet");

const createTweet = async (req, res) => {
    try {
        const tweet = new Tweet(req.body);
        await tweet.save();
        // res.send("Cadastrado com sucesso!");
        
        res.send("Sucesso ao cadastrar tweet");
    } catch (error) {
        res.send(error);
    }
}

module.exports = {createTweet};