import React from "react";
import Image from "next/image";
import Link from "next/link";


const Logo = () => {
  return (
    <div className="logo ">
      <Link href="/">
        <Image src="/Logo.png" alt="Logo" height={200} width={200} className="p-2 mt-5" />

      </Link>

      {/* <h1 className="font-extrabold h-10 w-50 font-body">ECO-CRAFT.</h1> */}
    </div>
  );
};

export default Logo;
