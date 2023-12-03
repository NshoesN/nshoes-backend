import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body
} from "@nestjs/common"
import { cartService } from "../service/cart.service"
import { cartInfordto } from "../dto/cart.infor" 

@Controller('cart')
export class cartController { 
  constructor(
    private readonly cartService: cartService,
  ) { }

  @Post('') 
  async CartEdit(@Body() cart: cartInfordto) { 
    return await this.cartService.CreateCart(cart)
  }

  @Get('')
  async Cart() { 
    
  }

  @Delete(':id')
  async CartDelete(@Param('id') num: number) { 

  }
}