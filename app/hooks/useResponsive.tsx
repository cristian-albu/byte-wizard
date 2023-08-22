"use client";
import React from "react";

const MOBILE_WIDTH_THRESHOLD = 700;

const useResponsive = () => {
    let initWidth: number;

    const isClient = typeof window !== "undefined" || typeof document !== "undefined";

    if (isClient) {
        initWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    } else {
        initWidth = MOBILE_WIDTH_THRESHOLD;
    }
    const [windowWidth, setWidth] = React.useState(initWidth);

    const handleResize = () => {
        if (isClient) {
            setWidth(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
        }
    };
    React.useEffect(() => {
        if (isClient) {
            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    let isMobileWidth = windowWidth < MOBILE_WIDTH_THRESHOLD;
    return { isMobileWidth, windowWidth };
};

export default useResponsive;
