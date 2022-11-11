import React, { useContext, useEffect, useState } from 'react';
import styles from "./SpanTest.module.css";
import ScreenContext from '../ScreenContext';
import { useNavigate } from 'react-router-dom';

const SpanTestInsFive = () => {
    
    const {
        imgSpan
    } = useContext(ScreenContext);

    const navigate = useNavigate();
    const [time, setTime] = useState(0);
    const correctList = ['item-2', 'item-1'];
    const selectedList = [];
    const selectedInputList = [];
    const [listaCorrecta, setListaCorrecta] = useState([]);
    const [listaCorrecta2, setListaCorrecta2] = useState([]);

    const handleButton = () => {
        navigate("/SpanTestInsSix");
    };

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

    useEffect(() => {
        if (time == 6) {
            const question = document.getElementById('img-question');
            question.style.display = "none";
            const answer = document.getElementById('img-answer');
            answer.style.display = "flex";
        }
    }, [time]);

    useEffect(() => {
        const resultado = document.getElementById('result-text');
        const boton = document.getElementById('button-next-ins');
        if (JSON.stringify(correctList) === JSON.stringify(listaCorrecta)) {
            resultado.innerText = "Correcto, seleccionaste las imágenes en el orden correcto, pulsa el botón para continuar";
            resultado.style.color = "seagreen";
            resultado.style.display = "flex";
            boton.style.display = "inline-block";
        } else if ((JSON.stringify(correctList) !== JSON.stringify(listaCorrecta)) && listaCorrecta.length == correctList.length) {
            resultado.innerText = "Debiste haber seleccionado el calcetín y después la manzana, pulsa el botón para continuar";
            resultado.style.color = "firebrick";
            resultado.style.display = "flex";
            boton.style.display = "inline-block";
        }

    }, [listaCorrecta])

    const handleClick = (id, idInput) => {
        selectedList.push(id);
        selectedInputList.push(idInput);
        setListaCorrecta([...listaCorrecta, id]);
        setListaCorrecta2([...listaCorrecta, idInput]);
        const input = document.getElementById(idInput);
        input.disabled = true;
    }

    return(
        <div className={styles.containerSpan}>
            <div className={styles.containerImgs}>
                <div id='img-question' style={{height: "400px", display: "flex", flexDirection: "column", justifyContent: "space-between", marginBottom: "200px"}}>
                    <p style={{fontSize: "16px", fontWeight: "400", color: "#403D58"}}><b>Ejemplo 1:</b> Recuerda las imágenes y su orden:</p>
                    <div>
                        <img src={imgSpan[4].img_question[0]} alt='img-span'/>
                        <img src={imgSpan[4].img_question[1]} alt='img-span'/>
                    </div>                                   
                </div>
                <div id='img-answer' style={{height: "400px", display: "none", flexDirection: "column", justifyContent: "space-between", marginBottom: "200px"}}>
                    <p style={{fontSize: "16px", fontWeight: "400", color: "#403D58"}}>Selecciona las imágenes en el orden que las viste:</p>
                    <div>
                        <form className={styles.formSelectSpan}>
                            <div style={{position: "relative", display: "flex", flexDirection: "column"}}>
                                <label htmlFor={`testeo-1`} className={styles.imgLabelSpan2}>
                                    <input type="checkbox" name="choice" id={`testeo-1`} value="1" onClick={() => handleClick(`item-1`, `testeo-1`)}/>
                                    <img className={styles.spanImg} src={imgSpan[4].img_answer[0]} alt='img-span'/>
                                    <p style={{margin: "0"}}>A</p>                                          
                                </label>
                            </div>
                            <div style={{position: "relative", display: "flex", flexDirection: "column"}}>
                                <label htmlFor={`testeo-2`} className={styles.imgLabelSpan2}>
                                    <input type="checkbox" name="choice" id={`testeo-2`} value="2" onClick={() => handleClick(`item-2`, `testeo-2`)}/>
                                    <img className={styles.spanImg} src={imgSpan[4].img_answer[1]} alt='img-span'/>
                                    <p style={{margin: "0"}}>B</p>                                          
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

export default SpanTestInsFive;