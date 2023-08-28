import React from "react";
import { ChildrenProps } from "@/app/lib/types";
import FrontEndBootcampNav from "@/app/components/layout/FrontEndBootcampNav";
import chapters from "../../lib/chapters/chapters";

export async function generateStaticParams() {
    return chapters.map((chapter) => ({
        slug: chapter.chapterLink,
    }));
}

const Layout = ({ children }: ChildrenProps) => {
    return (
        <div className="flex justify-between relative bg-[#111]">
            <FrontEndBootcampNav />
            <div className="w-full  min-h-screen text-white">{children}</div>
        </div>
    );
};

export default Layout;
