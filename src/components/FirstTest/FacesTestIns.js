import React from 'react';
import styles from "./FacesTest.module.css";
import imagenesCaras from "../../img/face_img/img_face";
import { Link } from "react-router-dom";

const FacesTestIns = () => {

    // Muestra como tal la primera pantalla de instrucciones del test de percepción de diferencias
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
                            <img className={styles.faceImg} src={imagenesCaras[28].img} alt="cara"/>
                        </div>
                        <div className={styles.faceBadImg}>
                            <img className={styles.faceImg} src={imagenesCaras[29].img} alt="cara"/>
                        </div>
                        <div className={styles.faceGoodImg}>
                            <img className={styles.faceImg} src={imagenesCaras[28].img} alt="cara"/>
                        </div>
                    </div>
                    <p>¿Está claro por qué la cara del centro está marcada? Es debido a que la boca es distinta.</p>
                </div>
                <div className={styles.secondInstructions}>
                    <p>A continuación se observa otra fila de caras. Míralas e identifica cuál es diferente a las otras.</p>
                    <div className={styles.imageExample}>
                        <div className={styles.faceGoodImg}>
                            <img className={styles.faceImg} src={imagenesCaras[32].img} alt="cara"/>
                        </div>
                        <div className={styles.faceGoodImg}>
                            <img className={styles.faceImg} src={imagenesCaras[32].img} alt="cara"/>
                        </div>
                        <div className={styles.faceGoodImg}>
                            <img className={styles.faceImg} src={imagenesCaras[33].img} alt="cara"/>
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