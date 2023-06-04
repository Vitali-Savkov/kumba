import React, { useEffect, useState } from 'react';
import { Steps } from 'antd';
import DateInput from '../DateInput/DateInput';
import UserDataInput from '../UserDataInput/UserDataInput';
import axios from 'axios';

import styles from './Appointment.module.css';

const url = 'https://kumba.free.beeceptor.com/me';
const steps = [
    {
        title: 'Enter user data',
    },
    {
        title: 'Enter appointment date',
    },
];

const Appointment = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const next = () => {
        setCurrentStep(currentStep + 1);
    };
    const prev = () => {
        setCurrentStep(currentStep - 1);
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get(url);
            const { name, email } = data.data.data;
            setUserData({
                firstName: name.split(' ')[0],
                lastName: name.split(' ')[1],
                email,
            });
            setIsLoading(false);
        }
        fetchData();
    }, []);

    const items = steps.map((item) => ({ key: item.title, title: item.title }));
    return (
        <div className={styles.container}>
            <Steps data-testid='steps' current={currentStep} items={items} />
            <div>{steps[currentStep].content}</div>
            {currentStep < steps.length - 1 && !isLoading && (
                <UserDataInput data={userData} nextStep={next} />
            )}
            {currentStep === steps.length - 1 && (
                <DateInput data={userData} prevStep={prev} />
            )}
        </div>
    );
};

export default Appointment;