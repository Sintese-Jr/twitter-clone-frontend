const mongoose = require("mongoose");
require('dotenv').config();

const MONGODB_URL = process.env.MONGODB_URL || null;

const initDataBase = async () => {
        try {
            await mongoose.connect(MONGODB_URL);
            console.log("Conectado com sucesso ao banco de dados!");
        } catch (error) {
            console.log(`Mongoose connect error: ${error}`);
        }
    }

module.exports = initDataBase;

