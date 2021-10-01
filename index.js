"use strict";

//creating a web server using express module

var express = require("express");
var port = 7000;  //configuring the port & listening to it


var app = express();  //to create a web server using express module

//configure  static directory
app.use(express.static("assets"));
app.use('/assets', express.static('assets'));
//set up the templating engine
app.set("view_engine", "ejs");
app.set("views", "templates");

var courses = [
    {
        id : 11111,
        name : "Personal development"
    },
    {
        id : 22222,
        name : "Overcoming anxiety"
    },
    {
        id : 33333,
        name : "Reclaim your agency"
    },
    {
        id : 44444,
        name : "Grit in a nutshell"
    }
];



//Part 1
// http://localhost:7000
app.get("/", function (req, res) {
    res.render("homepage.ejs");
});

//Part 2
// http://localhost:7000/courses
app.get("/courses", function (req, res) {
    res.render("products.ejs",
        {
            "name": "Open to registration",
            "data": {"Grit in a nutshell": "Self development",
                "9€ monthly": "11€ monthly",
                "psychology": "personal and professional development"
            }
        }
    );
});

//Part 3
// http://localhost:7000/courses/11111
app.get("/courses/:courseId", function(req, res) {
    var id = req.params.courseId;

    var item = courses.filter(function (course) { return course.id == id;})[0].name;
    res.render("productsId.ejs", {"courseId": id, "courseName": item });
});


    app.listen(port);

    console.log("Server running on http://localhost:   "+port);