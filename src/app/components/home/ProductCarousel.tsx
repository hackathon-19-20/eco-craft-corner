"use client";

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function ProductCarousel() {
  const [index, setIndex] = useState(0);
  const arr = [
    "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1681243945939-f21977cc131e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1557687790-902ede7ab58c?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1621466550398-ac8062907657?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1702970192574-fc0344693a53?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const n = arr.length;

  function handleClick(x: string) {
    if (x == "f") {
      setIndex((prev) => (prev + 1) % n);
    } else if (x == "b") {
      setIndex((prev) => {
        if (prev == 0) return n - 1;
        return (prev - 1) % n;
      });
    }
  }

  return (
    <div className="flex justify-center items-center gap-8">
      <Button
        variant="main"
        onClick={() => {
          handleClick("b");
        }}
      >
        <IoIosArrowBack color="white"/>{" "}
      </Button>
      <ProductCard src={arr[index]} desc="lol" heading="lol" price="69" />
      <Button
        variant="main"
        onClick={() => {
          handleClick("f");
        }}
      >
        <IoIosArrowForward color="white" />{" "}
      </Button>
    </div>
  );
}
