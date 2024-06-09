import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ThemeProvider} from "./components/ThemeProvider/ThemeProvider.tsx";
import {defaultTheme} from "./components/ThemeProvider/default.theme.ts";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={defaultTheme}><App /> </ThemeProvider>

);
