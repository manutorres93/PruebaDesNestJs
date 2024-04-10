import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookService } from './book.service';
;

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('all')
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(id);
  }

  @Post('createbook')
    create(@Body() body){
        return this.bookService.create(body);
    }

  @Patch(':id')
  updateBook(@Param('id') id: string, @Body() body) {
    return this.bookService.updateBook(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.deleteBook(id);
  }

  @Get('author/:author')
  findByAuthor(@Param('author') author: string) {
    return this.bookService.findByAuthor(author);
  }

  @Get('name/:name')
  findByName(@Param('name') name: string) {
    return this.bookService.findByName(name);
  }

  @Get('pages/:pages')
  findByPages(@Param('pages') pages: Number) {
    return this.bookService.findByPages(pages);
  }
}
