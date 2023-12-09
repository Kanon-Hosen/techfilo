"use client";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
function SmothScroll({ children }) {
  useEffect(() => {
    new LocomotiveScroll({
      el: window.document.querySelector("main"),
      smooth: true,
    });
  }, []);
  return <div id="main">{children}</div>;
}

export default SmothScroll;
