import "./Input.css";
import {TInputProps} from "../../types/InputTypes";

type TInputTypes = "basicInput" | "flyInput"| "underlined";

export const Input = ({type = "basicInput", sizeType = "medium", children, ...props} : TInputProps<TInputTypes>) => {
  let classNameArr = ["uiXeny-input"];

  switch (type) {
    case "flyInput": {
      classNameArr.push("uiXeny-input--flyInput");
      break;
    }

    case "underlined": {
      classNameArr.push("uiXeny-input--underlined");
      break;
    }

    default: {
      classNameArr.push("uiXeny-input--basicInput");
      break;
    }
  }

  switch (sizeType) {
    case "small": {
      classNameArr.push("uiXeny-input--sizeSmall");
      break;
    }
    case "large": {
      classNameArr.push("uiXeny-input--sizeLarge");
      break;
    }
    default: {
      classNameArr.push("uiXeny-input--sizeMedium");
      break;
    }
  }

  props.className && classNameArr.push(props.className);

  return (
      <input className={classNameArr.join(' ')} type="text" {...props}/>
  )
}
