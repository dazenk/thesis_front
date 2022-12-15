import React, { useContext, useEffect, useState } from 'react';
import styles from "./SpanTest.module.css";
import ScreenContext from '../ScreenContext';
import { useNavigate } from 'react-router-dom';

const SpanTestInsSix = () => {
    
    // Trae los datos desde "ScreenContext" que se requieren para este archivo
    const {
        imgSpan
    } = useContext(ScreenContext);

    const navigate = useNavigate();
    // Estado que guarda el tiempo que aparece el item de estímulo en pantalla
    const [time, setTime] = useState(0);

    // Arreglo que guarda el orden correcto en que tienen que ser seleccionadas las respuestas por el alumno
    const correctList = ['item-4', 'item-1'];

    // Arreglo que guarda los ítems de respuesta que no fueron seleccionados por el alumno para deshabilitarlos
    const compareList = [];

    // Arreglo de objetos que guarda el ítem de respuesta y el id del input al que corresponde respectivamente
    const completeList = [
        {
            item: 'item-1',
            input: 'testeo-1'
        },
        {
            item: 'item-2',
            input: 'testeo-2'
        },
        {
            item: 'item-3',
            input: 'testeo-3'
        },
        {
            item: 'item-4',
            input: 'testeo-4'
        },
        {
            item: 'item-5',
            input: 'testeo-5'
        },
    ];

    // Arreglo que maneja en qué ítems de respuesta se ha hecho clic
    const selectedList = [];

    // Arreglo que maneja en qué input de los ítems de respuesta se ha hecho clic
    const selectedInputList = [];

    // Estados que guardan los ítems de respuesta que va seleccionando el alumno
    const [listaCorrecta, setListaCorrecta] = useState([]);
    const [listaCorrecta2, setListaCorrecta2] = useState([]);

    // Función para navegar a la segunda pantalla de la segunda parte de instrucciones del test de span de imágenes
    const handleButton = () => {
        navigate("/SpanTestInsSeven");
    };

    // Va sumando segundos al tiempo de aparición de los ítems de estímulos en pantalla
    useEffect(() => {
        const interval = setInterval(() => {
          setTime((oldValue) => {
            const newValue = oldValue + 1;
    
            if (newValue === 7) {
              clearInterval(interval);
            }
    
            return newValue;
          })
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    // Se encarga de mostrar ls ítems de respuesta y ocultar los ítems de estímulo una vez hayan pasado 6 segundos
    useEffect(() => {
        if (time == 6) {
            const question = document.getElementById('img-question');
            question.style.display = "none";
            const answer = document.getElementById('img-answer');
            answer.style.display = "flex";
        }
    }, [time]);

    // Compara si el alumno seleccionó en orden correcto o no los ítems de respuesta correspondientes
    useEffect(() => {
        const resultado = document.getElementById('result-text');
        const boton = document.getElementById('button-next-ins');
        if (JSON.stringify(correctList) === JSON.stringify(listaCorrecta)) {
            resultado.innerText = "Correcto, seleccionaste las imágenes en el orden correcto, pulsa el botón para continuar";
            resultado.style.color = "seagreen";
            resultado.style.display = "flex";
            boton.style.display = "inline-block";
        } else if ((JSON.stringify(correctList) !== JSON.stringify(listaCorrecta)) && listaCorrecta.length == correctList.length) {
            resultado.innerText = "Debiste haber seleccionado la manzana y después la flor, pulsa el botón para continuar";
            resultado.style.color = "firebrick";
            resultado.style.display = "flex";
            boton.style.display = "inline-block";
        }
        if (listaCorrecta.length == 2) {
            const filtro = completeList.map((it) => {
                compareList.push(it.input);
                return 0
            })
            listaCorrecta2.forEach((item) => {
                for (let index in compareList) {
                    if (compareList[index] == item) {
                        compareList.splice(index, 1)
                    }
                }
            })
            const i1 = document.getElementById(compareList[0]);
            const i2 = document.getElementById(compareList[1]);
            const i3 = document.getElementById(compareList[2]);
            i1.disabled = true;            
            i2.disabled = true;
            i3.disabled = true;
        }

    }, [listaCorrecta])

    // Función que controla el clic que hizo el alumno encima del ítem de respuesta correspondiente
    const handleClick = (id, idInput) => {
        selectedList.push(id);
        selectedInputList.push(idInput);
        setListaCorrecta([...listaCorrecta, id]);
        setListaCorrecta2([...listaCorrecta2, idInput]);
        const input = document.getElementById(idInput);
        input.disabled = true;
    }

    // Muestra como tal la segunda pantalla de la dinámica de ejemplo de la segunda parte de instrucciones del test de span de imágenes
    return(
        <div className={styles.containerSpan}>
            <div className={styles.containerImgs}>
                <div id='img-question' style={{height: "400px", display: "flex", flexDirection: "column", justifyContent: "space-between", marginBottom: "200px"}}>
                    <p style={{fontSize: "16px", fontWeight: "400", color: "#403D58"}}><b>Ejemplo 2:</b> Recuerda las imágenes y su orden:</p>
                    <div>
                        <img src={imgSpan[5].img_question[0]} alt='img-span'/>
                        <img src={imgSpan[5].img_question[1]} alt='img-span'/>
                    </div>                                   
                </div>
                <div id='img-answer' style={{height: "400px", display: "none", flexDirection: "column", justifyContent: "space-between", marginBottom: "200px"}}>
                    <p style={{fontSize: "16px", fontWeight: "400", color: "#403D58"}}>Selecciona las imágenes en el orden que las viste:</p>
                    <div>
                        <form className={styles.formSelectSpan}>
                            <div style={{position: "relative", display: "flex", flexDirection: "column"}}>
                                <label htmlFor={`testeo-1`} className={styles.imgLabelSpan2}>
                                    <input type="checkbox" name="choice" id={`testeo-1`} value="1" onClick={() => handleClick(`item-1`, `testeo-1`)}/>
                                    <img className={styles.spanImg} src={imgSpan[5].img_answer[0]} alt='img-span'/>
                                    <p style={{margin: "0"}}>A</p>                                          
                                </label>
                            </div>
                            <div style={{position: "relative", display: "flex", flexDirection: "column"}}>
                                <label htmlFor={`testeo-2`} className={styles.imgLabelSpan2}>
                                    <input type="checkbox" name="choice" id={`testeo-2`} value="2" onClick={() => handleClick(`item-2`, `testeo-2`)}/>
                                    <img className={styles.spanImg} src={imgSpan[5].img_answer[1]} alt='img-span'/>
                                    <p style={{margin: "0"}}>B</p>                                          
                                </label>
                            </div>                            
                            <div style={{position: "relative", display: "flex", flexDirection: "column"}}>
                                <label htmlFor={`testeo-3`} className={styles.imgLabelSpan2}>
                                    <input type="checkbox" name="choice" id={`testeo-3`} value="3" onClick={() => handleClick(`item-3`, `testeo-3`)}/>
                                    <img className={styles.spanImg} src={imgSpan[5].img_answer[2]} alt='img-span'/>
                                    <p style={{margin: "0"}}>C</p>                                          
                                </label>
                            </div>                            
                            <div style={{position: "relative", display: "flex", flexDirection: "column"}}>
                                <label htmlFor={`testeo-4`} className={styles.imgLabelSpan2}>
                                    <input type="checkbox" name="choice" id={`testeo-4`} value="4" onClick={() => handleClick(`item-4`, `testeo-4`)}/>
                                    <img className={styles.spanImg} src={imgSpan[5].img_answer[3]} alt='img-span'/>
                                    <p style={{margin: "0"}}>D</p>                                          
                                </label>
                            </div>                            
                            <div style={{position: "relative", display: "flex", flexDirection: "column"}}>
                                <label htmlFor={`testeo-5`} className={styles.imgLabelSpan2}>
                                    <input type="checkbox" name="choice" id={`testeo-5`} value="5" onClick={() => handleClick(`item-5`, `testeo-5`)}/>
                                    <img className={styles.spanImg} src={imgSpan[5].img_answer[4]} alt='img-span'/>
                                    <p style={{margin: "0"}}>E</p>                                          
                                </label>
                            </div>                            
                        </form>
                    </div>                    
                </div>
                <p id='result-text' className={styles.questionResponse}>Correcto, pulsa el botón para continuar</p>                
                <button id='button-next-ins' className={styles.questionButton} onClick={handleButton}>Siguiente</button>               
            </div>
        </div>
    );
};

export default SpanTestInsSix;