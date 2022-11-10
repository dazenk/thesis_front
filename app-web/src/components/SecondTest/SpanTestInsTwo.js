import React, { useContext, useEffect, useState } from 'react';
import styles from "./SpanTest.module.css";
import ScreenContext from '../ScreenContext';
import { useNavigate } from 'react-router-dom';

const SpanTestInsTwo = () => {
    
    const {
        imgSpan
    } = useContext(ScreenContext);

    const navigate = useNavigate();
    const [time, setTime] = useState(0);

    const handleClick = (correcto) => {
        const resultado = document.getElementById('result-text');
        const boton = document.getElementById('button-next-ins');
        const idInput = document.getElementById('testeo-1');
        const idInput2 = document.getElementById('testeo-2');
        idInput.disabled = true;
        idInput2.disabled = true;

        if (correcto == "wrong") {            
            resultado.innerText = "Puedes hacerlo mejor, debiste haber seleccionado la flor, pulsa el botón para continuar";
            resultado.style.color = "firebrick";
            resultado.style.display = "flex";
            boton.style.display = "inline-block";
        }

        if (correcto == "correct") {
            resultado.innerText = "Correcto, fue la flor, pulsa el botón para continuar";
            resultado.style.color = "seagreen";
            resultado.style.display = "flex";
            boton.style.display = "inline-block";
        }

    };

    const handleButton = () => {
        navigate("/SpanTestInsThree");
    };

    useEffect(() => {
        const interval = setInterval(() => {
          setTime((oldValue) => {
            const newValue = oldValue + 1;
    
            if (newValue === 6) {
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
        if (time == 5) {
            const question = document.getElementById('img-question');
            question.style.display = "none";
            const answer = document.getElementById('img-answer');
            answer.style.display = "flex";
        }
    }, [time]);

    return(
        <div className={styles.containerSpan}>
            <div className={styles.containerImgs}>
                <div id='img-question' style={{height: "400px", display: "flex", flexDirection: "column", justifyContent: "space-between", marginBottom: "200px"}}>
                    <p style={{fontSize: "16px", fontWeight: "400", color: "#403D58"}}>Recuerda la imagen:</p>
                    <img src={imgSpan[0].img_question} alt='img-span'/>
                </div>
                <div id='img-answer' style={{height: "400px", display: "none", flexDirection: "column", justifyContent: "space-between", marginBottom: "200px"}}>
                    <p style={{fontSize: "16px", fontWeight: "400", color: "#403D58"}}>¿Cuál imagen viste?:</p>
                    <div style={{display: "flex"}}>
                        <div className={styles.containerAnswerSpan}>
                            <label htmlFor={`testeo-1`} className={styles.imgLabelSpan2}>
                                <input type="checkbox" name="choice" id={`testeo-1`} value='1' onClick={() => handleClick('wrong')}/>
                                <img className={styles.spanImg} src={imgSpan[0].img_answer[0]} alt='img-span'/>
                                <p style={{margin: "0"}}>A</p>
                            </label>
                        </div>
                        <div className={styles.containerAnswerSpan}>
                            <label htmlFor={`testeo-2`} className={styles.imgLabelSpan2}>
                                <input type="checkbox" name="choice" id={`testeo-2`} value='2' onClick={() => handleClick('correct')}/>
                                <img className={styles.spanImg} src={imgSpan[0].img_answer[1]} alt='img-span'/>
                                <p style={{margin: "0"}}>B</p>
                            </label>
                        </div>                                             
                    </div>                    
                </div>
                <p id='result-text' className={styles.questionResponse}>Correcto, pulsa el botón para continuar</p>                
                <button id='button-next-ins' className={styles.questionButton} onClick={handleButton}>Siguiente</button>               
            </div>
        </div>
    );
};

export default SpanTestInsTwo;