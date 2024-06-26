import React, {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';
import './Button.css';
import './FloatButton.css';
import {TSize} from '../../types/GeneralTypes';

type TButtonTypes = 'default' | 'primary' | 'link';
type TButtonStatuses = 'danger' | 'warning' | 'success';
type ButtonCmp = React.FC<TButtonProps> & {
    Float: React.FC<TButtonProps & TFloatButtonProps>;
};

type TButtonProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    buttonType?: TButtonTypes;
    buttonStatus?: TButtonStatuses;
    children?: React.ReactElement | string;
    className?: string;
    sizeType?: TSize;
    htmlType?: 'submit' | 'reset' | 'button' | undefined;
    ref?: React.LegacyRef<HTMLButtonElement>;
};

type TFloatButtonShapes = 'circle' | 'square';

type TFloatButtonProps = {
    shape?: TFloatButtonShapes;
    icon?: ReactNode;
};

export const Button: ButtonCmp = ({
                                      buttonType = 'default',
                                      sizeType = 'medium',
                                      children,
                                      htmlType = 'button',
                                      buttonStatus,
                                      ref,
                                      ...props
                                  }: TButtonProps) => {
    const classNameArr = ['uiXeny-button'];

    switch (buttonType) {
        case 'primary': {
            classNameArr.push('uiXeny-button--primary');
            break;
        }
        case 'link': {
            classNameArr.push('uiXeny-button--link');
            break;
        }
        default: {
            classNameArr.push('uiXeny-button--default');
            break;
        }
    }

    switch (buttonStatus) {
        case "danger": {
            classNameArr[1] += " " + classNameArr[1] + "--danger";
            break;
        }
        case "warning": {
            classNameArr[1] += " " + classNameArr[1] + "--warning";
            break;
        }
        case "success": {
            classNameArr[1] += " " + classNameArr[1] + "--success";
            break;
        }
    }

    switch (sizeType) {
        case 'small': {
            classNameArr.push('uiXeny-button--sizeSmall');
            break;
        }
        case 'large': {
            classNameArr.push('uiXeny-button--sizeLarge');
            break;
        }
        default: {
            classNameArr.push('uiXeny-button--sizeMedium');
            break;
        }
    }

    props.className && classNameArr.push(props.className);

    return React.createElement(
        'button',
        {...props, className: classNameArr.join(' '), type: htmlType, ref: ref},
        children,
    );
};

const Float: React.FC<TButtonProps & TFloatButtonProps> = ({
                                                               buttonType = 'default',
                                                               children,
                                                               shape,
                                                               htmlType = 'button',
                                                               buttonStatus,
                                                               ref,
                                                               ...props
                                                           }) => {
    const classNameArr = ['uiXeny-button', 'uiXeny-float-button'];

    switch (buttonType) {
        case 'primary': {
            classNameArr.push('uiXeny-button--primary');
            break;
        }
        default: {
            classNameArr.push('uiXeny-button--default');
            break;
        }
    }

    switch (buttonStatus) {
        case "danger": {
            classNameArr[2] += " " + classNameArr[2] + "--danger";
            classNameArr[1] += " " + classNameArr[1] + "--danger";
            break;
        }
        case "warning": {
            classNameArr[2] += " " + classNameArr[2] + "--warning";
            classNameArr[1] += " " + classNameArr[1] + "--warning";
            break;
        }
        case "success": {
            classNameArr[2] += " " + classNameArr[2] + "--success";
            classNameArr[1] += " " + classNameArr[1] + "--success";
            break;
        }
    }

    switch (shape) {
        case 'square': {
            classNameArr.push('uiXeny-float-button--square');
            break;
        }
        default: {
            classNameArr.push('uiXeny-float-button--circle');
            break;
        }
    }

    props.className && classNameArr.push(props.className);

    return (
        <button
            ref={ref}
            className={classNameArr.join(' ')}
            {...props}
            type={htmlType}
            children={children}
        ></button>
    );
};

Button.Float = Float;

export default Button;
