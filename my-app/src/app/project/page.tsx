"use client";

import { CiBoxList } from "react-icons/ci";
import { Button } from "rizzui";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const ListProject = () => {
    const router = useRouter();
    return (
        <div className="justify-center items-center flex w-full mt-[10%]">
            <div className="border border-double rounded-lg bg-gray-100 px-52 py-32 mt-10">
                <Button
                    className="flex justify-center items-center gap-2 rounded-lg p-2 bg-indigo-500 text-white"
                    variant="flat"
                    onClick={async () => {
                        const getToken = Cookies.get("token");
                        router.push(
                            `${process.env
                                .NEXT_PUBLIC_APP2_BASE_URL!}/?token=${getToken}`
                        );

                        console.log("HELLO");
                    }}
                >
                    <CiBoxList strokeWidth="2" className="h-6 w-6 ml-2" />
                    <span>View Project</span>
                </Button>
            </div>
        </div>
    );
};

export default ListProject;
