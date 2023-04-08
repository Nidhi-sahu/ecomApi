const connection = require("../Model/Model");

const getAdmin_user_login = (req,res)=>{
    let sqlQuery = "SELECT * FROM admin_user_login";
    let data = req.body;

    connection.query(sqlQuery,data, function(error,result){
        if(error){
            console.log("error", error.sqlMessage)
        }
        else{
            res.json(result);
        }
    })
};

const postAdmin_user_login =(req,res) =>{
    let data=req.body;
    let sqlQuery ="INSERT INTO admin_user_login SET?";
   
     
    connection.query(sqlQuery,data, function(error,result)
    {
        if(error)
        {
            console.log(error.sqlMessage)
        }
        else{
            res.json(result);
        }
    })
};

const putAdmin_user_login =(req,res) =>
{
    let data=req.body;
    let id= req.params.uid;
    let sqlQuery="UPDATE admin_user_login SET?  WHERE uid=?"
    connection.query(sqlQuery,[data,id], function(error,result)
    {
        if(error)
        {
            console.log(error.sqlMessage)
        }
        else{
            res.json(result);
        }
    })
};

const deleteAdmin_user_login =(req,res)=>{
    let data= req.body;
    let id = req.params.uid;
    let sqlQuery="Delete from admin_user_login where uid=?";
     connection.query(sqlQuery,[data,id], function(error,result)
     {
        if(error){
            console.log(error.sqlMessage);
        }
        else{
            res.json(result);
        }
     })
};

module.exports={getAdmin_user_login,postAdmin_user_login,putAdmin_user_login,deleteAdmin_user_login}