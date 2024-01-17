"use client";

import { Divider } from "@chakra-ui/react";
import React from "react";
import { usePathname } from "next/navigation";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelopeOpen,
  FaTelegramPlane,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();
  if (pathname == "/") {
    return (
      <>
        <footer className="bg-[#f8fae5] text-gray-400">
          <div className="py-5 px-20">
            <div className="row flex gap-8 px-20 justify-center mb-30">
              <div className="basis-1/3">
                <div className="single-cta flex justify-center items-center gap-6">
                  <FaMapMarkerAlt className="text-primary text-3xl" />
                  <div className="cta-text">
                    <h4 className="text-black text-lg font-bold">Find us</h4>
                    <div className=" h-[2px] w-10 bg-secondary mb-1"></div>
                    <span>Narela</span>
                  </div>
                </div>
              </div>
              <div className="basis-1/3">
                <div className="flex justify-center items-center gap-6">
                  <FaPhone className="text-primary text-3xl" />
                  <div className="cta-text">
                    <h4 className="text-black text-lg font-bold">Call us</h4>
                    <div className=" h-[2px] w-10 bg-secondary mb-1"></div>
                    <span>12345678</span>
                  </div>
                </div>
              </div>
              <div className="basis-1/3">
                <div className="flex justify-center items-center gap-6">
                  <FaEnvelopeOpen className="text-primary text-3xl" />
                  <div className="cta-text">
                    <h4 className="text-black text-lg font-bold">Mail us</h4>
                    <div className="h-[2px] w-10 bg-secondary mb-1"></div>
                    <span>mail@info.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <div className="py-5   px-32">
            <div className="mb-30 flex justify-around">
              <div className="flex flex-col gap-4 basis-1/2 pl-28">
                <div className=" text-xl font-semibold">
                  <h3 className="text-black">Useful Links</h3>
                  <div className=" h-1 w-16 bg-secondary"></div>
                </div>
                <ul className="flex flex-col gap-2">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </div>

              <div className="col-xl-4 col-lg-4 mb-50 basis-1/2">
                <div className="footer-widget">
                  <div className="text-black">Logo Here !</div>
                  <div className="footer-text">
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididuntut consec tetur
                      adipisicing elit,Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 mt-2">
                    <span className="text-black text-lg font-bold">
                      Follow us
                      <div className=" h-1 w-14 bg-secondary"></div>
                    </span>
                    <div className="flex gap-4">
                      <a href="#">
                        <FaFacebook className="text-blue-600 hover:text-orange-500 text-3xl" />
                      </a>
                      <a href="#">
                        <FaInstagram className="text-pink-600 hover:text-orange-500 text-3xl" />
                      </a>
                      <a href="#">
                        <FaLinkedin className="text-blue-700 hover:text-orange-500 text-3xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-area bg-gray-800 py-4 text-gray-400 w-full">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                  <div className="copyright-text">
                    <p>
                      Copyright &copy; {new Date().getFullYear()}, All Right
                      Reserved{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
};

export default Footer;
