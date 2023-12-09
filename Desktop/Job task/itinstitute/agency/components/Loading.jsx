import Image from "next/image";
import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-orange-500"></div>
        <Image
          src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
                  className="rounded-full h-28 w-28"
                  width={100} height={100}
        />
      </div>
    </div>
  );
}

export default Loading;
