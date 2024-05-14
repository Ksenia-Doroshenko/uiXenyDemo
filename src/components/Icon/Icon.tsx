import React from "react";
import "./Icon.css"

type TIconProps = {
    className?: string;
    sizeType?: TSize;
    style?: React.CSSProperties;
};

type IconCmp = React.FC<TIconProps> & {
    TextFileOutlined: React.FC<TIconProps>;
    DownOutlined: React.FC<TIconProps>;
};
export const Icon: IconCmp = ({sizeType = "medium", ...props}: TIconProps) => {
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
        <div className={classNameArr.join(' ')} {...props}>
            <symbol>
                <svg viewBox="0 0 26 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 10.6V33H25V1H11.8M1 10.6H11.8V1M1 10.6L11.8 1" stroke="black" stroke-width="2"/>
                    <path d="M7 18.0667H20.2" stroke="black" stroke-width="2"/>
                    <path d="M7 22.3333H17.8" stroke="black" stroke-width="2"/>
                </svg>
            </symbol>
        </div>
    )
}

const TextFileOutlined: React.FC<TIconProps> = ({sizeType = "medium", ...props}: TIconProps) => {
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
        <div className={classNameArr.join(' ')} {...props}>
            <symbol>
                <svg viewBox="0 0 26 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 10.6V33H25V1H11.8M1 10.6H11.8V1M1 10.6L11.8 1" stroke="black" stroke-width="2"/>
                    <path d="M7 18.0667H20.2" stroke="black" stroke-width="2"/>
                    <path d="M7 22.3333H17.8" stroke="black" stroke-width="2"/>
                </svg>
            </symbol>
        </div>
    )
}

const DownOutlined: React.FC<TIconProps> = ({sizeType = "medium", ...props}: TIconProps) => {
    let classNameArr = ["uiXeny-icon uiXeny-icon_DownOutlined"];
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

    const strokeColor = "#333";
    return (
        <div className={classNameArr.join(' ')} {...props}>
            <svg viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 1L11.5 12L1 1" stroke={strokeColor} stroke-width="2"/>
            </svg>
        </div>
    )
}

Icon.TextFileOutlined = TextFileOutlined;
Icon.DownOutlined = DownOutlined;

export default Icon;