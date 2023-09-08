"use client";
import { Products } from "@/constants";
import Image from "next/image";
import pix from "@/public/icons/pix.svg";
import card from "@/public/icons/credit-card.svg";
import SecundaryImage from "../components/SecundaryImage";
import PaymentMethod from "../components/PaymentMethod";
import CustomButton from "@/components/CustomButton";
import { useGlobalContext } from "@/app/contexts/GlobalContext";
import { ProductProps } from "@/types";

export default function ProductPage({ params }: { params: { id: string } }) {
  const { data, setData } = useGlobalContext();
  const id = parseInt(params.id);
  const product = Products[id] as ProductProps;
  function addToCart() {
    const arr = [...data];
    arr.push(product);
    setData(arr);
  }
  return (
    <div className="flex m-auto justify-center 2xl:max-w-[1440px] sm:mt-[48px]">
      <div className="xl:w-[1232px] xl:h-[471px] flex flex-col">
        {/* left side */}
        <div className="flex flex-col xl:flex-row justify-end items-center gap-[24px] p-3">
          <div className="flex xl:flex-col gap-6 justify-between order-2 xl:order-1">
            {product?.secundary_images?.map((el, i) => (
              <SecundaryImage key={i} image={el} />
            ))}
          </div>
          <div className="h-[400px] w-[300px] sm:w-[467px] sm:h-[471px] order-1 xl:order-2 relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="100vw"
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
          {/* right side */}
          <div className="order-last flex xl:py-[40px] w-auto xl:w-[596px] mx-[16px] align-baseline">
            <div className="flex flex-col justify-between ">
              <h1 className=" font-poppins font-medium text-[28px]">
                {product.description}
              </h1>
              <div className="bg-gray-50 h-[176px] px-[5px] sm:px-[48px] py-[20px] flex justify-between items-center">
                <PaymentMethod
                  image={pix}
                  price={product.price}
                  discount={true}
                />
                <div className="hidden sm:flex border h-[80px] "></div>
                <PaymentMethod
                  image={card}
                  price={product.price}
                  discount={false}
                />
              </div>
              <CustomButton
                title="Adicionar ao carrinho"
                containerStyles="p-[12px] h-[48px] bg-primary_color rounded-lg"
                textStyles="text-white"
                handleClick={addToCart}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
