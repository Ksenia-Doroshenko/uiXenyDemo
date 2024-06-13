// type TSelectTypes = "default" | "" | "" | "" | "";

import React, {useEffect, useRef, useState} from "react";
import "./Select.css";
import Icon from "../Icon/Icon";
import {generateUUID} from "../../utils/generateUUID";
import {TSize} from "../../types/GeneralTypes";

type TSelectProps = (SingleSelectProps | MultipleSelectProps) & {
    children?: React.ReactElement | string;
    className?: string;
    sizeType?: TSize;
    options: TOptionType[];
    placeholder?: string;
    style?: React.CSSProperties;
    onChange?: (event: (string | number)[] | (string | number)) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    multipleSelect?: boolean;
    // defaultValue?: string | number | (string | number)[];
    maxSelect?: number;
    minSelect?: number;
    minSelectWarning?: string;
};

type SingleSelectProps = {
    defaultValue?: TOptionType;
    multipleSelect?: false;
    maxSelect?: never;
    minSelect?: never;
    minSelectWarning?: never;
};

type MultipleSelectProps = {
    defaultValue?: TOptionType[];
    multipleSelect: true;
    maxSelect?: number;
    minSelect?: number;
    minSelectWarning?: string;
};

type TOptionType = {
    value: string | number;
    label: string | number;
    disabled?: boolean;
};

