import React from 'react';
import imagenes from "../../img/tree_img/imagenes";
import { Link } from "react-router-dom";
import styles from "./FirstScreen.module.css";

const FirstTestInsTwo = () => {
    return(
        <div className={styles.headerContainer}>
            <p className={styles.title}>Instrucciones</p>
            <div className={styles.bodyIns}>
                <div className={styles.insDescription}>
                    <p>
                    El objetivo es pulsar encima de los árboles que sean iguales al modelo que aparece a la derecha del conjunto de árboles:
                    </p>
                </div>
                <div className={styles.imgTestOne}>
                    <p>Modelo</p>
                    <div className={styles.lineIns}></div>
                    <div className={styles.arrowIns}></div>
                    <img src={imagenes[11].img} alt="ins"/>
                </div>
                <div className={styles.finalIns}>
                    <Link to="/FirstTestInsThree">
                        <button>Continuar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FirstTestInsTwo;