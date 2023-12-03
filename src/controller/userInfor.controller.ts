import {
  Body,
  Controller,
  Put,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Req
} from '@nestjs/common'
import { userInforService } from '../service/userInfor.service'
import { userEditdto } from '../dto/user.edit'
import { Request } from 'express'

@Controller('')
export class userInforController {
  constructor(
    private readonly userInforService: userInforService,
  ) { }

  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.OK)
    
  @Get('userinfo')
  async UserInfor(@Req() request: Request) { 
    
  }

  @Put('user/:id')
  async EditInfor(@Param('id') id: number , @Body() user: userEditdto)  {
    return await this.userInforService.EditInfor(id , user)
  }
} 
