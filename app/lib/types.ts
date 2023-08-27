import React from "react";

export type TNavData = {
    text: string;
    link: string;
    icon?: React.ReactNode;
};

export type AppContextType = {
    isMobileWidth: boolean;
    windowWidth: number;
};

export type ChildrenProps = {
    children: React.ReactNode;
};

export type MarkdownRendererProps = {
    filePath: string;
};

export type ChapterType = {
    title: string;
    link: string;
    component?: React.ReactNode;
};

export type ChapterStructureType = {
    chapterTitle: string;
    chapterLink: string;
    chapterImage: string;
    chapters: ChapterType[];
};
