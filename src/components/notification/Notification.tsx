import React, {useEffect} from 'react';

import './index.css';

const Notification = ({
                          open,
                          close,
                          message
                      }: {
    open: boolean;
    close: boolean;
    message: string | undefined;
}) => {
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
            className={`notification_wrapper ${open ? 'notification_wrapper__show--rt' : ''} ${
                close ? 'notification_wrapper__hide--rt' : ''
            }`}
        >
            {message}
        </div>
    );
};

export default Notification;
