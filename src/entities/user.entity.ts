import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  BeforeInsert 
} from 'typeorm';
import * as bcrypt from 'bcryptjs';


@Entity({name: 'user_infor'})
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ default: true })
  email: string;

  @Column({ default: true, length: 20 })
  username: string;
  
  @Column({ default: true, length: 10 })
  password: string;
  
  @Column({ default: true})
  create_time: Date;

  @BeforeInsert()
  private beforeInsert(){
    this.password = bcrypt.hashSync(this.password,10)
  }
}