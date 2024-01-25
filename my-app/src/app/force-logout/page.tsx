"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const ForceLogout = () => {
    const router = useRouter();
    useEffect(() => {
        Cookies.remove("token");
        router.push("/login");
    }, []);

    return null;
};

export default ForceLogout;
