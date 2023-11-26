import { Module } from '@nestjs/common'
import { authController } from '../controller/auth.controller'
import { authService } from '../service/auth.service'
import { userService } from '../service/user.service'
import { JwtModule } from "@nestjs/jwt"
import { User } from '../entities/user.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), 
    JwtModule.register({
      secret: 'pcuIsUgly',
      signOptions: { expiresIn: '300s' },
    }),

  ],
  controllers: [authController],
  providers: [authService , userService],
})
export class authModule {}
