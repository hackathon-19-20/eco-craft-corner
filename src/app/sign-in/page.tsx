import { Metadata } from "next";
import Link from "next/link";
import { UserAuthForm } from "@/components/authentication/UserSignInForm";
import { redirect } from 'next/navigation'
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  const email = cookies().get("email");
  if(email){
    redirect("/shop");
  }

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
          <div className="flex flex-col justify-center space-y-6  bg-white sm:p-5 md:p-10 lg:px-20 rounded-lg">
            <div className="flex flex-col space-y-2 text-center ">
              <h1 className="text-2xl font-semibold tracking-tight">
                Sign In
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to sign into your account
              </p>
            </div>
            <UserAuthForm />

            <div className="text-sm text-muted-foreground text-center">
              You don&apos;t have an account ? Click&nbsp;
              <Link href="/register" className=" text-blue-500 hover:text-blue-300">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
