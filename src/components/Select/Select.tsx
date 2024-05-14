// type TSelectTypes = "default" | "" | "" | "" | "";

import React, {useEffect, useRef, useState} from "react";
import "./Select.css";
import Icon from "../Icon/Icon";

type TSelectProps = {
    children?: React.ReactElement | string;
    className?: string;
    sizeType?: TSize;
    options: OptionType[];
    placeholder?: string;
    style?: React.CSSProperties;
    onChange?: (event: string | number) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    multipleSelect?: boolean;
    defaultValue?: string | string[] | number | number[];
};

type OptionType = {
    value: string | number;
    label: string | number;
    disabled?: boolean;
};

export const Select: React.FC<TSelectProps> = ({sizeType = "medium", children, onChange, onFocus, onBlur, ...props}: TSelectProps) => {
    let classNameArr = ["uiXeny-select"];

    const [isActive, setIsActive] = useState(false);
    // const [isFocused, setIsFocused] = useState(false);
    const [selected, setSelected] = useState<OptionType | null>(null);
    const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);

    const selectorRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const [menuPosition, setMenuPosition] = useState<'top' | 'bottom' | undefined>(undefined);

    useEffect(() => {
        const selectorElement = selectorRef.current;
        const menuElement = menuRef.current;

        if (selectorElement && menuElement) {
            const selectorRect = selectorElement.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Определяем доступное место ниже селектора
            const spaceBelowSelector = windowHeight - selectorRect.bottom;

            // Учитываем высоту контента меню
            const menuContentHeight = menuElement.scrollHeight;

            // Если места недостаточно для отображения всего контента снизу,
            // то меню позиционируется сверху относительно селектора, иначе - снизу
            if (spaceBelowSelector < menuContentHeight) {
                setMenuPosition('top');
            } else {
                setMenuPosition('bottom');
            }
        }
    }, [selectorRef.current, menuRef.current]);

    function contains(arr: any[], elem: any): boolean {
        return arr.find((i: any) => i === elem) !== undefined;
    }

    switch (sizeType) {
        case "small": {
            classNameArr.push("uiXeny-select--sizeSmall");
            break;
        }
        case "large": {
            classNameArr.push("uiXeny-select--sizeLarge");
            break;
        }
        default: {
            classNameArr.push("uiXeny-select--sizeMedium");
            break;
        }
    }

    props.className && classNameArr.push(props.className);
    //TODO ДОБАВИТЬ ONBLUR
    return (
        <>
            <div className={classNameArr.join(' ')}>
                <div tabIndex={0} ref={selectorRef} className="uiXeny-select__selector"
                     onClick={(_) => {
                         setIsActive(!isActive);
                         onFocus?.();}}>
                    <div className="uiXeny-select__selector_items">
                        {!props.multipleSelect ?
                            (selected?.label ? selected.label :
                                    (props.defaultValue ? props.defaultValue :
                                            (props.placeholder ?
                                                <div
                                                    className="uiXeny-select__selector_placeholder">{props.placeholder}</div>
                                                : (props.options ? props.options[0]?.label : ""))
                                    )
                            ) : (selectedOptions.length > 0 ?
                                    (selectedOptions.map((item) => (
                                        <div className="uiXeny-select__item--selected">
                                            {item?.label}
                                        </div>
                                    ))) :
                                    (props.defaultValue ? props.defaultValue :
                                            (props.placeholder ?
                                                <div
                                                    className="uiXeny-select__selector_placeholder">{props.placeholder}</div>
                                                : "")
                                    )
                            )
                        }
                    </div>
                    <Icon.DownOutlined sizeType={"small"}/>
                </div>

                {isActive && (
                    <div style={{
                        // Позиционируем меню в зависимости от выбранного варианта
                        [menuPosition === 'top' ? 'bottom' : 'top']: '100%',
                    }} ref={menuRef} className="uiXeny-select__content">
                        {props.options ? props.options.map((option) => (
                            <div
                                onClick={(_) => {
                                    if (!option.disabled) {
                                        if (props.multipleSelect) {
                                            if (contains(selectedOptions, option) === true) {
                                                setSelected(null);
                                                setSelectedOptions((prevState) => {
                                                    prevState = prevState.filter(prev => prev !== option);
                                                    return prevState;
                                                })
                                            } else {
                                                setSelectedOptions((prevState) => {
                                                    setSelected(option);
                                                    prevState.push(option);
                                                    return prevState;
                                                });
                                            }
                                        } else {
                                            setSelected(option);
                                            setIsActive(false);
                                        }
                                        onChange?.(option.value);
                                    }
                                }}
                                className={"uiXeny-select__item" +
                                    (option.disabled ? " uiXeny-select__item--disabled" :
                                            (!props.multipleSelect ?
                                                    (option === selected ? " uiXeny-select__item--selected" : "")
                                                    : (contains(selectedOptions, option) === true ? " uiXeny-select__item--selected" : "")
                                            )
                                    )
                                }
                            >
                                {option.label}
                            </div>
                        )) : null}
                    </div>)}
            </div>
        </>
    );
}

export default Select;