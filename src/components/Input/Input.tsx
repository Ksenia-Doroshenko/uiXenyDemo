import "./Input.css";
import "./Password.css";
import {TInputProps} from "../../types/InputTypes";
import React, {useState} from "react";

type TInputTypes = "basicInput" | "flyInput" | "underlined";
type InputCmp = React.FC<TInputProps<TInputTypes>> & {
    Password: React.FC<TInputProps<TInputTypes>>;
    Tel: React.FC<TInputProps<TInputTypes>>;
};
export const Input: InputCmp = ({
                                    type = "basicInput",
                                    sizeType = "medium",
                                    ...props
                                }: TInputProps<TInputTypes>) => {
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

const openedEye = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 411 226\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M388 113L403.917 123.375L410.68 113L403.917 102.625L388 113ZM23 113C6.92491 102.871 6.92975 102.864 6.93482 102.856L6.94612 102.838L6.9729 102.795L7.04323 102.685C7.09756 102.6 7.1668 102.493 7.25097 102.364C7.41929 102.105 7.64742 101.759 7.9355 101.331C8.51153 100.476 9.32807 99.2927 10.3864 97.8289C12.5018 94.9029 15.5911 90.8447 19.6652 86.0338C27.7996 76.4282 39.9447 63.722 56.2001 51.026C88.7794 25.5804 138.15 0 204.478 0C270.78 0 320.62 25.5606 353.655 50.9311C370.148 63.5973 382.539 76.2729 390.86 85.853C395.028 90.6511 398.196 94.6972 400.367 97.6123C401.453 99.0707 402.291 100.249 402.883 101.099C403.178 101.524 403.412 101.868 403.585 102.124C403.641 102.208 403.691 102.283 403.735 102.348C403.757 102.382 403.778 102.413 403.797 102.442L403.868 102.55L403.896 102.592L403.907 102.609C403.912 102.617 403.917 102.625 388 113C388 113 326.727 19 204.478 19C82.2285 19 23 113 23 113ZM23 113L6.92491 102.871L0.542877 113L6.92491 123.129L23 113ZM23 113C6.92491 123.129 6.92975 123.136 6.93482 123.144L6.94612 123.162L6.9729 123.205L7.04323 123.315C7.09756 123.4 7.1668 123.507 7.25097 123.636C7.41929 123.895 7.64742 124.241 7.9355 124.669C8.51153 125.524 9.32807 126.707 10.3864 128.171C12.5018 131.097 15.5911 135.155 19.6652 139.966C27.7996 149.572 39.9447 162.278 56.2001 174.974C88.7794 200.42 138.15 226 204.478 226C270.78 226 320.62 200.439 353.655 175.069C370.148 162.403 382.539 149.727 390.86 140.147C395.028 135.349 398.196 131.303 400.367 128.388C401.453 126.929 402.291 125.751 402.883 124.901C403.178 124.476 403.412 124.132 403.585 123.876C403.671 123.748 403.742 123.642 403.797 123.558L403.868 123.45L403.896 123.408L403.907 123.391C403.912 123.383 403.917 123.375 388 113C388 113 326.727 207 204.478 207C82.2285 207 23 113 23 113ZM205.5 193C249.407 193 285 157.407 285 113.5C285 69.5934 249.407 34 205.5 34C161.593 34 126 69.5934 126 113.5C126 157.407 161.593 193 205.5 193ZM266 113.5C266 146.913 238.913 174 205.5 174C172.087 174 145 146.913 145 113.5C145 80.0868 172.087 53 205.5 53C238.913 53 266 80.0868 266 113.5Z\" fill=\"black\"/>\n" +
    "</svg>";

const closedEye = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 382 150\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "<path d=\"M374 6C374 6 312.727 100 190.478 100C68.2285 100 9 6 9 6\" stroke=\"black\" stroke-width=\"19\"/>\n" +
    "<line x1=\"52.6537\" y1=\"58.6277\" x2=\"27.6537\" y2=\"92.6277\" stroke=\"black\" stroke-width=\"19\"/>\n" +
    "<line x1=\"333.305\" y1=\"58.9264\" x2=\"360.286\" y2=\"91.3767\" stroke=\"black\" stroke-width=\"19\"/>\n" +
    "<line x1=\"192.497\" y1=\"106.757\" x2=\"193.576\" y2=\"148.945\" stroke=\"black\" stroke-width=\"19\"/>\n" +
    "<line x1=\"271.435\" y1=\"92.6287\" x2=\"290.853\" y2=\"130.098\" stroke=\"black\" stroke-width=\"19\"/>\n" +
    "<line x1=\"113.251\" y1=\"92.4683\" x2=\"97.8442\" y2=\"131.757\" stroke=\"black\" stroke-width=\"19\"/>\n" +
    "</svg>"

const Password: React.FC<TInputProps<TInputTypes>> = ({
                                                          type = "basicInput",
                                                          sizeType = "medium",
                                                          ...props
                                                      }: TInputProps<TInputTypes>) => {
    const [isTextShowed, setIsTextShowed] = useState(false);
    let classNameArr = ["uiXeny-password uiXeny-input"];
    props.className && classNameArr.push(props.className);

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

    return (
        <div className="uiXeny-password__container">
            <input type={isTextShowed ? "text" : "password"} className={classNameArr.join(' ')} {...props}/>
            <button className="uiXeny-password_show_button"
                    dangerouslySetInnerHTML={{__html: isTextShowed ? openedEye : closedEye}}
                    onClick={() => setIsTextShowed(!isTextShowed)}></button>
        </div>
    )
};

const Tel: React.FC<TInputProps<TInputTypes>> = ({
                                                     type = "basicInput",
                                                     sizeType = "medium",
                                                     ...props
                                                 }: TInputProps<TInputTypes>) => {
    let classNameArr = ["uiXeny-tel uiXeny-input"];
    props.className && classNameArr.push(props.className);

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

    const getInputNumbersValue = function (input: any) {
        // Return stripped input value — just numbers
        return input.value.replace(/\D/g, '');
    };

    const onPhonePaste = function (e: any) {
        const input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        const pasted = e.clipboardData || (window as any).clipboardData;
        if (pasted) {
            const pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
                // formatting will be in onPhoneInput handler
                input.value = inputNumbersValue;
                return;
            }
        }
    };

    const onPhoneInput = function (e: any) {
        let input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length !== selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
                // Attempt to input non-numeric symbol
                input.value = inputNumbersValue;
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] === "9") inputNumbersValue = "7" + inputNumbersValue;
            const firstSymbols = (inputNumbersValue[0] === "8") ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    };
    const onPhoneKeyDown = function (e: any) {
        // Clear input after remove last symbol
        const inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode === 8 && inputValue.length === 1) {
            e.target.value = "";
        }
    };

    return (
        <div>
            <input onInput={onPhoneInput} onKeyDown={onPhoneKeyDown} onPaste={onPhonePaste}
                   className={classNameArr.join(' ')} type="tel" id="input_mask"
                   placeholder="+7 (xxx) xxx-xx-xx" {...props}/>
        </div>
    )
}

Input.Password = Password;
Input.Tel = Tel;

export default Input;