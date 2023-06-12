//module.exports = {
  //  url : 'http://localhost:500/api/v1.0'
//}

const mongoose=require('mongoose');

const connectDB= async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI || config.connectionString);

}
module.exports=connectDB;