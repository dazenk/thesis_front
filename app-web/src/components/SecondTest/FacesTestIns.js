import React, { useContext } from 'react';
import styles from "./FacesTest.module.css";
import imagenesCaras from "../../img/face_img/img_face";
import { Link } from "react-router-dom";
import ScreenContext from '../ScreenContext';

const FacesTestIns = () => {

    return(
        <div className={styles.headerInstructions}>
            <div className={styles.titleInstructions}>
                <p>Instrucciones</p>
            </div>
            <div className={styles.bodyInstructions}>
                <div className={styles.firstInstructions}>
                    <p>Observa la siguiente fila de caras. Una de las caras es distinta a las otras. La cara que es distinta está marcada con color rojo.</p>
                    <div className={styles.imageExample}>
                        <div className={styles.faceGoodImg}>
                            <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/14-0.png?alt=media&token=50f7a3ea-eac8-42e1-93b2-3bf41541d95a'} alt="cara"/>
                        </div>
                        <div className={styles.faceBadImg}>
                            <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/14-1.png?alt=media&token=23192566-9294-465f-97ff-9ae6d2434e18'} alt="cara"/>
                        </div>
                        <div className={styles.faceGoodImg}>
                            <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/14-0.png?alt=media&token=50f7a3ea-eac8-42e1-93b2-3bf41541d95a'} alt="cara"/>
                        </div>
                    </div>
                    <p>¿Está claro por qué la cara del centro está marcada? Es debido a que la boca es distinta.</p>
                </div>
                <div className={styles.secondInstructions}>
                    <p>A continuación se observa otra fila de caras. Míralas e identifica cuál es diferente a las otras.</p>
                    <div className={styles.imageExample}>
                        <div className={styles.faceGoodImg}>
                            <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/16-0.png?alt=media&token=08eee059-2650-49d1-a100-f5ee3f7960fc'} alt="cara"/>
                        </div>
                        <div className={styles.faceGoodImg}>
                            <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/16-0.png?alt=media&token=08eee059-2650-49d1-a100-f5ee3f7960fc'} alt="cara"/>
                        </div>
                        <div className={styles.faceGoodImg}>
                            <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/16-1.png?alt=media&token=d525fe7e-bad7-40b9-8b54-6e72e81cc566'} alt="cara"/>
                        </div>
                    </div>
                    <p>La respuesta es la última cara, ya que la <span>dirección de su cabello</span> es distinta a las otras dos.</p>
                </div>
                <div className={styles.containerButtonNext}>
                    <Link to="/FacesTestInsTwo">
                        <button className={styles.buttonNext}>Siguiente</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FacesTestIns;