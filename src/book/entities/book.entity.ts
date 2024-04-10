import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Book extends Document {
    @Prop()
    name: string;
    @Prop()
    author: string;
    @Prop()
    pages: Number;
    @Prop()
    description: string;

}

export const BookSchema = SchemaFactory.createForClass(Book);
