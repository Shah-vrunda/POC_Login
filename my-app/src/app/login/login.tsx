"use client";

import { useState } from "react";
import { Input, Button, Password } from "rizzui";
import { useRouter } from "next/navigation";
import loginApi from "../service.ts/login";

const Login = () => {
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center gap-5 mt-[10%]">
            <div className="text-gray-600 md:w-1/3 w-[90%]">
                <div className=" bg-gray-100 rounded-lg p-8 flex flex-col md:mt-0 justify-center">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                        Login
                    </h2>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">
                            Email
                        </label>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            placeholder=" "
                            className=" bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">
                            Password
                        </label>
                        <Password
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            placeholder=" "
                            className="w-full bg-white border border-gray-300 rounded focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  leading-8 "
                        />
                    </div>
                    <Button
                        className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        type="submit"
                        onClick={async () => {
                            const result = await loginApi({ email, password });
                            console.log(result);
                            if (result?.request.status == 200) {
                                router.push("/project");
                            }
                        }}
                    >
                        Button
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
