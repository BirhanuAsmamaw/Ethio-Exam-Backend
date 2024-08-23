/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(name: string, email: string, password: string): Promise<User> {
    const newUser = new this.userModel({ name, email, password });
    return await newUser.save();
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
  
  async findUserById(userId: string): Promise<User> {
    const User =  await this.userModel.findById(userId).exec();
 
    if(!User){
      throw new NotFoundException(`User with Id ${userId} not found`);
    }
      return User;
   } // Add other methods to interact with your user data
}