const mysql=require("mysql");

const connection= mysql.createConnection({
    host:"localhost",
    user:"root",
  database:"edugate",
    port:"3306",
});


connection.connect((err)=>{
    if(err) throw err;
    console.log("DB eduagate CONNECTED");
    
});

module.exports=connection;