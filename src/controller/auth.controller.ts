import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { User } from '../entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('SignIn')
  async SignIn(@Body() user: {username: string , password: string}) {

  }

  @HttpCode(HttpStatus.OK)
  @Post('SignUp')
  async SignUp(@Body() user: {email: string , username: string , password: string}){
    return await this.authService.CreateUser(user); 
  }
}
