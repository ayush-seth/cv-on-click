"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TypographyH1 } from "@/components/ui/typography-h1";
import ky, { HTTPError } from "ky";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import loginHero from "./login.png";

const BASE_URL = "https://api.yourcoc.com/api";

type Screen = "phone" | "password";
type Form = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Form>();

  const router = useRouter();

  const onSubmit: SubmitHandler<Form> = async ({ username, password }) => {
    if (!password) {
      try {
        await ky.post(`${BASE_URL}/users/create_user/`, {
          json: { username },
        });
        setScreen("password");
      } catch (e) {
        if (e instanceof HTTPError) {
          const response = await e.response.json();
          setError("username", { message: response.username[0] });
        }
      }
    } else {
      try {
        const response = await ky
          .post(`${BASE_URL}/users/token/`, {
            json: { username, password },
          })
          .json<{ access: string; refresh: string; user_id: number }>();
        localStorage.setItem("access", response.access);
        localStorage.setItem("refresh", response.refresh);
        localStorage.setItem("user_id", response.user_id.toString());
        router.push("/resumes");
      } catch (e) {
        if (e instanceof HTTPError) {
          const response = await e.response.json();
          setError("password", { message: response.detail });
        }
      }
    }
  };

  const [screen, setScreen] = useState<Screen>("phone");

  if (localStorage.getItem("access") && localStorage.getItem("refresh")) {
    router.replace("/resumes");
  }

  return (
    <div className="flex h-full">
      <div className="flex grow flex-col justify-center p-4 xl:px-16 xl:py-6">
        {screen === "phone" && (
          <>
            <TypographyH1 className="mt-12">Login or Sign up</TypographyH1>
            <form className="mt-8 text-sm" onSubmit={handleSubmit(onSubmit)}>
              <Input
                label="Enter mobile number"
                type="tel"
                required
                error={errors.username?.message}
                {...register("username")}
              />
              <div className="mt-8 flex gap-4">
                <input type="checkbox" required />
                <span className="text-gray-700">
                  By continuing I agree to the{" "}
                  <Link
                    className="font-semibold text-primary-500"
                    href="/terms"
                  >
                    Terms of use & Privacy Policy
                  </Link>
                </span>
              </div>
              <Button className="mt-4 w-full">Continue</Button>
            </form>
          </>
        )}
        {screen === "password" && (
          <>
            <TypographyH1 className="mt-12">Verify with OTP</TypographyH1>
            <form className="mt-8 text-sm" onSubmit={handleSubmit(onSubmit)}>
              <Input
                label="Enter OTP"
                required
                error={errors.password?.message}
                {...register("password")}
              />
              <Button className="mt-4 w-full">Continue</Button>
            </form>
          </>
        )}
      </div>
      <Image src={loginHero} className="hidden h-full w-auto xl:block" alt="" />
    </div>
  );
}
