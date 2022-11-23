import React from "react";
import Image from "next/image";
import { Uploader } from "uploader";
import { UploadButton, UploadDropzone } from "react-uploader";
import star from "../../public/images/star.png";
import signUpFormBar from "../../public/images/signUpFormBar.png";
type Props = {};

export default function ShopForm({}: Props) {
  const input: string =
    "rounded border border-solid border-black p-2 font-openSans text-sm";

  const uploader = Uploader({
    // Get production API keys from Upload.io
    apiKey: "free",
  });

  return (
    <div className="relative flex basis-3/5 flex-col border px-56 pt-28">
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

      <form className="flex flex-col">
        <label htmlFor="shopName" className="my-2">
          Shop Name<span className="text-red-600">*</span>
        </label>
        <input
          className={input}
          type="text"
          name="shopName"
          placeholder="Shop Name"
        />

        <label htmlFor="shopEmail" className="my-2">
          Shop Email<span className="text-red-600">*</span>
        </label>
        <input
          className={input}
          type="text"
          name="shopEmail"
          placeholder="elon.musk@gmail.com"
        />

        <label htmlFor="shopContactNumber" className="my-2">
          Shop Contact Number<span className="text-red-600">*</span>
        </label>
        <input
          className={input}
          type="text"
          name="shopContactNumber"
          placeholder="(+63) 916 906 9069"
        />

        <label htmlFor="shopAddress" className="my-2">
          Short Description
        </label>
        <textarea
          className={`${input} resize-none`}
          maxLength={150}
          name="shopAddress"
          defaultValue={"Write your short description here..."}
        />
        <label htmlFor="myfile" className="my-5">
          Shop Logo
        </label>
        <UploadDropzone
          uploader={uploader}
          options={{ multi: true }}
          onUpdate={(files) => console.log(files)}
          width="300px"
          height="300px"
        />

        <div className="flex justify-center py-5">
          <button className="w-28 rounded bg-yellowButton px-5 py-3 text-xl text-black">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
