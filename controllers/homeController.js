module.exports = {
    show: (req, res) => {
        const title = "Home",
        subTitle = "Just Homepage"
        res.render("index", { title, subTitle });
    },
};