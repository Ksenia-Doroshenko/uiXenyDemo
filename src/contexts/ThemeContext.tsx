import React, {createContext, useContext, useState} from 'react';

// Интерфейс контекста темы
interface ThemeContextInterface {
    theme: string;
    setTheme: (theme: string) => void;
}

// Создание контекста темы
const ThemeContext = createContext<ThemeContextInterface | undefined>(undefined);

// Провайдер темы, оборачивает все компоненты, которым нужен доступ к теме
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<string>('light');

    // Функция для изменения темы
    const changeTheme = (newTheme: string) => {
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Хук для использования темы в компонентах
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};