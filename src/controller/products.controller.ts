import { Controller , Get } from "@nestjs/common"
import { productsService } from "../service/products.service"

@Controller('products')
export class productsController { 
  constructor(
    private readonly productsService: productsService,
  ) { }

  @Get('')
  async ProductsList() { 

  }

  @Get('/:id')
  async ProductInfor() { 

  }
}