import React from 'react';
import imagenesSimbolos from '../../img/symbol_img/symbols';
import { Link } from "react-router-dom";
import styles from "./SymbolTest.module.css";

const SymbolTestIns = () => {
    return(
        <div className={styles.headerContainer}>
            <p className={styles.title}>Instrucciones</p>
            <div className={styles.bodyIns}>
                <div className={styles.insDescription}>
                    <p>
                        Observa el siguiente recuadro con símbolos, como verás en cada fila hay un símbolo al inicio, luego tres símbolos y por último dos recuadros con las palabras SI y NO.
                    </p>
                    <p>
                        El objetivo de este test es determinar si el primer símbolo se encuentra o no dentro de los otros tres:
                    </p>
                </div>
                <div className={styles.practice}>
                {[...Array(6)].map((e, i) => {
                    return (
                        <div className={styles.wrapper2} key={i} id={i}>
                            {(i == 0) && <div className={styles.symbolContainer1}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[47].img} alt={'symbol'}/>
                            </div>}
                            {(i == 1) && <div className={styles.searchContainer1}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[47].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[47].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[47].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 2) && <div className={styles.answerContainer1}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_0" value="1"/>
                                        <label htmlFor="symbolyes_0" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_0" value="2"/>
                                        <label htmlFor="symbolno_0" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[1].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                </form>
                            </div>}
                            {(i == 3) && <div className={styles.symbolContainer2}>
                                <img className={styles.symbolImg} src={imagenesSimbolos[48].img} alt={'symbol'}/>
                            </div>}
                            {(i == 4) && <div className={styles.searchContainer2}>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[48].op1.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[48].op2.img} alt={'symbol'}/>
                                </div>
                                <div>
                                    <img className={styles.symbolImg} src={imagenesSimbolos[48].op3.img} alt={'symbol'}/>
                                </div>
                            </div>}
                            {(i == 5) && <div className={styles.answerContainer2}>
                                <form className={styles.formSelect}>
                                    <div>
                                        <input type="radio" name="choice" id="symbolyes_1" value="1"/>
                                        <label htmlFor="symbolyes_1" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[0].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                    <div>
                                        <input type="radio" name="choice" id="symbolno_1" value="2"/>
                                        <label htmlFor="symbolno_1" className={styles.imgLabel}>
                                            <img className={styles.answerImg} src={imagenesSimbolos[1].img} alt={'answer'}/>
                                        </label>
                                    </div>
                                </form>
                            </div>}
                        </div>
                    );
                })}
                </div>
                <div className={styles.finalIns}>
                    <p>
                        En resumen esa es la dinámica que plantea este test, da clic en el siguiente botón para practicar.
                    </p>
                    <Link to="/SymbolTestInsTwo">
                        <button>Continuar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SymbolTestIns;