import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
} from '@nestjs/common'
import { userService } from '../service/user.service'
import { userRequestdto } from '../dto/user.request'

@Controller('')
export class userController {
  constructor(
    private readonly userService: userService,
  ) { }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  async SignUp(@Body() user: userRequestdto) {
    return await this.userService.CreateUser(user)
  }
}
