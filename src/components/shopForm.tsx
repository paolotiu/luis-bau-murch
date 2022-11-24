import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";
import { useFormik } from "formik";
import { formSchema } from "../utils/validations";
import { useMutation } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";

import axios from "axios";
import ShopFormUIElements from "./shopFormUIElements";
import router from "next/router";
import { useState } from "react";

interface Shop {
  name: string;
  email: string;
  phone: string;
  description?: string;
}

export default function ShopForm() {
  const [textAreaCount, setTextAreaCount] = useState(0);
  const input =
    "rounded border border-solid border-black p-2 font-openSans text-sm text-stone-500";

  const uploader = Uploader({
    // Get production API keys from Upload.io
    apiKey: "free",
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      description: " ",
    },

    validationSchema: formSchema,

    onSubmit: async (values: Shop) => {
      const isValid = await formSchema.isValid(values);

      if (!isValid) {
        return toast.error("Please Input Valid Data");
      }

      signUp(values);
    },
  });

  const { mutate: signUp } = useMutation(
    async (values: Shop) => {
      const res = await axios.post("/api/shop", {
        values,
      });
      return res.data.data;
    },
    {
      onSuccess: () => {
        toast.success("Signed up successfully! Redirecting to shop page...");
        setTimeout(() => {
          router.push("/shops");
        }, 1000);
      },
      onError: (error: any) => {
        toast.error(error.response.data.message);
      },
    },
  );

  return (
    <div className="relative flex basis-3/5 flex-col border px-56 pt-28">
      <Toaster />
      <ShopFormUIElements />

      <form onSubmit={formik.handleSubmit} className="flex flex-col">
        <label htmlFor="shopName" className="my-2">
          Shop Name<span className="text-red-600">*</span>
        </label>
        <p className="text-sm text-red-600">
          {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
        </p>
        <input
          placeholder="Shop name"
          className={input}
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <label htmlFor="shopEmail" className="my-2">
          Shop Email<span className="text-red-600">*</span>
        </label>
        <p className="text-sm text-red-600">
          {formik.touched.email && formik.errors.email
            ? formik.errors.email
            : ""}
        </p>
        <input
          placeholder="elon.musk@gmail.com"
          className={input}
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <label htmlFor="shopContactNumber" className="my-2">
          Shop Contact Number<span className="text-red-600">*</span>
        </label>
        <p className="text-sm text-red-600">
          {formik.touched.phone && formik.errors.phone
            ? formik.errors.phone
            : ""}
        </p>
        <input
          placeholder="+63 916 906 9069"
          className={input}
          type="text"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <label htmlFor="shopAddress" className="my-2">
          Short Description
        </label>
        <textarea
          placeholder="Write your short description here..."
          value={formik.values.description}
          onBlur={formik.handleBlur}
          className={`${input} resize-none`}
          maxLength={150}
          name="description"
          onChange={(e) => {
            formik.handleChange(e);
            setTextAreaCount(e.target.value.length);
          }}
        />

        <div
          className={`flex place-content-end font-openSans text-sm ${
            textAreaCount == 150 ? "text-red-600" : ""
          }`}
        >
          {textAreaCount}/150
        </div>

        <label htmlFor="myfile" className="my-5">
          Shop Logo
        </label>
        <UploadDropzone uploader={uploader} width="250px" height="250px" />

        <div className="flex justify-center py-5">
          <button
            disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}
            type="submit"
            className="w-28 rounded bg-yellowButton px-5 py-3 text-xl text-black"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
