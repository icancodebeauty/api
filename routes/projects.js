const router = require("express").Router();
const fetch = require("cross-fetch");
router.get("/", async (req, res) => {
    let response = await fetch("https://aditya.is-a.dev/json/aditya/projects.json");
    let data = await response.json()
    res.send(data);
});
module.exports = router;