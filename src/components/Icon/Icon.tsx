import React from "react";
import "./Icon.css"

type TIconProps = {
    className?: string;
    sizeType?: TSize;
    style?: React.CSSProperties;
    onClick?: (event: React.MouseEvent) => void;
};

type IconCmp = React.FC<TIconProps> & {
    TextFileOutlined: React.FC<TIconProps>;
    DownOutlined: React.FC<TIconProps>;
    UpOutlined: React.FC<TIconProps>;
    CloseOutlined: React.FC<TIconProps>;
};
export const Icon: IconCmp = ({sizeType = "medium", onClick, ...props}: TIconProps) => {
    let classNameArr = ["uiXeny-icon"];

    switch (sizeType) {
        case "small": {
            classNameArr.push("uiXeny-icon--sizeSmall");
            break;
        }
        case "large": {
            classNameArr.push("uiXeny-icon--sizeLarge");
            break;
        }
        default: {
            classNameArr.push("uiXeny-icon--sizeMedium");
            break;
        }
    }

    props.className && classNameArr.push(props.className);

    return (
        <div {...props} onClick={onClick} className={classNameArr.join(' ')}>
            {textFileOutlined}
        </div>
    )
}
const strokeColor = "#333";

const textFileOutlined = (
    <svg viewBox="0 0 26 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 10.6V33H25V1H11.8M1 10.6H11.8V1M1 10.6L11.8 1" stroke={strokeColor} strokeWidth="2"/>
        <path d="M7 18.0667H20.2" stroke={strokeColor} strokeWidth="2"/>
        <path d="M7 22.3333H17.8" stroke={strokeColor} strokeWidth="2"/>
    </svg>
)

const TextFileOutlined: React.FC<TIconProps> = ({sizeType = "medium", onClick, ...props}: TIconProps) => {
    let classNameArr = ["uiXeny-icon uiXeny-icon_TextFileOutlined"];
    props.className && classNameArr.push(props.className);

    switch (sizeType) {
        case "small": {
            classNameArr.push("uiXeny-icon--sizeSmall");
            break;
        }
        case "large": {
            classNameArr.push("uiXeny-icon--sizeLarge");
            break;
        }
        default: {
            classNameArr.push("uiXeny-icon--sizeMedium");
            break;
        }
    }

    return (
        <div {...props} onClick={onClick} className={classNameArr.join(' ')}>
            {textFileOutlined}
        </div>
    )
}


const downOutlined = (
    <svg viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 1L11.5 12L1 1" stroke={strokeColor} strokeWidth="2"/>
    </svg>
)

const DownOutlined: React.FC<TIconProps> = ({sizeType = "medium", onClick, ...props}: TIconProps) => {
    let classNameArr = ["uiXeny-icon uiXeny-icon_DownOutlined"];

    switch (sizeType) {
        case "small": {
            classNameArr.push("uiXeny-icon--sizeSmall");
            break;
        }
        case "large": {
            classNameArr.push("uiXeny-icon--sizeLarge");
            break;
        }
        default: {
            classNameArr.push("uiXeny-icon--sizeMedium");
            break;
        }
    }

    props.className && classNameArr.push(props.className);

    return (
        <div {...props} onClick={onClick} className={classNameArr.join(' ')}>
            {downOutlined}
        </div>
    )
}

const upOutlined = (
    <svg viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 13L11.5 2L1 13" stroke={strokeColor} strokeWidth="2"/>
    </svg>
)
const UpOutlined: React.FC<TIconProps> = ({sizeType = "medium", onClick, ...props}: TIconProps) => {
    let classNameArr = ["uiXeny-icon uiXeny-icon_UpOutlined"];

    switch (sizeType) {
        case "small": {
            classNameArr.push("uiXeny-icon--sizeSmall");
            break;
        }
        case "large": {
            classNameArr.push("uiXeny-icon--sizeLarge");
            break;
        }
        default: {
            classNameArr.push("uiXeny-icon--sizeMedium");
            break;
        }
    }

    props.className && classNameArr.push(props.className);

    return (
        <div {...props} onClick={onClick} className={classNameArr.join(' ')}>
            {upOutlined}
        </div>
    )
}

const closeOutlined = (
    <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 33L33 1.51837" stroke={strokeColor} strokeWidth="3"/>
        <path d="M1.00004 1.00003L17 16.7408L33 32.4817" stroke={strokeColor} strokeWidth="3"/>
    </svg>
)

const CloseOutlined: React.FC<TIconProps> = ({sizeType = "medium", onClick, ...props}: TIconProps) => {
    let classNameArr = ["uiXeny-icon uiXeny-icon_CloseOutlined"];

    switch (sizeType) {
        case "small": {
            classNameArr.push("uiXeny-icon--sizeSmall");
            break;
        }
        case "large": {
            classNameArr.push("uiXeny-icon--sizeLarge");
            break;
        }
        default: {
            classNameArr.push("uiXeny-icon--sizeMedium");
            break;
        }
    }

    props.className && classNameArr.push(props.className);

    console.log(classNameArr);
    console.log(classNameArr.join(' '));

    return (
        <div {...props} onClick={onClick} className={classNameArr.join(' ')} >
            {closeOutlined}
        </div>
    )
}

Icon.TextFileOutlined = TextFileOutlined;
Icon.DownOutlined = DownOutlined;
Icon.UpOutlined = UpOutlined;
Icon.CloseOutlined = CloseOutlined;

export default Icon;