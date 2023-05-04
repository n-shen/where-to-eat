import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";

dotenv.config();
const app = express();

// app.use(express.static("build"));

app.use(cors());
app.use(express.json());

// Routers
import queryRouter from "./routes/queryRouter.js";
app.use("/api/v1/query", queryRouter);

app.listen(process.env.PORT_NUM, () => {
    console.log(
        "TL-Server is running without db connection on port: " +
        process.env.PORT_NUM
    );
});

// mongoose
//     .connect(process.env.MDB_LINK)
//     .then(() => {
//         app.listen(process.env.PORT_NUM, () => {
//             console.log(
//                 "TL-Server is connected to DB and running on port: " +
//                 process.env.PORT_NUM
//             );
//         });
//     })
//     .catch((error) => {
//         console.log(error);
//     });