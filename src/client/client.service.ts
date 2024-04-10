import { InjectModel } from '@nestjs/mongoose';
import{Model} from 'mongoose'
import {Body, Get, Injectable, NotFoundException} from '@nestjs/common';
import{Client} from './entities/client.entity';

@Injectable()
export class ClientService {
  
  constructor(@InjectModel(Client.name) private clientModel: Model<Client>,){}

  findAll(){
    return this.clientModel.find().exec();
  }

  /* find by ID */


  async findOne(id:string){
    const client = this.clientModel.findOne({_id:id});
    if(!client){
        throw new NotFoundException(`client ${id}not found`);
    }
    return client;
  }

  /* Post */

  async create(@Body() body): Promise<Client>{
    const clientData = {
        name: body.name,
        lastName: body.lastName,
        email:body.email,
        gender: body.gender,
        age:body.age
    }
    const newclient = new this.clientModel(clientData)
    return await newclient.save();
}

  /* PUT */
  async updateclient(id: string, @Body() body): Promise<Client>{
    const clientData = {
      name: body.name,
      lastName: body.lastName,
      email:body.email,
      gender: body.gender,
      age:body.age
  }
      const updatedclient = await this.clientModel.findOneAndUpdate({_id:id}, clientData, {new:true});
      return updatedclient;
  }

  /* DELETE */
  async deleteclient(id: string): Promise<Client>{
      const deletedclient = await this.clientModel.findOneAndDelete({_id:id});
      if(!deletedclient){
          throw new NotFoundException(`client ${id} not found`);
      }
      return deletedclient;
  }

  /* Get by email*/

  async findByEmail(email:string){
    const client = this.clientModel.find({email:email});
    if(!client){
        throw new NotFoundException(`client ${email}not found`);
    }
    return client;
  }

  /* Get by gender*/

  async findByGender(gender:string){
    const client = this.clientModel.find({gender:gender});
    if(!client){
        throw new NotFoundException(`client ${gender}not found`);
    }
    return client;
  }

  /* Get by age*/

  async findByAge(age:Number){
    const client = this.clientModel.find({age:age});
    if(!client){
        throw new NotFoundException(`client ${age}not found`);
    }
    return client;
  }


}
