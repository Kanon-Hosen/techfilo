import React from "react";
export const metadata = {
  title: "Portfolio - Our All Works",
  description: "Portfolio page",
};

function PortFolioLayout({ children }) {
  return <div className="max-w-[1440px] mx-auto ">{children}</div>;
}

export default PortFolioLayout;
