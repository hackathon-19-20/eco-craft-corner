"use client";

import React, { useState, ChangeEvent, use } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const [user, setUser] = useState<UserRegistration>({
    name: "",
    email: "",
    phone : undefined,
    password: "",
    cpassword: "",
  });

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    const name = user.name;
    const email = user.email;
    const password = user.password;
    const phone = user.phone;

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          phone,
          password,
        }),
      });

      if (!res.ok) {
        if (res.status == 422) alert("User Already Exists");
        alert("Registration Failed");
      } else {
        if (res.status == 201) {
          alert("Registration Successfull!");
          router.push('/sign-in');
        }
      }
    } catch (error) {
      console.log("db error");
    } finally {
      setIsLoading(false);
    }
  }

  const handleInputs = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Input
              id="name"
              name="name"
              placeholder="Name"
              type="text"
              disabled={isLoading}
              defaultValue={user.name}
              onChange={handleInputs}
            />
            <Input
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              disabled={isLoading}
              defaultValue={user.email}
              onChange={handleInputs}
            />
            <Input
              id="phone"
              name="phone"
              placeholder="Phone Number"
              type="number"
              disabled={isLoading}
              defaultValue={user.phone}
              onChange={handleInputs}
            />
            <Input
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              autoCorrect="off"
              disabled={isLoading}
              defaultValue={user.password}
              onChange={handleInputs}
            />
            <Input
              id="cpassword"
              name="cpassword"
              placeholder="Confirm Password"
              type="password"
              autoCorrect="off"
              disabled={isLoading}
              defaultValue={user.cpassword}
              onChange={handleInputs}
            />
          </div>
          <Button disabled={isLoading} variant="main">
            Register with Email&nbsp;&nbsp;
            <FaArrowRight />
          </Button>
        </div>
      </form>
    </div>
  );
}
