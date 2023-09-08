import { IsNotEmpty, IsNumberString, Length } from 'class-validator';

export abstract class CreateUserBody {
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsNumberString()
  @Length(11)
  phone: string;
}
