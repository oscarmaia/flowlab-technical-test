"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";
import logotipo from "../public/tipo_logo.svg";
import user from "../public/icons/User.svg";
import cart from "../public/icons/ShoppingBagOpen.svg";
import { useEffect } from "react";
import { useGlobalContext } from "@/app/contexts/GlobalContext";
export default function Navbar() {
  const { data } = useGlobalContext();
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <nav className="flex h-[70px] justify-center border-b-2 border-gray-100">
      <div className=" py-[20px] px-[20px] sm:px-[104px] w-[1440px] flex justify-between text-gray-500">
        <div className="flex">
          <Link href={"/"}>
            <div className="flex items-center gap-[7px]">
              <Image src={logo} height={20} alt="logo" />
              <Image src={logotipo} height={28} alt="logotipo" />
            </div>
          </Link>
        </div>
        <div className="flex items-center w-[189px] justify-between">
          <Link href={"/cart"}>
            <div className="flex items-center gap-3">
              <Image src={cart} height={16} alt="cart" />
              <span>Carrinho</span>
            </div>
          </Link>
          <Link href={"/users/login"}>
            <div className="flex items-center gap-3">
              <Image src={user} height={16} alt="cart" />
              <span>Entrar</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