export const Select: React.FC<TSelectProps> = ({
                                                   sizeType = "medium",
                                                   onChange,
                                                   onFocus,
                                                   onBlur,
                                                   ...props
                                               }: TSelectProps) => {
    const classNameArr = ["uiXeny-select"];

    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState<TOptionType | null>(null);
    const [selectedOptions, setSelectedOptions] = useState<TOptionType[]>([]);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const [warning, setWarning] = useState<string | null>(null);
    // const [selectionCounter, setSelectionCounter] = useState<string | null>(null);

    const selectorRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const selectRef = useRef<HTMLDivElement>(null);

    const [menuPosition, setMenuPosition] = useState<'top' | 'bottom' | undefined>(undefined);
    const [warningPosition, setWarningPosition] = useState<'top' | 'bottom' | undefined>(undefined);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            // event.preventDefault();
            if (
                selectRef.current &&
                !selectRef.current.contains(event.target as Node) &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsActive(false);
                onBlur?.();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [selectRef]);

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (!isActive) {
                setIsActive(true);
            } else if (highlightedIndex >= 0 && highlightedIndex < props.options.length) {
                const highlightedOption = props.options[highlightedIndex];
                if (!highlightedOption.disabled) {
                    handleSelectOption(highlightedOption);
                }
            }
        } else if (isActive) {
            if (event.key === 'ArrowDown') {
                event.preventDefault(); // Предотвращаем скроллинг страницы
                setHighlightedIndex((prevIndex) => getNextEnabledIndex(prevIndex));
            } else if (event.key === 'ArrowUp') {
                event.preventDefault(); // Предотвращаем скроллинг страницы
                setHighlightedIndex((prevIndex) => getPrevEnabledIndex(prevIndex));
            }
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isActive, highlightedIndex]);

    useEffect(() => {
        if (!menuRef.current || highlightedIndex === -1) return;

        const menu = menuRef.current;
        const selectedOption = menu.children[highlightedIndex] as HTMLElement;
        if (!selectedOption) return;

        selectedOption.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }, [highlightedIndex]);

    const handleSelectOption = (option: TOptionType) => {
        const newSelectedOptions = [];
        if (!option.disabled) {
            if (props.multipleSelect) {
                setSelectedOptions(prevState => {
                    const optionExists = contains(prevState, option);
                    const selectedOptionsCount = prevState.length;

                    if (!optionExists && props.maxSelect && selectedOptionsCount >= props.maxSelect) {
                        // Если опция не была выбрана ранее и превышен максимальный лимит,
                        // то просто возвращаем текущий список выбранных без изменений
                        return prevState;
                    }

                    const newSelectedOptions = optionExists
                        ? prevState.filter(val => val.value !== option.value)
                        : [...prevState, option];

                    // console.log(newSelectedOptions);

                    updateWarning(newSelectedOptions);
                    onChange?.([...newSelectedOptions?.map(item => item.value)] || []);
                    return newSelectedOptions;
                });
            } else {
                if (selected?.value === option.value) {
                    setSelected(null); // Убираем выбор, если текущая опция уже выбрана
                } else {
                    setSelected(option);
                }
                setIsActive(false);
                updateWarning([option]);
                onChange?.(option.value);

            }
            // if (props.multipleSelect){
            //     console.log(selectedOptions);
            //
            // }else {
            // }
        }
    };

    useEffect(() => {
        if (props.defaultValue !== undefined) {
            if (Array.isArray(props.defaultValue)) {
                setSelectedOptions(props.defaultValue); // Если defaultValue является массивом
            } else {
                setSelectedOptions([props.defaultValue]); // Если defaultValue является одиночным значением
            }
        }
    }, [props.defaultValue, props.multipleSelect, props.options]);

    useEffect(() => {
        if (props.defaultValue !== undefined) {
            if (props.multipleSelect) {
                const defaultOptions = props.defaultValue.map((defaultValueItem) =>
                    props.options.find((option) => option.value === defaultValueItem.value)
                ).filter((item) => item !== undefined) as TOptionType[];
                setSelectedOptions(defaultOptions);
            } else {
                const defaultOption = props.options.find((option) =>
                    option.value === props.defaultValue?.value);
                if (defaultOption) {
                    setSelected(defaultOption);
                }
            }
        }
    }, [props.defaultValue, props.options, props.multipleSelect]);

    const handleRemoveOptionClick = (option: TOptionType) => (event: React.MouseEvent) => {
        event.stopPropagation();
        setSelectedOptions(prevOptions => {
            const newSelectedOptions = prevOptions.filter(opt => opt.value !== option.value);
            updateWarning(newSelectedOptions);

            if (contains(prevOptions, selected)) {
                setSelected(null);
            }

            return newSelectedOptions;
        });
    };

    const updateWarning = (newSelectedOptions: TOptionType[]) => {
        if (props.minSelect && newSelectedOptions.length < props.minSelect) {
            setWarning(props.minSelectWarning
                ? props.minSelectWarning.replace('{minSelect}', `${props.minSelect}`).replace('{selectedCount}', `${newSelectedOptions.length}`)
                : `You must select at least ${props.minSelect} options. You have selected ${newSelectedOptions.length}.`);
        } else {
            setWarning(null);
        }
    };

    const getNextEnabledIndex = (currentIndex: number) => {
        let nextIndex = currentIndex;
        const startIndex = nextIndex;
        do {
            nextIndex = (nextIndex + 1) % props.options.length;
        } while (props.options[nextIndex].disabled && nextIndex !== startIndex);
        return nextIndex;
    };

    const getPrevEnabledIndex = (currentIndex: number) => {
        let prevIndex = currentIndex;
        const startIndex = prevIndex;
        do {
            prevIndex = (prevIndex - 1 + props.options.length) % props.options.length;
        } while (props.options[prevIndex].disabled && prevIndex !== startIndex);
        return prevIndex;
    };

    useEffect(() => {
        if (isActive && highlightedIndex === -1) {
            setHighlightedIndex(getNextEnabledIndex(-1));
        }
    }, [isActive, highlightedIndex, props.options]);

    useEffect(() => {
        const selectorElement = selectorRef.current;
        const menuElement = menuRef.current;

        if (selectorElement && menuElement) {
            const selectorRect = selectorElement.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Определяем доступное место ниже селектора
            const spaceBelowSelector = windowHeight - selectorRect.bottom;

            // Учитываем высоту контента меню
            const menuContentHeight = menuElement.clientHeight;

            // Если места недостаточно для отображения всего контента снизу,
            // то меню позиционируется сверху относительно селектора, иначе - снизу
            if (spaceBelowSelector < menuContentHeight) {
                setMenuPosition('top');
                setWarningPosition('bottom');
            } else {
                setMenuPosition('bottom');
                setWarningPosition('top');
            }
        }
    }, []);

    function contains(arr: TOptionType[], elem: TOptionType | null): boolean {
        return arr.find((el: TOptionType) => el === elem) !== undefined;
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

    const onClickDropdown = () => {
        setIsActive(!isActive);
        onFocus?.();
    }

    props.className && classNameArr.push(props.className);

    return (
        <>
            <div className={classNameArr.join(' ')} ref={selectRef}>
                {warning && <div style={{
                    [warningPosition === 'top' ? 'bottom' : 'top']: '100%',
                }} className="uiXeny-select__warning">{warning}</div>}
                <div tabIndex={0} onKeyDown={() => handleKeyDown} ref={selectorRef} className="uiXeny-select__selector"
                     onClick={() => onClickDropdown()}>
                    <div className="uiXeny-select__selector_items">
                        {!props.multipleSelect ?
                            (selected?.label ?
                                <div className="uiXeny-select__item--selected_single">
                                    {selected.label}
                                </div> : null) ||
                            (props.defaultValue ?
                                    <div className="uiXeny-select__item--selected_single">
                                        {props.defaultValue.label}
                                    </div> :
                                    (props.placeholder ?
                                            <div
                                                className="uiXeny-select__selector_placeholder">{props.placeholder}
                                            </div> :
                                            (props.options ? props.options[0]?.label : "")
                                    )

                            ) : (selectedOptions.length > 0 ?
                                    ((selectedOptions.map((item) => (
                                            <div key={generateUUID()}
                                                 className="uiXeny-select__item--selected">
                                                {item?.label}
                                                <Icon.CloseOutlined onClick={handleRemoveOptionClick(item)}
                                                                    style={{width: 9, height: 9}}/>
                                            </div>
                                        ))) ||
                                        (props.defaultValue ? props.defaultValue.map((item: TOptionType) => (
                                            <div key={generateUUID()}
                                                 className="uiXeny-select__item--selected">
                                                {item?.label}
                                                <Icon.CloseOutlined onClick={handleRemoveOptionClick(item)}
                                                                    style={{width: 9, height: 9}}/>
                                            </div>
                                        )) : null)) :
                                    (props.placeholder ?
                                        <div
                                            className="uiXeny-select__selector_placeholder">{props.placeholder}</div>
                                        : "")
                            )
                        }
                    </div>
                    <div className={"uiXeny-select__selector_control"}>
                        {props.maxSelect && <div className="uiXeny-select__selector_control__selection_counter">
                            <span> {selectedOptions.length}/{props.maxSelect}</span></div>}
                        {isActive ? <Icon.DownOutlined sizeType={"small"}/> : <Icon.UpOutlined sizeType={"small"}/>}
                    </div>
                </div>

                {isActive && (
                    <div style={{
                        // Позиционируем меню в зависимости от выбранного варианта
                        [menuPosition === 'top' ? 'bottom' : 'top']: '100%',
                    }} ref={menuRef} className="uiXeny-select__content">
                        {props.options ? props.options.map((option, index) => (
                            <div key={generateUUID()} onMouseEnter={() => !option.disabled && setHighlightedIndex(index)}
                                 onClick={() => handleSelectOption(option)}
                                 className={"uiXeny-select__item" +
                                     (highlightedIndex === index ? " uiXeny-select__item--highlighted" : "") +
                                     (option.disabled ||
                                         (selectedOptions.length === props.maxSelect
                                             && !contains(selectedOptions, option)) ? " uiXeny-select__item--disabled" :
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