"use client";
import { auth } from "@/Firebase.config";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";

function Hero() {
  const [results, setResult] = useState([]);
  const [user] = useAuthState(auth)
  const handleHeroSave = async (e) => {
    e.preventDefault();
    const form = e?.target;

    const heading = form?.heading.value;
    const ShortTagline = form?.tagline.value;
    const buttonText = form?.btnText.value;
    const buttonLink = form?.btnLink.value;

    const allInfo = {
      heading,
      ShortTagline,
      buttonLink,
      buttonText,
      image: results,
    };

    try {
      fetch("/api/hero", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
          email: user?.email,
        },
        body:JSON.stringify(allInfo)
      }).then(res => res.json())
        .then(() => {
          form.reset();
        return toast.success("success")
      })
    } catch (error) {
      return toast.error(error.message);
    }
  };
  return (
    <div className="w-full overflow-x-hidden">
      <h1>Hero Image</h1>
      <div className="grid md:flex grid-cols-2 gap-3">
        {results?.map((r, i) => {
          return (
            <div className="w-[150px] h-[150px]" key={i}>
              <Image
                className="w-full h-full bg-center object-cover border rounded-lg"
                width={200}
                height={200}
                src={r}
                alt="image"
              />
            </div>
          );
        })}
      </div>
      <div className="w-fit overflow-hidden border-dashed mt-5 p-6 flex items-center justify-center border-2 h-32 bg-neutral-100 rounded-md ">
        <CldUploadWidget
          onUpload={(result, widget) => {
            widget.close();
            setResult([...results, result?.info.secure_url]);
          }}
          uploadPreset="essorybd"
        >
          {({ open }) => {
            function handleOnClick(e) {
              e.preventDefault();
              open();
            }
            return (
              <button
                className="button bg-blue-500 px-6 py-3 rounded-lg text-white"
                onClick={handleOnClick}
              >
                Upload an Image
              </button>
            );
          }}
        </CldUploadWidget>
      </div>
      <form onSubmit={handleHeroSave} className="mb-8">
        <div className="mt-3 flex flex-col gap-2 ">
          <h1 className="font-semibold">Heading</h1>
          <input
            className="border-2 p-2 md:w-80"
            type="text"
            placeholder="Enter Heading text"
            required
            name="heading"
          />
        </div>{" "}
        <div className="mt-3 flex flex-col gap-2 ">
          <h1>Short tagline</h1>
          <textarea
            className="resize-none md:w-80 border-2 p-2"
            rows={4}
            placeholder="Enter tagline text"
            required
            name="tagline"
          />
        </div>
        <div className="mt-3 flex flex-col gap-2 ">
          <h1>Button text</h1>
          <input
            className="border-2 p-2 md:w-80"
            type="text"
            placeholder="Enter button text"
            required
            name="btnText"
          />
        </div>{" "}
        <div className="mt-3 flex flex-col gap-2 ">
          <h1>Button link</h1>
          <input
            className="border-2 p-2 md:w-80"
            type="text"
            placeholder="Enter button link"
            name="btnLink"
          />
        </div>
        <button className="mt-5 bg-orange-500 px-6 py-3 md:w-80 text-white font-semibold">
          Save
        </button>
      </form>
    </div>
  );
}

export default Hero;
