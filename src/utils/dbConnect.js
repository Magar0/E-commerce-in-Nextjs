import mongoose from "mongoose"

const connectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to Mongo DB");

    } catch (err) {
        console.log(err);
    }

}

export default connectMongoDb;