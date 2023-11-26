import { Module } from '@nestjs/common'
import { userInforController } from '../controller/userInfor.controller'
import { userService } from '../service/user.service'
import { userInforService } from '../service/userInfor.service'

import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from '../entities/user.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), 
  ],
  controllers: [userInforController],
  providers: [userInforService , userService],
})
export class userInforModule {}