import React, { useContext } from 'react';
import styles from "./SpanTest.module.css";
import ScreenContext from '../ScreenContext';
import { Link } from 'react-router-dom';

const SpanTestIns = () => {

    const {
        imgSpan
    } = useContext(ScreenContext);

    return(
        <div className={styles.containerSpan}>
            <div className={styles.titleInsSpan}>
                <p>Instrucciones parte 1</p>
            </div>
            <div className={styles.bodyInsSpan}>
                <p style={{marginTop: "0", marginBottom: "10px"}}>
                    En la pantalla aparecerá una imagen como la siguiente:
                </p>
                <img src={imgSpan[0].img_question} alt='img-span'/>
                <p style={{marginBottom: "0", marginTop: "10px"}}>
                    Luego de unos segundos la imagen desaparecerá y serán presentadas
                    otras imágenes dentro de las cuales se encuentra la imagen inicial.
                    Tu objetivo es dar clic sobre la imagen que viste anteriormente.
                </p>
                <p style={{marginTop: "10px", marginBottom: "10px"}}>
                    A continuación se mostrará un breve ejemplo para que entiendas
                    mucho mejor la dinámica del test.
                </p>
                <Link to='/SpanTestInsTwo'>
                    <button className={styles.buttonNextSpan}>Siguiente</button>
                </Link>                                      
            </div>
        </div>
    );
};

export default SpanTestIns;