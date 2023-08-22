import MarkdownRenderer from "@/app/lib/MarkdownRenderer";
import React from "react";

const Ateliere = () => {
    return (
        <div className="p-10">
            <li>Landing ateliere</li>
            <li>Lista ateliere cu linkuri</li>

            <MarkdownRenderer filePath="/md/TestMd.md" />
        </div>
    );
};

export default Ateliere;
