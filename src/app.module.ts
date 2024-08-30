/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './User/users.module';
import { AdminsModule } from './admin/admins.module';

@Module({
  imports: [
    UsersModule,
    AdminsModule,
    // eslint-disable-next-line prettier/prettier
    MongooseModule.forRoot('mongodb+srv://birhanuasmamaw24:birhanu@cluster0.5rxus.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
