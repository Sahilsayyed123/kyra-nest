// src/posts/post.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/user.dto';

@Controller('posts')
export class UserController {
  constructor(private postService: UserService) {}

  @Post()
  async create(@Body() UserData: CreateUserDto): Promise<User> {
    return this.postService.createPost(UserData);
  }

  @Get(':id')
  async retrive(@Param('id') id: number): Promise<User> {
    console.log('id', id);
    return this.postService.getUserService(id);
  }
}
