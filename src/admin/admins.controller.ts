/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { AdminService } from "./admins.service";
// import { Admin } from "./admin.schema";

@Controller('admins')
export class AdminController{
    constructor(private readonly adminService: AdminService) {}

    @Post('create')
    async createAdmin(
        @Body() body : {name: string, email: string, password: string}
    ){
        const {name, email, password} = body;
        console.log(body);
        return this.adminService.createAdmin(name , email ,password);
    }

    @Get('all')
    async getAllAdmins(
    ){
        return this.adminService.getAllAdmins();
    }

    @Get(':id')
    async findAdminById(@Param('id') AdminId: string){
        return  this.adminService.findAdminById(AdminId);
    }
       
        

      
    

}

