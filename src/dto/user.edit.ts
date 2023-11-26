import { IsString, IsNumber } from 'class-validator';

export class userEditdto { 
  @IsString()
  username: string

  @IsString()
  email: string
}