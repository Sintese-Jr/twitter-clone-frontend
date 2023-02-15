const User = require("../dbconfig/models/user");

const createUser = async (req, res) => {
    try {
        const isSetted = await User.findOne({ email: req.body.email});
        if(isSetted) {
            throw new Error("Email já cadastrado.")
        } 
        const user = new User(req.body);
        await user.save();
        // res.send("Cadastrado com sucesso!");
        
        res.send("Sucesso ao cadastrar");
    } catch (error) {
        res.send(error);
    }
}

module.exports = {createUser};