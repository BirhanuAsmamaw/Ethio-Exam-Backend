/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersService } from "./users.service";
import { UserSchema } from "./user.schema";
import { UserController } from "./users.controller";


@Module({
    imports:[
        MongooseModule.forFeature([{ name: 'User' , schema: UserSchema}])
    ],
    
    controllers:[UserController],
    providers:[UsersService],
    exports:[UsersService],
})
export class UsersModule{}