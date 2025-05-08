import mongoose, { connect }  from "mongoose";
import dotenv from "dotenv";

const connectDb =  async() => {
    try{
        await mongoose.connect(process.env.MONG0_URI )
        console.log("Conneted to Database Successfully")
    }catch(error)
    {
        console.log(error)
    }
}

export default connectDb