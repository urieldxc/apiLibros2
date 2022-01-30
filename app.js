const express = require('express');
const app = express();
const path = require('path');
const router = require("./routes/routes")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const expressHandlebars = require("express-handlebars");
const hb = expressHandlebars.create({defaultLayout: "main"});
const override = require('method-override');
app.use(express.static('public'));

app.set('views',path.join(__dirname,'views'));
app.engine('handlebars', hb.engine);
app.set('view cache', true);
app.set('view engine', 'handlebars');


mongoose.connect("mongodb+srv://urieldxc:mongo1234@cluster0.lglc8.mongodb.net/crud-mongo", ()=>{
    console.log("DB conectada")
});

app.use(express.urlencoded({extended: true}))
app.use(override((req,res)=>{
    if(req.body && typeof req.body == 'object' && 'method' in req.body){
        const method = req.body.method;
        delete req.body.method;
        return method;
    }
}))

app.use("/", router)

app.listen(3000, ()=>{console.log("Server up!")});