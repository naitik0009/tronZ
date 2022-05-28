const mongoose = require("mongoose");

function connect (){
   mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser:true,
       
        useUnifiedTopology:true,
       
    });

    const connection = mongoose.connection;
    connection.once("open",()=>{
        console.log("Database connected");
    });
};

module.exports = connect;