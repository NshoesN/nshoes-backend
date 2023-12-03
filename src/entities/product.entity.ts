import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity({name: 'products'})
export class Product {
  @PrimaryGeneratedColumn()
  Id: number

  @Column('varchar', { default: true })
  Name: string

  @Column('int', { default: true })
  Price: number
  
  @Column({ default: true })
  comment: string | null

  @Column('text', { default: true })
  MainImgURL: string


  @Column({ default: true })
  ContentImgURL: string | null
}