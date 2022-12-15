import React from 'react';
import styles from './HomeScreen.module.css';

const Alert = ({message}) => {

    // Muestra los errores que hayan ocurrido al intentar registrarse o iniciar sesión
    return(
        <div className={styles.errorContainer}>
            <span>
                {message}
            </span>            
        </div>
    );
};

export default Alert;