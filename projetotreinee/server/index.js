const express = require("express");
const initDataBase = require("./dbconfig/config.js");
const userRouter = require("./routes/user")
const tweetRouter = require("./routes/tweet")


initDataBase();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(userRouter);
app.use(tweetRouter);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})