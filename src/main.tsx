import ReactDOM from 'react-dom/client'
import App from './App'
import {ThemeProvider} from "./components/ThemeProvider/ThemeProvider";
import {TTheme} from "./types/GeneralTypes";
import React from "react";

// todo написать хорошую тему для демо проекта
const customTheme: TTheme = {
    name: 'gravity_UI',
    mainColor: '#ffe500',
    activeColor: '#fff28b',
    shadowFloatColorActive: '#fff28b',
    boxShadowEventAround5px: '#ffe400',
    hoverColor: '#ffeb64',
    textColor: 'black',
    backgroundColorBody: 'white',
    borderRadius: '1px'
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider registeredThemes={[customTheme]}><App/> </ThemeProvider>
);
