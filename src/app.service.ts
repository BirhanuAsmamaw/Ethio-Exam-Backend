/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
  
    return [{
      name:"Birhanu Asmamaw",
      age:23,
      country:"Ethiopia",
      department:"Software Engineering",
    },
    {
      name:"Deribew Shimels",
      age:23,
      country:"Ethiopia",
      department:"Software Engineering",
      Stream: "Arteficial Intelligence",
    }]
  }
}
