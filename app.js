const express = require('express');
const faker = require('faker');
const app = express();
app.use(express.static("public"));
app.engine("html", require('ejs').renderFile);


//routes
app.get("/", function(req, res){
    res.render("index.ejs", {
        language: "Programming Languages",
        title: "An Introduction of the languages I know",
        currentMenu: "index",
        email: faker.internet.email(),
        name: faker.name.findName(),
        phone: faker.phone.phoneNumber()
    });
});

app.get("/cpp", function(req, res){
    res.render("cPlusPlus.ejs", {
        language: "C++",
        title: "C++: the memory manager",
        currentMenu: "cpp",
        email: faker.internet.email(),
        name: faker.name.findName(),
        phone: faker.phone.phoneNumber()
    });
});

app.get("/python", function(req, res){
    res.render("python.ejs", {
        language: "Python",
        title: "Python: the go to for anything, because of it's accessability",
        currentMenu: "python",
        email: faker.internet.email(),
        name: faker.name.findName(),
        phone: faker.phone.phoneNumber()
        
    });
});

app.get("/java", function(req, res){
    res.render("java.ejs", {
        language: "Java",
        title: "Java: Run once, run anywhere",
        currentMenu: "java",
        email: faker.internet.email(),
        name: faker.name.findName(),
        phone: faker.phone.phoneNumber()
    });
});

app.listen(process.env.PORT, process.env.IP, function(){ // "8080", "127.0.0.1"
    console.log("Express sever is running");
});