import React from "react";
import { notFound } from "next/navigation";
import chapters from "../chapters";
import { ChapterStructureType } from "@/app/lib/types";

const Chapter = ({ params }: { params: { slug: string } }) => {
    if (!chapters.find((chapter: ChapterStructureType) => chapter.chapterLink === params.slug)) notFound();
    return <div>{params.slug}</div>;
};

export default Chapter;
