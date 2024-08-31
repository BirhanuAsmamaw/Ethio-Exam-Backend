/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Admin } from "./admin.schema";


@Injectable()
export class AdminService {
   constructor(@InjectModel('Admin') private readonly AdminModel: Model<Admin> ) {}

   async createAdmin(name: string, email: string, password: string ): Promise<Admin> {
         const newAdmin = new this.AdminModel({ name, email, password });
         return await newAdmin.save();
   }

   async getAllAdmins(): Promise <Admin[]>{
      return await this.AdminModel.find().exec();
       }

    async findAdminById(AdminId : string): Promise<Admin>{
        const Admin = this.AdminModel.findById(AdminId).exec();

        if (!Admin){
            throw new NotFoundException(`Admin with Id ${AdminId} not found`)
        }
        return Admin;
        }
    
}

