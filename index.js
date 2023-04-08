const express = require("express");

const app = express();
app.use(express.json());
var cors = require("cors");
app.use(cors());
const bodyparser = require("body-parser");
app.use(bodyparser.json());
const port = 3002;

const{Admin_user_login}= require("./Routes/Admin_user_login");
app.use("/",Admin_user_login);


app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})