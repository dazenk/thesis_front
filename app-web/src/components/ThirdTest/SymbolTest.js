import React, { useState, useEffect, useContext } from 'react';
import ProgressBar from './ProgressBar/ProgressBar';
import styles from "./SymbolTest.module.css";
import { useNavigate } from "react-router-dom";
import ScreenContext from '../ScreenContext';
import imagenesSimbolos from '../../img/symbol_img/symbols';

const SymbolTest = () => {

    /* const [value, setValue] = useState(27); */
    /* const [answerCorrect, setAnswerCorrect] = useState(['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']); */
    const navigate = useNavigate();

    const {
        timeTest,
        setTimeTest,
        answerCorrect,
        setAnswerCorrect
    } = useContext(ScreenContext);

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
        if (timeTest == 93) {
            navigate("/SymbolTestTwo", { replace: true });
        }
    }, [timeTest]);

    const onClick = (option, e) => {
        const value = e.target.value;
        const id = e.target.id;
        let indice = id.slice(-1);
        let arreglo = answerCorrect;
        console.log(indice);
        if (option && value == "1") {
            console.log("CORRECTO");
            arreglo[indice] = 'correct';
            setAnswerCorrect(arreglo);
        }
        if (option && value == "2") {
            console.log("INCORRECTO");
            arreglo[indice] = 'incorrect';
            setAnswerCorrect(arreglo);
        }
        if (!option && value == "2") {
            console.log("CORRECTO");
            arreglo[indice] = 'correct';
            setAnswerCorrect(arreglo);
        }
        if (!option && value == "1") {
            console.log("INCORRECTO");
            arreglo[indice] = 'incorrect';
            setAnswerCorrect(arreglo);
        }
        if (!answerCorrect.includes('empty')) {
            navigate("/SymbolTestTwo", { replace: true });
        }
        console.log(answerCorrect);
        console.log(answerCorrect.includes('empty'));
    };

    /* const handleChange = event => {
        console.log('value is:', event.target.value);
    }; */

    return(
        <div className={styles.bodyContainer}>
            <div className={styles.wrapper}>
                {[...Array(30)].map((e, i) => {
                    return (
                        <div className={styles.wrapper2} key={i} id={i}>
                            {(i == 0) && <div className={styles.symbolContainer1}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[2].img} alt={'symbol'}/>
                            </div>}
                            {(i == 1) && <div className={styles.searchContainer1}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[2].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[2].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[2].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 2) && <div className={styles.answerContainer1}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_0" value="1" onClick={e => onClick(imagenesSimbolos[2].option, e)}/>
                                        <label htmlFor="symbolyes_0" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_0" value="2" onClick={e => onClick(imagenesSimbolos[2].option, e)}/>
                                        <label htmlFor="symbolno_0" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[1].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                </form>
                            </div>}
                            {(i == 3) && <div className={styles.symbolContainer1}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[3].img} alt={'symbol'}/>
                            </div>}
                            {(i == 4) && <div className={styles.searchContainer1}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[3].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[3].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[3].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 5) && <div className={styles.answerContainer1}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_1" value="1" onClick={e => onClick(imagenesSimbolos[3].option, e)}/>
                                        <label htmlFor="symbolyes_1" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_1" value="2" onClick={e => onClick(imagenesSimbolos[3].option, e)}/>
                                        <label htmlFor="symbolno_1" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[1].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                </form>
                            </div>}
                            {(i == 6) && <div className={styles.symbolContainer1}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[4].img} alt={'symbol'}/>
                            </div>}
                            {(i == 7) && <div className={styles.searchContainer1}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[4].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[4].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[4].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 8) && <div className={styles.answerContainer1}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_2" value="1" onClick={e => onClick(imagenesSimbolos[4].option, e)}/>
                                        <label htmlFor="symbolyes_2" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_2" value="2" onClick={e => onClick(imagenesSimbolos[4].option, e)}/>
                                        <label htmlFor="symbolno_2" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[1].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                </form>
                            </div>}
                            {(i == 9) && <div className={styles.symbolContainer1}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[5].img} alt={'symbol'}/>
                            </div>}
                            {(i == 10) && <div className={styles.searchContainer1}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[5].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[5].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[5].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 11) && <div className={styles.answerContainer1}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_3" value="1" onClick={e => onClick(imagenesSimbolos[5].option, e)}/>
                                        <label htmlFor="symbolyes_3" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_3" value="2" onClick={e => onClick(imagenesSimbolos[5].option, e)}/>
                                        <label htmlFor="symbolno_3" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[1].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                </form>
                            </div>}
                            {(i == 12) && <div className={styles.symbolContainer1}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[6].img} alt={'symbol'}/>
                            </div>}
                            {(i == 13) && <div className={styles.searchContainer1}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[6].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[6].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[6].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 14) && <div className={styles.answerContainer1}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_4" value="1" onClick={e => onClick(imagenesSimbolos[6].option, e)}/>
                                        <label htmlFor="symbolyes_4" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_4" value="2" onClick={e => onClick(imagenesSimbolos[6].option, e)}/>
                                        <label htmlFor="symbolno_4" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[1].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                </form>
                            </div>}
                            {(i == 15) && <div className={styles.symbolContainer1}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[7].img} alt={'symbol'}/>
                            </div>}
                            {(i == 16) && <div className={styles.searchContainer1}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[7].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[7].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[7].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 17) && <div className={styles.answerContainer1}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_5" value="1" onClick={e => onClick(imagenesSimbolos[7].option, e)}/>
                                        <label htmlFor="symbolyes_5" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_5" value="2" onClick={e => onClick(imagenesSimbolos[7].option, e)}/>
                                        <label htmlFor="symbolno_5" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[1].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                </form>
                            </div>}
                            {(i == 18) && <div className={styles.symbolContainer1}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[8].img} alt={'symbol'}/>
                            </div>}
                            {(i == 19) && <div className={styles.searchContainer1}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[8].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[8].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[8].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 20) && <div className={styles.answerContainer1}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_6" value="1" onClick={e => onClick(imagenesSimbolos[8].option, e)}/>
                                        <label htmlFor="symbolyes_6" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_6" value="2" onClick={e => onClick(imagenesSimbolos[8].option, e)}/>
                                        <label htmlFor="symbolno_6" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[1].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                </form>
                            </div>}
                            {(i == 21) && <div className={styles.symbolContainer1}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[9].img} alt={'symbol'}/>
                            </div>}
                            {(i == 22) && <div className={styles.searchContainer1}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[9].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[9].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[9].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 23) && <div className={styles.answerContainer1}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_7" value="1" onClick={e => onClick(imagenesSimbolos[9].option, e)}/>
                                        <label htmlFor="symbolyes_7" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_7" value="2" onClick={e => onClick(imagenesSimbolos[9].option, e)}/>
                                        <label htmlFor="symbolno_7" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[1].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                </form>
                            </div>}
                            {(i == 24) && <div className={styles.symbolContainer1}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[10].img} alt={'symbol'}/>
                            </div>}
                            {(i == 25) && <div className={styles.searchContainer1}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[10].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[10].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[10].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 26) && <div className={styles.answerContainer1}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_8" value="1" onClick={e => onClick(imagenesSimbolos[10].option, e)}/>
                                        <label htmlFor="symbolyes_8" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_8" value="2" onClick={e => onClick(imagenesSimbolos[10].option, e)}/>
                                        <label htmlFor="symbolno_8" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[1].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                </form>
                            </div>}
                            {(i == 27) && <div className={styles.symbolContainer2}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[11].img} alt={'symbol'}/>
                            </div>}
                            {(i == 28) && <div className={styles.searchContainer2}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[11].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[11].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[11].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 29) && <div className={styles.answerContainer2}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_9" value="1" onClick={e => onClick(imagenesSimbolos[11].option, e)}/>
                                        <label htmlFor="symbolyes_9" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_9" value="2" onClick={e => onClick(imagenesSimbolos[11].option, e)}/>
                                        <label htmlFor="symbolno_9" className={styles.imgLabel}>
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

export default SymbolTest;