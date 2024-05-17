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

export const Select: React.FC<TSelectProps> = ({
                                                   sizeType = "medium",
                                                   children,
                                                   onChange,
                                                   onFocus,
                                                   onBlur,
                                                   ...props
                                               }: TSelectProps) => {
    let classNameArr = ["uiXeny-select"];

    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState<OptionType | null>(null);
    const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    const selectorRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const selectRef = useRef<HTMLDivElement>(null);

    const [menuPosition, setMenuPosition] = useState<'top' | 'bottom' | undefined>(undefined);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            // event.preventDefault();
            if ((selectRef.current && !selectRef.current.contains(event.target as Node)) ||
            (menuRef.current && !menuRef.current.contains(event.target as Node))) {
                setIsActive(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [selectRef]);

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            if (!isActive) {
                setIsActive(true);
            } else if (highlightedIndex >= 0 && highlightedIndex < props.options.length) {
                setSelected(props.options[highlightedIndex]);
                setIsActive(false);
                setHighlightedIndex(-1);
            }
        } else if (event.key == 'ArrowDown') {
            event.preventDefault();
            setHighlightedIndex((prevIndex: any) => ((prevIndex + 1) % props.options.length));
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            setHighlightedIndex((prevIndex: any) => ((prevIndex - 1 + props.options.length) % props.options.length));
        }
    };

    useEffect(() => {
        if (isActive && highlightedIndex === -1) {
            setHighlightedIndex(0);
        }
    }, [isActive]);

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
            <div className={classNameArr.join(' ')} ref={selectRef}>
                <div tabIndex={0} onKeyDown={handleKeyDown} ref={selectorRef} className="uiXeny-select__selector"
                     onClick={(_) => {
                         setIsActive(!isActive);
                         onFocus?.();
                     }}>
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
                        {props.options ? props.options.map((option, index) => (
                            <div key={option.value} onMouseEnter={() => !option.disabled && setHighlightedIndex(index)}
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
                                className={"uiXeny-select__item" + (highlightedIndex === index ? " uiXeny-select__item--highlighted" : "") +
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