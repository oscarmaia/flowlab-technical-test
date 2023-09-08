import { MouseEventHandler } from "react";

export interface ProductProps {
  image: string;
  name: string;
  price: number;
  id: number;
  description: string;
  secundary_images?: string[];
}

export interface PaymentMethodProps {
  image: string;
  price: number;
  discount: boolean;
}


export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
