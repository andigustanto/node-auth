import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js";
import router from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";

//generate table
// import Users from "./models/UserModel.js";

dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('db connected');

    //generate table
    // await Users.sync();
}catch (error){
    console.error(error);
}

// app.use(cors({
//     credential: true,
//     origin: 'http://localhost:3000',
// }));

app.use(cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credential: true,
    optionsSuccessStatus: 200,
    preflightContinue: true
}));

app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log('server run at 5000'));