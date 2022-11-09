import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import ScreenContext from '../ScreenContext';
import styles from "./FirstScreen.module.css";

const FirstTestInsFour = () => {

    const {
        onClickButton,
        setCurrentPage
      } = useContext(ScreenContext);
      
      const onClick = () => {
        setCurrentPage(1);
        onClickButton();
      };

    return(
        <div className={styles.headerContainer}>
            <p className={styles.title}>Instrucciones</p>
            <div className={styles.bodyIns}>
                <div className={styles.insDescription}>
                    <p>
                    Cuando estés preparado, da clic en el siguiente botón:
                    </p>
                </div>
                <div className={styles.finalIns2}>
                    <Link to="/FirstScreen">
                        <button onClick={onClick}>Iniciar test</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FirstTestInsFour;