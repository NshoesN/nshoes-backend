import { Injectable } from '@nestjs/common'
import { Product } from '../entities/product.entity'
import { ProductImage }  from '../entities/productImage.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';


@Injectable()
export class productsService { 
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>,

    @InjectRepository(ProductImage)
    private productImageRepo: Repository<ProductImage>,
  ) { }
    
  async ProductFindAll() {
    return await this.productRepo.find()  
  }

  async ProductFind(id: number) {
    const product = await this.productRepo.findOne({
      where :{
        Id: id
      }
    })
    
    const Image = await this.productImageRepo.find({
      where :{
        Id: id
      }
    })
    
    product['ImageURL'] = Image
    return product
  }
}