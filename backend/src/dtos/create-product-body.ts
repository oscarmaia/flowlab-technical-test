import { IsNotEmpty, IsNumberString, Length } from 'class-validator';

export abstract class CreateProductBody {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  image: string;
  @IsNotEmpty()
  price: number;
}
