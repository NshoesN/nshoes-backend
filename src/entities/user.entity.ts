import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  BeforeInsert 
} from 'typeorm';
import * as bcrypt from 'bcryptjs';


@Entity({name: 'users'})
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column("varchar", { default: true })
  email: string;

  @Column("varchar", { default: true, length: 20 })
  name: string;
  
  @Column("varchar", { default: true })
  password: string;
  
  @CreateDateColumn({ type: 'timestamp'})
  createTime: Date;

  @BeforeInsert()
  private beforeInsert(){
    this.password = bcrypt.hashSync(this.password,10)
  }
}