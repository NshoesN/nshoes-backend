import { Module } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { productsController } from '../controller/products.controller';
import { productsService } from '../service/products.service';
import { ProductImage } from 'src/entities/productImage.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product , ProductImage]), 
  ],
  controllers: [productsController],
  providers: [productsService],
})
export class productModule {}
