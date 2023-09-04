import express from "express";
import * as itemController from "../controller/itemController"
const router = express.Router();

router.get("/",itemController.getItemList);
router.get("/:id",itemController.getItem);



export default router;