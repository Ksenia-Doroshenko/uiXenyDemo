import React from 'react';
import './DatePicker.css';
import {Calendar} from '../Calendar/Calendar';
import {formatDate} from '../../utils';
import Input from "../Input/Input.tsx";

const CalendarComponent = () => (
  <svg
    width='226'
    height='209'
    viewBox='0 0 226 209'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='5.5' y='27.5' width='215' height='176' rx='6.5' stroke='#a2a2a2' strokeWidth='11' />
    <line x1='8' y1='88' x2='218' y2='88' stroke='#a2a2a2' strokeWidth='12' />
    <rect x='48' width='12' height='54' rx='6' fill='#a2a2a2' />
    <rect x='166' width='12' height='54' rx='6' fill='#a2a2a2' />
    <mask id='path-5-inside-1_646_6' fill='white'>
      <rect x='34' y='106' width='20' height='20' rx='5' />
    </mask>
    <rect
      x='34'
      y='106'
      width='20'
      height='20'
      rx='5'
      fill='#a2a2a2'
      stroke='#a2a2a2'
      strokeWidth='14'
      mask='url(#path-5-inside-1_646_6)'
    />
    <mask id='path-6-inside-2_646_6' fill='white'>
      <rect x='34' y='154' width='20' height='20' rx='5' />
    </mask>
    <rect
      x='34'
      y='154'
      width='20'
      height='20'
      rx='5'
      fill='#a2a2a2'
      stroke='#a2a2a2'
      strokeWidth='14'
      mask='url(#path-6-inside-2_646_6)'
    />
    <mask id='path-7-inside-3_646_6' fill='white'>
      <rect x='102' y='105' width='20' height='20' rx='5' />
    </mask>
    <rect
      x='102'
      y='105'
      width='20'
      height='20'
      rx='5'
      fill='#a2a2a2'
      stroke='#a2a2a2'
      strokeWidth='14'
      mask='url(#path-7-inside-3_646_6)'
    />
    <mask id='path-8-inside-4_646_6' fill='white'>
      <rect x='102' y='154' width='20' height='20' rx='5' />
    </mask>
    <rect
      x='102'
      y='154'
      width='20'
      height='20'
      rx='5'
      fill='#a2a2a2'
      stroke='#a2a2a2'
      strokeWidth='14'
      mask='url(#path-8-inside-4_646_6)'
    />
    <mask id='path-9-inside-5_646_6' fill='white'>
      <rect x='168' y='105' width='20' height='20' rx='5' />
    </mask>
    <rect
      x='168'
      y='105'
      width='20'
      height='20'
      rx='5'
      fill='#a2a2a2'
      stroke='#a2a2a2'
      strokeWidth='14'
      mask='url(#path-9-inside-5_646_6)'
    />
    <mask id='path-10-inside-6_646_6' fill='white'>
      <rect x='168' y='154' width='20' height='20' rx='5' />
    </mask>
    <rect
      x='168'
      y='154'
      width='20'
      height='20'
      rx='5'
      fill='#a2a2a2'
      stroke='#a2a2a2'
      strokeWidth='14'
      mask='url(#path-10-inside-6_646_6)'
    />
  </svg>
);

type TDatePickerProps = {
  onChange?: (date: Date) => void,
  value?: Date,
}

const DatePicker = (props: TDatePickerProps) => {
  const {onChange, value} = props;
  const [selectedDate, setSelectedDay] = React.useState(new Date());

  const [isCalendarOpen, setCalendarOpen] = React.useState(false);

  const onClickCalendar = () => {
    setCalendarOpen((val) => !val);
  };

  return (
    <div className='datepicker_wrapper'>
      <Input
        // className='datepicker_wrapper__input'
        value={formatDate(value ? value : selectedDate, 'DDD DD MMM YYYY')}
      />
      <button className='datepicker_wrapper__icon' onClick={onClickCalendar}>
        <CalendarComponent />
      </button>
      <Calendar
        open={isCalendarOpen}
        selectedDate={selectedDate}
        selectDate={(date) => {
          onChange?.(date);
          setSelectedDay(date);
        }}
      />
    </div>
  );
};

export default DatePicker;
