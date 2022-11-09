import React, { useState, useEffect, useContext } from 'react';
import ProgressBar from './ProgressBar/ProgressBar';
import styles from "./SymbolTest.module.css";
import ScreenContext from '../ScreenContext';
import { useNavigate } from "react-router-dom";
import imagenesSimbolos from '../../img/symbol_img/symbols';

const SymbolTest5 = () => {

    const [value, setValue] = useState(180);
    const navigate = useNavigate();
    /* const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);
    const [totalAnswers, setTotalAnswers] = useState([]);
    const [naturalScore, setNaturalScore] = useState(0); */

    const {
        timeTest,
        setTimeTest,
        answerCorrect5,
        setAnswerCorrect5
    } = useContext(ScreenContext);

    /* const [answerCorrect2, setAnswerCorrect2] = useState(answerCorrect.concat(['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'])); */

    useEffect(() => {
        const interval = setInterval(() => {
          setTimeTest((oldValue) => {
            const newValue = oldValue - 1;
    
            if (newValue === 0) {
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
        if (timeTest == 0) {
            navigate("/SymbolTestEnd", { replace: true });
        }
    }, [timeTest]);

      /* useEffect (() => {
        setCorrect(totalAnswers.filter(value => value == 'correct'));
        setWrong(totalAnswers.filter(value => value == 'incorrect'));
        setNaturalScore(correct.length - wrong.length);
      }, [totalAnswers]);

      console.log(correct.length);
      console.log(wrong.length);
      console.log(naturalScore); */

    const onClick = (option, e) => {
        const value = e.target.value;
        const id = e.target.id;
        let indice = id.slice(-1);
        let arreglo = answerCorrect5;
        console.log(indice);
        if (option && value == "1") {
            console.log("CORRECTO");
            arreglo[indice] = 'correct';
            setAnswerCorrect5(arreglo);
        }
        if (option && value == "2") {
            console.log("INCORRECTO");
            arreglo[indice] = 'incorrect';
            setAnswerCorrect5(arreglo);
        }
        if (!option && value == "2") {
            console.log("CORRECTO");
            arreglo[indice] = 'correct';
            setAnswerCorrect5(arreglo);
        }
        if (!option && value == "1") {
            console.log("INCORRECTO");
            arreglo[indice] = 'incorrect';
            setAnswerCorrect5(arreglo);
        }
        if (!answerCorrect5.includes('empty')) {
            navigate("/SymbolTestEnd", { replace: true });
        }
        console.log(answerCorrect5);
        /* console.log(answerCorrect.includes('empty')); */
    };

    /* const handleChange = event => {
        console.log('value is:', event.target.value);
    }; */

    return(
        <div className={styles.bodyContainer}>
            <div className={styles.wrapper}>
                {[...Array(15)].map((e, i) => {
                    return (
                        <div className={styles.wrapper2} key={i} id={i}>
                            {(i == 0) && <div className={styles.symbolContainer1}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[42].img} alt={'symbol'}/>
                            </div>}
                            {(i == 1) && <div className={styles.searchContainer1}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[42].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[42].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[42].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 2) && <div className={styles.answerContainer1}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_0" value="1" onClick={e => onClick(imagenesSimbolos[42].option, e)}/>
                                        <label htmlFor="symbolyes_0" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_0" value="2" onClick={e => onClick(imagenesSimbolos[42].option, e)}/>
                                        <label htmlFor="symbolno_0" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[1].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                </form>
                            </div>}
                            {(i == 3) && <div className={styles.symbolContainer1}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[43].img} alt={'symbol'}/>
                            </div>}
                            {(i == 4) && <div className={styles.searchContainer1}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[43].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[43].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[43].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 5) && <div className={styles.answerContainer1}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_1" value="1" onClick={e => onClick(imagenesSimbolos[43].option, e)}/>
                                        <label htmlFor="symbolyes_1" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_1" value="2" onClick={e => onClick(imagenesSimbolos[43].option, e)}/>
                                        <label htmlFor="symbolno_1" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[1].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                </form>
                            </div>}
                            {(i == 6) && <div className={styles.symbolContainer1}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[44].img} alt={'symbol'}/>
                            </div>}
                            {(i == 7) && <div className={styles.searchContainer1}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[44].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[44].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[44].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 8) && <div className={styles.answerContainer1}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_2" value="1" onClick={e => onClick(imagenesSimbolos[44].option, e)}/>
                                        <label htmlFor="symbolyes_2" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_2" value="2" onClick={e => onClick(imagenesSimbolos[44].option, e)}/>
                                        <label htmlFor="symbolno_2" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[1].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                </form>
                            </div>}
                            {(i == 9) && <div className={styles.symbolContainer1}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[45].img} alt={'symbol'}/>
                            </div>}
                            {(i == 10) && <div className={styles.searchContainer1}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[45].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[45].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[45].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 11) && <div className={styles.answerContainer1}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_3" value="1" onClick={e => onClick(imagenesSimbolos[45].option, e)}/>
                                        <label htmlFor="symbolyes_3" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_3" value="2" onClick={e => onClick(imagenesSimbolos[45].option, e)}/>
                                        <label htmlFor="symbolno_3" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[1].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                </form>
                            </div>}
                            {(i == 12) && <div className={styles.symbolContainer1}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[46].img} alt={'symbol'}/>
                            </div>}
                            {(i == 13) && <div className={styles.searchContainer1}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[46].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[46].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[46].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 14) && <div className={styles.answerContainer1}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_4" value="1" onClick={e => onClick(imagenesSimbolos[46].option, e)}/>
                                        <label htmlFor="symbolyes_4" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_4" value="2" onClick={e => onClick(imagenesSimbolos[46].option, e)}/>
                                        <label htmlFor="symbolno_4" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[1].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                </form>
                            </div>}
                        </div>
                    );
                })}
            </div>
            <div className={styles.headerTimeLeft}>
                <div className={styles.bodyTimeLeft}>
                    <ProgressBar value={timeTest} max={120}/>
                    <span>{timeTest} seg</span>       
                </div>
            </div>
        </div>
    );
};

export default SymbolTest5;