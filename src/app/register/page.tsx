import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/authentication/UserRegisterForm";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 bg-[url('/sign-up-background.jpg')] bg-cover bg-center ">
        <div className="relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0" />
          <div className="relative z-20 flex items-center text-lg font-medium ">
            Logo
          </div>
        </div>
        <div className="mx-auto">
          <div className="flex flex-col justify-center space-y-6  bg-white s:p-5 md:p-10 lg:px-20 rounded-lg">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />

            <div className="text-sm text-muted-foreground text-center">
              If you have an account click below &nbsp;
              <Link href="/sign-in" className=" text-blue-500 hover:text-blue-300">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
