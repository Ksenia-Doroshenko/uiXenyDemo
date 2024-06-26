import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {TSize} from "../GeneralTypes";

export type TInputProps<T> = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    typeStyle?: T;
    sizeType?: TSize;
};