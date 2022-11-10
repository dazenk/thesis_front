import React, { useContext, useEffect, useState } from 'react';
import styles from './HomeScreen.module.css';
import { getUserResults } from '../utils/database';
import ScreenContext from './ScreenContext';
import { useNavigate } from 'react-router-dom';

const Results = () => {

    const {
        user,
        dataSpan,
        dataCaras
    } = useContext(ScreenContext);

    const [selectValue, setSelectValue] = useState("todas");
    const [data, setData] = useState([]);
    const [typeTest, setTypeTest] = useState("caras");
    const [averageData, setAverageData] = useState({errors: 0, hits: 0, net_hits: 0, ici: 0});
    const [averageDataSpan, setAverageDataSpan] = useState({RE: 0, rimse: 0, rimsr: 0});

    const navigate = useNavigate();

    const returnHome = () => {        
        navigate("/");
    };
    
    const getAverage = (data) => {
        let dataAverage = {errors: 0, hits: 0, net_hits: 0, ici: 0}
        data.forEach(element => {
            dataAverage.errors += element.resultData.errors;
            dataAverage.hits += element.resultData.hits;
            dataAverage.net_hits += element.resultData.net_hits;
            dataAverage.ici += element.resultData.ici;
        });
        if (data.length > 0) {
            dataAverage.errors = Math.round(dataAverage.errors / data.length);
            dataAverage.hits = Math.round(dataAverage.hits / data.length);
            dataAverage.net_hits = Math.round(dataAverage.net_hits / data.length);
            dataAverage.ici = Math.round(dataAverage.ici / data.length);
        }        
        return dataAverage;
    }

    const getAverageSpan = (data) => {
        let dataAverage = {RE: 0, rimse: 0, rimsr: 0}
        data.forEach(element => {
            dataAverage.RE += element.resultData.RE;
            dataAverage.rimse += element.testResult.rimse;
            dataAverage.rimsr += element.testResult.rimsr;
        });
        if (data.length > 0) {
            dataAverage.RE = Math.round(dataAverage.RE / data.length);
            dataAverage.rimse = Math.round(dataAverage.rimse / data.length);
            dataAverage.rimsr = Math.round(dataAverage.rimsr / data.length);
        }        
        return dataAverage;
    }

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

    const getHitAnalysis = (eneatipo) => {
        switch (true) {
            case (eneatipo == 1): return `El grupo de estudiantes logra obtener un número muy bajo aciertos a nivel general`;
            case (eneatipo == 2): return `El grupo de estudiantes logra obtener un número bajo de aciertos a nivel general`;
            case (eneatipo >= 3 && eneatipo <= 7): return `El grupo de estudiantes logra obtener un número de aciertos normal a nivel general`;
            case (eneatipo == 8): return `El grupo de estudiantes logra obtener un número alto de aciertos a nivel general`;
            case (eneatipo == 9): return `El grupo de estudiantes logra obtener un número muy alto de aciertos a nivel general`;
        }
    }

    const getPerformanceAnalysis = (eneatipo) => {
        switch (true) {
            case (eneatipo == 1): return "El rendimiento de los alumnos es muy bajo, poseen una baja capacidad visoperceptiva y atencional, no prestan suficiente atención a los detalles";
            case (eneatipo == 2): return "El rendimiento de los alumnos es bajo, cuentan con una baja capacidad visoperceptiva y atencional, no prestan suficiente atención a los detalles";
            case (eneatipo >= 3 && eneatipo <= 7): return "El rendimiento de los alumnos se encuentra dentro de lo normal, tienen una adecuada capacidad visoperceptiva y atencional";
            case (eneatipo == 8): return "El rendimiento de los alumnos es alto, se caracterizan por procesar rápido los detalles de estímulos visuales y son precisos en los juicios que realizan";
            case (eneatipo == 9): return "El rendimiento de los alumnos es muy alto, tienen buenas habilidades para procesar rápido los detalles de estímulos visuales y son precisos en los juicios que realizan";
        }
    }

    const getICIAnalysis = (eneatipo) => {
        switch (true) {
            case (eneatipo == 1): return `El grupo de alumnos posee un control de la impulsividad muy por debajo de la media, carecen de control inhibitorio`;
            case (eneatipo == 2): return `El grupo de alumnos posee un control de la impulsividad por debajo de la media, tienen poco control inhibitorio`;
            case (eneatipo == 3): return `El grupo de alumnos posee un control de la impulsividad adecuado, tienen control inhibitorio normal`;
            case (eneatipo == 4): return `El grupo de alumnos posee un control de la impulsividad bueno, cuentan con buen control inhibitorio`;
            case (eneatipo == 5): return `El grupo de alumnos posee un control de la impulsividad muy bueno, logran tener un gran control inhibitorio`;
        }
    }

    const getErrorAnalysis = (eneatipo) => {
        switch (true) {
            case (eneatipo == 4 && selectValue != "13"): return "El grupo de estudiantes no comete errores";
            case (eneatipo == 5 && selectValue == "13"): return "El grupo de estudiantes no comete errores";
            case (eneatipo == 5 && selectValue != "13"): return `El grupo de estudiantes comete un número bajo de errores a nivel general`;
            case (eneatipo == 6): return `El grupo de estudiantes comete un número normal de errores a nivel general`;
            case (eneatipo == 7): return `El grupo de estudiantes comete un número normal de errores a nivel general`;
            case (eneatipo == 8): return `El grupo de estudiantes comete un número alto de errores a nivel general`;
            case (eneatipo == 9): return `El grupo de estudiantes comete un número elevado de errores a nivel general`;
        }
    }

    const getHitsxIci = (enHits, enIci) => {
        switch (true) {
            case ((enHits >= 3 && enHits <= 9) && (enIci >= 1 && enIci <= 2)): return(<>Los estudiantes podrían sugerir un subtipo <span>impulsivo</span> de problemas de atención</>);
            case ((enHits >= 1 && enHits <= 2) && (enIci >= 3 && enIci <= 5)): return(<>Los estudiantes podrían sugerir un subtipo <span>inatento</span> de problemas de atención</>);
            case ((enHits >= 1 && enHits <= 2) && (enIci >= 1 && enIci <= 2)): return(<>Los estudiantes podrían sugerir un subtipo <span>combinado</span> de problemas de atención</>);
            case ((enHits >= 3 && enHits <= 9) && (enIci >= 3 && enIci <= 5)): return(<>Los estudiantes podrían sugerir un subtipo de <span>rendimiento normal</span></>);
        }
    }

    const getNetHitsxIci = (enNHits, enIci) => {
        switch (true) {
            case ((enNHits >= 3 && enNHits <= 9) && (enIci >= 1 && enIci <= 2)): return(<>Los alumnos podrían sugerir un estilo de respuesta <span>eficaz</span> e <span>impulsivo</span></>);
            case ((enNHits >= 3 && enNHits <= 9) && (enIci >= 3 && enIci <= 5)): return(<>Los alumnos podrían sugerir un estilo de respuesta <span>eficaz</span> y <span>no impulsivo</span></>);
            case ((enNHits >= 1 && enNHits <= 2) && (enIci >= 1 && enIci <= 2)): return(<>Los alumnos podrían sugerir un estilo de respuesta <span>ineficaz</span> e <span>impulsivo</span></>);
            case ((enNHits >= 1 && enNHits <= 2) && (enIci >= 3 && enIci <= 5)): return(<>Los alumnos podrían sugerir un estilo de respuesta <span>ineficaz</span> y <span>no impulsivo</span></>);
        }
    }

    //SPANTEST
    const getResultsByValueSpan = (puntuacionEscalar) => {
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

    const getAnalysisSpan = (puntuacionEscalar) => {
        switch(true) {            
            case (puntuacionEscalar >= 17 && puntuacionEscalar <= 19): return `Los alumnos gozan de un rendimiento excelente, tienen una habilidad superior para identificar la información visual, mantener un completo registro temporal en su memoria y hacer uso de este para solucionar problemas`;
            case (puntuacionEscalar >= 14 && puntuacionEscalar <= 16): return `Los alumnos gozan de un rendimiento sobresaliente, tienen una muy buena habilidad para identificar información visual, mantener un amplio registro temporal en su memoria y hacer uso de este para solucionar problemas`;
            case (puntuacionEscalar >= 11 && puntuacionEscalar <= 13): return `Los alumnos disponen de un rendimiento mayor que el promedio, cuentan con una buena habilidad para identificar la información visual, mantener un óptimo registro temporal en su memoria y hacer uso de este para solucionar problemas`;
            case (puntuacionEscalar == 10): return `Los alumnos reflejan un rendimiento promedio, poseen una habilidad normal para identificar información visual, mantener un común registro temporal en memoria y hacer un buen uso de este para solucionar problemas`;
            case (puntuacionEscalar >= 7 && puntuacionEscalar <= 9): return `Los alumnos tienen un rendimiento un poco bajo del promedio, cuentan con cierta habilidad para identificar información visual, mantener un medio registro temporal en memoria y hacer uso de este para solucionar problemas`;
            case (puntuacionEscalar >= 4 && puntuacionEscalar <= 6): return `Los alumnos tienen un rendimiento bajo, pueden poseer problemas de distracción y discriminación visual, asimismo dificultades para mantener información en la mente y problemas de manipulación de la información en memoria de trabajo`;
            case (puntuacionEscalar >= 1 && puntuacionEscalar <= 3): return `Los alumnos poseen un rendimiento muy bajo, presentan problemas de distracción y discriminación visual, cuentan con una baja capacidad de almacenamiento de información en la mente y problemas de manipulación de la información en memoria de trabajo`;
        }
    };

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

    useEffect( async () => {
        let data = await getUserResults(user.email, selectValue, typeTest);
        setData(data);
        if (typeTest == "caras") setAverageData(getAverage(data))
        if (typeTest == "span") setAverageDataSpan(getAverageSpan(data))
    }, []);

    return(
        <div className={styles.containerResultsFilter}>
            <div className={styles.titleResults}>
                <p>Resumen de resultados</p>
                <button onClick={returnHome} className={styles.buttonBackResults}>Volver</button>

            </div>
            <div className={styles.containerFilter}>
                <div className={styles.containerInputsFilter}>
                    <div className={styles.inputFilter}>
                        <label htmlFor="results-1">Elige una edad:</label>
                        <select className={styles.dropdownOption} id="results-1" name="results-1" value={selectValue} onChange={async (evt) => {
                            setSelectValue(evt.target.value)
                            let age = evt.target.value;
                            let data 
                            if (isNaN(age)) {
                                data = await getUserResults(user.email, null, typeTest)                                
                            } else {
                                data = await getUserResults(user.email, parseInt(age), typeTest)
                            }
                            setData(data);
                            if (typeTest == "caras") setAverageData(getAverage(data))
                            if (typeTest == "span") setAverageDataSpan(getAverageSpan(data))
                        }}>
                            <option value="todas">Todas las edades</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                            <option value={13}>13</option>
                            {typeTest == "span" && <option value={14}>14</option>}
                            {typeTest == "span" && <option value={15}>15</option>}
                            {typeTest == "span" && <option value={16}>16</option>}
                        </select>
                    </div>
                    <div className={styles.inputFilter}>
                        <label htmlFor="results-2">Elige un test:</label>
                        <select className={styles.dropdownOption} id="results-2" name="results-2" value={typeTest} onChange={async (evt) => {                            
                            setTypeTest(evt.target.value)
                            let age = selectValue;
                            if (evt.target.value == "caras" && selectValue > 13) {
                                setSelectValue("todas");
                                age = "todas";
                            }                            
                            let data 
                            if (isNaN(age)) {
                                data = await getUserResults(user.email, null, evt.target.value)                                
                            } else {
                                data = await getUserResults(user.email, parseInt(age), evt.target.value)
                            }
                            setData(data)
                            if (evt.target.value == "caras") setAverageData(getAverage(data))
                            if (evt.target.value == "span") setAverageDataSpan(getAverageSpan(data))
                        }}>
                            {dataCaras != undefined && <option value="caras">Test Caras</option>}
                            {dataSpan != undefined && <option value="span">Test Span</option>}
                        </select>
                    </div>
                </div>                
                <>
                {data.length == 0 && 
                <div style={{display: "flex", height: "100%", alignItems: "center"}}>
                    <h2 style={{color: "#505173"}}>No se encontró información en la base de datos</h2>
                </div>
                }
                {typeTest == "caras" && data.length > 0 &&
                    <div style={{display: "flex", flexDirection: "column", width: "100%", alignItems: "center", overflowY: "scroll"}}>
                        <h2 style={{color: "#505173", marginTop: "20px", marginBottom: "0"}}>Promedio de resultados</h2>
                        <table className={styles.tableAll}>
                            <tbody>
                                <tr className={styles.headTable}>
                                    <td>Edad</td>
                                    <td>Aciertos</td>
                                    <td>Errores</td>
                                    <td>Aciertos netos</td>
                                    <td>ICI</td>
                                </tr>
                                <tr className={styles.bodyTable}>
                                    <td>{selectValue}</td>
                                    <td>{averageData.hits}</td>
                                    <td>{averageData.errors}</td>
                                    <td>{averageData.net_hits}</td>
                                    <td>{averageData.ici}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className={styles.containerAnalysis}>
                            <h2>Interpretación de resultados</h2>
                            <div className={styles.containerCardsAn}>
                                <div className={styles.containerHits}>
                                    <h4>Aciertos</h4>
                                    <p><span>{getResultsByValue(averageData.hits)}: </span>{getHitAnalysis(averageData.hits)}</p>
                                </div>
                                <div className={styles.containerHits}>
                                    <h4>Errores</h4>
                                    <p><span>{getResultsByValue(averageData.errors)}: </span>{getErrorAnalysis(averageData.errors)}</p>
                                </div>
                            </div>
                            <div className={styles.containerCardsAn}>
                                <div className={styles.containerHits}>
                                    <h4>Rendimiento</h4>
                                    <p><span>{getResultsByValue(averageData.net_hits)}: </span>{getPerformanceAnalysis(averageData.net_hits)}</p>
                                </div>
                                <div className={styles.containerHits}>
                                    <h4>Indice de control de la impulsividad (ICI)</h4>
                                    <p><span>{getResultsByValue(averageData.ici)}: </span>{getICIAnalysis(averageData.ici)}</p>                                
                                </div>
                            </div>
                            <div className={styles.containerCardsAn}>
                                <div className={styles.containerHits}>
                                    <h4>Aciertos x ICI</h4>
                                    <p>{getHitsxIci(averageData.hits, averageData.ici)}</p>
                                </div>
                                <div className={styles.containerHits}>
                                    <h4>Rendimiento x ICI</h4>
                                    <p>{getNetHitsxIci(averageData.net_hits, averageData.ici)}</p>
                                </div>
                            </div>
                        </div>
                        <h2 style={{color: "#505173", marginTop: "40px", marginBottom: "0"}}>Listado de registros</h2>
                        <>                            
                            <table className={styles.tableListFaces}>
                                <tbody>
                                    <tr className={styles.headTableListFaces}>
                                        <td>Estudiante</td>
                                        <td>Edad</td>
                                        <td>Aciertos</td>
                                        <td>Errores</td>
                                        <td>Aciertos netos</td>
                                        <td>ICI</td>
                                    </tr>
                                    {                                                                                
                                        data.map((item, i) => {
                                            if (item.studentData) {
                                                return(
                                                    <tr key={item.id} className={styles.bodyTableListFaces}>
                                                        <td>{item.studentData.name}</td>
                                                        <td>{item.studentData.age}</td>
                                                        <td>{item.resultData.hits}</td>
                                                        <td>{item.resultData.errors}</td>
                                                        <td>{item.resultData.net_hits}</td>
                                                        <td>{item.resultData.ici}</td>
                                                    </tr>
                                                )
                                            }                                            
                                        })
                                    }                                     
                                </tbody>
                            </table>                                
                        </>
                    </div>
                }
                {typeTest == "span" && data.length > 0 &&
                    <div style={{display: "flex", flexDirection: "column", width: "100%", alignItems: "center", overflowY: "scroll"}}>
                        <h2 style={{color: "#505173", marginTop: "20px", marginBottom: "0"}}>Promedio de resultados</h2>
                        <table className={styles.tableAll}>
                            <tbody>
                                <tr className={styles.headTable}>
                                    <td>Edad</td>
                                    <td>Puntuación escalar</td>
                                    <td>Secuencia de estímulos</td>
                                    <td>Secuencia de respuestas</td>
                                </tr>
                                <tr className={styles.bodyTable}>
                                    <td>{selectValue}</td>
                                    <td>{averageDataSpan.RE}</td>
                                    <td>{averageDataSpan.rimse}</td>
                                    <td>{averageDataSpan.rimsr}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className={styles.containerAnalysisSpan}>
                            <h2>Interpretación de resultados</h2>
                            <div className={styles.containerCardsAnSpan}>                                
                                <div className={styles.containerRiSpan}>
                                    <div className={styles.containerHitSpan}>
                                        <h4>Puntuación directa</h4>
                                        <p><span>{getResultsByValueSpan(averageDataSpan.RE)}: </span>{getAnalysisSpan(averageDataSpan.RE)}</p>
                                    </div>
                                    <div className={styles.containerHitSpan}>
                                        <h4>Secuencia de estímulos</h4>
                                        <p>La cantidad de secuencia de estímulos promedio del último ítem que pudieron recordar los alumnos
                                            de manera perfecta fue de <span>{averageDataSpan.rimse}</span>,
                                            obteniendo un puntaje <span>{getResultsRimseByValue(averageDataSpan.rimse)}</span>
                                        </p>
                                    </div>
                                    <div className={styles.containerHitSpan}>
                                        <h4>Secuencia de respuestas</h4>
                                        <p>La cantidad de secuencia de respuestas promedio del último ítem que lograron recordar los alumnos
                                            de manera perfecta fue de <span>{averageDataSpan.rimsr}</span>
                                        </p>
                                    </div>
                                </div>                                            
                            </div>
                        </div>                        
                        <h2 style={{color: "#505173", marginTop: "40px", marginBottom: "0"}}>Listado de registros</h2>
                        <>                            
                            <table className={styles.tableListFaces}>
                                <tbody>
                                    <tr className={styles.headTableListFaces}>
                                        <td>Estudiante</td>
                                        <td>Edad</td>
                                        <td>Puntuación</td>
                                        <td>Secuencia estímulos</td>
                                        <td>Secuencia respuestas</td>
                                    </tr>
                                    {                                                                                
                                        data.map((item, i) => {
                                            if (item.studentData) {
                                                return(
                                                    <tr key={item.id} className={styles.bodyTableListFaces}>
                                                        <td>{item.studentData.name}</td>
                                                        <td>{item.studentData.age}</td>
                                                        <td>{item.resultData.RE}</td>
                                                        <td>{item.testResult.rimse}</td>
                                                        <td>{item.testResult.rimsr}</td>
                                                    </tr>
                                                )
                                            }                                            
                                        })
                                    }                                     
                                </tbody>
                            </table>                                
                        </>
                    </div>            
                }
                </>             
            </div>
        </div>
    )
}

export default Results;