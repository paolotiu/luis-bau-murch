import Image from "next/image";
import React from "react";
import Image1 from "../../public/images/Rectangle 148-2.png";
import Image2 from "../../public/images/Rectangle 148.png";
import Image3 from "../../public/images/Rectangle 148-1.png";

type Props = {};

export default function ImagePanel({}: Props) {
  return (
    <div className="flex basis-2/5  flex-col">
      <Image src={Image1} />
      <Image src={Image2} />
      <Image src={Image3} />
    </div>
  );
}
