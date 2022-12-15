import React, { useContext, useState } from 'react';
import ScreenContext from '../ScreenContext';
import styles from "./SpanTest.module.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { AddResult2 } from '../../utils/database';

const SpanTestEnd = () => {

    // Trae los datos desde "ScreenContext" que se requieren para este archivo
    const {points, ageInMonths, userTest2, ageNormal, user, processPoints} = useContext(ScreenContext);

    // Estado que guarda los resultados que devuelve Python convertidos en puntuación escalar
    const [results, setResults] = useState({});

    // Estado que guarda si ya se han guardado los resultados en firebase
    const [saved, setSaved] = useState(false);

    const navigate = useNavigate();

    // Función para navegar a la pantalla principal de la aplicación
    const returnHome = () => {        
        navigate("/");
        navigate(0);  
    };

    // Función que se encarga de llamar al backend para traer los resultados del test de span de imágenes
    const getResults = async () => {
        if (saved) return        

        // Para usar la aplicación (backend) de manera local se puede usar el siguiente endpoint, solo es necesario comentar
        // las otras URL's y dejar esta activa para hacer pruebas e implementaciones de manera local antes de subirlas
        // a la nube
        /* let url = 'http://127.0.0.1:8000/calculate_span_test'; */

        // Este endpoint se usó para mostrar la aplicación de manera funcional, corresponde al backend
        // en este caso subido en DigitalOcean, el cual se vence a partir del 20 de diciembre de 2022 aproximadamente
        let url = 'https://lionfish-app-nlmgs.ondigitalocean.app/calculate_span_test';

        // Este endpoint corresponde al backend subido en Heroku, actualmente no se encuentra funcionando
        // porque hay que pagar 5 dólares para mantenerlo en la nube
        /* let url = 'https://get-test-results.herokuapp.com/calculate_span_test'; */

        try {            
            let {data, status} = await axios.post(url, {
                "user_data": {
                    "name": "string",
                    "age_in_months": ageInMonths
                },
                  "test_data": {
                    "ri": points
                }
            })
            if (status == 200) {
                setResults(data);
                AddResult2(user.email, {
                                        studentData:
                                        {
                                            name: userTest2.nombre,
                                            age: ageNormal
                                        },
                                        resultData: data,
                                        testResult:
                                        {
                                            hits: points,
                                            rimse: processPoints.rimse,
                                            rimsr: processPoints.rimsr
                                        },
                                        createdAt: new Date(),
                                        id: Date.now()
                                    }
                                );
                setSaved(true);
                console.log(data);
            }            
        } catch (error) {
            console.log(error.response.data);
        }
        
    };

    // Función que clasifica la puntuación escalar en el test de span de imágenes
    const getResultsByValue = (puntuacionEscalar) => {
        switch(true) {
            case (puntuacionEscalar >= 18 && puntuacionEscalar <= 19): return "Muy alto";
            case (puntuacionEscalar >= 15 && puntuacionEscalar <= 17): return "Alto";
            case (puntuacionEscalar >= 12 && puntuacionEscalar <= 14): return "Medio alto";
            case (puntuacionEscalar >= 9 && puntuacionEscalar <= 11): return "Medio";
            case (puntuacionEscalar >= 6 && puntuacionEscalar <= 8): return "Medio bajo";
            case (puntuacionEscalar >= 3 && puntuacionEscalar <= 5): return "Bajo";
            case (puntuacionEscalar >= 1 && puntuacionEscalar <= 2): return "Muy bajo";
        }
    };

    // Función que clasifica la secuencia de estímulos en el test de span de imágenes
    const getResultsRimseByValue = (rim) => {
        switch(true) {
            case (rim == 8): return "perfecto";
            case (rim == 7): return "muy alto";
            case (rim == 6): return "alto";
            case (rim == 5): return "medio alto";
            case (rim == 4): return "medio";
            case (rim == 3): return "medio bajo";
            case (rim == 2): return "bajo";
            case (rim == 1): return "muy bajo";
        }
    };

    // Función que guarda el color según la clasificación de la puntuación escalar en el test de span de imágenes
    const getColorByResultValue = {
        "Muy alto": "#99f7a5",
        "Alto": "#affab8",
        "Medio alto": "#faf08e",
        "Medio": "#fff06b",
        "Medio bajo": "#fcec56",
        "Bajo": "#faa489",
        "Muy bajo": "#ff9575",
    }

    // Función que devuelve la interpretación de la puntuación escalar para el test de span de imágenes
    const getAnalysis = (puntuacionEscalar) => {
        switch(true) {            
            case (puntuacionEscalar >= 17 && puntuacionEscalar <= 19): return `El alumno goza de un rendimiento excelente en comparación con los demás estudiantes de ${ageNormal} años, tiene una habilidad superior para identificar la información visual, mantener un completo registro temporal en su memoria y hacer uso de este para solucionar problemas`;
            case (puntuacionEscalar >= 14 && puntuacionEscalar <= 16): return `El alumno goza de un rendimiento sobresaliente en comparación con los demás estudiantes de ${ageNormal} años, tiene una muy buena habilidad para identificar información visual, mantener un amplio registro temporal en su memoria y hacer uso de este para solucionar problemas`;
            case (puntuacionEscalar >= 11 && puntuacionEscalar <= 13): return `El alumno dispone de un rendimiento mayor que el promedio en comparación con los demás estudiantes de ${ageNormal} años, cuenta con una buena habilidad para identificar la información visual, mantener un óptimo registro temporal en su memoria y hacer uso de este para solucionar problemas`;
            case (puntuacionEscalar == 10): return `El alumno refleja un rendimiento promedio en comparación con los demás estudiantes de ${ageNormal} años, posee una habilidad normal para identificar información visual, mantener un común registro temporal en memoria y hacer un buen uso de este para solucionar problemas`;
            case (puntuacionEscalar >= 7 && puntuacionEscalar <= 9): return `El alumno tiene un rendimiento un poco bajo del promedio en comparación con los demás estudiantes de ${ageNormal} años, cuenta con cierta habilidad para identificar información visual, mantener un medio registro temporal en memoria y hacer uso de este para solucionar problemas`;
            case (puntuacionEscalar >= 4 && puntuacionEscalar <= 6): return `El alumno tiene un rendimiento bajo en comparación con los demás estudiantes de ${ageNormal} años, puede poseer problemas de distracción y discriminación visual, asimismo dificultades para mantener información en la mente y problemas de manipulación de la información en memoria de trabajo`;
            case (puntuacionEscalar >= 1 && puntuacionEscalar <= 3): return `El alumno posee un rendimiento muy bajo en comparación con los demás estudiantes de ${ageNormal} años, presenta problemas de distracción y discriminación visual, cuenta con una baja capacidad de almacenamiento de información en la mente y problemas de manipulación de la información en memoria de trabajo`;
        }
    };

    // Muestra como tal la pantalla de resultados del test de span de imágenes
    return(
        <div className={styles.containerResultsSpan}>
            <div className={styles.resultsWrapperSpan}>
                <div className={styles.titleInstructionsSpan}>
                    <p>Resultados</p>
                </div>
                <div className={styles.containerAnSpan}>
                    <table>
                        <tbody>
                            <tr className={styles.headTableSpan}>
                                <td>Estudiante</td>
                                <td>Edad</td>
                                <td>Puntuación</td>
                                <td>Secuencia de estímulos</td>
                                <td>Secuencia de respuestas</td>
                            </tr>
                            <tr className={styles.bodyTableSpan}>
                                <td>{userTest2.nombre}</td>
                                <td>{ageNormal}</td>
                                <td>{points}</td>
                                <td>{processPoints.rimse}</td>
                                <td>{processPoints.rimsr}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className={styles.buttonFacesS} onClick={getResults}>Generar y guardar reporte</button>
                    {
                        Object.entries(results).length > 0 && (
                                <>
                                    <table style={{marginBottom: "0"}}>
                                        <tbody>
                                            <tr className={styles.headTableSpan}>
                                                <td></td>
                                                <td>Puntuación</td>
                                                <td>Puntuación escalar</td>
                                                <td>Resultados</td>
                                            </tr>
                                            <tr className={styles.headTableSpan}>
                                                <td>PD</td>
                                                <td className={styles.bodyTableSpan}>{points}</td>
                                                <td className={styles.bodyTableSpan}>{results.RE}</td>
                                                <td className={styles.bodyTableSpan} style={{backgroundColor: getColorByResultValue[getResultsByValue(results.RE)]}}>{getResultsByValue(results.RE)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className={styles.containerAnalysisSpan}>
                                        <h2>Interpretación de resultados</h2>
                                        <div className={styles.containerCardsAnSpan}>
                                            <div className={styles.containerHitsSpan}>
                                                <h4>Puntuación directa</h4>
                                                <p><span>{getResultsByValue(results.RE)}: </span>{getAnalysis(results.RE)}</p>
                                            </div>
                                            <div className={styles.containerRiSpan}>
                                                <div className={styles.containerHitSpan}>
                                                    <h4>Secuencia de estímulos</h4>
                                                    <p>La cantidad de secuencia de estímulos del último ítem que pudo recordar el alumno
                                                        de manera perfecta fue de <span>{processPoints.rimse}</span>, correspondiente al item <span>{processPoints.item}</span>,
                                                        obteniendo un puntaje <span>{getResultsRimseByValue(processPoints.rimse)}</span>
                                                    </p>
                                                </div>
                                                <div className={styles.containerHitSpan}>
                                                    <h4>Secuencia de respuestas</h4>
                                                    <p>La cantidad de secuencia de respuestas del último ítem que logró recordar el alumno
                                                        de manera perfecta fue de <span>{processPoints.rimsr}</span>, correspondiente al ítem <span>{processPoints.item}</span>
                                                    </p>
                                                </div>
                                            </div>                                            
                                        </div>
                                    </div>
                                </>
                        )
                    }
                    <button className={styles.buttonFacesS} onClick={returnHome}>Volver al inicio</button>
                </div>
            </div>
        </div>
    )
}

export default SpanTestEnd;