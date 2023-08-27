import React from "react";
import chapters from "../chapters";

const testmap = ["page1", "page2"];

export const dynamicParams = false;

export async function generateStaticParams() {
    return testmap.map((slug) => ({
        slug,
    }));
}

const Chapter = ({ params }: { params: { slug: string } }) => {
    return <div>{params.slug}</div>;
};

export default Chapter;
