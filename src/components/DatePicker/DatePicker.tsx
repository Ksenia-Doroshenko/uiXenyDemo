import React, {useEffect, useRef, useState} from 'react';
import './DatePicker.css';
import {Calendar} from '../Calendar/Calendar';
import {formatDate} from '../../utils';
import Input from "../Input/Input";

const CalendarComponent = () => (
    <svg
        width='226'
        height='209'
        viewBox='0 0 226 209'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <rect x='5.5' y='27.5' width='215' height='176' rx='6.5' stroke='#a2a2a2' strokeWidth='11'/>
        <line x1='8' y1='88' x2='218' y2='88' stroke='#a2a2a2' strokeWidth='12'/>
        <rect x='48' width='12' height='54' rx='6' fill='#a2a2a2'/>
        <rect x='166' width='12' height='54' rx='6' fill='#a2a2a2'/>
        <mask id='path-5-inside-1_646_6' fill='white'>
            <rect x='34' y='106' width='20' height='20' rx='5'/>
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
            <rect x='34' y='154' width='20' height='20' rx='5'/>
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
            <rect x='102' y='105' width='20' height='20' rx='5'/>
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
            <rect x='102' y='154' width='20' height='20' rx='5'/>
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
            <rect x='168' y='105' width='20' height='20' rx='5'/>
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
            <rect x='168' y='154' width='20' height='20' rx='5'/>
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
    const { onChange, value } = props;
    const [selectedDate, setSelectedDay] = useState<Date | null>(null);
    const [isCalendarOpen, setCalendarOpen] = useState(false);
    const [menuPosition, setMenuPosition] = useState<'top' | 'bottom'>('bottom');

    const wrapperRef = useRef<HTMLDivElement>(null);
    const calendarRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const onClickCalendar = () => {
        setCalendarOpen((val) => !val);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node) &&
                calendarRef.current &&
                !calendarRef.current.contains(event.target as Node)
            ) {
                setCalendarOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const updateMenuPosition = () => {
            const buttonElement = buttonRef.current;
            const calendarElement = calendarRef.current;

            if (buttonElement && calendarElement) {
                const buttonRect = buttonElement.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                const spaceBelowButton = windowHeight - buttonRect.bottom;
                // Используем scrollHeight для точного измерения высоты календаря
                const calendarHeight = calendarElement.scrollHeight;

                console.log(`Button Rect: ${JSON.stringify(buttonRect)}`);
                console.log(`Window Height: ${windowHeight}`);
                console.log(`Space Below Button: ${spaceBelowButton}`);
                console.log(`Calendar Height: ${calendarHeight}`);

                if (spaceBelowButton < calendarHeight) {
                    setMenuPosition('top');
                    console.log('Setting menu position to top');
                } else {
                    setMenuPosition('bottom');
                    console.log('Setting menu position to bottom');
                }
            }
        };

        if (isCalendarOpen) {
            console.log('Calendar is open, updating menu position...');
            updateMenuPosition();
        }

        const handleResize = () => {
            if (isCalendarOpen) {
                updateMenuPosition();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isCalendarOpen, buttonRef, calendarRef]);

    return (
        <div className='datepicker_wrapper' ref={wrapperRef} style={{ position: 'relative' }}>
            <Input
                value={formatDate(value ? value : selectedDate, 'DDD DD MMM YYYY')}
            />
            <button className='datepicker_wrapper__icon' ref={buttonRef} onClick={onClickCalendar}>
                <CalendarComponent />
            </button>
            {isCalendarOpen && (
                <div
                    ref={calendarRef}
                    style={{
                        position: 'absolute',
                        [menuPosition === 'top' ? 'bottom' : 'top']: '100%',
                        zIndex: 5,
                        height: 187
                    }}
                    className='calendar-wrapper'
                >
                    <Calendar
                        open={isCalendarOpen}
                        selectedDate={selectedDate}
                        selectDate={(date) => {
                            onChange?.(date);
                            setSelectedDay(date);
                        }}
                    />
                </div>
            )}
        </div>
    );
};



export default DatePicker;
