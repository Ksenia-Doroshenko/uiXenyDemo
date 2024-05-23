import React, {ReactNode, useEffect, useState} from 'react';
import './Modal.css';
import Icon from "../Icon/Icon";

type TModalProps = {
    onClose?: () => void;
    open: boolean;
    footerActions?: ReactNode[];
    children?: ReactNode;
    title?: ReactNode;
};

// eslint-disable-next-line react/function-component-definition
const Modal: React.FC<TModalProps> = ({
                                          open,
                                          onClose,
                                          footerActions,
                                          children,
                                          ...props
                                      }) => {
    // console.log(open);

    const onClickModalWrapper = () => {
        onClose?.();
    };

    const [isInit, setIsInit] = useState(true);

    useEffect(() => {
        const id = setTimeout(() => {
            setIsInit(false);
        }, 500);

        return () => {
            clearTimeout(id);
        }
    }, []);

    const isModalOpen = !open
        ? 'uiXeny-modal_wrapper__body--close'
        : 'uiXeny-modal_wrapper__body--open';

    return (
        <>
            {open ? (
                <div className='uiXeny-modal_wrapper' onClick={onClickModalWrapper}/>
            ) : null}
            <div className={`uiXeny-modal_wrapper__body ${isModalOpen}` + (isInit ? " uiXeny-modal_wrapper__body--init" : "")}>
                <div className='uiXeny-modal_wrapper__body__header'>
                    <div className='uiXeny-modal_wrapper__body__header__title'>{props.title}</div>
                    <Icon.CloseOutlined sizeType="small" className={"uiXeny-modal__close_icon"} onClick={onClose}/>
                </div>
                <div className='uiXeny-modal_wrapper__body__main'>{children}</div>
                <div className='uiXeny-modal_wrapper__body__footer'>{footerActions}</div>
            </div>
        </>
    );
};

export default Modal;