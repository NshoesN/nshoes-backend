import {
  Body,
  Controller,
  Put,
  HttpCode,
  HttpStatus,
  Param,
} from '@nestjs/common'
import { userInforService } from '../service/userInfor.service'
import { userEditdto } from '../dto/user.edit'

@Controller('user')
export class userInforController {
  constructor(
    private readonly userInforService: userInforService,
  ) { }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  async EditInfor(@Param('id') id: number , @Body() user: userEditdto)  {
    return await this.userInforService.EditInfor(id , user)
  }
}
