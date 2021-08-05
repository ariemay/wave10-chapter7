module.exports = {
    show: (req, res) => {
        const title = "About Me",
        subTitle = "Just About"
        res.render("about", { title, subTitle });
    }
}