const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

const campgrounds = [
    {
        name: "Big Flower Camp",
        img: "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
        name: "All we need is Camp",
        img: "https://images.unsplash.com/photo-1502218808493-e5fd26249efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
        name: "My little Camp",
        img: "https://images.unsplash.com/photo-1524494860062-9442631ee30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
    },
    {
        name: "Great Hopes",
        img: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
        name: "Mountaines and Dreams",
        img: "https://images.unsplash.com/photo-1485809052957-5113b0ff51af?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
        name: "Modern Camping",
        img: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
        name: "Bostom Lake",
        img: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
    },
    {
        name: "American Dream Camp",
        img: "https://images.unsplash.com/photo-1519395612667-3b754d7b9086?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
        name: "Mountaine Lovers",
        img: "https://images.unsplash.com/photo-1530488345268-51e6128cb132?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
        name: "Lakes and Fields",
        img: "https://images.unsplash.com/photo-1508768516474-73606cb84ce2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
];

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/campgrounds", (req, res) => {
    res.render("campgrounds", {campgrounds});
});

app.get("/campgrounds/new", (req, res) => {
    res.render("new");
});

app.post("/campgrounds", (req, res) => {
    campgrounds.push({name: req.body.name, img: req.body.img});
    res.redirect("/campgrounds");
});

app.listen(3000, () => {
    console.log("Server has started");
});
