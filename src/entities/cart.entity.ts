import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn,
  Double,
} from 'typeorm'

@Entity({name: 'carts'})
export class Cart {
  @PrimaryGeneratedColumn()
  id: number

  @Column('int', { default: true })
  user_id: number 

  @Column('int', { default: true })
  product_id: number

  @Column('varchar', { default: true })
  product_name: string

  @Column('number', { default: true })
  size: number

  @Column('float', { default: true })
  price: Double

  @Column('number', { default: true })
  quantity: number
}