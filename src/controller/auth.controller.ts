import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateUserRequestDto } from '../dto/auth.request';
import { AuthService } from '../service/auth.service';
import { User } from '../entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @HttpCode(HttpStatus.OK)
  // @Post('SignIn')
  // SignIn() {

  // }

  @HttpCode(HttpStatus.OK)
  @Post('SignUp')
  async SignUp(@Body() CreateUserRequestDto : CreateUserRequestDto) : Promise<User>{
    return await this.authService.CreateUser(CreateUserRequestDto); 
  }
}
