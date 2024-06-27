import React, {useEffect} from 'react';

import './index.css';
import Icon from "../Icon/Icon";

const Notification = ({
                          open,
                          close,
                          message,
                          last,
                          onClickRemove
                      }: {
    open: boolean;
    close: boolean;
    message: string | undefined;
    last: boolean;
    onClickRemove?: () => void
}) => {
    console.log(close)
    useEffect(() => {
        const actionAfterTimeout = () => {
            console.log('close');
        };
        const timerToClose = setTimeout(actionAfterTimeout, 3000);

        const actionAfterClose = () => {
            clearTimeout(timerToClose);
        };

        return actionAfterClose;
    }, [open]);

    return (
        <div
            className={`notification_wrapper ${last ? 'notification_wrapper__show--rt' : ''} ${
                close ? 'notification_wrapper__hide--rt' : ''
            }`}
        >
            {message}
            <div className={'notification_wrapper__close'} style={{transform: 'scale(0.8)'}} onClick={onClickRemove}>
                <Icon.CloseOutlined/></div>
        </div>
    );
};

export default Notification;
