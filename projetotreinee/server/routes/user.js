const router = require('express').Router();

router.get("/", (req,res) => {
    res.send("Operando normalmente!!")
});

module.exports = router;