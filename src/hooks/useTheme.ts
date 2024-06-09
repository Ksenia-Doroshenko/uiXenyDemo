import {useContext} from "react";
import {ThemeContext} from "../components/ThemeProvider/ThemeProvider.tsx";

export const useTheme = () => useContext(ThemeContext);
