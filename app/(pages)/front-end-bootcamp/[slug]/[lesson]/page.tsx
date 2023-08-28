import React from "react";
import chapters, { chapterObject } from "@/app/lib/chapters/chapters";
import { ChapterType, Params } from "@/app/lib/types";
import { notFound } from "next/navigation";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import { getNextLessonLink, getPreviousLessonLink } from "@/app/lib/lessonNavigation/lessonNavigation";

export async function generateStaticParams({ params: { slug } }: { params: { slug: string } }) {
    return chapterObject[slug].chapters.map((lesson: ChapterType) => ({
        lesson: lesson.link,
    }));
}

const Lesson = ({ params }: { params: Params }) => {
    const currentLessonData = chapterObject[params.slug].chapters.find(
        (lesson: ChapterType) => lesson.link === params.lesson
    );
    if (!currentLessonData) notFound();

    const prevLessonLink = getPreviousLessonLink(params);
    const nextLessonLink = getNextLessonLink(params);
    return (
        <main className="p-10 pr-20 w-full">
            <div>
                <p>{chapterObject[params.slug].chapterTitle}</p>
                <h1 className="text-4xl my-5">{currentLessonData.title}</h1>
                <p>{currentLessonData.description}</p>
            </div>
            <div>{currentLessonData.component}</div>
            <div className="w-full flex justify-between items-center pt-10 border-t-2 border-t-black mt-10">
                {prevLessonLink && (
                    <Link className="btnPrimary" href={prevLessonLink}>
                        <AiOutlineArrowLeft />
                        Previous lesson
                    </Link>
                )}
                {nextLessonLink && (
                    <Link className="btnPrimary" href={nextLessonLink}>
                        <AiOutlineArrowRight />
                        Next lesson
                    </Link>
                )}
            </div>
        </main>
    );
};

export default Lesson;
