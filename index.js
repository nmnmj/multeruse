import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express, { urlencoded } from "express";
import connectDB from "./db/connectDB.js";
import web from "./routes/web.js";
import upload from "./middlewares/uploadm.js";
const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public/uploads/pimage"));
//for form data
app.use(express.json());
//for form file at application level
// app.use(upload.fields([
//     {name:'pimage', maxCount:1},
//     {name:"rdoc", maxCount:1}
// ]))
connectDB(DATABASE_URL);

app.use("/", web);

app.listen(port, () => {
  console.log(`running on http://127.0.0.1:${port}`);
});
