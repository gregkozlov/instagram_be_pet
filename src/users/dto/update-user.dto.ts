// users/dto/update-user.dto.ts
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsOptional, IsString, MaxLength } from 'class-validator';
export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @MaxLength(50)
  username?: string;

  @IsOptional()
  @IsEmail()
  @MaxLength(100)
  email?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  password?: string;

  @IsOptional()
  @IsString()
  bio?: string;
}
