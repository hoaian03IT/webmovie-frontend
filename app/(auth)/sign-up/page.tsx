"use client";

import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div className="bg-gray-50 text-black border-1 rounded-sm border-stone-300 mt-24 px-8 py-10">
            <div className="w-full flex justify-center border-b-2 border-warning-400 border-dashed">
                <Image className="block" loading="eager" src="/logo.png" alt="" width={200} height={100} />
            </div>
            <div className="mt-4">
                <p className="text-3xl">Create one</p>
                <form>
                    <div className="flex flex-col gap-2">
                        <Input
                            variant="faded"
                            color="warning"
                            type="email"
                            value={emailOrPhone}
                            onValueChange={(value) => setEmailOrPhone(value)}
                            label="Email"
                            placeholder="Enter your email address"
                            isClearable={true}
                            radius="sm"
                            fullWidth={true}
                            size="sm"
                        />
                        <Input
                            variant="faded"
                            type="email"
                            color="warning"
                            value={password}
                            onValueChange={(value) => setPassword(value)}
                            label="Password"
                            placeholder="Enter your password"
                            isClearable={true}
                            radius="sm"
                            size="sm"
                        />{" "}
                        <Input
                            variant="faded"
                            type="email"
                            color="warning"
                            value={confirmPassword}
                            onValueChange={(value) => setConfirmPassword(value)}
                            label="Confirm password"
                            placeholder="Confirm your password"
                            isClearable={true}
                            radius="sm"
                            size="sm"
                        />
                    </div>
                    <Button
                        className="text-base w-full my-4"
                        color="warning"
                        variant="bordered"
                        type="submit"
                        radius="sm"
                        size="sm"
                        isLoading={isLoading}>
                        Sign up
                    </Button>
                </form>
                <div className="flex items-center gap-2 pt-4 border-t-2 border-warning-400 border-dashed">
                    <button className="flex items-center border-2 border-stone-300 rounded-md px-2 bg-stone-100 hover:bg-white active:opacity-80 transition-all">
                        <span>Sign up with</span>
                        <svg className="size-10" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                            <path
                                fill="#FFC107"
                                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            <path
                                fill="#FF3D00"
                                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                            <path
                                fill="#4CAF50"
                                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                            <path
                                fill="#1976D2"
                                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                    </button>
                    <button className="flex items-center border-2 border-stone-300 rounded-md px-2 bg-stone-100 hover:bg-white active:opacity-80 transition-all">
                        <span>Sign up with</span>
                        <svg className="size-10" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                            <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
                            <path
                                fill="#fff"
                                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                        </svg>
                    </button>
                </div>
                <div className="mt-4 flex items-center justify-center">
                    <span>Already have account?</span>
                    <Link className="ms-2 text-warning-500 font-bold underline" href="/sign-in">
                        Sign in now
                    </Link>
                </div>
            </div>
        </div>
    );
}
