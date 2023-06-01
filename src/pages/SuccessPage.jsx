import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

import styles from './SuccessPage.module.css';

const SuccessPage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <Result
                icon={<SmileOutlined />}
                title='Registration to appointment successfully completed!'
                extra={<Button type="primary" onClick={() => navigate('/')}>Next</Button>}
            />
        </div>

);
};

export default SuccessPage;