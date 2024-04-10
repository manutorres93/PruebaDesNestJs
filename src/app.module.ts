import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import {MongooseModule} from "@nestjs/mongoose";
import { ClientModule } from './client/client.module';


@Module({
  imports: [BookModule,
    MongooseModule.forRoot('mongodb+srv://manutorres9312:Wwl9ejoe1FicGqTV@db-ejemplo-01.elrgq55.mongodb.net/test'),
    ClientModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
