"use client";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { ProductProps } from "@/types";
import Link from "next/link";
import { CustomButtom } from ".";
import { useGlobalContext } from "@/app/contexts/GlobalContext";

export default function ProductCard(props: ProductProps) {
  const { data, setData } = useGlobalContext();
  const formattedPrice = (props.price / 100).toFixed(2).replace(".", ",");
  const formattedPriceForCreditCard = (props.price / 5 / 100)
    .toFixed(2)
    .replace(".", ",");
  function addToCart() {
    const arr = [...data];
    arr.push(props);
    setData(arr);
  }
  return (
    <div className="h-[658px] w-[309px] flex flex-col justify-between items-center">
      <Link href={`/product/${props.id}`}>
        <div className="h-[450px] w-[309px] xl:w-[309px] rounded-xl relative">
          <Image
            alt={props.name}
            src={props.image}
            fill
            sizes="100vw"
            loading="lazy"
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col items-center pt-[10px] gap-[8px]">
            <p className="descriptionCard">{props.name}</p>
            <p className="priceCard">R$ {formattedPrice}</p>
            <p className="descriptionCard">
              5x de R$ {formattedPriceForCreditCard} s/juros
            </p>
          </div>
        </div>
      </Link>

      <CustomButtom
        title="Adicionar ao carrinho"
        handleClick={addToCart}
        containerStyles="text-primary_color w-[205px] h-[48px] bg-secondary_color rounded-[4px]"
      />
    </div>
  );
}
