import { cleanEnv, num, str, } from "envalid";
import dotenv from "dotenv";
dotenv.config({debug:true});


export const env = cleanEnv(process.env,{
    PORT: num(),
    MONGO_CONNECTION_STRING: str()
})