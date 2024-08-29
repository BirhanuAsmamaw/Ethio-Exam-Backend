/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from "@nestjs/common";
import { AdminService } from "./admins.service";
import {Admin} from './admin.schema';

@Controller('admins')
export class AdminController{
    constructor(private readonly adminService: AdminService) {}

    @Post('create')
    async createAdmin(
        @Body('name') name : string,
        @Body('email') email : string,
        @Body('password') password : string,
    ){
        return this.adminService.createAdmin(name , email ,password)
    }
}

