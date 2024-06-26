import React from 'react';
import {TTheme} from "../../types/GeneralTypes";
import {darkTheme} from "./dark.theme";
import {defaultTheme} from "./default.theme";

interface ThemeContextType {
    currentTheme: TTheme;
    changeTheme: (theme: string) => void;
}

const defaultThemeContext: ThemeContextType = {
    currentTheme: defaultTheme,
    changeTheme: () => {
    },
};

export const ThemeContext = React.createContext<ThemeContextType>(defaultThemeContext);

export function ThemeProvider({children, initialTheme = defaultTheme, registeredThemes = []}: {
    children: React.ReactNode,
    initialTheme?: TTheme,
    registeredThemes?: TTheme[]
}) {
    registeredThemes.push(darkTheme);
    registeredThemes.push(defaultTheme);
    const [currentTheme, setCurrentTheme] = React.useState(initialTheme);

    const changeTheme = (themeName: string) => {
        registeredThemes.forEach(theme => {
            if (theme.name === themeName) {
                setCurrentTheme(Object.assign(theme));
            }
        });
    }

    React.useEffect(() => {
        const savedTheme = localStorage.getItem('uiXeny-theme-name');
        if (savedTheme){
            setCurrentTheme(registeredThemes.find(theme => theme.name === savedTheme) || defaultTheme);
        }
    }, []);

    React.useEffect(() => {
        function updateThemeVariables(theme: TTheme) {
            const root = document.documentElement;
            for (const [key, value] of Object.entries(theme)) {
                root.style.setProperty(convertToCssVariable(key), value);
            }
        }

        localStorage.setItem('uiXeny-theme-name', currentTheme.name);

        updateThemeVariables(currentTheme);
    }, [currentTheme]);

    function convertToCssVariable(str: string) {
        return '--uiXeny-' + str
            .replace(/([A-Z0-9])/g, '-$1')
            .toLowerCase();
    }

    return (
        <ThemeContext.Provider value={{currentTheme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}