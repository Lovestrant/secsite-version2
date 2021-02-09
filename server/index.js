const express = require('express');
const app = express();


const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "secsitereactwebapp"
})



app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));



app.get("/api/get", (req,res) => {

    const sqlInsert= "SELECT * from textposts ORDER BY ID DESC";
    db.query(sqlInsert, (err, result) =>{
        res.send(result);
    }); 
});




app.post("/api/insert", (req,res) => {

    const textPost = req.body.textPost;
    const category = req.body.category;

    const sqlInsert= "INSERT INTO textposts (textpost, category) values(?,?)";
    db.query(sqlInsert, [textPost, category], (err, result) =>{
        console.log(result);
    });
});

app.listen(3003, () => {
    console.log("Running on port 3003");
});

