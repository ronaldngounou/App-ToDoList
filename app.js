//jshint esversion:6

const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname + "/date.js")

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public")); 


app.set("view engine", "ejs");

const items = ["Read", "Study", "Sleep"];
const workItems = [];

app.get("/", function(req, res){
    
    //send allows to send a response from the server to the browser side
    //Do some calculations on the server side and then send the result back to the browser

    const day = date.getDate();

    res.render("list", {listTitle: day, newListItemsArray: items}) //pass the ejs file with the key that exists in list
   
});

app.post("/", function(req, res){
    const item = req.body.newItem;
    
    if (req.body.nameofList === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }

    //A scope to redirect to the get request above, we do a redirect because 
    //every time we send information, the constiable are not known because of th spoce of the constiables 

});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItemsArray: workItems});
});

app.post("/work", function(req, res){
    const item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.get("/about", function(req, res){
    res.render("about");
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
})



    //currentDay = today.getDay();
    //const day = "";

    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday"
    //         break;
    //     case 1:
    //         day = "Monday"
    //         break;
    //     case 2:
    //         day = "Tuesday"
    //         break;
    //     case 3:
    //         day = "Wednesday"
    //         break;
    //     case 4:
    //         day = "Thrusday"
    //         break;
    //     case 5:
    //         day = "Friday"
    //         break;
    //     case 6:
    //         day = "Saturday"
    //         break;
    //     default:
    //         console.log("Error: current day is equal to:" + currentDay);
    // }

    // if (today.getDay() === 6 || today.getDay() === 0){
    //     day = "weekday";
    //     //res.write("<h1> Week end day </h1>")
    //     //res.write("<p> Boo I have to work </p>")
    //     //res.send()
    //     // or res.sendFile(__dirname + "/index.html")
    // }else{
    //     day = "weekend";
    // }