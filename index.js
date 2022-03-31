const app = require("express")();
const cors = require('cors');
app.use(cors());
app.use("/blogs", require("./routes/blogs"));
app.use("/projects", require("./routes/projects"));
app.use("/contact", require("./routes/contact"));
app.get("/", (req, res) => {
    res.send({ status: 200, message: "API For `aditya.is-a.dev`" });
});
app.listen(process.env.PORT || 3000);