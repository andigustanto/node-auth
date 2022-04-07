import express from "express";
import db from "./config/Database.js";
import router from "./routes/index.js";

//generate table
// import Users from "./models/UserModel.js";
const app = express();

try {
    await db.authenticate();
    console.log('db connected');

    //generate table
    // await Users.sync();
}catch (error){
    console.error(error);
}

app.use(express.json());
app.use(router);

app.listen(5000, () => console.log('server run at 5000'));