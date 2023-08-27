import React from "react";
import { chapterObject } from "../../chapters";
import { ChapterType } from "@/app/lib/types";
import { notFound } from "next/navigation";

export async function generateStaticParams({ params: { slug } }: { params: { slug: string } }) {
    return chapterObject[slug].chapters.map((lesson: ChapterType) => ({
        lesson: lesson.link,
    }));
}

const Lesson = ({ params }: { params: { slug: string; lesson: string } }) => {
    if (!chapterObject[params.slug].chapters.find((lesson: ChapterType) => lesson.link === params.lesson)) notFound();
    return <div>page</div>;
};

export default Lesson;
