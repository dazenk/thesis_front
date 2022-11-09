import React, { useState, useEffect, useContext } from 'react';
import ProgressBar from './ProgressBar/ProgressBar';
import styles from "./SymbolTest.module.css";
import { useNavigate } from "react-router-dom";
import ScreenContext from '../ScreenContext';
import imagenesSimbolos from '../../img/symbol_img/symbols';

const SymbolTest4 = () => {

    const [value, setValue] = useState(180);
    const navigate = useNavigate();

    const {
        timeTest,
        setTimeTest,
        answerCorrect4,
        setAnswerCorrect4
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
        if (timeTest == 12) {
            navigate("/SymbolTestFive", { replace: true });
        }
    }, [timeTest]);

    const onClick = (option, e) => {
        const value = e.target.value;
        const id = e.target.id;
        let indice = id.slice(-1);
        let arreglo = answerCorrect4;
        console.log(indice);
        if (option && value == "1") {
            console.log("CORRECTO");
            arreglo[indice] = 'correct';
            setAnswerCorrect4(arreglo);
        }
        if (option && value == "2") {
            console.log("INCORRECTO");
            arreglo[indice] = 'incorrect';
            setAnswerCorrect4(arreglo);
        }
        if (!option && value == "2") {
            console.log("CORRECTO");
            arreglo[indice] = 'correct';
            setAnswerCorrect4(arreglo);
        }
        if (!option && value == "1") {
            console.log("INCORRECTO");
            arreglo[indice] = 'incorrect';
            setAnswerCorrect4(arreglo);
        }
        if (!answerCorrect4.includes('empty')) {
            navigate("/SymbolTestFive", { replace: true });
        }
        console.log(answerCorrect4);
        /* console.log(answerCorrect.includes('empty')); */
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
                                <img className={styles.symbolImg} src={imagenesSimbolos[32].img} alt={'symbol'}/>
                            </div>}
                            {(i == 1) && <div className={styles.searchContainer1}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[32].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[32].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[32].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 2) && <div className={styles.answerContainer1}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_0" value="1" onClick={e => onClick(imagenesSimbolos[32].option, e)}/>
                                        <label htmlFor="symbolyes_0" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_0" value="2" onClick={e => onClick(imagenesSimbolos[32].option, e)}/>
                                        <label htmlFor="symbolno_0" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[1].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                </form>
                            </div>}
                            {(i == 3) && <div className={styles.symbolContainer1}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[33].img} alt={'symbol'}/>
                            </div>}
                            {(i == 4) && <div className={styles.searchContainer1}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[33].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[33].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[33].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 5) && <div className={styles.answerContainer1}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_1" value="1" onClick={e => onClick(imagenesSimbolos[33].option, e)}/>
                                        <label htmlFor="symbolyes_1" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_1" value="2" onClick={e => onClick(imagenesSimbolos[33].option, e)}/>
                                        <label htmlFor="symbolno_1" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[1].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                </form>
                            </div>}
                            {(i == 6) && <div className={styles.symbolContainer1}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[34].img} alt={'symbol'}/>
                            </div>}
                            {(i == 7) && <div className={styles.searchContainer1}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[34].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[34].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[34].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 8) && <div className={styles.answerContainer1}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_2" value="1" onClick={e => onClick(imagenesSimbolos[34].option, e)}/>
                                        <label htmlFor="symbolyes_2" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_2" value="2" onClick={e => onClick(imagenesSimbolos[34].option, e)}/>
                                        <label htmlFor="symbolno_2" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[1].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                </form>
                            </div>}
                            {(i == 9) && <div className={styles.symbolContainer1}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[35].img} alt={'symbol'}/>
                            </div>}
                            {(i == 10) && <div className={styles.searchContainer1}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[35].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[35].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[35].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 11) && <div className={styles.answerContainer1}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_3" value="1" onClick={e => onClick(imagenesSimbolos[35].option, e)}/>
                                        <label htmlFor="symbolyes_3" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_3" value="2" onClick={e => onClick(imagenesSimbolos[35].option, e)}/>
                                        <label htmlFor="symbolno_3" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[1].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                </form>
                            </div>}
                            {(i == 12) && <div className={styles.symbolContainer1}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[36].img} alt={'symbol'}/>
                            </div>}
                            {(i == 13) && <div className={styles.searchContainer1}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[36].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[36].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[36].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 14) && <div className={styles.answerContainer1}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_4" value="1" onClick={e => onClick(imagenesSimbolos[36].option, e)}/>
                                        <label htmlFor="symbolyes_4" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_4" value="2" onClick={e => onClick(imagenesSimbolos[36].option, e)}/>
                                        <label htmlFor="symbolno_4" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[1].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                </form>
                            </div>}
                            {(i == 15) && <div className={styles.symbolContainer1}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[37].img} alt={'symbol'}/>
                            </div>}
                            {(i == 16) && <div className={styles.searchContainer1}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[37].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[37].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[37].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 17) && <div className={styles.answerContainer1}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_5" value="1" onClick={e => onClick(imagenesSimbolos[37].option, e)}/>
                                        <label htmlFor="symbolyes_5" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_5" value="2" onClick={e => onClick(imagenesSimbolos[37].option, e)}/>
                                        <label htmlFor="symbolno_5" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[1].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                </form>
                            </div>}
                            {(i == 18) && <div className={styles.symbolContainer1}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[38].img} alt={'symbol'}/>
                            </div>}
                            {(i == 19) && <div className={styles.searchContainer1}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[38].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[38].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[38].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 20) && <div className={styles.answerContainer1}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_6" value="1" onClick={e => onClick(imagenesSimbolos[38].option, e)}/>
                                        <label htmlFor="symbolyes_6" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_6" value="2" onClick={e => onClick(imagenesSimbolos[38].option, e)}/>
                                        <label htmlFor="symbolno_6" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[1].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                </form>
                            </div>}
                            {(i == 21) && <div className={styles.symbolContainer1}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[39].img} alt={'symbol'}/>
                            </div>}
                            {(i == 22) && <div className={styles.searchContainer1}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[39].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[39].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[39].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 23) && <div className={styles.answerContainer1}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_7" value="1" onClick={e => onClick(imagenesSimbolos[39].option, e)}/>
                                        <label htmlFor="symbolyes_7" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_7" value="2" onClick={e => onClick(imagenesSimbolos[39].option, e)}/>
                                        <label htmlFor="symbolno_7" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[1].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                </form>
                            </div>}
                            {(i == 24) && <div className={styles.symbolContainer1}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[40].img} alt={'symbol'}/>
                            </div>}
                            {(i == 25) && <div className={styles.searchContainer1}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[40].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[40].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[40].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 26) && <div className={styles.answerContainer1}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_8" value="1" onClick={e => onClick(imagenesSimbolos[40].option, e)}/>
                                        <label htmlFor="symbolyes_8" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_8" value="2" onClick={e => onClick(imagenesSimbolos[40].option, e)}/>
                                        <label htmlFor="symbolno_8" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[1].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                </form>
                            </div>}
                            {(i == 27) && <div className={styles.symbolContainer2}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[41].img} alt={'symbol'}/>
                            </div>}
                            {(i == 28) && <div className={styles.searchContainer2}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[41].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[41].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[41].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 29) && <div className={styles.answerContainer2}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_9" value="1" onClick={e => onClick(imagenesSimbolos[41].option, e)}/>
                                        <label htmlFor="symbolyes_9" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_9" value="2" onClick={e => onClick(imagenesSimbolos[41].option, e)}/>
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

export default SymbolTest4;