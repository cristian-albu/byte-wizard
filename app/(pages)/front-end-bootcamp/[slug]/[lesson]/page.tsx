import React from "react";
import { chapterObject } from "../../../../lib/chapters/chapters";
import { ChapterType } from "@/app/lib/types";
import { notFound } from "next/navigation";

export async function generateStaticParams({ params: { slug } }: { params: { slug: string } }) {
    return chapterObject[slug].chapters.map((lesson: ChapterType) => ({
        lesson: lesson.link,
    }));
}

const Lesson = ({ params }: { params: { slug: string; lesson: string } }) => {
    const currentLessonData = chapterObject[params.slug].chapters.find(
        (lesson: ChapterType) => lesson.link === params.lesson
    );
    if (!currentLessonData) notFound();
    return (
        <main className="p-10 pr-20 w-full">
            <div>
                <p>{chapterObject[params.slug].chapterTitle}</p>
                <h1 className="text-4xl my-5">{currentLessonData.title}</h1>
                <p>{currentLessonData.description}</p>
            </div>
            <div>{currentLessonData.component}</div>
        </main>
    );
};

export default Lesson;
