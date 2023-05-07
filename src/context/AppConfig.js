import React, { createContext, useState } from "react";

export const AppConfig = createContext();
export const AppProvider = ({ children }) => {
    const [noloaded, setnoloaded] = useState(0);
    const loaded = noloaded > 40;
    return (
        <AppConfig.Provider value={{ loaded, setnoloaded, noloaded }}>
            {" "}
            {children}{" "}
        </AppConfig.Provider>
    );
};
