import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
} from 'typeorm'
  
@Entity({ name: 'Images' })
  export class ProductImage {
    @PrimaryGeneratedColumn()
    ImageId: number
  
    @Column('int', { default: true })
    Id: number
  
    @Column({ default: true })
    ImageURL: string
}