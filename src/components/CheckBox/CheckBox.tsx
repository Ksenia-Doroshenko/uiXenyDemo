import "./CheckBox.css";
import {TInputProps} from "../../types/InputTypes";

type TCheckBoxTypes = "default" | "checkmark" | "checkmark--filled" | "favoriteIcon" | "bookmarkIcon";

export const CheckBox = ({type = "default", sizeType = "medium", children, ...props}: TInputProps<TCheckBoxTypes>) => {
    const classNameArr = ["uiXeny-checkBox"];

    switch (type) {
        case "checkmark": {
            classNameArr.push("uiXeny-checkBox--checkmark");
            break;
        }

        case "checkmark--filled": {
            classNameArr.push("uiXeny-checkBox--checkmark--filled");
            break;
        }

        case "favoriteIcon": {
            classNameArr.push("uiXeny-checkBox--favoriteIcon");
            break;
        }

        case "bookmarkIcon": {
            classNameArr.push("uiXeny-checkBox--bookmarkIcon");
            break;
        }

        default: {
            classNameArr.push("uiXeny-checkBox--default");
            break;
        }
    }

    switch (sizeType) {
        case "small": {
            classNameArr.push("uiXeny-checkBox--sizeSmall");
            break;
        }
        case "large": {
            classNameArr.push("uiXeny-checkBox--sizeLarge");
            break;
        }
        default: {
            classNameArr.push("uiXeny-checkBox--sizeMedium");
            break;
        }
    }

    props.className && classNameArr.push(props.className);

    return (
        <label>
            <input type="checkbox" className="check-box" {...props}/>
            <span className={classNameArr.join(' ')}></span>
            <span className="uiXeny-checkBox__label">{children}</span>
        </label>
    );
};
