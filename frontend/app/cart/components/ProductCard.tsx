"use client";
import { useState } from "react";
import { Products } from "@/constants";
import Image from "next/image";
import plus from "@/public/icons/Plus.svg";
import minus from "@/public/icons/Minus.svg";
import trash from "@/public/icons/TrashSimple.svg";
import { ProductProps } from "@/types";

export default function ProductCart({
  image,
  name,
  price,
  description,
  id,
}: ProductProps) {
  const [quantity, setQuantity] = useState(1);
  function increaseQuantity() {
    setQuantity(quantity + 1);
  }
  function decreaseQuantity() {
    if (quantity === 1) {
      removeItemFromCart();
    } else {
      setQuantity(quantity - 1);
    }
  }
  function removeItemFromCart() {
    console.log("todo remove item");
  }
  return (
    <div className="px-3">
      <div className="flex">
        <div className="flex min-h-[100px] min-w-[100px] max-h-[100px] max-w-[100px] box-border relative ">
          <Image
            src={image}
            alt={name}
            fill
            sizes="100vw"
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
        <div className="pl-3 flex flex-col justify-between ">
          <h1 className="font-poppins text-sm font-semibold">{description}</h1>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-md font-bold">
                R$ {(price / 100 - price / 1000).toFixed(2).replace(".", ",")}
              </p>
              <p className="text-sm">
                ou{" "}
                <span className="text-primary_color">
                  R$ {(price / 100).toFixed(2).replace(".", ",")}
                </span>{" "}
                à prazo
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex ">
        <button
          onClick={removeItemFromCart}
          className="max-w-[100px] min-w-[100px] mr-3 flex justify-center items-center mt-2 bg-red-100 rounded-[8px]"
        >
          <Image
            src={trash}
            alt="minus"
            style={{ width: "16px", height: "16px" }}
          />
        </button>
        <div className="flex grow items-center bg-gray-100 justify-between rounded-[8px] h-[25px] px-5 mt-2">
          <button onClick={decreaseQuantity}>
            <Image
              src={minus}
              alt="minus"
              style={{ width: "12px", height: "12px" }}
            />
          </button>
          <span className="text-gray-500 text-[12px]">{quantity}</span>
          <button onClick={increaseQuantity}>
            <Image
              src={plus}
              alt="plus"
              style={{ width: "12px", height: "12px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
