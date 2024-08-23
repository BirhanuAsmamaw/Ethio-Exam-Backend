/* eslint-disable prettier/prettier */
import { Schema, Document} from 'mongoose';

export const AdminSchema = new Schema({
    id: String,
    name: String,
    email: String,
    password: String

})

export interface Admin extends Document{
    id: string;
    name: string;
    email: string;
    password: string;
    
}
