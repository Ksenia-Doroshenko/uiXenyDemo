import React from "react";
import "./Button.css";

type TButtonTypes = "default" | "primary" | "link" | "submit";

type TButtonProps = {
  type?: TButtonTypes;
  children: React.ReactElement | string;
  className?: string;
  sizeType?: TSize;
};

export const Button = ({type = "default", sizeType = "medium", children, ...props} : TButtonProps) => {
  let classNameArr = ["uiXeny-button"];

  switch (type) {
    case "primary": {
      classNameArr.push("uiXeny-button--primary");
      break;
    }
    case "link": {
      classNameArr.push("uiXeny-button--link");
      break;
    }
    case "submit": {
      classNameArr.push("uiXeny-button--submit");
      break;
    }
    default: {
      classNameArr.push("uiXeny-button--default");
      break;
    }
  }

  switch (sizeType) {
    case "small": {
      classNameArr.push("uiXeny-button--sizeSmall");
      break;
    }
    case "large": {
      classNameArr.push("uiXeny-button--sizeLarge");
      break;
    }
    default: {
      classNameArr.push("uiXeny-button--sizeMedium");
      break;
    }
  }

  props.className && classNameArr.push(props.className);

  return React.createElement("button", {...props, className: classNameArr.join(' ')}, children);
};
