import { InjectModel } from '@nestjs/mongoose';
import{Model} from 'mongoose'
import {Body, Get, Injectable, NotFoundException} from '@nestjs/common';
import{Book} from './entities/book.entity'

@Injectable()
export class BookService {

  constructor(@InjectModel(Book.name) private bookModel: Model<Book>,){}

  findAll(){
    return this.bookModel.find().exec();
  }


  async findOne(id:string){
    const book = this.bookModel.findOne({_id:id});
    if(!book){
        throw new NotFoundException(`Book ${id}not found`);
    }
    return book;
  }

  /* Post */

  async create(@Body() body): Promise<Book>{
    const bookData = {
        name: body.name,
        author: body.author,
        pages:body.pages,
        description: body.description
    }
    const newBook = new this.bookModel(bookData)
    return await newBook.save();
}

  /* PUT */
  async updateBook(id: string, @Body() body): Promise<Book>{
    const bookData = {
      name: body.name,
      author: body.author,
      pages:body.pages,
      description: body.description
  }
      const updatedBook = await this.bookModel.findOneAndUpdate({_id:id}, bookData, {new:true});
      return updatedBook;
  }

  /* DELETE */
  async deleteBook(id: string): Promise<Book>{
      const deletedBook = await this.bookModel.findOneAndDelete({_id:id});
      if(!deletedBook){
          throw new NotFoundException(`book ${id} not found`);
      }
      return deletedBook;
  }

  /* Get by author */

  async findByAuthor(author:string){
    const book = this.bookModel.find({author:author});
    if(!book){
        throw new NotFoundException(`Book ${author}not found`);
    }
    return book;
  }

  /* Get by name*/

  async findByName(name:string){
    const book = this.bookModel.find({name:name});
    if(!book){
        throw new NotFoundException(`Book ${name}not found`);
    }
    return book;
  }

  /* Get by pages*/

  async findByPages(pages:Number){
    const book = this.bookModel.find({pages:pages});
    if(!book){
        throw new NotFoundException(`Book ${pages}not found`);
    }
    return book;
  }
  

}
