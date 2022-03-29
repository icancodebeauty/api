const router = require("express").Router();
const fetch = require("cross-fetch");
router.get("/", async (req, res) => {
    let response = await fetch("https://dev.to/api/articles?username=dedomil");
    let data = await response.json()
    let newdata = data.map(blog => {
        return {
            title: blog.title,
            description: blog.description,
            date: (blog.published_at).substring(0, 10),
            image: blog.cover_image,
            url: blog.canonical_url,
            reactions: blog.public_reactions_count,
            comments: blog.comments_count
        }
    })
    res.send(newdata);
});
module.exports = router;