"use client";

import chapters from "@/app/lib/chapters/chapters";
import { ChapterStructureType, ChapterType } from "@/app/lib/types";
import Link from "next/link";
import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
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

    const [isMenuOpen, setMenuOpen] = React.useState(true);

    return (
        <nav
            className={` ${
                isMenuOpen ? "min-w-[25vw] max-w-[25vw] overflow-y-scroll " : "min-w-[5vw] max-w-[5vw] overflow-y-auto "
            } transition-all duration-300 bg-[#0d0d0d] text-[#c6c6c6] min-h-screen  shadow-xl border-r-2 border-r-black flex flex-col  `}
        >
            <div className={`p-5 w-full h-full flex flex-col justify-start ${isMenuOpen ? " items-end" : " items-center"}`}>
                <button
                    className="w-[35px] h-[35px] flex flex-col justify-center items-center rounded-full bg-white text-black"
                    onClick={() => setMenuOpen((prevState) => !prevState)}
                    aria-controls="chaptersList"
                    aria-expanded={isMenuOpen}
                    aria-label={`${isMenuOpen ? "Close" : "Open"} sidebar menu`}
                >
                    {isMenuOpen ? <AiOutlineArrowLeft /> : <AiOutlineArrowRight />}
                </button>
            </div>
            <ol
                className={`flex flex-col w-full p-5 gap-3 text-sm transition-all delay-300 ${
                    isMenuOpen ? "opacity-100" : "opacity-0"
                }  `}
                id="chaptersList"
            >
                {isMenuOpen &&
                    chapters.map((chapter: ChapterStructureType, index: number) => (
                        <li
                            key={chapter.chapterLink}
                            className={`w-full grid grid-cols-5 gap-3 justify-start items-start relative`}
                        >
                            <Link
                                href={`/front-end-bootcamp/${chapter.chapterLink}`}
                                className={`link ${
                                    chapter.chapterLink === endPath ? "text-cyan-500 font-bold transition" : "text-white"
                                } hover:text-cyan-500 col-span-4`}
                                aria-label={`navigate to ${chapter.chapterTitle}`}
                            >
                                {index + 1}. {chapter.chapterTitle}
                            </Link>
                            <button
                                onClick={() => handleExpand(chapter.chapterLink)}
                                className="w-full flex justify-center items-center rounded-xl hover:bg-black hover:text-white transition py-2 mt-[-0.5rem]"
                                aria-expanded={chapter.chapterLink === expandedChapter}
                                aria-controls={chapter.chapterLink}
                                aria-label={chapter.chapterLink === expandedChapter ? "Close sub-menu" : "Open sub-menu"}
                            >
                                {chapter.chapterLink === expandedChapter ? <BsChevronUp /> : <BsChevronDown />}
                            </button>

                            <ol
                                className={`relative flex flex-col gap-3 pl-5 text-sm col-span-5 ${
                                    chapter.chapterLink === expandedChapter
                                        ? "py-3 pr-2 h-auto opacity-100 transition delay-100 "
                                        : "py-0 pr-0  h-0 opacity-0 "
                                }`}
                                id={chapter.chapterLink}
                            >
                                {chapter.chapters.map((topic: ChapterType, topicIndex: number) => (
                                    <li key={topic.link}>
                                        <Link
                                            href={`/front-end-bootcamp/${chapter.chapterLink}/${topic.link}`}
                                            className={`link hover:text-white ${
                                                pathname === `/front-end-bootcamp/${chapter.chapterLink}/${topic.link}`
                                                    ? "text-cyan-500 font-bold"
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
