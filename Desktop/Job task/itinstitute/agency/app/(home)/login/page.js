"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../Firebase.config";
import { useRouter } from "next/navigation";
// import { useNavigate } from "react-router";

const Login = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const teamName = "venom";
  const [team, setTeam] = useState("");
  const handleAuth = (e) => {
    e?.preventDefault();
    const name = e.target?.team.value;
    const ourName = name?.toLowerCase();
     setTeam(ourName);
    return e.target?.reset();
  };
  // if (team !== teamName) {
  //   return (
  //     <div className="h-[450px] w-full flex flex-col items-center justify-center gap-2">
  //       <h1 className="text-2xl font-semibold mb-3">What's our team name?</h1>
  //       <form onSubmit={handleAuth} className="flex gap-4 items-center">
  //         <input
  //           name="team"
  //           className="border p-2"
  //           type="text"
  //           placeholder="Enter our team name"
  //         />
  //         <button className="px-3 py-2 bg-orange-500 text-white">
  //           Next Step
  //         </button>
  //       </form>
  //     </div>
  //   );
  // }

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        e.target.reset();
        fetch("/api/verify-jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${process.env.NEXT_PUBLIC_JWT_SECRET_KEY}`,
          },
          body: JSON.stringify(data?.user?.email),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data?.data);
          });
        router.push("/");
      })
      .catch((err) => {
        e.target.reset();
        setError(err.message);
      });
  };
  return (
    <div className="md:px-20 px-6">
      <div className="text-black w-full h-screen flex items-center justify-center flex-col">
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 border border-gray-200 bg-white shadow-md p-6 w-96"
        >
          <h1 className="font-bold text-2xl ">Admin Login</h1>

          <input
            required
            className="border border-gray-400 p-4 placeholder-slate-700"
            type="email"
            name="email"
            id=""
            placeholder="Enter Your Email"
          />
          <input
            required
            className="border border-gray-400 p-4 placeholder-slate-700"
            type="password"
            name="password"
            id=""
            placeholder="Enter Your Password"
          />
          {error && <p className="text-red-500 font-semibold">{error}</p>}
          <button className="mt-3 bg-primary py-4 font-semibold text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
