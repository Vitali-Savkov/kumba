import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Button,
    DatePicker,
    message,
    TimePicker,
} from 'antd';
import dayjs from 'dayjs';
import axios from 'axios';

import styles from './DateInput.module.css';

const timeFormat = 'HH:mm';
const dateFormat = 'YYYY-MM-DD';
const url = 'https://kumba.free.beeceptor.com/submit';

const DateInput = (props) => {
    const [date, setDate] = useState(dayjs());
    const [time, setTime] = useState(dayjs());
    const { firstName, lastName, email } = props.data;

    const navigate = useNavigate();

    const handleClick = async () => {
        const data = await axios.post(url, {
            date: dayjs(date).format(dateFormat),
            time: dayjs(time).format(timeFormat),
            firstName,
            lastName,
            email,
        });
        if (data.status === 200) {
            message.success('Processing complete!');
            navigate('/success');

        } else {
            message.error(data.statusText);
            props.prevStep();
        }
    }
    const onChangeDate = (date) => {
        setDate(date);
    }

    const onChangeTime = (time) => {
        setTime(time);
    }

    return (
        <div className={styles.container}>
            <div className={styles.date_container}>
                <DatePicker defaultValue={date} format={dateFormat} onChange = {onChangeDate} />
                <TimePicker defaultValue={time} format={timeFormat} onChange = {onChangeTime} />
            </div>
            <div className={styles.btn_container}>
                <Button onClick={() => props.prevStep()}>
                    Previous
                </Button>
                <Button type="primary" onClick={handleClick}>
                    Done
                </Button>
            </div>
        </div>
    );
};

export default DateInput;