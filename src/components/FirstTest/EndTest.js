import React, { useContext, useState } from 'react';
import styles from "./FacesTest.module.css";
import ScreenContext from '../ScreenContext';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { AddResult } from '../../utils/database';

const EndTest = () => {

    // Trae los datos desde "ScreenContext" que se requieren para este archivo
    const {
        hitCount,
        errorCount,
        ici,
        totalTimeT2,
        userTest,
        user
    } = useContext(ScreenContext);

    // Estado que guarda los resultados que devuelve Python convertidos en eneatipos
    const [results, setResults] = useState({});

    // Estado que guarda si ya se han guardado los resultados en firebase
    const [saved, setSaved] = useState(false);

    const navigate = useNavigate();

    // Función para navegar a la pantalla principal de la aplicación
    const returnHome = () => {        
        navigate("/");
        navigate(0);  
    };

    // Función que se encarga de llamar al backend para traer los resultados del test de percepción de diferencias
    const getResults = async () => {
        if (saved) return

        // Para usar la aplicación (backend) de manera local se puede usar el siguiente endpoint, solo es necesario comentar
        // las otras URL's y dejar esta activa para hacer pruebas e implementaciones de manera local antes de subirlas
        // a la nube
        /* let url = 'http://127.0.0.1:8000/calculate_face_test'; */

        // Este endpoint se usó para mostrar la aplicación de manera funcional, corresponde al backend
        // en este caso subido en DigitalOcean, el cual se vence a partir del 20 de diciembre de 2022 aproximadamente
        let url = 'https://lionfish-app-nlmgs.ondigitalocean.app/calculate_face_test';

        // Este endpoint corresponde al backend subido en Heroku, actualmente no se encuentra funcionando
        // porque hay que pagar 5 dólares para mantenerlo en la nube
        /* let url = 'https://get-test-results.herokuapp.com/calculate_face_test'; */

        try {            
            let {data, status} = await axios.post(url, {
                "user_data": {
                    "name": "string",
                    "age": userTest.edad
                },
                  "test_data": {
                    "hits": hitCount,
                    "errors": errorCount,
                    "net_hits": (hitCount - errorCount),
                    "ici": ici
                }
            })
            if (status == 200) {
                setResults(data);
                AddResult(user.email, {
                                        studentData:
                                        {
                                            name: userTest.nombre,
                                            age: parseInt(userTest.edad)
                                        },
                                        resultData: data,
                                        testResult:
                                        {
                                            hits: hitCount,
                                            errors: errorCount,
                                            net_hits: (hitCount - errorCount),
                                            ici: ici
                                        },
                                        createdAt: new Date(),
                                        id: Date.now()
                                    }
                                );
                setSaved(true);
            }            
        } catch (error) {
            console.log(error.response.data);
        }
        
    };

    // Función que clasifica el eneatipo que corresponde a cada puntuación en el test de percepción de diferencias
    const getResultsByValue = (eneatipo) => {
        switch(true) {
            case (eneatipo == 9): return "Muy alto";
            case (eneatipo == 8): return "Alto";
            case (eneatipo == 7): return "Medio alto";
            case (eneatipo >= 4 && eneatipo <= 6): return "Medio";
            case (eneatipo == 3): return "Medio bajo";
            case (eneatipo == 2): return "Bajo";
            case (eneatipo == 1): return "Muy bajo";
        }
    };

    // Función que guarda el color según la clasificación del eneatipo que corresponde a cada puntuación en el test de percepción de diferencias
    const getColorByResultValue = {
        "Muy alto": "#99f7a5",
        "Alto": "#affab8",
        "Medio alto": "#faf08e",
        "Medio": "#fff06b",
        "Medio bajo": "#fcec56",
        "Bajo": "#faa489",
        "Muy bajo": "#ff9575",
    }

    // Función que devuelve la interpretación de los aciertos según el eneatipo para el test de percepción de diferencias
    const getHitAnalysis = (eneatipo) => {
        switch (true) {
            case (eneatipo == 1): return `Posee muy pocos aciertos en comparación con la media de los alumnos de ${userTest.edad} años`;
            case (eneatipo == 2): return `Posee pocos aciertos en comparación con la media de los alumnos de ${userTest.edad} años`;
            case (eneatipo >= 3 && eneatipo <= 7): return `Posee un número de aciertos normal en comparación con la media de los alumnos de ${userTest.edad} años`;
            case (eneatipo == 8): return `Posee un número alto de aciertos en comparación con la media de los alumnos de ${userTest.edad} años`;
            case (eneatipo == 9): return `Posee un número muy alto de aciertos en comparación con la media de los alumnos de ${userTest.edad} años`;
        }
    }

    // Función que devuelve la interpretación del rendimiento según el eneatipo para el test de percepción de diferencias
    const getPerformanceAnalysis = (eneatipo) => {
        switch (true) {
            case (eneatipo == 1): return "El rendimiento del alumno es muy bajo, posee una baja capacidad visoperceptiva y atencional, no presta suficiente atención a los detalles";
            case (eneatipo == 2): return "El rendimiento del alumno es bajo, cuenta con una baja capacidad visoperceptiva y atencional, no presta suficiente atención a los detalles";
            case (eneatipo >= 3 && eneatipo <= 7): return "El rendimiento del alumno se encuentra dentro de lo normal, tiene una adecuada capacidad visoperceptiva y atencional";
            case (eneatipo == 8): return "El rendimiento del alumno es alto, se caracteriza por procesar rápido los detalles de estímulos visuales y es preciso en los juicios que realiza";
            case (eneatipo == 9): return "El rendimiento del alumno es muy alto, tiene buenas habilidades para procesar rápido los detalles de estímulos visuales y es preciso en los juicios que realiza";
        }
    }

    // Función que devuelve la interpretación del índice de control de la impulsividad según el eneatipo para el test de percepción de diferencias
    const getICIAnalysis = (eneatipo) => {
        switch (true) {
            case (eneatipo == 1): return `Su control de la impulsividad está muy por debajo de la media de los alumnos con ${userTest.edad} años, carece de control inhibitorio`;
            case (eneatipo == 2): return `Su control de la impulsividad está por debajo de la media de los alumnos con ${userTest.edad} años, tiene poco control inhibitorio`;
            case (eneatipo == 3): return `Su control de la impulsividad es adecuado en comparación con los demás alumnos de ${userTest.edad} años`;
            case (eneatipo == 4): return `Su control de la impulsividad es bueno en comparación con los demás alumnos de ${userTest.edad} años`;
            case (eneatipo == 5): return `Su control de la impulsividad es muy bueno en comparación con los demás alumnos de ${userTest.edad} años`;
        }
    }

    // Función que devuelve la interpretación de los errores según el eneatipo para el test de percepción de diferencias
    const getErrorAnalysis = (eneatipo) => {
        switch (true) {
            case (eneatipo == 4 && userTest.edad != "13"): return "El alumno no comete errores";
            case (eneatipo == 5 && userTest.edad == "13"): return "El alumno no comete errores";
            case (eneatipo == 5 && userTest.edad != "13"): return `El alumno comete un número bajo de errores a comparación de los demás estudiantes con ${userTest.edad} años`;
            case (eneatipo == 6): return `El alumno comete un número normal de errores a comparación de los demás estudiantes con ${userTest.edad} años`;
            case (eneatipo == 7): return `El alumno comete un número normal de errores a comparación de los demás estudiantes con ${userTest.edad} años`;
            case (eneatipo == 8): return `El alumno comete un número alto de errores a comparación de los demás estudiantes con ${userTest.edad} años`;
            case (eneatipo == 9): return `El alumno comete un número elevado de errores a comparación de los demás estudiantes con ${userTest.edad} años`;
        }
    }

    /* 
    Función que devuelve la interpretación del subtipo de comportamiento del alumno según 
    los eneatipos de aciertos e índice de control de la impulsividad para el test de percepción de diferencias
     */
    const getHitsxIci = (enHits, enIci) => {
        switch (true) {
            case ((enHits >= 3 && enHits <= 9) && (enIci >= 1 && enIci <= 2)): return(<>El alumno podría sugerir un subtipo <span>impulsivo</span> de problemas de atención</>);
            case ((enHits >= 1 && enHits <= 2) && (enIci >= 3 && enIci <= 5)): return(<>El alumno podría sugerir un subtipo <span>inatento</span> de problemas de atención</>);
            case ((enHits >= 1 && enHits <= 2) && (enIci >= 1 && enIci <= 2)): return(<>El alumno podría sugerir un subtipo <span>combinado</span> de problemas de atención</>);
            case ((enHits >= 3 && enHits <= 9) && (enIci >= 3 && enIci <= 5)): return(<>El alumno podría sugerir un subtipo de <span>rendimiento normal</span></>);
        }
    }

    /* 
    Función que devuelve la interpretación del estilo de respuesta del alumno según 
    los eneatipos de aciertos netos e índice de control de la impulsividad para el test de percepción de diferencias
     */
    const getNetHitsxIci = (enNHits, enIci) => {
        switch (true) {
            case ((enNHits >= 3 && enNHits <= 9) && (enIci >= 1 && enIci <= 2)): return(<>El estudiante podría sugerir un estilo de respuesta <span>eficaz</span> e <span>impulsivo</span></>);
            case ((enNHits >= 3 && enNHits <= 9) && (enIci >= 3 && enIci <= 5)): return(<>El estudiante podría sugerir un estilo de respuesta <span>eficaz</span> y <span>no impulsivo</span></>);
            case ((enNHits >= 1 && enNHits <= 2) && (enIci >= 1 && enIci <= 2)): return(<>El estudiante podría sugerir un estilo de respuesta <span>ineficaz</span> e <span>impulsivo</span></>);
            case ((enNHits >= 1 && enNHits <= 2) && (enIci >= 3 && enIci <= 5)): return(<>El estudiante podría sugerir un estilo de respuesta <span>ineficaz</span> y <span>no impulsivo</span></>);
        }
    }

    // Muestra como tal la pantalla de resultados del test de percepción de diferencias
    return(
        <div className={styles.containerResults}>
            <div className={styles.resultsWrapper}>
                <div className={styles.titleInstructions}>
                    <p>Resultados</p>
                </div>
                <div className={styles.containerAn}>
                <table>
                    <tbody>
                        <tr className={styles.headTable}>
                            <td>Estudiante</td>
                            <td>Edad</td>
                            <td>Aciertos</td>
                            <td>Errores</td>
                            <td>Aciertos netos</td>
                            <td>ICI</td>
                            <td>Tiempo empleado</td>
                        </tr>
                        <tr className={styles.bodyTable}>
                            <td>{userTest.nombre}</td>
                            <td>{userTest.edad}</td>
                            <td>{hitCount}</td>
                            <td>{errorCount}</td>
                            <td>{(hitCount - errorCount)}</td>
                            <td>{ici}</td>
                            <td>{180 - totalTimeT2}s</td>
                        </tr>
                    </tbody>
                </table>
                <button className={styles.buttonFacesT} onClick={getResults}>Generar y guardar reporte</button>
                {
                    Object.entries(results).length > 0 && (                        
                                <>
                                    <table style={{marginBottom: "0"}}>
                                        <tbody>
                                            <tr className={styles.headTable}>
                                                <td></td>
                                                <td>PD</td>
                                                <td>Eneatipo</td>
                                                <td>Resultados</td>
                                            </tr>
                                            <tr className={styles.headTable}>
                                                <td>Aciertos</td>
                                                <td className={styles.bodyTable}>{hitCount}</td>
                                                <td className={styles.bodyTable}>{results.hits}</td>
                                                <td className={styles.bodyTable} style={{backgroundColor: getColorByResultValue[getResultsByValue(results.hits)]}}>{getResultsByValue(results.hits)}</td>
                                            </tr>
                                            <tr className={styles.headTable}>
                                                <td>Errores</td>
                                                <td className={styles.bodyTable}>{errorCount}</td>
                                                <td className={styles.bodyTable}>{results.errors}</td>
                                                <td className={styles.bodyTable} style={{backgroundColor: getColorByResultValue[getResultsByValue(results.errors)]}}>{getResultsByValue(results.errors)}</td>
                                            </tr>
                                            <tr className={styles.headTable}>
                                                <td>Aciertos netos</td>
                                                <td className={styles.bodyTable}>{(hitCount - errorCount)}</td>
                                                <td className={styles.bodyTable}>{results.net_hits}</td>
                                                <td className={styles.bodyTable} style={{backgroundColor: getColorByResultValue[getResultsByValue(results.net_hits)]}}>{getResultsByValue(results.net_hits)}</td>
                                            </tr>
                                            <tr className={styles.headTable}>
                                                <td>ICI</td>
                                                <td className={styles.bodyTable}>{ici}</td>
                                                <td className={styles.bodyTable}>{results.ici}</td>
                                                <td className={styles.bodyTable} style={{backgroundColor: getColorByResultValue[getResultsByValue(results.ici)]}}>{getResultsByValue(results.ici)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className={styles.containerAnalysis}>
                                        <h2>Interpretación de resultados</h2>
                                        <div className={styles.containerCardsAn}>
                                            <div className={styles.containerHits}>
                                                <h4>Aciertos</h4>
                                                <p><span>{getResultsByValue(results.hits)}: </span>{getHitAnalysis(results.hits)}</p>
                                            </div>
                                            <div className={styles.containerHits}>
                                                <h4>Errores</h4>
                                                <p><span>{getResultsByValue(results.errors)}: </span>{getErrorAnalysis(results.errors)}</p>
                                            </div>
                                        </div>
                                        <div className={styles.containerCardsAn}>
                                            <div className={styles.containerHits}>
                                                <h4>Rendimiento</h4>
                                                <p><span>{getResultsByValue(results.net_hits)}: </span>{getPerformanceAnalysis(results.net_hits)}</p>
                                            </div>
                                            <div className={styles.containerHits}>
                                                <h4>Indice de control de la impulsividad (ICI)</h4>
                                                <p><span>{getResultsByValue(results.ici)}: </span>{getICIAnalysis(results.ici)}</p>
                                            </div>
                                        </div>
                                        <div className={styles.containerCardsAn}>
                                            <div className={styles.containerHits}>
                                                <h4>Aciertos x ICI</h4>
                                                <p>{getHitsxIci(results.hits, results.ici)}</p>
                                            </div>
                                            <div className={styles.containerHits}>
                                                <h4>Rendimiento x ICI</h4>
                                                <p>{getNetHitsxIci(results.net_hits, results.ici)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                }
                <button className={styles.buttonFacesT} onClick={returnHome}>Volver al inicio</button>
                </div>
            </div>
        </div>
    );
};

export default EndTest;