/* eslint-disable prettier/prettier */
import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema({
    id: String,
    name: String,
    email: String,
    password: String,
});

export interface User extends Document{
    id: string;
    name: string;
    email: string;
    password: string;
}