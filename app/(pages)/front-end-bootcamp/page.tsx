import Link from "next/link";
import React from "react";
import chapters from "./chapters";

const FrontEndBootCamp = () => {
    return (
        <div className="p-20">
            <h1 className="text-5xl mb-5">Front end bootcamp</h1>
            <div className=" grid grid-cols-1">
                {Object.entries(chapters).map((topic: [string, string[]], index: number) => (
                    <ol key={topic[0]} className="list-decimal list-inside mb-5">
                        {displayMonths(index)}
                        <h2 className="text-2xl mb-5">{topic[0]}</h2>
                        {topic[1].map((e: string) => (
                            <li key={e} className="">
                                <Link href={`/front-end-bootcamp/`} className="link">
                                    {e}
                                </Link>
                            </li>
                        ))}
                    </ol>
                ))}
            </div>
        </div>
    );
};

export default FrontEndBootCamp;

const displayMonths = (index: number) => {
    switch (index) {
        case 0:
            return "Month 1";
        case 5:
            return "Month 2";
        case 9:
            return "Month 3";
        case 17:
            return "Month 4";
        case 20:
            return "Month 5";
        case 26:
            return "Month 6";
        default:
            return "";
    }
};
