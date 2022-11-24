import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
type Props = {};

interface Shop {
  name: string;
  email: string;
  phone: string;
  description: string;
}

export default function shops({}: Props) {
  const getShops = async () => {
    const response = await axios.get("/api/shop");
    return response.data.data;
  };

  const { data: shops } = useQuery(["shops"], getShops, {
    staleTime: 30000,
  });

  return (
    <div className="justify-top m-4 flex h-screen flex-col items-center font-fredoka">
      <ul className="">
        {shops?.map((shop: Shop, index: number) => {
          return (
            <li key={index} className="m-4 max-w-sm border p-4">
              Shop Name: {shop.name}
              <br />
              Email: {shop.email}
              <br />
              Phone: {shop.phone}
              <br />
              Description: {shop.description}
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
