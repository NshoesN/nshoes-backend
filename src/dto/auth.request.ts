import { IsNotEmpty, IsString, IsEmail, Length } from 'class-validator';

export class CreateUserRequestDto { 
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string

  @IsNotEmpty()
  @IsString()
  username: string
  
  @IsNotEmpty()
  @IsString()
  password: string
}