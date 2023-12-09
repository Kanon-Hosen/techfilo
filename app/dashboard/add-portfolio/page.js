"use client";

import { auth } from "@/Firebase.config";
import TextEditor from "@/components/Editor/TextEditor";
// import Editor from "@/components/Editor/Editor";
import { CldUploadWidget } from "next-cloudinary";

import Image from "next/image";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";

const AddPortfolio = () => {
  const [user] = useAuthState(auth);

  const [results, setResult] = useState([]);

  const handlePostTeam = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const category = e.target.category.value;
    const subcategory = e.target.subcategory.value;
    const link = e.target.link.value;

    const portfolioDetails = {
      name,
      image: results,
      category,
      subcategory,
      link,
    };

    try {
      fetch("../../api/portfolio", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
          email: user?.email,
        },
        body: JSON.stringify(portfolioDetails),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.errorMessage) {
            return toast.error(data.errorMessage);
          }
          e.target.reset();
          setResult([]);
          return toast.success("Successfully added portfolio item");
        });
    } catch (error) {
      return toast.error(error.message);
    }
  };



  return (
    <div>
      <h1 className="text-xl font-bold drop-shadow-lg">Add Portfolio Item</h1>
      <div className="my-8">
        <form onSubmit={handlePostTeam}>
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
          <div className="w-full">
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
          <div className="flex md:flex-row flex-col gap-10 mt-5">
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <label htmlFor="" className="font-semibold">
                  Category:
                </label>
                <select
                  name="category"
                  required
                  className="p-3 rounded-md shadow-md placeholder-gray-400 w-72 focus:outline-cyan-500 focus:border-none border-none"
                  id=""
                >
                  <option value="Graphic">Graphic</option>
                  <option value="Website Development">Website </option>
                </select>
              </div>
              <div className="flex gap-3 items-center">
                <label htmlFor="" className="font-semibold">
                  Subcategory:
                </label>
                <select
                  name="subcategory"
                  required
                  className="p-3 rounded-md shadow-md placeholder-gray-400 w-72 focus:outline-cyan-500 focus:border-none border-none"
                  id=""
                >
                  <option value="Logo Design">Logo Design</option>
                  <option value="Banner Design">Banner Design</option>
                  <option value="Flyer Design">Flyer Design</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="E-commerce Website">E-commerce Website</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <label htmlFor="" className="font-semibold">
                  Name:
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Name"
                  className="p-3 rounded-md shadow-md placeholder-gray-400 w-72 focus:outline-cyan-500 focus:border-none border-none"
                />
              </div>
              <div className="flex gap-3 items-center">
                <label htmlFor="" className="font-semibold">
                  Preview Link:
                </label>
                <input
                  name="link"
                  type="text"
                  required
                  placeholder="Preview Link"
                  className="p-3 rounded-md shadow-md placeholder-gray-400 w-72 focus:outline-cyan-500 focus:border-none border-none"
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="my-6 font-semibold">Project Description:</h1>
            <TextEditor />
          </div>
          <div className="w-44 bg-cyan-500 rounded-md flex items-center justify-center font-semibold text-white mt-5">
            <button className="w-full p-3">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPortfolio;
