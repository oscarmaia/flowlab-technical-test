'use client'
import React from "react";
import ProductCart from "./components/ProductCard";
import { useGlobalContext } from "../contexts/GlobalContext";

export default function Cart() {
  
  const { data } = useGlobalContext();
  return (
    <div className="flex flex-col 2xl:max-w-[1440px] sm:mt-[38px] gap-3 mt-3">
      {data.map((el) => {
        return (
          <ProductCart
            description={el.description}
            image={el.image}
            key={el.id}
            id={el.id}
            price={el.price}
            name={el.name}
          />
        );
      })}
    </div>
  );
}
