import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cartController } from '../controller/cart.controller';
import { cartService } from '../service/cart.service';
import { Cart } from '../entities/cart.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cart]), 
  ],
  controllers: [cartController],
  providers: [cartService],
})
export class cartModule {}
