import { Injectable, UnauthorizedException } from '@nestjs/common'
import { userLoginRequestdto } from '../dto/user.login'

import * as bcrypt from 'bcryptjs'
import { JwtService } from "@nestjs/jwt"
import { Payload } from '../security/payload.interface'
import { userService } from './user.service'

@Injectable()
export class authService {
  constructor (
    private readonly jwtService: JwtService,
    private readonly userService: userService
  ) { }
  
  async SignIn(user: userLoginRequestdto) {
    const { email, password } = user
    const userInfor = await this.userService.FindUser("email",email)
    
    if (!userInfor) { 
      throw new UnauthorizedException('email을 확인해주세요~')
    }

    const isPasswordVaildated: boolean = await bcrypt.compare(
      password,userInfor.password
    )

    if (!isPasswordVaildated)
      throw new UnauthorizedException('password를 확인해주세요~')
    
    const payload: Payload = { email: userInfor.email }
    
    return {
      JwtToken: this.jwtService.sign(payload)
    };
  }
}
