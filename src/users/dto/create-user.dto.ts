// users/dto/create-user.dto.ts
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  username: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(100)
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  password: string;

  @IsOptional()
  @IsString()
  bio?: string;
}
