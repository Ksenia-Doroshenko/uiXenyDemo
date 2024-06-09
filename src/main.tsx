import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ThemeProvider} from "./components/ThemeProvider/ThemeProvider.tsx";
import {TTheme} from "./types/GeneralTypes";

// todo написать хорошую тему для демо проекта
const customTheme: TTheme = {
    name: 'yandex',
    mainColor: '#ffe500',
    activeColor: '#fff28b',
    shadowFloatColorActive: '#fff28b',
    boxShadowEventAround5px: '#ffe400',
    hoverColor: '#ffeb64',
    textColor: 'black',
    backgroundColorBody: 'white',
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider registeredThemes={[customTheme]}><App /> </ThemeProvider>

);
