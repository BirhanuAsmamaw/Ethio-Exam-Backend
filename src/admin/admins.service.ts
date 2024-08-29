/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Admin } from "./admin.schema";

@Injectable()
export class AdminService {
   constructor(@InjectModel('Admin') private readonly adminModel: Model<Admin> ) {}
   async createAdmin(name: string, email: string, password: string ): Promise<Admin> {
         const newAdmin = new this.adminModel({ name, email, password });
         return await newAdmin.save();
   }
}

