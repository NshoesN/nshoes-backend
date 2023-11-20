import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor (
    @InjectRepository(User)
    private readonly userRepo: Repository<User> 
  ){}

  async CreateUser({email , username , password}){
    return await this.userRepo.save({email , username , password}); 
  }
}
