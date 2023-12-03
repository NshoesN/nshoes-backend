import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { User } from '../entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { userRequestdto } from '../dto/user.request'

@Injectable()
export class userService {
  constructor (
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ){}
  
  async FindUser(property: string, value: string | number) {
    return await this.userRepo.findOne({
      where: {
        [`${property}`]: value
      }
    })
  }

  async FindAll() {
    return await this.userRepo.find()
  }

  async CreateUser(user: userRequestdto) {
    const newUser = this.userRepo.create(user)
    return await this.userRepo.save(newUser)
  }

  async UpdateData(id: number, username: string, email: string) { 
    return await this.userRepo.update(
      {
        user_id: id
      },
      {
        name: username,
        email: email,
      })
  }
}