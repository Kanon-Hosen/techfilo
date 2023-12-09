"use client";

import { auth } from "@/Firebase.config";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";

function AddTestimonial() {
  const [results, setResult] = useState([]);
  const [user] = useAuthState(auth);

  const handleTesimonail = async (e) => {
    e.preventDefault();
    const form = e?.target;
    const clientName = form.clientName.value;
    const adress = form.adress.value;
    const feedback = form.feedback.value;
    const photo = results;

    const allDetails = { clientName, adress, feedback, photo };
    try {
      fetch("../../api/testimonial", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
          email: user?.email,
        },
        body: JSON.stringify(allDetails),
      })
        .then((res) => res.json())
        .then(() => {
          setResult([]);
          return toast.success("Successfully saved");
        });
    } catch (error) {
      return toast.error(error.message);
    }
  };
  return (
    <div>
      <h1 className="font-semibold mb-3">Add Testimonial</h1>
      <div className="my-6">
        <form onSubmit={handleTesimonail}>
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
          <label className="pt-3">Client Image</label>
          <div className="w-48 border-dashed mt-5 p-6 flex items-center justify-center border-2 h-32 bg-neutral-100 rounded-md ">
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
                    className="button bg-blue-500 px-4 py-2 rounded-lg text-white"
                    onClick={handleOnClick}
                  >
                    Upload an Image
                  </button>
                );
              }}
            </CldUploadWidget>
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <label htmlFor="">Client name</label>
            <input
              type="text"
              name="clientName"
              placeholder="Enter client name"
              className="p-2 border-2 md:w-64"
              required
            />
          </div>{" "}
          <div className="flex flex-col gap-2 mt-3">
            <label htmlFor="">Client Adress</label>
            <input
              type="text"
              name="adress"
              placeholder="Enter client Adress"
              className="p-2 border-2 md:w-64"
              required
            />
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <label htmlFor="">Client feedback</label>
            <textarea
              name="feedback"
              placeholder="Enter Client feedback"
              className="p-2 border-2 resize-none"
              required
            />
          </div>
          <button className="mt-5 text-white bg-orange-500 px-10 py-2">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTestimonial;
