import React, { useState } from 'react';
import { Button, Input } from 'antd';

import styles from './UserDataInput.module.css';

const UserDataInput = (props) => {
    const [firstName, setFirstName] = useState(props.data.firstName);
    const [lastName, setLastName] = useState(props.data.lastName);
    const [email, setEmail] = useState(props.data.email);

    return (
        <div className={styles.container}>
            <Input
                className={styles.input}
                value={firstName}
                placeholder={'First Name'}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
                className={styles.input}
                value={lastName}
                placeholder={'Last Name'}
                onChange={(e) => setLastName(e.target.value)}
            />
            <Input
                className={styles.input}
                value={email}
                placeholder={'Email'}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Button className={styles.btn} type="primary" onClick={() => {props.nextStep()}}>
                Next
            </Button>
        </div>
    );
};

export default UserDataInput;