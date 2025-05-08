import mongoose, { connect }  from "mongoose";
import dotenv from "dotenv";

const connectDb =  async() => {
    try{
        await mongoose.connect(process.env.MONG0_URI )
        return "Conneted to Database Successfully"
    }catch(error)
    {
        console.log(error)
        return {error}
    }
}

export default connectDb