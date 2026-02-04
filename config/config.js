import mongoose from "mongoose";

const DBConnection = async () => {
  console.log("From db connection");

  try {
    await mongoose.connect(process.env.MONGDO_NODE_SRV);
    console.log("DB connected");
  } catch (error) {
    console.log("Error occured", error.message);
  }
};
export default DBConnection;
