import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor (
    @InjectRepository(User)
    private userRepo: Repository<User> 
  ){}

  async FindUser(user) {
    return await this.userRepo.findOne(user)
  }

  async CreateUser(user: {email: string , username: string , password: string}) {

    const newUser = this.userRepo.create(user);
    return await this.userRepo.save(newUser);
  }
}
