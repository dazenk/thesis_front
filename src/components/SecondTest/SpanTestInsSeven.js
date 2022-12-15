import React from 'react';
import styles from "./SpanTest.module.css";
import { Link } from 'react-router-dom';

const SpanTestInsSeven = () => {
    // Muestra como tal la segunda pantalla de la segunda parte de instrucciones del test de span de imágenes
    return(
        <div className={styles.containerSpan}>
            <div className={styles.titleInsSpan}>
                <p>Instrucciones parte 2</p>
            </div>
            <div className={styles.bodyInsSpan}>
                <p style={{marginTop: "20px", marginBottom: "30px"}}>
                    Muy bien, si ya entendiste mejor la dinámica de la segunda
                    parte de la prueba, puedes dar clic en el siguiente botón
                    cuando te sientas preparad@ para iniciar con la segunda parte:
                </p>
                <Link to='/SpanTestTwo'>
                    <button className={styles.buttonNextSpan}>Iniciar test</button>
                </Link>
            </div>
        </div>
    );
};

export default SpanTestInsSeven;