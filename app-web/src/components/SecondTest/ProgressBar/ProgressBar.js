import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({value, max}) => {
    return(
        <progress className={styles.progressBar} value={value} max={max}/>
    );
}

export default ProgressBar;