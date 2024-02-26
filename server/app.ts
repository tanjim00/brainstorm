import express from "express";
export const app = express();
import cors from "cors";
import cookieparser from "cookie-parser";

//body parser
app.use(express.json({limit: "50mb"}));

//cookie parser
app.use(cookieparser());

//cors
app.use(cors());
