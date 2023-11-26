import { Injectable } from '@nestjs/common'
import { userService } from './user.service'
import { userEditdto } from '../dto/user.edit'

@Injectable()
export class userInforService {
  constructor (
    private readonly userService: userService
  ){}
  
  async EditInfor(id: number , user: userEditdto) { 
    const userInfor = await this.userService.FindUser("user_id", id)
    
    if (userInfor === null)
      return { message: "user not found" }

    await this.userService.UpdateData(id,user.username,user.email);
    return await this.userService.FindUser("user_id",id)
  }
}