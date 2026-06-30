const mongoose = require("mongoose")


const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI) 
        console.log("database is running");
        
    } catch (error) {
        console.log("Error While Connecting",(error));
        process.exit(1);
    }
}

module.exports = ConnectDB;