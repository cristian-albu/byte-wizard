"use client";
import React from "react";
import useResponsive from "../hooks/useResponsive";
import { ChildrenProps, AppContextType } from "../lib/types";

const AppContext = React.createContext<AppContextType | undefined>(undefined);

export const useAppContext = (): AppContextType => {
    const context = React.useContext(AppContext);

    if (!context) {
        throw new Error("useAppContext must be used within a AppContextProvider");
    }

    return context;
};

export const AppContextProvider: React.FC<ChildrenProps> = ({ children }) => {
    const { isMobileWidth, windowWidth } = useResponsive();
    const data = { isMobileWidth, windowWidth };

    return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};
