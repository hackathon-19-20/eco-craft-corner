"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [userDetails, setUserDetails] = React.useState<UserSignin>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    const email = userDetails.email;
    const password = userDetails.password;

    const res = await fetch("/api/sign-in", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (res.ok) {
      alert("Signed in!");
      router.push("/dashboard");
    } else {
      if(res.status == 420)
        alert("Password is incorrect! ")
      else if (res.status == 421)
        alert("User not reagistered");
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              value={userDetails.email}
              placeholder="Email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              onChange={handleChange}
              className="feature-button feature-button1"
            />
            <Input
              id="password"
              name="password"
              value={userDetails.password}
              placeholder="Password"
              type="password"
              autoCorrect="off"
              disabled={isLoading}
              onChange={handleChange}
              className="feature-button feature-button1"
            />
          </div>
          <Button disabled={isLoading} variant="main" className="feature-button feature-button1" >
            Sign In with Email&nbsp;&nbsp;
            <FaArrowRight />
          </Button>
        </div>
      </form>
    </div>
  );
}
