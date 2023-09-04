import createHttpError from "http-errors";
import itemModel from "../model/itemModel";
import { Request, Response, NextFunction } from "express";

export const getItemList = async (req:Request, res:Response, next:NextFunction) => {
    try { 
        //createHttpError(401,"From HTTP ERROR")
      let itemList = await itemModel.find().exec();
      res.status(200).json(itemList);
    } catch (error) {
      next(error);
    }
}

export const getItem = async (req:Request, res:Response, next:NextFunction) => {
    try {
        let id = req.params.id;
        let item = await itemModel.findById(id).exec();
        res.status(200).json(item);
    } catch (error) {
        next(error);
    }
}