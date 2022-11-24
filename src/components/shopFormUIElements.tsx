import React from "react";
import star from "../../public/images/star.png";
import signUpFormBar from "../../public/images/signUpFormBar.png";
import Image from "next/image";

export default function ShopFormUIElements() {
  return (
    <>
      <div className="absolute left-32 top-16 h-16 w-16">
        <Image src={star} />
      </div>

      <div className="absolute right-32 bottom-40 h-16 w-16">
        <Image src={star} />
      </div>
      <Image src={signUpFormBar} />
      <h1 className="py-5 text-3xl">Let's set up some info!</h1>
      <h3 className="font-openSans">
        These are required for account creation.
      </h3>
    </>
  );
}
