import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientService } from './client.service';


@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get('all')
  findAll() {
    return this.clientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(id);
  }

  @Post('createclient')
    create(@Body() body){
        return this.clientService.create(body);
    }

  @Patch(':id')
  updateclient(@Param('id') id: string, @Body() body) {
    return this.clientService.updateclient(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientService.deleteclient(id);
  }

  @Get('email/:email')
  findByEmail(@Param('email') email: string) {
    return this.clientService.findByEmail(email);
  }

  @Get('gender/:gender')
  findByGender(@Param('gender') gender: string) {
    return this.clientService.findByGender(gender);
  }

  @Get('age/:age')
  findByAge(@Param('age') age: Number) {
    return this.clientService.findByAge(age);
  }
}
