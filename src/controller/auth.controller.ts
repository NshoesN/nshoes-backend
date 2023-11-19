import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateUserRequestDto } from '../dto/auth.request';
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('SignIn')
  SignIn(): string {

  }

  @HttpCode(HttpStatus.OK)
  @Post('SignUp')
  async SignUp(@Body() CreateUserRequestDto : CreateUserRequestDto) {
    return await this.authService.CreateUser(); 
  }
}
