const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/campgrounds", (req, res) => {
    const campgrounds = [
        {
            name: "Big Flower Camp",
            img: "https://images.unsplash.com/photo-1534880606858-29b0e8a24e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        },
        {
            name: "All we need is Camp",
            img: "https://images.unsplash.com/photo-1502218808493-e5fd26249efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",

        },
        {
            name: "My little Camp",
            img: "https://images.unsplash.com/photo-1524494860062-9442631ee30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
        },
    ];

    res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(3000, () => {
    console.log("Server has started");
});
