/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.schema';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async createUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.usersService.createUser(name, email, password);
  }

  @Get("list")
  async getAllUsers(){
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  async findUserById(@Param('id') userId : string) {
    return this.usersService.findUserById(userId);
  }

  @Patch(':id')
  async updateUser(
    @Param('id') userId : string,
    @Body() updateData : Partial<User>
  ){
    return this.usersService.updateUser(userId, updateData);
  }

  @Delete(':id')
  async deleteUser(@Param('id') userId : string){
    await this.usersService.deleteUser(userId);
    return {message: 'User deleted successfully'};
  }
}
