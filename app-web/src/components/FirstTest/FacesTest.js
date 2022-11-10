import React, { useEffect, useContext } from 'react';
import imagenesCaras from "../../img/face_img/img_face";
import ScreenContext from '../ScreenContext';
import { useNavigate } from "react-router-dom";
import styles from "./FacesTest.module.css";

const FacesTest = () => {

    const {
        hitCount,
        setHitCount,
        errorCount,
        setErrorCount,
        totalCount,
        setTotalCount,
        setIci,
        totalTimeT2,
        setTotalTimeT2
    } = useContext(ScreenContext);

    const navigate = useNavigate(); 

    useEffect(() => {
        const interval = setInterval(() => {
          setTotalTimeT2((oldValue) => {
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
        if (totalTimeT2 == 0) {            
            if ((hitCount + errorCount) == 0) {
                setIci(0);
            } else {
                let nIci = ((hitCount - errorCount) / (hitCount + errorCount)) * 100;
                setIci(Math.round(nIci));
            }
            navigate("/EndTest", { replace: true });
        }
        if (totalCount == 60) {
            if ((hitCount + errorCount) == 0) {
                setIci(0);
            } else {
                let nIci = ((hitCount - errorCount) / (hitCount + errorCount)) * 100;
                setIci(Math.round(nIci));
            }
            navigate("/EndTest", { replace: true });
        }
      }, [totalTimeT2]);

    const deshabilitar = (id, i, idCorrect) => {
        if (id == imagenesCaras[i].pos1) {
            const el1 = document.getElementById(imagenesCaras[i].id1);
            const el2 = document.getElementById(imagenesCaras[i].id2);
            const el3 = document.getElementById(imagenesCaras[i].id3);
            el1.disabled = true;
            el2.disabled = true;
            el3.disabled = true;
            if (idCorrect) {
                setHitCount(currentHit => currentHit + 1);
            } else if (idCorrect == false) {
                setErrorCount(currentError => currentError + 1);
            }
        } else if (id == imagenesCaras[i].pos2) {
            const el1 = document.getElementById(imagenesCaras[i].id1);
            const el2 = document.getElementById(imagenesCaras[i].id2);
            const el3 = document.getElementById(imagenesCaras[i].id3);
            el1.disabled = true;
            el2.disabled = true;
            el3.disabled = true;
            if (idCorrect) {
                setHitCount(currentHit => currentHit + 1);
            } else if (idCorrect == false) {
                setErrorCount(currentError => currentError + 1);
            }
        } else if (id == imagenesCaras[i].pos3) {
            const el1 = document.getElementById(imagenesCaras[i].id1);
            const el2 = document.getElementById(imagenesCaras[i].id2);
            const el3 = document.getElementById(imagenesCaras[i].id3);
            el1.disabled = true;
            el2.disabled = true;
            el3.disabled = true;
            if (idCorrect) {
                setHitCount(currentHit => currentHit + 1);
            } else if (idCorrect == false) {
                setErrorCount(currentError => currentError + 1);
            }
        }
        setTotalCount(currentTotal => currentTotal + 1);        
    };

    return(
        <div className={styles.headerContainer}>
            <div className={styles.wrapper}>
                {[...Array(60)].map((e, i) => {
                    return (
                        <div className={styles.wrapper2} key={i}>
                            {(i == 0) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[0].id1} value="1" onClick={() => deshabilitar(imagenesCaras[0].pos1, i, imagenesCaras[0].correct)}/>
                                    <label htmlFor={imagenesCaras[0].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[0].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[0].id2} value="2" onClick={() => deshabilitar(imagenesCaras[0].pos2, i, imagenesCaras[0].correct)}/>
                                    <label htmlFor={imagenesCaras[0].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[0].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[0].id3} value="3" onClick={() => deshabilitar(imagenesCaras[0].pos3, i, imagenesCaras[1].correct)}/>
                                    <label htmlFor={imagenesCaras[0].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[1].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 1) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[2].id1} value="1" onClick={() => deshabilitar(imagenesCaras[2].pos1, i*2, imagenesCaras[2].correct)}/>
                                    <label htmlFor={imagenesCaras[2].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[2].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[2].id2} value="2" onClick={() => deshabilitar(imagenesCaras[2].pos2, i*2, imagenesCaras[3].correct)}/>
                                    <label htmlFor={imagenesCaras[2].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[3].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[2].id3} value="3" onClick={() => deshabilitar(imagenesCaras[2].pos3, i*2, imagenesCaras[2].correct)}/>
                                    <label htmlFor={imagenesCaras[2].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[2].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 2) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[4].id1} value="1" onClick={() => deshabilitar(imagenesCaras[4].pos1, i*2, imagenesCaras[4].correct)}/>
                                    <label htmlFor={imagenesCaras[4].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[4].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[4].id2} value="2" onClick={() => deshabilitar(imagenesCaras[4].pos2, i*2, imagenesCaras[5].correct)}/>
                                    <label htmlFor={imagenesCaras[4].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[5].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[4].id3} value="3" onClick={() => deshabilitar(imagenesCaras[4].pos3, i*2, imagenesCaras[4].correct)}/>
                                    <label htmlFor={imagenesCaras[4].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[4].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 3) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[6].id1} value="1" onClick={() => deshabilitar(imagenesCaras[6].pos1, i*2, imagenesCaras[6].correct)}/>
                                    <label htmlFor={imagenesCaras[6].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[6].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[6].id2} value="2" onClick={() => deshabilitar(imagenesCaras[6].pos2, i*2, imagenesCaras[7].correct)}/>
                                    <label htmlFor={imagenesCaras[6].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[7].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[6].id3} value="3" onClick={() => deshabilitar(imagenesCaras[6].pos3, i*2, imagenesCaras[6].correct)}/>
                                    <label htmlFor={imagenesCaras[6].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[6].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 4) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[8].id1} value="1" onClick={() => deshabilitar(imagenesCaras[8].pos1, i*2, imagenesCaras[8].correct)}/>
                                    <label htmlFor={imagenesCaras[8].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[8].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[8].id2} value="2" onClick={() => deshabilitar(imagenesCaras[8].pos2, i*2, imagenesCaras[8].correct)}/>
                                    <label htmlFor={imagenesCaras[8].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[8].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[8].id3} value="3" onClick={() => deshabilitar(imagenesCaras[8].pos3, i*2, imagenesCaras[9].correct)}/>
                                    <label htmlFor={imagenesCaras[8].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[9].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 5) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[10].id1} value="1" onClick={() => deshabilitar(imagenesCaras[10].pos1, i*2, imagenesCaras[10].correct)}/>
                                    <label htmlFor={imagenesCaras[10].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[10].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[10].id2} value="2" onClick={() => deshabilitar(imagenesCaras[10].pos2, i*2, imagenesCaras[10].correct)}/>
                                    <label htmlFor={imagenesCaras[10].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[10].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[10].id3} value="3" onClick={() => deshabilitar(imagenesCaras[10].pos3, i*2, imagenesCaras[11].correct)}/>
                                    <label htmlFor={imagenesCaras[10].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[11].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 6) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[12].id1} value="1" onClick={() => deshabilitar(imagenesCaras[12].pos1, i*2, imagenesCaras[12].correct)}/>
                                    <label htmlFor={imagenesCaras[12].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[12].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[12].id2} value="2" onClick={() => deshabilitar(imagenesCaras[12].pos2, i*2, imagenesCaras[13].correct)}/>
                                    <label htmlFor={imagenesCaras[12].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[13].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[12].id3} value="3" onClick={() => deshabilitar(imagenesCaras[12].pos3, i*2, imagenesCaras[12].correct)}/>
                                    <label htmlFor={imagenesCaras[12].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[12].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 7) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[14].id1} value="1" onClick={() => deshabilitar(imagenesCaras[14].pos1, i*2, imagenesCaras[14].correct)}/>
                                    <label htmlFor={imagenesCaras[14].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[14].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[14].id2} value="2" onClick={() => deshabilitar(imagenesCaras[14].pos2, i*2, imagenesCaras[14].correct)}/>
                                    <label htmlFor={imagenesCaras[14].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[14].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[14].id3} value="3" onClick={() => deshabilitar(imagenesCaras[14].pos3, i*2, imagenesCaras[15].correct)}/>
                                    <label htmlFor={imagenesCaras[14].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[15].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 8) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[16].id1} value="1" onClick={() => deshabilitar(imagenesCaras[16].pos1, i*2, imagenesCaras[17].correct)}/>
                                    <label htmlFor={imagenesCaras[16].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[17].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[16].id2} value="2" onClick={() => deshabilitar(imagenesCaras[16].pos2, i*2, imagenesCaras[16].correct)}/>
                                    <label htmlFor={imagenesCaras[16].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[16].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[16].id3} value="3" onClick={() => deshabilitar(imagenesCaras[16].pos3, i*2, imagenesCaras[16].correct)}/>
                                    <label htmlFor={imagenesCaras[16].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[16].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 9) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[18].id1} value="1" onClick={() => deshabilitar(imagenesCaras[18].pos1, i*2, imagenesCaras[18].correct)}/>
                                    <label htmlFor={imagenesCaras[18].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[18].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[18].id2} value="2" onClick={() => deshabilitar(imagenesCaras[18].pos2, i*2, imagenesCaras[18].correct)}/>
                                    <label htmlFor={imagenesCaras[18].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[18].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[18].id3} value="3" onClick={() => deshabilitar(imagenesCaras[18].pos3, i*2, imagenesCaras[19].correct)}/>
                                    <label htmlFor={imagenesCaras[18].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[19].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 10) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[20].id1} value="1" onClick={() => deshabilitar(imagenesCaras[20].pos1, i*2, imagenesCaras[21].correct)}/>
                                    <label htmlFor={imagenesCaras[20].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[21].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[20].id2} value="2" onClick={() => deshabilitar(imagenesCaras[20].pos2, i*2, imagenesCaras[20].correct)}/>
                                    <label htmlFor={imagenesCaras[20].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[20].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[20].id3} value="3" onClick={() => deshabilitar(imagenesCaras[20].pos3, i*2, imagenesCaras[20].correct)}/>
                                    <label htmlFor={imagenesCaras[20].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[20].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 11) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[22].id1} value="1" onClick={() => deshabilitar(imagenesCaras[22].pos1, i*2, imagenesCaras[22].correct)}/>
                                    <label htmlFor={imagenesCaras[22].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[22].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[22].id2} value="2" onClick={() => deshabilitar(imagenesCaras[22].pos2, i*2, imagenesCaras[22].correct)}/>
                                    <label htmlFor={imagenesCaras[22].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[22].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[22].id3} value="3" onClick={() => deshabilitar(imagenesCaras[22].pos3, i*2, imagenesCaras[23].correct)}/>
                                    <label htmlFor={imagenesCaras[22].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[23].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 12) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[24].id1} value="1" onClick={() => deshabilitar(imagenesCaras[24].pos1, i*2, imagenesCaras[24].correct)}/>
                                    <label htmlFor={imagenesCaras[24].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[24].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[24].id2} value="2" onClick={() => deshabilitar(imagenesCaras[24].pos2, i*2, imagenesCaras[25].correct)}/>
                                    <label htmlFor={imagenesCaras[24].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[25].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[24].id3} value="3" onClick={() => deshabilitar(imagenesCaras[24].pos3, i*2, imagenesCaras[24].correct)}/>
                                    <label htmlFor={imagenesCaras[24].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[24].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 13) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[26].id1} value="1" onClick={() => deshabilitar(imagenesCaras[26].pos1, i*2, imagenesCaras[27].correct)}/>
                                    <label htmlFor={imagenesCaras[26].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[27].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[26].id2} value="2" onClick={() => deshabilitar(imagenesCaras[26].pos2, i*2, imagenesCaras[26].correct)}/>
                                    <label htmlFor={imagenesCaras[26].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[26].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[26].id3} value="3" onClick={() => deshabilitar(imagenesCaras[26].pos3, i*2, imagenesCaras[26].correct)}/>
                                    <label htmlFor={imagenesCaras[26].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[26].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 14) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[28].id1} value="1" onClick={() => deshabilitar(imagenesCaras[28].pos1, i*2, imagenesCaras[28].correct)}/>
                                    <label htmlFor={imagenesCaras[28].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[28].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[28].id2} value="2" onClick={() => deshabilitar(imagenesCaras[28].pos2, i*2, imagenesCaras[29].correct)}/>
                                    <label htmlFor={imagenesCaras[28].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[29].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[28].id3} value="3" onClick={() => deshabilitar(imagenesCaras[28].pos3, i*2, imagenesCaras[28].correct)}/>
                                    <label htmlFor={imagenesCaras[28].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[28].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 15) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[30].id1} value="1" onClick={() => deshabilitar(imagenesCaras[30].pos1, i*2, imagenesCaras[30].correct)}/>
                                    <label htmlFor={imagenesCaras[30].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[30].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[30].id2} value="2" onClick={() => deshabilitar(imagenesCaras[30].pos2, i*2, imagenesCaras[31].correct)}/>
                                    <label htmlFor={imagenesCaras[30].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[31].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[30].id3} value="3" onClick={() => deshabilitar(imagenesCaras[30].pos3, i*2, imagenesCaras[30].correct)}/>
                                    <label htmlFor={imagenesCaras[30].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[30].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 16) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[32].id1} value="1" onClick={() => deshabilitar(imagenesCaras[32].pos1, i*2, imagenesCaras[32].correct)}/>
                                    <label htmlFor={imagenesCaras[32].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[32].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[32].id2} value="2" onClick={() => deshabilitar(imagenesCaras[32].pos2, i*2, imagenesCaras[33].correct)}/>
                                    <label htmlFor={imagenesCaras[32].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[33].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[32].id3} value="3" onClick={() => deshabilitar(imagenesCaras[32].pos3, i*2, imagenesCaras[32].correct)}/>
                                    <label htmlFor={imagenesCaras[32].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[32].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 17) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[34].id1} value="1" onClick={() => deshabilitar(imagenesCaras[34].pos1, i*2, imagenesCaras[34].correct)}/>
                                    <label htmlFor={imagenesCaras[34].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[34].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[34].id2} value="2" onClick={() => deshabilitar(imagenesCaras[34].pos2, i*2, imagenesCaras[35].correct)}/>
                                    <label htmlFor={imagenesCaras[34].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[35].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[34].id3} value="3" onClick={() => deshabilitar(imagenesCaras[34].pos3, i*2, imagenesCaras[34].correct)}/>
                                    <label htmlFor={imagenesCaras[34].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[34].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 18) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[36].id1} value="1" onClick={() => deshabilitar(imagenesCaras[36].pos1, i*2, imagenesCaras[36].correct)}/>
                                    <label htmlFor={imagenesCaras[36].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[36].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[36].id2} value="2" onClick={() => deshabilitar(imagenesCaras[36].pos2, i*2, imagenesCaras[36].correct)}/>
                                    <label htmlFor={imagenesCaras[36].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[36].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[36].id3} value="3" onClick={() => deshabilitar(imagenesCaras[36].pos3, i*2, imagenesCaras[37].correct)}/>
                                    <label htmlFor={imagenesCaras[36].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[37].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 19) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[38].id1} value="1" onClick={() => deshabilitar(imagenesCaras[38].pos1, i*2, imagenesCaras[39].correct)}/>
                                    <label htmlFor={imagenesCaras[38].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[39].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[38].id2} value="2" onClick={() => deshabilitar(imagenesCaras[38].pos2, i*2, imagenesCaras[38].correct)}/>
                                    <label htmlFor={imagenesCaras[38].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[38].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[38].id3} value="3" onClick={() => deshabilitar(imagenesCaras[38].pos3, i*2, imagenesCaras[38].correct)}/>
                                    <label htmlFor={imagenesCaras[38].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[38].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 20) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[40].id1} value="1" onClick={() => deshabilitar(imagenesCaras[40].pos1, i*2, imagenesCaras[40].correct)}/>
                                    <label htmlFor={imagenesCaras[40].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[40].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[40].id2} value="2" onClick={() => deshabilitar(imagenesCaras[40].pos2, i*2, imagenesCaras[41].correct)}/>
                                    <label htmlFor={imagenesCaras[40].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[41].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[40].id3} value="3" onClick={() => deshabilitar(imagenesCaras[40].pos3, i*2, imagenesCaras[40].correct)}/>
                                    <label htmlFor={imagenesCaras[40].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[40].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 21) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[42].id1} value="1" onClick={() => deshabilitar(imagenesCaras[42].pos1, i*2, imagenesCaras[42].correct)}/>
                                    <label htmlFor={imagenesCaras[42].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[42].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[42].id2} value="2" onClick={() => deshabilitar(imagenesCaras[42].pos2, i*2, imagenesCaras[43].correct)}/>
                                    <label htmlFor={imagenesCaras[42].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[43].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[42].id3} value="3" onClick={() => deshabilitar(imagenesCaras[42].pos3, i*2, imagenesCaras[42].correct)}/>
                                    <label htmlFor={imagenesCaras[42].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[42].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 22) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[44].id1} value="1" onClick={() => deshabilitar(imagenesCaras[44].pos1, i*2, imagenesCaras[45].correct)}/>
                                    <label htmlFor={imagenesCaras[44].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[45].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[44].id2} value="2" onClick={() => deshabilitar(imagenesCaras[44].pos2, i*2, imagenesCaras[44].correct)}/>
                                    <label htmlFor={imagenesCaras[44].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[44].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[44].id3} value="3" onClick={() => deshabilitar(imagenesCaras[44].pos3, i*2, imagenesCaras[44].correct)}/>
                                    <label htmlFor={imagenesCaras[44].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[44].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 23) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[46].id1} value="1" onClick={() => deshabilitar(imagenesCaras[46].pos1, i*2, imagenesCaras[47].correct)}/>
                                    <label htmlFor={imagenesCaras[46].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[47].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[46].id2} value="2" onClick={() => deshabilitar(imagenesCaras[46].pos2, i*2, imagenesCaras[46].correct)}/>
                                    <label htmlFor={imagenesCaras[46].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[46].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[46].id3} value="3" onClick={() => deshabilitar(imagenesCaras[46].pos3, i*2, imagenesCaras[46].correct)}/>
                                    <label htmlFor={imagenesCaras[46].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[46].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 24) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[48].id1} value="1" onClick={() => deshabilitar(imagenesCaras[48].pos1, i*2, imagenesCaras[49].correct)}/>
                                    <label htmlFor={imagenesCaras[48].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[49].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[48].id2} value="2" onClick={() => deshabilitar(imagenesCaras[48].pos2, i*2, imagenesCaras[48].correct)}/>
                                    <label htmlFor={imagenesCaras[48].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[48].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[48].id3} value="3" onClick={() => deshabilitar(imagenesCaras[48].pos3, i*2, imagenesCaras[48].correct)}/>
                                    <label htmlFor={imagenesCaras[48].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[48].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 25) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[50].id1} value="1" onClick={() => deshabilitar(imagenesCaras[50].pos1, i*2, imagenesCaras[51].correct)}/>
                                    <label htmlFor={imagenesCaras[50].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[51].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[50].id2} value="2" onClick={() => deshabilitar(imagenesCaras[50].pos2, i*2, imagenesCaras[50].correct)}/>
                                    <label htmlFor={imagenesCaras[50].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[50].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[50].id3} value="3" onClick={() => deshabilitar(imagenesCaras[50].pos3, i*2, imagenesCaras[50].correct)}/>
                                    <label htmlFor={imagenesCaras[50].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[50].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 26) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[52].id1} value="1" onClick={() => deshabilitar(imagenesCaras[52].pos1, i*2, imagenesCaras[53].correct)}/>
                                    <label htmlFor={imagenesCaras[52].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[53].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[52].id2} value="2" onClick={() => deshabilitar(imagenesCaras[52].pos2, i*2, imagenesCaras[52].correct)}/>
                                    <label htmlFor={imagenesCaras[52].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[52].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[52].id3} value="3" onClick={() => deshabilitar(imagenesCaras[52].pos3, i*2, imagenesCaras[52].correct)}/>
                                    <label htmlFor={imagenesCaras[52].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[52].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 27) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[54].id1} value="1" onClick={() => deshabilitar(imagenesCaras[54].pos1, i*2, imagenesCaras[54].correct)}/>
                                    <label htmlFor={imagenesCaras[54].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[54].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[54].id2} value="2" onClick={() => deshabilitar(imagenesCaras[54].pos2, i*2, imagenesCaras[54].correct)}/>
                                    <label htmlFor={imagenesCaras[54].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[54].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[54].id3} value="3" onClick={() => deshabilitar(imagenesCaras[54].pos3, i*2, imagenesCaras[55].correct)}/>
                                    <label htmlFor={imagenesCaras[54].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[55].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 28) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[56].id1} value="1" onClick={() => deshabilitar(imagenesCaras[56].pos1, i*2, imagenesCaras[57].correct)}/>
                                    <label htmlFor={imagenesCaras[56].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[57].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[56].id2} value="2" onClick={() => deshabilitar(imagenesCaras[56].pos2, i*2, imagenesCaras[56].correct)}/>
                                    <label htmlFor={imagenesCaras[56].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[56].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[56].id3} value="3" onClick={() => deshabilitar(imagenesCaras[56].pos3, i*2, imagenesCaras[56].correct)}/>
                                    <label htmlFor={imagenesCaras[56].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[56].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 29) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[58].id1} value="1" onClick={() => deshabilitar(imagenesCaras[58].pos1, i*2, imagenesCaras[58].correct)}/>
                                    <label htmlFor={imagenesCaras[58].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[58].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[58].id2} value="2" onClick={() => deshabilitar(imagenesCaras[58].pos2, i*2, imagenesCaras[58].correct)}/>
                                    <label htmlFor={imagenesCaras[58].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[58].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[58].id3} value="3" onClick={() => deshabilitar(imagenesCaras[58].pos3, i*2, imagenesCaras[59].correct)}/>
                                    <label htmlFor={imagenesCaras[58].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[59].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 30) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[60].id1} value="1" onClick={() => deshabilitar(imagenesCaras[60].pos1, i*2, imagenesCaras[60].correct)}/>
                                    <label htmlFor={imagenesCaras[60].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[60].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[60].id2} value="2" onClick={() => deshabilitar(imagenesCaras[60].pos2, i*2, imagenesCaras[61].correct)}/>
                                    <label htmlFor={imagenesCaras[60].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[61].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[60].id3} value="3" onClick={() => deshabilitar(imagenesCaras[60].pos3, i*2, imagenesCaras[60].correct)}/>
                                    <label htmlFor={imagenesCaras[60].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[60].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 31) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[62].id1} value="1" onClick={() => deshabilitar(imagenesCaras[62].pos1, i*2, imagenesCaras[62].correct)}/>
                                    <label htmlFor={imagenesCaras[62].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[62].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[62].id2} value="2" onClick={() => deshabilitar(imagenesCaras[62].pos2, i*2, imagenesCaras[63].correct)}/>
                                    <label htmlFor={imagenesCaras[62].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[63].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[62].id3} value="3" onClick={() => deshabilitar(imagenesCaras[62].pos3, i*2, imagenesCaras[62].correct)}/>
                                    <label htmlFor={imagenesCaras[62].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[62].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 32) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[64].id1} value="1" onClick={() => deshabilitar(imagenesCaras[64].pos1, i*2, imagenesCaras[65].correct)}/>
                                    <label htmlFor={imagenesCaras[64].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[65].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[64].id2} value="2" onClick={() => deshabilitar(imagenesCaras[64].pos2, i*2, imagenesCaras[64].correct)}/>
                                    <label htmlFor={imagenesCaras[64].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[64].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[64].id3} value="3" onClick={() => deshabilitar(imagenesCaras[64].pos3, i*2, imagenesCaras[64].correct)}/>
                                    <label htmlFor={imagenesCaras[64].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[64].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 33) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[66].id1} value="1" onClick={() => deshabilitar(imagenesCaras[66].pos1, i*2, imagenesCaras[67].correct)}/>
                                    <label htmlFor={imagenesCaras[66].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[67].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[66].id2} value="2" onClick={() => deshabilitar(imagenesCaras[66].pos2, i*2, imagenesCaras[66].correct)}/>
                                    <label htmlFor={imagenesCaras[66].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[66].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[66].id3} value="3" onClick={() => deshabilitar(imagenesCaras[66].pos3, i*2, imagenesCaras[66].correct)}/>
                                    <label htmlFor={imagenesCaras[66].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[66].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 34) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[68].id1} value="1" onClick={() => deshabilitar(imagenesCaras[68].pos1, i*2, imagenesCaras[68].correct)}/>
                                    <label htmlFor={imagenesCaras[68].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[68].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[68].id2} value="2" onClick={() => deshabilitar(imagenesCaras[68].pos2, i*2, imagenesCaras[69].correct)}/>
                                    <label htmlFor={imagenesCaras[68].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[69].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[68].id3} value="3" onClick={() => deshabilitar(imagenesCaras[68].pos3, i*2, imagenesCaras[68].correct)}/>
                                    <label htmlFor={imagenesCaras[68].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[68].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 35) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[70].id1} value="1" onClick={() => deshabilitar(imagenesCaras[70].pos1, i*2, imagenesCaras[70].correct)}/>
                                    <label htmlFor={imagenesCaras[70].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[70].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[70].id2} value="2" onClick={() => deshabilitar(imagenesCaras[70].pos2, i*2, imagenesCaras[70].correct)}/>
                                    <label htmlFor={imagenesCaras[70].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[70].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[70].id3} value="3" onClick={() => deshabilitar(imagenesCaras[70].pos3, i*2, imagenesCaras[71].correct)}/>
                                    <label htmlFor={imagenesCaras[70].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[71].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 36) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[72].id1} value="1" onClick={() => deshabilitar(imagenesCaras[72].pos1, i*2, imagenesCaras[73].correct)}/>
                                    <label htmlFor={imagenesCaras[72].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[73].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[72].id2} value="2" onClick={() => deshabilitar(imagenesCaras[72].pos2, i*2, imagenesCaras[72].correct)}/>
                                    <label htmlFor={imagenesCaras[72].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[72].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[72].id3} value="3" onClick={() => deshabilitar(imagenesCaras[72].pos3, i*2, imagenesCaras[72].correct)}/>
                                    <label htmlFor={imagenesCaras[72].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[72].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 37) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[74].id1} value="1" onClick={() => deshabilitar(imagenesCaras[74].pos1, i*2, imagenesCaras[75].correct)}/>
                                    <label htmlFor={imagenesCaras[74].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[75].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[74].id2} value="2" onClick={() => deshabilitar(imagenesCaras[74].pos2, i*2, imagenesCaras[74].correct)}/>
                                    <label htmlFor={imagenesCaras[74].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[74].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[74].id3} value="3" onClick={() => deshabilitar(imagenesCaras[74].pos3, i*2, imagenesCaras[74].correct)}/>
                                    <label htmlFor={imagenesCaras[74].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[74].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 38) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[76].id1} value="1" onClick={() => deshabilitar(imagenesCaras[76].pos1, i*2, imagenesCaras[76].correct)}/>
                                    <label htmlFor={imagenesCaras[76].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[76].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[76].id2} value="2" onClick={() => deshabilitar(imagenesCaras[76].pos2, i*2, imagenesCaras[77].correct)}/>
                                    <label htmlFor={imagenesCaras[76].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[77].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[76].id3} value="3" onClick={() => deshabilitar(imagenesCaras[76].pos3, i*2, imagenesCaras[76].correct)}/>
                                    <label htmlFor={imagenesCaras[76].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[76].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 39) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[78].id1} value="1" onClick={() => deshabilitar(imagenesCaras[78].pos1, i*2, imagenesCaras[78].correct)}/>
                                    <label htmlFor={imagenesCaras[78].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[78].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[78].id2} value="2" onClick={() => deshabilitar(imagenesCaras[78].pos2, i*2, imagenesCaras[78].correct)}/>
                                    <label htmlFor={imagenesCaras[78].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[78].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[78].id3} value="3" onClick={() => deshabilitar(imagenesCaras[78].pos3, i*2, imagenesCaras[79].correct)}/>
                                    <label htmlFor={imagenesCaras[78].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[79].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 40) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[80].id1} value="1" onClick={() => deshabilitar(imagenesCaras[80].pos1, i*2, imagenesCaras[80].correct)}/>
                                    <label htmlFor={imagenesCaras[80].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[80].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[80].id2} value="2" onClick={() => deshabilitar(imagenesCaras[80].pos2, i*2, imagenesCaras[81].correct)}/>
                                    <label htmlFor={imagenesCaras[80].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[81].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[80].id3} value="3" onClick={() => deshabilitar(imagenesCaras[80].pos3, i*2, imagenesCaras[80].correct)}/>
                                    <label htmlFor={imagenesCaras[80].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[80].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 41) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[82].id1} value="1" onClick={() => deshabilitar(imagenesCaras[82].pos1, i*2, imagenesCaras[82].correct)}/>
                                    <label htmlFor={imagenesCaras[82].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[82].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[82].id2} value="2" onClick={() => deshabilitar(imagenesCaras[82].pos2, i*2, imagenesCaras[83].correct)}/>
                                    <label htmlFor={imagenesCaras[82].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[83].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[82].id3} value="3" onClick={() => deshabilitar(imagenesCaras[82].pos3, i*2, imagenesCaras[82].correct)}/>
                                    <label htmlFor={imagenesCaras[82].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[82].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 42) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[84].id1} value="1" onClick={() => deshabilitar(imagenesCaras[84].pos1, i*2, imagenesCaras[84].correct)}/>
                                    <label htmlFor={imagenesCaras[84].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[84].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[84].id2} value="2" onClick={() => deshabilitar(imagenesCaras[84].pos2, i*2, imagenesCaras[84].correct)}/>
                                    <label htmlFor={imagenesCaras[84].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[84].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[84].id3} value="3" onClick={() => deshabilitar(imagenesCaras[84].pos3, i*2, imagenesCaras[85].correct)}/>
                                    <label htmlFor={imagenesCaras[84].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[85].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 43) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[86].id1} value="1" onClick={() => deshabilitar(imagenesCaras[86].pos1, i*2, imagenesCaras[86].correct)}/>
                                    <label htmlFor={imagenesCaras[86].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[86].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[86].id2} value="2" onClick={() => deshabilitar(imagenesCaras[86].pos2, i*2, imagenesCaras[86].correct)}/>
                                    <label htmlFor={imagenesCaras[86].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[86].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[86].id3} value="3" onClick={() => deshabilitar(imagenesCaras[86].pos3, i*2, imagenesCaras[87].correct)}/>
                                    <label htmlFor={imagenesCaras[86].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[87].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 44) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[88].id1} value="1" onClick={() => deshabilitar(imagenesCaras[88].pos1, i*2, imagenesCaras[88].correct)}/>
                                    <label htmlFor={imagenesCaras[88].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[88].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[88].id2} value="2" onClick={() => deshabilitar(imagenesCaras[88].pos2, i*2, imagenesCaras[88].correct)}/>
                                    <label htmlFor={imagenesCaras[88].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[88].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[88].id3} value="3" onClick={() => deshabilitar(imagenesCaras[88].pos3, i*2, imagenesCaras[89].correct)}/>
                                    <label htmlFor={imagenesCaras[88].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[89].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 45) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[90].id1} value="1" onClick={() => deshabilitar(imagenesCaras[90].pos1, i*2, imagenesCaras[90].correct)}/>
                                    <label htmlFor={imagenesCaras[90].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[90].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[90].id2} value="2" onClick={() => deshabilitar(imagenesCaras[90].pos2, i*2, imagenesCaras[91].correct)}/>
                                    <label htmlFor={imagenesCaras[90].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[91].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[90].id3} value="3" onClick={() => deshabilitar(imagenesCaras[90].pos3, i*2, imagenesCaras[90].correct)}/>
                                    <label htmlFor={imagenesCaras[90].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[90].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 46) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[92].id1} value="1" onClick={() => deshabilitar(imagenesCaras[92].pos1, i*2, imagenesCaras[92].correct)}/>
                                    <label htmlFor={imagenesCaras[92].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[92].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[92].id2} value="2" onClick={() => deshabilitar(imagenesCaras[92].pos2, i*2, imagenesCaras[93].correct)}/>
                                    <label htmlFor={imagenesCaras[92].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[93].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[92].id3} value="3" onClick={() => deshabilitar(imagenesCaras[92].pos3, i*2, imagenesCaras[92].correct)}/>
                                    <label htmlFor={imagenesCaras[92].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[92].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 47) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[94].id1} value="1" onClick={() => deshabilitar(imagenesCaras[94].pos1, i*2, imagenesCaras[95].correct)}/>
                                    <label htmlFor={imagenesCaras[94].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[95].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[94].id2} value="2" onClick={() => deshabilitar(imagenesCaras[94].pos2, i*2, imagenesCaras[94].correct)}/>
                                    <label htmlFor={imagenesCaras[94].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[94].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[94].id3} value="3" onClick={() => deshabilitar(imagenesCaras[94].pos3, i*2, imagenesCaras[94].correct)}/>
                                    <label htmlFor={imagenesCaras[94].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[94].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 48) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[96].id1} value="1" onClick={() => deshabilitar(imagenesCaras[96].pos1, i*2, imagenesCaras[97].correct)}/>
                                    <label htmlFor={imagenesCaras[96].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[97].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[96].id2} value="2" onClick={() => deshabilitar(imagenesCaras[96].pos2, i*2, imagenesCaras[96].correct)}/>
                                    <label htmlFor={imagenesCaras[96].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[96].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[96].id3} value="3" onClick={() => deshabilitar(imagenesCaras[96].pos3, i*2, imagenesCaras[96].correct)}/>
                                    <label htmlFor={imagenesCaras[96].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[96].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 49) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[98].id1} value="1" onClick={() => deshabilitar(imagenesCaras[98].pos1, i*2, imagenesCaras[99].correct)}/>
                                    <label htmlFor={imagenesCaras[98].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[99].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[98].id2} value="2" onClick={() => deshabilitar(imagenesCaras[98].pos2, i*2, imagenesCaras[98].correct)}/>
                                    <label htmlFor={imagenesCaras[98].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[98].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[98].id3} value="3" onClick={() => deshabilitar(imagenesCaras[98].pos3, i*2, imagenesCaras[98].correct)}/>
                                    <label htmlFor={imagenesCaras[98].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[98].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 50) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[100].id1} value="1" onClick={() => deshabilitar(imagenesCaras[100].pos1, i*2, imagenesCaras[101].correct)}/>
                                    <label htmlFor={imagenesCaras[100].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[101].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[100].id2} value="2" onClick={() => deshabilitar(imagenesCaras[100].pos2, i*2, imagenesCaras[100].correct)}/>
                                    <label htmlFor={imagenesCaras[100].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[100].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[100].id3} value="3" onClick={() => deshabilitar(imagenesCaras[100].pos3, i*2, imagenesCaras[100].correct)}/>
                                    <label htmlFor={imagenesCaras[100].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[100].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 51) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[102].id1} value="1" onClick={() => deshabilitar(imagenesCaras[102].pos1, i*2, imagenesCaras[102].correct)}/>
                                    <label htmlFor={imagenesCaras[102].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[102].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[102].id2} value="2" onClick={() => deshabilitar(imagenesCaras[102].pos2, i*2, imagenesCaras[103].correct)}/>
                                    <label htmlFor={imagenesCaras[102].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[103].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[102].id3} value="3" onClick={() => deshabilitar(imagenesCaras[102].pos3, i*2, imagenesCaras[102].correct)}/>
                                    <label htmlFor={imagenesCaras[102].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[102].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 52) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[104].id1} value="1" onClick={() => deshabilitar(imagenesCaras[104].pos1, i*2, imagenesCaras[104].correct)}/>
                                    <label htmlFor={imagenesCaras[104].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[104].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[104].id2} value="2" onClick={() => deshabilitar(imagenesCaras[104].pos2, i*2, imagenesCaras[105].correct)}/>
                                    <label htmlFor={imagenesCaras[104].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[105].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[104].id3} value="3" onClick={() => deshabilitar(imagenesCaras[104].pos3, i*2, imagenesCaras[104].correct)}/>
                                    <label htmlFor={imagenesCaras[104].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[104].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 53) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[106].id1} value="1" onClick={() => deshabilitar(imagenesCaras[106].pos1, i*2, imagenesCaras[106].correct)}/>
                                    <label htmlFor={imagenesCaras[106].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[106].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[106].id2} value="2" onClick={() => deshabilitar(imagenesCaras[106].pos2, i*2, imagenesCaras[106].correct)}/>
                                    <label htmlFor={imagenesCaras[106].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[106].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[106].id3} value="3" onClick={() => deshabilitar(imagenesCaras[106].pos3, i*2, imagenesCaras[107].correct)}/>
                                    <label htmlFor={imagenesCaras[106].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[107].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 54) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[108].id1} value="1" onClick={() => deshabilitar(imagenesCaras[108].pos1, i*2, imagenesCaras[108].correct)}/>
                                    <label htmlFor={imagenesCaras[108].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[108].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[108].id2} value="2" onClick={() => deshabilitar(imagenesCaras[108].pos2, i*2, imagenesCaras[109].correct)}/>
                                    <label htmlFor={imagenesCaras[108].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[109].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[108].id3} value="3" onClick={() => deshabilitar(imagenesCaras[108].pos3, i*2, imagenesCaras[108].correct)}/>
                                    <label htmlFor={imagenesCaras[108].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[108].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 55) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[110].id1} value="1" onClick={() => deshabilitar(imagenesCaras[110].pos1, i*2, imagenesCaras[110].correct)}/>
                                    <label htmlFor={imagenesCaras[110].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[110].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[110].id2} value="2" onClick={() => deshabilitar(imagenesCaras[110].pos2, i*2, imagenesCaras[110].correct)}/>
                                    <label htmlFor={imagenesCaras[110].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[110].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[110].id3} value="3" onClick={() => deshabilitar(imagenesCaras[110].pos3, i*2, imagenesCaras[111].correct)}/>
                                    <label htmlFor={imagenesCaras[110].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[111].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 56) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[112].id1} value="1" onClick={() => deshabilitar(imagenesCaras[112].pos1, i*2, imagenesCaras[112].correct)}/>
                                    <label htmlFor={imagenesCaras[112].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[112].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[112].id2} value="2" onClick={() => deshabilitar(imagenesCaras[112].pos2, i*2, imagenesCaras[112].correct)}/>
                                    <label htmlFor={imagenesCaras[112].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[112].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[112].id3} value="3" onClick={() => deshabilitar(imagenesCaras[112].pos3, i*2, imagenesCaras[113].correct)}/>
                                    <label htmlFor={imagenesCaras[112].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[113].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 57) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[114].id1} value="1" onClick={() => deshabilitar(imagenesCaras[114].pos1, i*2, imagenesCaras[115].correct)}/>
                                    <label htmlFor={imagenesCaras[114].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[115].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[114].id2} value="2" onClick={() => deshabilitar(imagenesCaras[114].pos2, i*2, imagenesCaras[114].correct)}/>
                                    <label htmlFor={imagenesCaras[114].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[114].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[114].id3} value="3" onClick={() => deshabilitar(imagenesCaras[114].pos3, i*2, imagenesCaras[114].correct)}/>
                                    <label htmlFor={imagenesCaras[114].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[114].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 58) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[116].id1} value="1" onClick={() => deshabilitar(imagenesCaras[116].pos1, i*2, imagenesCaras[116].correct)}/>
                                    <label htmlFor={imagenesCaras[116].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[116].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[116].id2} value="2" onClick={() => deshabilitar(imagenesCaras[116].pos2, i*2, imagenesCaras[117].correct)}/>
                                    <label htmlFor={imagenesCaras[116].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[117].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[116].id3} value="3" onClick={() => deshabilitar(imagenesCaras[116].pos3, i*2, imagenesCaras[116].correct)}/>
                                    <label htmlFor={imagenesCaras[116].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[116].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 59) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[118].id1} value="1" onClick={() => deshabilitar(imagenesCaras[118].pos1, i*2, imagenesCaras[119].correct)}/>
                                    <label htmlFor={imagenesCaras[118].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[119].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[118].id2} value="2" onClick={() => deshabilitar(imagenesCaras[118].pos2, i*2, imagenesCaras[118].correct)}/>
                                    <label htmlFor={imagenesCaras[118].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[118].img} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[118].id3} value="3" onClick={() => deshabilitar(imagenesCaras[118].pos3, i*2, imagenesCaras[118].correct)}/>
                                    <label htmlFor={imagenesCaras[118].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={imagenesCaras[118].img} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FacesTest;