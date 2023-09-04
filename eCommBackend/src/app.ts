import express, { Router, Request, Response, NextFunction } from "express";
import createHttpError, { isHttpError } from "http-errors";
import bodyParser from "body-parser";
import router from "./routes/routes";
const app = express();


app.use(bodyParser.json())

//router.get("/",)

app.use('/',router);

app.use((req,res,next)=>{
	next(createHttpError(400, "Endpoint does not exist"))
})

app.use((error: unknown, req: Request, res: Response, next: NextFunction)=>{
  let errorStatus = 500;
  let errorMessage = "Oop! This is unexpected."
  if(isHttpError(error))
  {
    errorStatus = error.status
    errorMessage =  error.message
  }
  return res.status(errorStatus).json({error: errorMessage})
})


export default app;