import "./TextArea.css";
import React, {ChangeEvent, DetailedHTMLProps, TextareaHTMLAttributes, useRef, useState} from "react";

type TTextAreaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
    className?: string;
}

export const TextArea = ({children, ...props}: TTextAreaProps) => {
    let classNameArr = ["uiXeny-textArea uiXeny-input uiXeny-input--basicInput"];

    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [textAreaLen, setTextAreaLen] = useState<number | undefined>(0);
    props.className && classNameArr.push(props.className);
    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange?.(event);
        setTextAreaLen(textAreaRef.current?.textLength);
    }

    const counter = (
        <div className="uiXeny-textArea__container__counter">
            <span> {textAreaLen}/{props.maxLength}</span>
        </div>
    )

    return (
        <>
            <div className="uiXeny-textArea__container">
                <textarea className={classNameArr.join(' ')} ref={textAreaRef} {...props}
                          onChange={onChange}></textarea>
                {props.maxLength && counter}
            </div>
        </>
    )
}

