import {
  Body,
  Controller,
  Post,
  Get,
  HttpCode,
  HttpStatus,
  Res,
  Req
} from '@nestjs/common'
import { authService } from '../service/auth.service'
import { userLoginRequestdto } from '../dto/user.login'
import { Response , Request } from 'express'

@Controller('')
export class authController {
  constructor(
    private readonly authService: authService,
  ) { }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async SignIn(@Body() user: userLoginRequestdto, @Res() res: Response) {
    const jwt = await this.authService.SignIn(user) 
    
    res.setHeader('Authorization', 'Bearer' + jwt.JwtToken)
    res.cookie('jwt', jwt.JwtToken, {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000
    })

    return res.json(jwt)
  }

  @HttpCode(HttpStatus.OK)
  @Get('Cookie') 
  async CheckCookie(@Req() req: Request , @Res() res: Response){ 
    const jwt =  req.cookies['jwt'];
    return res.send(jwt);
  }
}
