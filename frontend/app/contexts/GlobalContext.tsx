"use client";
import { ProductProps } from "@/types";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

// Create a new context

interface ContextProps {
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;

  data: ProductProps[];
  setData: Dispatch<SetStateAction<ProductProps[]>>;
}

const GlobalContext = createContext<ContextProps>({
  userId: "",
  setUserId: (): string => "",
  data: [],
  setData: (): ProductProps[] => [],
});

// Create a custom provider component
export function GlobalContextProvider({ children }: any) {
  const [userId, setUserId] = useState("");
  const [data, setData] = useState<[] | ProductProps[]>([]);

  return (
    <GlobalContext.Provider value={{ userId, setUserId, data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
}

// Create a custom hook to access the context
export function useGlobalContext() {
  return useContext(GlobalContext);
}
