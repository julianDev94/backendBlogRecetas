import mongoose from "mongoose";
import "dotenv/config";

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI);

const conexionMongose = mongoose.connection;

conexionMongose.on("open", () => {
  console.log("BD Conectada");
});
