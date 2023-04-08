let mysql =require("mysql");
let connection = mysql.createConnection(
    {
        user:"root",
        password:"",
        port:3306,
        host:"localhost",
        database:"ebazaar"
    }
);

connection.connect(function(error)
{
    if(error)
    {
        console.log(error.sqlMessage)
    }
    else{
        console.log("connected")
    }
});

module.exports =connection;