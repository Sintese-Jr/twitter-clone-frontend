const express = require("express");
const initDataBase = require("./dbconfig/config.js");
const userRouter = require("./routes/user");
const tweetRouter = require("./routes/tweet");
const pageRouter = require("./routes/paginas");


initDataBase();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(userRouter);
app.use(tweetRouter);
app.use(pageRouter);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})