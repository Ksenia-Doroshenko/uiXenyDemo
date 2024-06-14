import React, { useEffect } from 'react';
import { generateUUID } from '../../../../../../../Downloads/notify/src/utils/helpers/others/uuid';
import './index.css'
import Notification from './Notification'

type TNotify = {
  type: string;
  message?: string;
};

type TAction = {
  type: 'add' | 'remove';
  payload?: TNotify;
};

export const useNotify = (): [(notify: TNotify) => void, JSX.Element] => {
  function reducer(state: TNotify[], action: TAction) {
    switch (action.type) {
      case 'add': {
        if (action.payload) {
          return [...state, action.payload];
        }
        return state;
      }
      case 'remove': {
        return state.slice(1);
      }
      default: {
        return state;
      }
    }
  }

  const [notifys, dispatch] = React.useReducer(reducer, []);

  const addNewNotify = (notify: TNotify) => {
    dispatch({ type: 'add', payload: notify });
  };

  const removeLastNotify = () => {
    dispatch({ type: 'remove' });
  };

  useEffect(() => {
    const beautifulSeconds = (2.5 / (0.5 * notifys.length + 1)) * 1000;
    const id = setTimeout(removeLastNotify, beautifulSeconds);

    return () => {
      clearTimeout(id);
    };
  }, [notifys.length]);

  const notificationsHolder = (
    <div className='notofication_holder'>
      {notifys.map((el) => (
        <Notification open key={generateUUID()} close={false} message={el.message}/>
      ))}
    </div>
  );

  return [addNewNotify, notificationsHolder];
};
