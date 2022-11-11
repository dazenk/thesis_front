import React from 'react';
import styles from './HomeScreen.module.css';

const Alert = ({message}) => {
    return(
        <div className={styles.errorContainer}>
            <span>
                {message}
            </span>            
        </div>
    );
};

export default Alert;