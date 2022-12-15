import React, { useContext } from 'react';
import ScreenContext from '../ScreenContext';
import styles from "./SpanTest.module.css";
import { Link } from 'react-router-dom';

const SpanTestInsFour = () => {

    // Trae los datos desde "ScreenContext" que se requieren para este archivo
    const {
        imgSpan
    } = useContext(ScreenContext);

    // Muestra como tal la primera pantalla de la segunda parte de instrucciones del test de span de imágenes
    return(
        <div className={styles.containerSpan}>
            <div className={styles.titleInsSpan}>
                <p>Instrucciones parte 2</p>
            </div>
            <div className={styles.bodyInsSpan}>
                <p style={{marginTop: "0", marginBottom: "10px"}}>
                    Ahora, de aquí en adelante van a aparecer dos o más imágenes como las siguientes:
                </p>
                <img src={imgSpan[4].img_question[0]} alt='img-span'/>
                <img src={imgSpan[4].img_question[1]} alt='img-span'/>
                <p style={{marginBottom: "0", marginTop: "10px"}}>
                    Al cabo de unos segundos estas imágenes desaparecerán y serán
                    presentadas otras imágenes dentro de las cuales se encuentran las
                    que viste anteriormente. Tu objetivo es seleccionar las imágenes en
                    el mismo orden inicial dando clic sobre cada una de ellas.
                </p>
                <p style={{marginTop: "10px", marginBottom: "10px"}}>
                    Por ejemplo, en este caso el orden correcto para seleccionar las imágenes
                    sería calcetín y luego manzana. A continuación se mostrará un
                    breve ejemplo para que entiendas mucho mejor la dinámica de la segunda
                    parte del test.
                </p>
                <Link to='/SpanTestInsFive'>
                    <button className={styles.buttonNextSpan}>Siguiente</button>
                </Link>                                      
            </div>
        </div>
    );
};

export default SpanTestInsFour;