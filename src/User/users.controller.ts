/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

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

  

}
