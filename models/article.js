const articles = [ 
    {
        id: 1,
        title: "What is Lorem Ipsum?",
        body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry,.`,
        approved: true
    }, 
    {
        id: 2,
        title: "Why do we use it?",
        body: `It is a long established fact.,`,
        approved: true
    }, 
    {
        id: 3,
        title: "Hello World",
        body: "Cuma lorem ipsum aja kok", 
        approved: false
    } 
];

module.exports = {
    findAll: () => Promise.resolve(articles), 
    create: ({ title, body }) => {
        const id = articles[articles.length - 1].id + 1; 
        const article = { id, title, body }; 
        articles.push(article);
        return Promise.resolve(article);
    }
}