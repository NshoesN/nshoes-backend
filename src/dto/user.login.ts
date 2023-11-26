import { IsString, MinLength, MaxLength, Matches } from 'class-validator';

export class userLoginRequestdto { 
  @IsString()
  email: string

  @IsString()
  @MaxLength(20)
  @MinLength(10)
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'password only accepts english and number',
  })
  password: string
}