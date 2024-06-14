import React, {useEffect, useState} from 'react';
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
  const [isRemoveState, setRemoveState] = useState(false);
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
    setRemoveState(prev => false)

    dispatch({ type: 'add', payload: notify });
  };

  const removeLastNotify = () => {
    setRemoveState(prev => true)

    dispatch({ type: 'remove' });
  };

  useEffect(() => {
    const beautifulSeconds = (4 / (0.5 * notifys.length + 1)) * 1000;
    const id = setTimeout(removeLastNotify, beautifulSeconds);

    return () => {
      clearTimeout(id);
    };
  }, [notifys.length]);

  console.log(notifys)
  console.log(isRemoveState)

  const notificationsHolder = (
    <div className='notofication_holder'>
      {notifys.map((el, index) => (
        <Notification last={index === notifys.length - 1} open key={generateUUID()} close={(index === notifys.length - 1) && isRemoveState} message={el.message} onClickRemove={removeLastNotify}/>
      ))}
    </div>
  );

  return [addNewNotify, notificationsHolder];
};
