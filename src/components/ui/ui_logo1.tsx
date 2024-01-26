import React from "react";
import Image from "next/image";
import Link from "next/link";


const Logo = () => {
  return (  
    <div className="logo ">
        <Link href="/">
      <Image src="/Logo1.png" alt="Logo" height={100} width={100} className="p-2 m-2 logo1 "/>
        </Link>
      {/* <h1 className="font-extrabold h-10 w-50 font-body">ECO-CRAFT.</h1> */}
    </div>
  );
};

export default Logo;
