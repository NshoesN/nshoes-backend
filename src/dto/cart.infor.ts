import { IsString, IsNumber } from 'class-validator';

export class cartInfordto { 
  @IsNumber()
  product_id: number

  @IsString()
  product_name: string

  @IsNumber()
  size: number

  @IsNumber() 
  price: number

  @IsNumber()
  quantity: number
}