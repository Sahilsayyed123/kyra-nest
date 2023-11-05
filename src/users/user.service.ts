const bcrypt = require('bcrypt');
const saltRounds = 10;
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private postRepository: Repository<User>,
  ) {}

  async createPost(UserData: Partial<User>): Promise<User> {
    const user = await this.postRepository.findOne({
      where: { username: UserData.username },
    });

    if (!user) {
      const pass = await bcrypt.hash(UserData.password, saltRounds);
      const userData = {
        username: UserData.username,
        password: pass,
      };
      const post = this.postRepository.create(userData);
      return this.postRepository.save(post);
    }
    throw new ConflictException('user already exixt!');
  }

  async getUserService(id: number) {
    const user = this.postRepository.findOne({ where: { id: id } });
    return user;
  }
}
