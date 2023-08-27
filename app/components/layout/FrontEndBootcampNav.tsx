"use client";

import chapters from "@/app/lib/chapters/chapters";
import { ChapterStructureType, ChapterType } from "@/app/lib/types";
import Link from "next/link";
import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { usePathname } from "next/navigation";

const FrontEndBootcampNav = () => {
    const pathname = usePathname();
    const endPath = pathname.split("/")[2]; // after ../front-end-bootcamp/;
    const [expandedChapter, setExpandedChapter] = React.useState(endPath);
    const handleExpand = (id: string) => {
        if (expandedChapter === id) {
            setExpandedChapter("");
        } else {
            setExpandedChapter(id);
        }
    };

    return (
        <nav className="fixed top-[2.4rem] left-0 w-[25%] bg-gray-100 h-screen overflow-scroll shadow-xl border-r-2 border-r-gray-300">
            <ol className="flex flex-col w-full p-5 gap-3 text-sm">
                {chapters.map((chapter: ChapterStructureType, index: number) => (
                    <li
                        key={chapter.chapterLink}
                        className="w-full grid grid-cols-5 gap-3 justify-start items-start relative"
                    >
                        <Link
                            href={`/front-end-bootcamp/${chapter.chapterLink}`}
                            className="link col-span-4"
                            aria-label={`navigate to ${chapter.chapterTitle}`}
                        >
                            {index + 1}. {chapter.chapterTitle}
                        </Link>
                        <button
                            onClick={() => handleExpand(chapter.chapterLink)}
                            className="w-full flex justify-center items-center rounded-xl hover:bg-black hover:text-white transition py-2"
                            aria-expanded={chapter.chapterLink === expandedChapter}
                            aria-controls={chapter.chapterLink}
                            aria-label={chapter.chapterLink === expandedChapter ? "Close sub-menu" : "Open sub-menu"}
                        >
                            {chapter.chapterLink === expandedChapter ? <BsChevronUp /> : <BsChevronDown />}
                        </button>

                        <ol
                            className={`relative flex flex-col gap-3 pl-5 text-sm col-span-5 ${
                                chapter.chapterLink === expandedChapter
                                    ? "py-3 pr-2 h-auto opacity-100 transition delay-[50]"
                                    : "py-0 pr-0  h-0 opacity-0 "
                            }`}
                            id={chapter.chapterLink}
                        >
                            {chapter.chapters.map((topic: ChapterType, topicIndex: number) => (
                                <li key={topic.link}>
                                    <Link
                                        href={`/front-end-bootcamp/${chapter.chapterLink}/${topic.link}`}
                                        className={`link ${
                                            pathname === `/front-end-bootcamp/${chapter.chapterLink}/${topic.link}`
                                                ? "text-blue-600 font-bold"
                                                : ""
                                        }`}
                                        aria-label={`Navigate to ${topic.link}`}
                                    >
                                        {index + 1}.{topicIndex + 1}. {topic.title}
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default FrontEndBootcampNav;
