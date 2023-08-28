"use client";
import { useAppContext } from "@/app/contexts/AppContext";
import { TNavData } from "@/app/lib/types";
import Link from "next/link";
import React from "react";

export const navData: TNavData[] = [
    { text: "Home", link: "/", icon: "" },
    { text: "Ateliere", link: "/ateliere", icon: "" },
    { text: "Front-end Bootcamp", link: "/front-end-bootcamp", icon: "" },
    { text: "Despre noi", link: "/despre-noi", icon: "" },
    { text: "Contact", link: "/contact", icon: "" },
];

const Nav = () => {
    const { isMobileWidth } = useAppContext();

    return (
        <nav className="fixed top-0 left-0 z-[99] w-full bg-black text-white h-[2.5rem] flex justify-between items-center">
            <ul className="w-full flex justify-start items-center h-full">
                {navData.map((e: TNavData, i: number) => (
                    <li key={e.text} className={`${i === 0 ? "mr-auto" : ""}`}>
                        <Link href={e.link} className="p-2">
                            {e.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
