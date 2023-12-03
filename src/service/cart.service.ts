import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Cart } from '../entities/cart.entity'
import { cartInfordto } from 'src/dto/cart.infor'

@Injectable()
export class cartService {
  constructor (
    @InjectRepository(Cart)
    private cartRepo: Repository<Cart>,
  ) { }
  
  async CreateCart(cart: cartInfordto) { 
    const newCart = this.cartRepo.create(cart)
    return await this.cartRepo.save(newCart)
  }
}
