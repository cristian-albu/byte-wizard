"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MarkdownRendererProps } from "./types";

const modifiedOkaidia = { ...okaidia };
modifiedOkaidia[`pre[class*="language-"]`].background = "#0d0d0d";

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ filePath }) => {
    const [markdown, setMarkdown] = React.useState("");

    React.useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                const response = await fetch(filePath);
                const text = await response.text();
                setMarkdown(text);
            } catch (error) {
                console.error("Error loading Markdown file:", error);
            }
        };

        fetchMarkdown();
    }, [filePath]);

    return (
        <ReactMarkdown
            components={{
                p: ({ node, ...props }) => <p className="my-5" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-2xl mt-10 mb-5" {...props} />,
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                        <SyntaxHighlighter {...props} style={modifiedOkaidia} language={match[1]} PreTag="div">
                            {String(children).replace(/\n$/, "")}
                        </SyntaxHighlighter>
                    ) : (
                        <code {...props} className={className}>
                            {children}
                        </code>
                    );
                },
            }}
        >
            {markdown}
        </ReactMarkdown>
    );
};

export default MarkdownRenderer;
