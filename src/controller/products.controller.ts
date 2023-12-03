import { Controller , Get , Param } from "@nestjs/common"
import { productsService } from "../service/products.service"

@Controller('products')
export class productsController { 
  constructor(
    private readonly productsService: productsService,
  ) { }

  @Get('')
  async ProductsList() { 
    return this.productsService.ProductFindAll()
  }

  @Get(':id')
  async ProductInfor(@Param('id') id: number) { 
    const product = await this.productsService.ProductFind(id)
    if(product === null) 
      return { message : "product not found" }
    return product
  }
}