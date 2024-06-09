import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {TTheme} from "../../types/GeneralTypes";

interface ThemeContextType {
    themeName: string;
    setThemeName: (theme: string) => void;
}

const defaultThemeContext: ThemeContextType = {
    themeName: 'default',
    setThemeName: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

export function ThemeProvider({ children, theme }: { children: ReactNode, theme: TTheme }) {
    const [themeName, setThemeName] = useState(theme.name);

    useEffect(() => {
        localStorage.setItem('uiXeny-theme-name', themeName);
    }, [themeName]);

    useEffect(() => {
        function updateThemeVariables(theme: TTheme) {
            const root = document.documentElement;

            for (const [key, value] of Object.entries(theme)) {
                console.log(`${convertToCssVariable(key)}: ${value}`);
                    root.style.setProperty(convertToCssVariable(key), value);

            }
        }


        updateThemeVariables(theme);
    }, [theme]);

    function convertToCssVariable(str: string) {
        return '--uiXeny-' + str
            .replace(/([A-Z0-9])/g, '-$1')
            .toLowerCase();
    }

    return (
        <ThemeContext.Provider value={{ themeName, setThemeName }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Пример использования хука для использования контекста темы
export const useTheme = () => useContext(ThemeContext);
