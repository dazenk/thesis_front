import React, { useContext, useState, useEffect } from 'react';
import styles from "./SpanTest.module.css";
import ScreenContext from '../ScreenContext';
import { useNavigate } from 'react-router-dom';

const SpanTest = () => {

    const question = [];
    const answer = [];
    const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

    const [contador, setContador] = useState(0);
    const [testImage, setTestImage] = useState(1);
    const [listaCorrecta, setListaCorrecta] = useState([]);
    const correctList = [
        ['item-1'],
        ['item-3'],
        ['item-5']
    ];
    const [timeQuestion, setTimeQuestion] = useState(0);
    const [timeAnswer, setTimeAnswer] = useState(0);
    const [viewChange, setViewChange] = useState(false);

    const [testItem, setTestItem] = useState([]);
    const [testInput, setTestInput] = useState([]);

    const [clickedTwo, setClickedTwo] = useState(false);

    const navigate = useNavigate();

    const {
        imgSpan,
        points,
        setPoints,
        processPoints,
        setProcessPoints
    } = useContext(ScreenContext);

    // Llenar arreglo de preguntas
    imgSpan.map((it, ind) => {
        question.push(it.img_question)
        return 0
    });

    // Llenar arreglo de respuestas
    imgSpan.map((it, ind) => {
        answer.push(it.img_answer)
        return 0
    });    
    
    // Tiempo pregunta
    useEffect(() => {
        const interval = setInterval(() => {
          setTimeQuestion((oldValue) => {
            const newValue = oldValue + 1;
    
            if (newValue === 6) {
              clearInterval(interval);
              setTimeQuestion(0);
            }
    
            return newValue;
          })
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [viewChange]);

    // Tiempo respuesta
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeAnswer((oldValue) => {
              const newValue = oldValue + 1;
      
              if (newValue === 31 || clickedTwo) {
                clearInterval(interval);
                setTimeAnswer(0);
                setClickedTwo(false);
              }
      
              return newValue;
            })
          }, 1000);
          return () => {
              clearInterval(interval);
          };
    }, [viewChange]);

    // Ocultar pregunta, mostrar opciones de respuesta
    useEffect(() => {
        if (timeQuestion == 5) {
            const question = document.getElementById('question');
            const answer = document.getElementById('answer');            
            setViewChange(!viewChange);
            question.style.display = "none";
            answer.style.display = "flex";
        }        
    }, [timeQuestion])

    // Ocultar opciones de respuesta, mostrar pregunta
    useEffect(() => {
        if (JSON.stringify(correctList[contador]) === JSON.stringify(listaCorrecta)) {
            console.log('iguales');
            if (contador == 0) setProcessPoints({...processPoints, ['rimse']: 1, ['rimsr']: 2, ['item']: (contador+1)})
            if (contador == 1) setProcessPoints({...processPoints, ['rimse']: 1, ['rimsr']: 4, ['item']: (contador+1)})
            if (contador == 2) setProcessPoints({...processPoints, ['rimse']: 1, ['rimsr']: 5, ['item']: (contador+1)})
            setPoints(points + 1);
        }
        if ((listaCorrecta.length == question[testImage].length) || (timeAnswer == 30)) {            
            document.getElementById('question').style.display = "flex";
            document.getElementById('answer').style.display = "none";
            setTestImage(testImage + 1);
            setViewChange(!viewChange);
            setClickedTwo(true);
            testInput.forEach((item) => {
                const itemInput = document.getElementById(item);
                itemInput.disabled = false;
                itemInput.checked = false;
            })
            setContador(contador + 1);
            setListaCorrecta([]);
            setTestItem([]);
            setTestInput([]); 
        }
        console.log(`contador: ${contador}`)
    }, [timeAnswer])

    // Navegar hacia la otra parte del test
    useEffect(() => {
        if (testImage == 4) {
            navigate("/SpanTestInsFour");
        }
    }, [testImage])

    // Clic para puntuar
    const handleClick = (idItem, idInput) => {
        setTestItem([...testItem, idItem]);
        setTestInput([...testInput, idInput]);
        setListaCorrecta([...listaCorrecta, idItem]);
        const input = document.getElementById(idInput);
        input.disabled = true;
    };

    /* console.log(points); */
    console.log(processPoints);

    return (
        <div className={styles.containerSpan}>
            <div className={styles.containerImgs2}>
                <div id='question' style={{display: "flex"}} className={styles.questionDiv}>
                    {
                        question[testImage].map((it, ind) => {
                            return(
                                <img src={it} key={ind}/>
                            )
                        })
                    }
                </div>
                <div id='answer' style={{display: "none"}} className={styles.answerDiv}>
                    <form style={{display: "flex", flexWrap: "wrap", justifyContent: "center", height: "390px", alignItems: "center"}}>
                        {
                            answer[testImage].map((it, ind) => {
                                return(
                                    <div key={ind} id={abc[ind]} className={styles.answerImages2}>
                                        <label htmlFor={`testeo-${ind+1}`} className={styles.imgLabelSpan2}>
                                            {/* <div className={styles.testSpan} id={`item-${ind+1}`}></div> */}
                                            <input type="checkbox" name="choice" id={`testeo-${ind+1}`} value={ind+1} onClick={() => handleClick(`item-${ind+1}`, `testeo-${ind+1}`)}/>
                                            <img className={styles.spanImg} src={it} alt='img-span'/>
                                            <p style={{margin: "0"}}>{abc[ind]}</p>                                          
                                        </label>
                                    </div>                          
                                )
                            })
                        }
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SpanTest;