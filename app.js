const express    = require("express"),
      app        = express(),
      bodyParser = require("body-parser"),
      mongoose   = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

const campgroundSchema = new mongoose.Schema({
    name: String,
    img: String,
    description: String,
});
const Campground = mongoose.model("Campground", campgroundSchema);

app.get("/", (req, res) => {
    res.render("landing");
});

// index route
app.get("/campgrounds", (req, res) => {
    Campground.find({}, (error, campgrounds) => {
        if (!error){
            res.render("index", {campgrounds});
        }
        else {
            console.log(error);
        }
    }); 
});

// new route
app.get("/campgrounds/new", (req, res) => {
    res.render("new");
});

// create route
app.post("/campgrounds", (req, res) => {
    Campground.create({
            name: req.body.name,
            img: req.body.img,
            description: req.body.description,
        }, 
        (error, item) => {
            if (!error) {
                console.log(item + " WAS SAVED"); 
                res.redirect("/campgrounds");
            }
            else {
                console.log(error);
            }
    });
});

// show route
app.get("/campgrounds/:id", (req, res) => {
    Campground.findById(req.params.id, (error, detailedCamp) => {
        if (!error) {
            res.render("show", {detailedCamp});
        }
        else {
            console.log(error);
        }
    });
});

app.listen(3000, () => {
    console.log("Server has started");
});
