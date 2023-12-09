"use client";

import { auth } from "@/Firebase.config";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";

function Company() {
  const [results, setResult] = useState([]);
  const [user]= useAuthState(auth)

  console.log(results);
  const hanldleUpload = () => {
    const images = { image: results };
    try {
      fetch("../../api/company", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
          email: user?.email,
        },
        body: JSON.stringify(images),
      })
        .then((res) => res.json)
        .then(() => {
          setResult([]);
          return toast.success("Successfully saves");
        });
    } catch (error) {
      return toast.error(error?.message);
    }
  };

  return (
    <div>
      <h1 className="font-semibold">Add Company</h1>
      <div>
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
        <div className="w-full border-dashed mt-5 p-6 flex items-center justify-center border-2 h-32 bg-neutral-100 rounded-md ">
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
      </div>
      <button
        onClick={hanldleUpload}
        className="bg-orange-500 px-6 py-2 text-white mt-6"
      >
        Save
      </button>
    </div>
  );
}

export default Company;
