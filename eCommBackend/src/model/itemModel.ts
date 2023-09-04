import { InferSchemaType, Schema, model } from "mongoose";

// interface ItemSchema{
//     type: string,
//     name: string,
//     price: number,
//     category: Object
// }

const itemSchema = new Schema({
    type: {type: String, required: true },
    name: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: Object}
})

type item = InferSchemaType<typeof itemSchema>;

export default model<item>("items",itemSchema);
