import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Client extends Document {
    @Prop()
    name: string;
    @Prop()
    lastName: string;
    @Prop()
    email: string;
    @Prop()
    gender: string;
    @Prop()
    age: Number;

}

export const ClientSchema = SchemaFactory.createForClass(Client);