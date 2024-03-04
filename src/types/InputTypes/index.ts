import {DetailedHTMLProps, InputHTMLAttributes} from "react";

export type TInputProps<T> = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    type?: T;
    sizeType?: TSize;
};