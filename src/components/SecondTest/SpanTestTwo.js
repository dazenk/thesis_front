import React, { useContext, useState, useEffect } from 'react';
import styles from "./SpanTest.module.css";
import ScreenContext from '../ScreenContext';
import { useNavigate } from 'react-router-dom';

const SpanTestTwo = () => {

    // Arreglo que guarda el orden y las imágenes de los ítems de estímulo para el test de span de imágenes
    const question = [];

    // Arreglo que guarda el orden y las imágenes de los ítems de respuesta para el test de span de imágenes
    const answer = [];

    // Arreglo que guarda letras del abecedario para mostrarlas en la parte inferior de las imágenes de los ítems de respuesta
    const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

    // Estado que se usa para guardar la posición de la imagen que seleccionó el alumnos
    const [contador, setContador] = useState(0);

    // Estado que se encarga de guardar el índice que corresponde al item que se está mostrando en pantalla
    const [testImage, setTestImage] = useState(6);

    // Estado que va guardando las respuestas (imágenes) que ha seleccionado el alumno
    const [listaCorrecta, setListaCorrecta] = useState([]);

    // Arreglo de objetos que guarda la respectiva secuencia de estímulos y respuestas que corresponde a cada ítem
    const pPoints = [
        {rimse: 2, rimsr: 4},
        {rimse: 2, rimsr: 4},
        {rimse: 2, rimsr: 6},
        {rimse: 2, rimsr: 6},
        {rimse: 3, rimsr: 6},
        {rimse: 3, rimsr: 6},
        {rimse: 3, rimsr: 6},
        {rimse: 3, rimsr: 6},
        {rimse: 3, rimsr: 6},
        {rimse: 3, rimsr: 8},
        {rimse: 4, rimsr: 6},
        {rimse: 4, rimsr: 6},
        {rimse: 4, rimsr: 8},
        {rimse: 4, rimsr: 8},
        {rimse: 4, rimsr: 10},
        {rimse: 4, rimsr: 10},
        {rimse: 5, rimsr: 8},
        {rimse: 5, rimsr: 8},
        {rimse: 5, rimsr: 10},
        {rimse: 6, rimsr: 12},
        {rimse: 6, rimsr: 12},
        {rimse: 7, rimsr: 12},
        {rimse: 8, rimsr: 12},
    ]

    // Arreglo de arreglos que guarda el orden correcto en que tienen que ser seleccionadas las respuestas por el alumno
    const correctList = [
        ['item-3', 'item-4'],
        ['item-2', 'item-1'],
        ['item-1', 'item-5'],
        ['item-6', 'item-2'],
        ['item-1', 'item-2', 'item-5'],
        ['item-2', 'item-5', 'item-4'],
        ['item-4', 'item-6', 'item-3'],
        ['item-1', 'item-6', 'item-5'],
        ['item-6', 'item-3', 'item-2'],
        ['item-2', 'item-8', 'item-3'],
        ['item-1', 'item-3', 'item-5', 'item-6'],
        ['item-2', 'item-3', 'item-6', 'item-4'],
        ['item-7', 'item-2', 'item-4', 'item-6'],
        ['item-7', 'item-4', 'item-2', 'item-1'],
        ['item-3', 'item-2', 'item-9', 'item-8'],
        ['item-4', 'item-7', 'item-1', 'item-9'],
        ['item-5', 'item-6', 'item-8', 'item-2', 'item-1'],
        ['item-5', 'item-7', 'item-2', 'item-3', 'item-8'],
        ['item-6', 'item-2', 'item-9', 'item-8', 'item-4'],
        ['item-1', 'item-3', 'item-6', 'item-8', 'item-11', 'item-5'],
        ['item-12', 'item-2', 'item-8', 'item-9', 'item-10', 'item-4'],
        ['item-8', 'item-2', 'item-12', 'item-7', 'item-3', 'item-5', 'item-10'],
        ['item-7', 'item-1', 'item-11', 'item-3', 'item-6', 'item-4', 'item-9', 'item-2'],
    ];

    // Estado que guarda el tiempo de aparicicón de los ítems de estímulo en pantalla
    const [timeQuestion, setTimeQuestion] = useState(0);

    // Estado que guarda el tiempo de aparicicón de los ítems de pregunta en pantalla
    const [timeAnswer, setTimeAnswer] = useState(0);

    // Estado que maneja si se están mostrando los ítems de pregunta o los ítems de respuesta
    const [viewChange, setViewChange] = useState(false);

    //Estados que controlan que no se pueda seleccionar más de una opción para la primera parte del test de span de imágenes
    const [testItem, setTestItem] = useState([]);
    const [testInput, setTestInput] = useState([]);

    // Estado que controla si ya se seleccionó la imagen de respuesta correcta
    const [clickedTwo, setClickedTwo] = useState(false);
    const incluido = [];
    var puntua = false;

    const navigate = useNavigate();

    // Trae los datos desde "ScreenContext" que se requieren para este archivo
    const {
        imgSpan,
        points,
        setPoints,
        processPoints,
        setProcessPoints
    } = useContext(ScreenContext);

    // Llena arreglo de items de estímulos
    imgSpan.map((it, ind) => {
        question.push(it.img_question)
        return 0
    });

    // Llenar arreglo de ítems de respuestas
    imgSpan.map((it, ind) => {
        answer.push(it.img_answer)
        return 0
    });    
    
    // Controla el tiempo de aparición de los ítems de estímulos
    useEffect(() => {
        const interval = setInterval(() => {
          setTimeQuestion((oldValue) => {
            const newValue = oldValue + 1;
    
            if (newValue === 7) {
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

    // Controla el tiempo de aparición de los ítems de respuestas
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

    // Oculta los ítems de estímulos y muestra los ítems de respuestas correspondientes
    useEffect(() => {
        if (timeQuestion == 6) {
            const question = document.getElementById('question');
            const answer = document.getElementById('answer');            
            setViewChange(!viewChange);
            question.style.display = "none";
            answer.style.display = "flex";
        }        
    }, [timeQuestion])

    // Oculta los ítems de respuestas y muestra los ítems de estímulos correspondientes
    useEffect(() => {
        if (JSON.stringify(correctList[contador]) === JSON.stringify(listaCorrecta)) {
            setProcessPoints({...processPoints, ['rimse']: pPoints[contador].rimse, ['rimsr']: pPoints[contador].rimsr, ['item']: (contador+4)});
            setPoints(points + 2);
        } else if (correctList[contador].length == listaCorrecta.length) {          
            listaCorrecta.forEach((item, i) => {
                if (correctList[contador].includes(item)) {
                    incluido.push(true);                    
                } else {
                    incluido.push(false);
                }
            })
            puntua = incluido.every(i => i == true);
            if (puntua) {
                setPoints(points + 1);
            }
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
    }, [timeAnswer])

    // Navegar a la pantalla de resultados del test de span de imágenes
    useEffect(() => {
        if (testImage == 29) {
            navigate("/SpanTestEnd", { replace: true });
        }
    }, [testImage])

    // Función que controla la puntución que va obteniendo el alumno a través de sus clics
    const handleClick = (idItem, idInput) => {
        setTestItem([...testItem, idItem]);
        setTestInput([...testInput, idInput]);
        setListaCorrecta([...listaCorrecta, idItem]);
        const input = document.getElementById(idInput);
        input.disabled = true;
    };

    // Muestra como tal la pantalla de la segunda parte de la prueba del test de span de imágenes
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

export default SpanTestTwo;