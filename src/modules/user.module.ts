import { Module } from '@nestjs/common';
import { userService } from '../service/user.service';


import { User } from '../entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userController } from '../controller/user.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), 
  ],
  exports: [userService],
  controllers: [userController],
  providers: [userService],
})
export class userModule {}
