import {useContext} from "react";
import {ThemeContext} from "../components/ThemeProvider/ThemeProvider";

export const useTheme = () => useContext(ThemeContext);
