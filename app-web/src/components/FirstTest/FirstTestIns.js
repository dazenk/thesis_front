import React from 'react';
import imagenes from "../../img/tree_img/imagenes";
import { Link } from "react-router-dom";
import styles from "./FirstScreen.module.css";

const FirstTestIns = () => {
    return(
        <div className={styles.headerContainer}>
            <p className={styles.title}>Instrucciones</p>
            <div className={styles.bodyIns}>
                <div className={styles.insDescription}>
                    <p>
                    En este test vas a encontrar un tablero lleno de árboles como se muestra a continuación:
                    </p>
                </div>
                <div className={styles.imgTestOne}>
                    <img src={imagenes[11].img} alt="ins"/>
                </div>
                <div className={styles.finalIns}>
                    <Link to="/FirstTestInsTwo">
                        <button>Continuar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FirstTestIns;