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
