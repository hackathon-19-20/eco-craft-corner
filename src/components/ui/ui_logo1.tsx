import React from "react";
import Image from "next/image";
import img from "../../../public/Logo1.png";
import Link from "next/link";


const Logo = () => {
  return (  
    <div className="logo ">
        <Link href="/">
      <Image src={img} alt="Logo" className=" h-[4.5rem] w-[5.5rem] p-2 m-2 logo1 "/>
        </Link>
      {/* <h1 className="font-extrabold h-10 w-50 font-body">ECO-CRAFT.</h1> */}
    </div>
  );
};

export default Logo;
