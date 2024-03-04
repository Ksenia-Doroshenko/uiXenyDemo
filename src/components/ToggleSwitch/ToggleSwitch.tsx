import "./ToggleSwitch.css";
import {TInputProps} from "../../types/InputTypes";

type TCheckBoxTypes = "default";

export const ToggleSwitch = ({type = "default", sizeType = "medium", children, ...props}: TInputProps<TCheckBoxTypes>) => {
    let classNameArr = ["uiXeny-toggleSwitch"];

    switch (type) {

        default: {
            classNameArr.push("uiXeny-toggleSwitch--default");
            break;
        }
    }

    switch (sizeType) {
        case "small": {
            classNameArr.push("uiXeny-toggleSwitch--sizeSmall");
            break;
        }
        case "large": {
            classNameArr.push("uiXeny-toggleSwitch--sizeLarge");
            break;
        }
        default: {
            classNameArr.push("uiXeny-toggleSwitch--sizeMedium");
            break;
        }
    }

    props.className && classNameArr.push(props.className);

    return (
        <label className="uiXeny-toggleSwitch__label">
            <input type="checkbox" className="check-box" {...props}/>
            <span className={classNameArr.join(' ')}></span>
            <span className="uiXeny-toggleSwitch__text">{children}</span>
        </label>
    );
};