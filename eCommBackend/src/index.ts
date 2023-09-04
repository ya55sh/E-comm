import {env} from "./utils/validator"
import mongoose from 'mongoose';
import app from "./app"

const port = env.PORT;

mongoose.connect(env.MONGO_CONNECTION_STRING)
  .then(()=>{
    console.log("mongodb connection success");

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  });



