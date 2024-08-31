/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { AdminService } from "./admins.service";
import { Admin } from "./admin.schema";

@Controller('admins')
export class AdminController{
    constructor(private readonly adminService: AdminService) {}

    @Post('create')
    async createAdmin(
        @Body() body : {name: string, email: string, password: string}
    ){
        const {name, email, password} = body;
        // console.log(body);
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

    @Patch(':id')
    async updateAdmin(
        @Param('id') AdminId: string,
        @Body() updateData: Partial<Admin>
    ){
        return this.adminService.updateAdmin(AdminId, updateData)
    }

    @Delete(':id')
    async deleteAdmin(@Param('id') AdminId: string){
        await this.adminService.deleteAdmin(AdminId);
        return {message: `Admin with Id ${AdminId} deleted successfully`};
    }
       
     

      
    

}

