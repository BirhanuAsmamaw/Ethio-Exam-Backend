/* eslint-disable prettier/prettier */
import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {AdminService} from './admins.service';
import {AdminController} from './admins.controller';
import {AdminSchema} from './admin.schema';

@Module(
    {
        imports: [
            MongooseModule.forFeature([{name: 'Admin', schema: AdminSchema}])
        ],
        controllers: [AdminController],
        providers: [AdminService],
        exports: [AdminService]
    }
)

export class AdminsModule {
}