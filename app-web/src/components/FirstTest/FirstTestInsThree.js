import React from 'react';
import imagenes from "../../img/tree_img/imagenes";
import { Link } from "react-router-dom";
import styles from "./FirstScreen.module.css";

const FirstTestInsThree = () => {
    return(
        <div className={styles.headerContainer}>
            <p className={styles.title}>Instrucciones</p>
            <div className={styles.bodyIns}>
                <div className={styles.insDescription}>
                    <p>
                    Pulsa los árboles en el menor tiempo posible, cuando hayas acabado, da clic en el botón siguiente para continuar.
                    </p>
                </div>
                <div className={styles.imgTestOne}>
                    <p className={styles.pIns}>Pulsar al terminar</p>
                    <div className={styles.lineIns2}></div>
                    <div className={styles.arrowIns2}></div>
                    <img src={imagenes[11].img} alt="ins"/>
                </div>
                <div className={styles.finalIns}>
                    <Link to="/FirstTestInsFour">
                        <button>Continuar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FirstTestInsThree;