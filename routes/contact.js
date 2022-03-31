const express = require("express");
const router = express.Router();
router.use(express.json());
const cors = require('cors');
router.use(cors());
router.post("/", async (req, res) => {
    if (req.body.name === undefined || req.body.email === undefined || req.body.message === undefined) {
        res.send({ status: 401, message: "Form Validation Error!." })
    } else {
        res.send({ status: 200, message: "Message Sent Successfully!." })
        console.log(req.body)
    }
});
module.exports = router;