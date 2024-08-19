/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExamService {
  getHello(): any {
  
    return {
      name:"Birhanu Asmamaw",
      age:23,
      country:"Ethiopia",
      department:"Software Engineering",
    }
  }
}
