import React, { useState, useEffect, useContext } from 'react';
import imagenesCaras from "../../img/face_img/img_face";
import ProgressBar from './ProgressBar/ProgressBar';
import ScreenContext from '../ScreenContext';
import { useNavigate } from "react-router-dom";
/* import { getFirestore, collection, getDocs } from "firebase/firestore"; */
import styles from "./FacesTest.module.css";

const FacesTest = () => {

    const {
        data,
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

    /* const [value, setValue] = useState(180); */
    const navigate = useNavigate();
    /* const [data, setData] = useState([]); */    

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

      /* useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'img-face');
        getDocs(queryCollection)
            .then(res => setData(res.docs.map(img => ({id: img.id, ...img.data()}))));        
      }, []); */
      
      /* console.log(data); */

      useEffect(() => {
        if (totalTimeT2 == 0) {
            let nIci = ((hitCount - errorCount) / (hitCount + errorCount)) * 100;
            setIci(Math.round(nIci));
            navigate("/EndTest", { replace: true });
        }
        if (totalCount == 60) {
            let nIci = ((hitCount - errorCount) / (hitCount + errorCount)) * 100;
            setIci(Math.round(nIci));
            navigate("/EndTest", { replace: true });
        }
      }, [totalTimeT2]);

    const deshabilitar = (id, i, idCorrect) => {
        if (id == imagenesCaras[i].pos1) {
            console.log("first")
            const el1 = document.getElementById(imagenesCaras[i].id1);
            const el2 = document.getElementById(imagenesCaras[i].id2);
            const el3 = document.getElementById(imagenesCaras[i].id3);
            el1.disabled = true;
            el2.disabled = true;
            el3.disabled = true;
            console.log(idCorrect);
            if (idCorrect) {
                setHitCount(currentHit => currentHit + 1);
            } else if (idCorrect == false) {
                setErrorCount(currentError => currentError + 1);
            }
        } else if (id == imagenesCaras[i].pos2) {
            console.log("second")
            const el1 = document.getElementById(imagenesCaras[i].id1);
            const el2 = document.getElementById(imagenesCaras[i].id2);
            const el3 = document.getElementById(imagenesCaras[i].id3);
            el1.disabled = true;
            el2.disabled = true;
            el3.disabled = true;
            console.log(idCorrect);
            if (idCorrect) {
                setHitCount(currentHit => currentHit + 1);
            } else if (idCorrect == false) {
                setErrorCount(currentError => currentError + 1);
            }
        } else if (id == imagenesCaras[i].pos3) {
            console.log("third")
            const el1 = document.getElementById(imagenesCaras[i].id1);
            const el2 = document.getElementById(imagenesCaras[i].id2);
            const el3 = document.getElementById(imagenesCaras[i].id3);
            el1.disabled = true;
            el2.disabled = true;
            el3.disabled = true;
            console.log(idCorrect);
            if (idCorrect) {
                setHitCount(currentHit => currentHit + 1);
            } else if (idCorrect == false) {
                setErrorCount(currentError => currentError + 1);
            }
        }
        setTotalCount(currentTotal => currentTotal + 1);        
    };
        /* console.log(`Aciertos: ${hitCount}`);
        console.log(`Errores: ${errorCount}`);
        console.log(`Total: ${totalCount}`);

        console.log(totalTimeT2); */
        /* console.log(hitCount); */

    /* if (data.length == 0) {
        return(
            <></>
        );
    } else { */
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
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/0-0.png?alt=media&token=18617335-3897-4db0-a1e1-427de97462aa'} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[0].id2} value="2" onClick={() => deshabilitar(imagenesCaras[0].pos2, i, imagenesCaras[0].correct)}/>
                                    <label htmlFor={imagenesCaras[0].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/0-0.png?alt=media&token=18617335-3897-4db0-a1e1-427de97462aa'} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[0].id3} value="3" onClick={() => deshabilitar(imagenesCaras[0].pos3, i, imagenesCaras[1].correct)}/>
                                    <label htmlFor={imagenesCaras[0].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/0-1.png?alt=media&token=7e9eecaf-96ae-4204-a786-ef08affb114a'} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 1) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[2].id1} value="1" onClick={() => deshabilitar(imagenesCaras[2].pos1, i*2, imagenesCaras[2].correct)}/>
                                    <label htmlFor={imagenesCaras[2].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/1-0.png?alt=media&token=1d7abc0e-82cd-4de1-9eb4-eeae7127a505'} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[2].id2} value="2" onClick={() => deshabilitar(imagenesCaras[2].pos2, i*2, imagenesCaras[3].correct)}/>
                                    <label htmlFor={imagenesCaras[2].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/1-1.png?alt=media&token=bc75e752-bd9d-4113-9ee8-5441e1209654'} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[2].id3} value="3" onClick={() => deshabilitar(imagenesCaras[2].pos3, i*2, imagenesCaras[2].correct)}/>
                                    <label htmlFor={imagenesCaras[2].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/1-0.png?alt=media&token=1d7abc0e-82cd-4de1-9eb4-eeae7127a505'} alt={'cara'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 2) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[4].id1} value="1" onClick={() => deshabilitar(imagenesCaras[4].pos1, i*2, imagenesCaras[4].correct)}/>
                                    <label htmlFor={imagenesCaras[4].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/2-0.png?alt=media&token=82176ab9-e094-4def-9852-9d7ea8ba36e3'} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[4].id2} value="2" onClick={() => deshabilitar(imagenesCaras[4].pos2, i*2, imagenesCaras[5].correct)}/>
                                    <label htmlFor={imagenesCaras[4].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/2-1.png?alt=media&token=30330ef1-609d-4b74-83df-a5bf4a1a509d'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[4].id3} value="3" onClick={() => deshabilitar(imagenesCaras[4].pos3, i*2, imagenesCaras[4].correct)}/>
                                    <label htmlFor={imagenesCaras[4].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/2-0.png?alt=media&token=82176ab9-e094-4def-9852-9d7ea8ba36e3'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 3) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[6].id1} value="1" onClick={() => deshabilitar(imagenesCaras[6].pos1, i*2, imagenesCaras[6].correct)}/>
                                    <label htmlFor={imagenesCaras[6].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/3-0.png?alt=media&token=73d10174-8499-4f0a-b5fe-4b8a35a02d89'} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[6].id2} value="2" onClick={() => deshabilitar(imagenesCaras[6].pos2, i*2, imagenesCaras[7].correct)}/>
                                    <label htmlFor={imagenesCaras[6].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/3-1.png?alt=media&token=b9bfe89c-13a2-464a-9138-8abc4a405b29'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[6].id3} value="3" onClick={() => deshabilitar(imagenesCaras[6].pos3, i*2, imagenesCaras[6].correct)}/>
                                    <label htmlFor={imagenesCaras[6].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/3-0.png?alt=media&token=73d10174-8499-4f0a-b5fe-4b8a35a02d89'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 4) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[8].id1} value="1" onClick={() => deshabilitar(imagenesCaras[8].pos1, i*2, imagenesCaras[8].correct)}/>
                                    <label htmlFor={imagenesCaras[8].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/4-0.png?alt=media&token=c6934d86-72a6-4abb-82e0-e39283c7315b'} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[8].id2} value="2" onClick={() => deshabilitar(imagenesCaras[8].pos2, i*2, imagenesCaras[8].correct)}/>
                                    <label htmlFor={imagenesCaras[8].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/4-0.png?alt=media&token=c6934d86-72a6-4abb-82e0-e39283c7315b'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[8].id3} value="3" onClick={() => deshabilitar(imagenesCaras[8].pos3, i*2, imagenesCaras[9].correct)}/>
                                    <label htmlFor={imagenesCaras[8].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/4-1.png?alt=media&token=3645d067-65ae-41d4-9b62-5183dbe36d3c'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 5) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[10].id1} value="1" onClick={() => deshabilitar(imagenesCaras[10].pos1, i*2, imagenesCaras[10].correct)}/>
                                    <label htmlFor={imagenesCaras[10].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/5-0.png?alt=media&token=14524529-7bc0-4f27-999a-94b460c98780'} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[10].id2} value="2" onClick={() => deshabilitar(imagenesCaras[10].pos2, i*2, imagenesCaras[10].correct)}/>
                                    <label htmlFor={imagenesCaras[10].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/5-0.png?alt=media&token=14524529-7bc0-4f27-999a-94b460c98780'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[10].id3} value="3" onClick={() => deshabilitar(imagenesCaras[10].pos3, i*2, imagenesCaras[11].correct)}/>
                                    <label htmlFor={imagenesCaras[10].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/5-1.png?alt=media&token=f2287535-a33b-4b58-897f-8808cfeeeb9d'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 6) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[12].id1} value="1" onClick={() => deshabilitar(imagenesCaras[12].pos1, i*2, imagenesCaras[12].correct)}/>
                                    <label htmlFor={imagenesCaras[12].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/6-0.png?alt=media&token=2db1300e-5a7b-4665-9b93-262327ea5a8a'} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[12].id2} value="2" onClick={() => deshabilitar(imagenesCaras[12].pos2, i*2, imagenesCaras[13].correct)}/>
                                    <label htmlFor={imagenesCaras[12].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/6-1.png?alt=media&token=644024b5-9474-42de-baa9-e7a2bb87b9c0'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[12].id3} value="3" onClick={() => deshabilitar(imagenesCaras[12].pos3, i*2, imagenesCaras[12].correct)}/>
                                    <label htmlFor={imagenesCaras[12].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/6-0.png?alt=media&token=2db1300e-5a7b-4665-9b93-262327ea5a8a'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 7) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[14].id1} value="1" onClick={() => deshabilitar(imagenesCaras[14].pos1, i*2, imagenesCaras[14].correct)}/>
                                    <label htmlFor={imagenesCaras[14].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/7-0.png?alt=media&token=1ebbd42e-ee4b-44fc-b3ed-57490a5f101c'} alt={'cara'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[14].id2} value="2" onClick={() => deshabilitar(imagenesCaras[14].pos2, i*2, imagenesCaras[14].correct)}/>
                                    <label htmlFor={imagenesCaras[14].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/7-0.png?alt=media&token=1ebbd42e-ee4b-44fc-b3ed-57490a5f101c'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[14].id3} value="3" onClick={() => deshabilitar(imagenesCaras[14].pos3, i*2, imagenesCaras[15].correct)}/>
                                    <label htmlFor={imagenesCaras[14].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/7-1.png?alt=media&token=5f36e5c4-e09b-42ed-b7bb-2a27ab44e5f2'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 8) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[16].id1} value="1" onClick={() => deshabilitar(imagenesCaras[16].pos1, i*2, imagenesCaras[17].correct)}/>
                                    <label htmlFor={imagenesCaras[16].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/8-0.png?alt=media&token=b19809bd-c567-4d7c-96ce-66dee38bae79'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[16].id2} value="2" onClick={() => deshabilitar(imagenesCaras[16].pos2, i*2, imagenesCaras[16].correct)}/>
                                    <label htmlFor={imagenesCaras[16].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/8-1.png?alt=media&token=2b5e1f52-1117-4009-8f44-a1c4936d3395'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[16].id3} value="3" onClick={() => deshabilitar(imagenesCaras[16].pos3, i*2, imagenesCaras[16].correct)}/>
                                    <label htmlFor={imagenesCaras[16].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/8-1.png?alt=media&token=2b5e1f52-1117-4009-8f44-a1c4936d3395'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 9) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[18].id1} value="1" onClick={() => deshabilitar(imagenesCaras[18].pos1, i*2, imagenesCaras[18].correct)}/>
                                    <label htmlFor={imagenesCaras[18].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/9-0.png?alt=media&token=99794ae0-ae4d-47cd-92b1-bba6b812a792'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[18].id2} value="2" onClick={() => deshabilitar(imagenesCaras[18].pos2, i*2, imagenesCaras[18].correct)}/>
                                    <label htmlFor={imagenesCaras[18].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/9-0.png?alt=media&token=99794ae0-ae4d-47cd-92b1-bba6b812a792'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[18].id3} value="3" onClick={() => deshabilitar(imagenesCaras[18].pos3, i*2, imagenesCaras[19].correct)}/>
                                    <label htmlFor={imagenesCaras[18].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/9-1.png?alt=media&token=108b76c2-367a-46fe-b553-52aee0a44cd1'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 10) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[20].id1} value="1" onClick={() => deshabilitar(imagenesCaras[20].pos1, i*2, imagenesCaras[21].correct)}/>
                                    <label htmlFor={imagenesCaras[20].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/10-0.png?alt=media&token=21d87acf-efa6-4f61-890a-61ea4317d3dc'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[20].id2} value="2" onClick={() => deshabilitar(imagenesCaras[20].pos2, i*2, imagenesCaras[20].correct)}/>
                                    <label htmlFor={imagenesCaras[20].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/10-1.png?alt=media&token=6768d982-ea16-43aa-a594-cf71d2780eeb'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[20].id3} value="3" onClick={() => deshabilitar(imagenesCaras[20].pos3, i*2, imagenesCaras[20].correct)}/>
                                    <label htmlFor={imagenesCaras[20].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/10-1.png?alt=media&token=6768d982-ea16-43aa-a594-cf71d2780eeb'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 11) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[22].id1} value="1" onClick={() => deshabilitar(imagenesCaras[22].pos1, i*2, imagenesCaras[22].correct)}/>
                                    <label htmlFor={imagenesCaras[22].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/11-0.png?alt=media&token=bfbb3d50-000f-4560-8b2e-bd9827ff8cdf'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[22].id2} value="2" onClick={() => deshabilitar(imagenesCaras[22].pos2, i*2, imagenesCaras[22].correct)}/>
                                    <label htmlFor={imagenesCaras[22].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/11-0.png?alt=media&token=bfbb3d50-000f-4560-8b2e-bd9827ff8cdf'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[22].id3} value="3" onClick={() => deshabilitar(imagenesCaras[22].pos3, i*2, imagenesCaras[23].correct)}/>
                                    <label htmlFor={imagenesCaras[22].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/11-1.png?alt=media&token=f05cac51-145b-43ac-a2d7-88c493fe4cf5'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 12) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[24].id1} value="1" onClick={() => deshabilitar(imagenesCaras[24].pos1, i*2, imagenesCaras[24].correct)}/>
                                    <label htmlFor={imagenesCaras[24].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/12-0.png?alt=media&token=f1621323-f714-43b3-b10d-bd5c4d504301'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[24].id2} value="2" onClick={() => deshabilitar(imagenesCaras[24].pos2, i*2, imagenesCaras[25].correct)}/>
                                    <label htmlFor={imagenesCaras[24].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/12-1.png?alt=media&token=5db06449-0a7d-477c-ad03-8fd0af3ab24b'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[24].id3} value="3" onClick={() => deshabilitar(imagenesCaras[24].pos3, i*2, imagenesCaras[24].correct)}/>
                                    <label htmlFor={imagenesCaras[24].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/12-0.png?alt=media&token=f1621323-f714-43b3-b10d-bd5c4d504301'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 13) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[26].id1} value="1" onClick={() => deshabilitar(imagenesCaras[26].pos1, i*2, imagenesCaras[27].correct)}/>
                                    <label htmlFor={imagenesCaras[26].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/13-0.png?alt=media&token=13ae7488-c6f9-4d25-b2e9-5438767aafc7'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[26].id2} value="2" onClick={() => deshabilitar(imagenesCaras[26].pos2, i*2, imagenesCaras[26].correct)}/>
                                    <label htmlFor={imagenesCaras[26].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/13-1.png?alt=media&token=cea68430-cff5-459d-a594-f51db70e3e7e'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[26].id3} value="3" onClick={() => deshabilitar(imagenesCaras[26].pos3, i*2, imagenesCaras[26].correct)}/>
                                    <label htmlFor={imagenesCaras[26].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/13-1.png?alt=media&token=cea68430-cff5-459d-a594-f51db70e3e7e'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 14) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[28].id1} value="1" onClick={() => deshabilitar(imagenesCaras[28].pos1, i*2, imagenesCaras[28].correct)}/>
                                    <label htmlFor={imagenesCaras[28].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/14-0.png?alt=media&token=50f7a3ea-eac8-42e1-93b2-3bf41541d95a'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[28].id2} value="2" onClick={() => deshabilitar(imagenesCaras[28].pos2, i*2, imagenesCaras[29].correct)}/>
                                    <label htmlFor={imagenesCaras[28].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/14-1.png?alt=media&token=23192566-9294-465f-97ff-9ae6d2434e18'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[28].id3} value="3" onClick={() => deshabilitar(imagenesCaras[28].pos3, i*2, imagenesCaras[28].correct)}/>
                                    <label htmlFor={imagenesCaras[28].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/14-0.png?alt=media&token=50f7a3ea-eac8-42e1-93b2-3bf41541d95a'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 15) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[30].id1} value="1" onClick={() => deshabilitar(imagenesCaras[30].pos1, i*2, imagenesCaras[30].correct)}/>
                                    <label htmlFor={imagenesCaras[30].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/15-0.png?alt=media&token=f0951179-a53b-403c-9166-5b9f8af275bb'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[30].id2} value="2" onClick={() => deshabilitar(imagenesCaras[30].pos2, i*2, imagenesCaras[31].correct)}/>
                                    <label htmlFor={imagenesCaras[30].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/15-1.png?alt=media&token=ac8be0ef-5976-4b9c-b6b0-e683621c52ff'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[30].id3} value="3" onClick={() => deshabilitar(imagenesCaras[30].pos3, i*2, imagenesCaras[30].correct)}/>
                                    <label htmlFor={imagenesCaras[30].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/15-0.png?alt=media&token=f0951179-a53b-403c-9166-5b9f8af275bb'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 16) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[32].id1} value="1" onClick={() => deshabilitar(imagenesCaras[32].pos1, i*2, imagenesCaras[32].correct)}/>
                                    <label htmlFor={imagenesCaras[32].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/16-0.png?alt=media&token=08eee059-2650-49d1-a100-f5ee3f7960fc'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[32].id2} value="2" onClick={() => deshabilitar(imagenesCaras[32].pos2, i*2, imagenesCaras[33].correct)}/>
                                    <label htmlFor={imagenesCaras[32].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/16-1.png?alt=media&token=d525fe7e-bad7-40b9-8b54-6e72e81cc566'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[32].id3} value="3" onClick={() => deshabilitar(imagenesCaras[32].pos3, i*2, imagenesCaras[32].correct)}/>
                                    <label htmlFor={imagenesCaras[32].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/16-0.png?alt=media&token=08eee059-2650-49d1-a100-f5ee3f7960fc'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 17) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[34].id1} value="1" onClick={() => deshabilitar(imagenesCaras[34].pos1, i*2, imagenesCaras[34].correct)}/>
                                    <label htmlFor={imagenesCaras[34].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/17-0.png?alt=media&token=3b57eb19-dd6d-491e-b726-380c00b15ade'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[34].id2} value="2" onClick={() => deshabilitar(imagenesCaras[34].pos2, i*2, imagenesCaras[35].correct)}/>
                                    <label htmlFor={imagenesCaras[34].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/17-1.png?alt=media&token=91d69c3b-d9b6-447c-b1b7-127cff1d37d8'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[34].id3} value="3" onClick={() => deshabilitar(imagenesCaras[34].pos3, i*2, imagenesCaras[34].correct)}/>
                                    <label htmlFor={imagenesCaras[34].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/17-0.png?alt=media&token=3b57eb19-dd6d-491e-b726-380c00b15ade'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 18) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[36].id1} value="1" onClick={() => deshabilitar(imagenesCaras[36].pos1, i*2, imagenesCaras[36].correct)}/>
                                    <label htmlFor={imagenesCaras[36].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/18-0.png?alt=media&token=3b58fdf1-d6ee-4305-b0b1-e2c31db96381'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[36].id2} value="2" onClick={() => deshabilitar(imagenesCaras[36].pos2, i*2, imagenesCaras[36].correct)}/>
                                    <label htmlFor={imagenesCaras[36].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/18-0.png?alt=media&token=3b58fdf1-d6ee-4305-b0b1-e2c31db96381'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[36].id3} value="3" onClick={() => deshabilitar(imagenesCaras[36].pos3, i*2, imagenesCaras[37].correct)}/>
                                    <label htmlFor={imagenesCaras[36].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/18-1.png?alt=media&token=0c459b68-e24a-4b9a-a9e7-94dddb83092f'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 19) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[38].id1} value="1" onClick={() => deshabilitar(imagenesCaras[38].pos1, i*2, imagenesCaras[39].correct)}/>
                                    <label htmlFor={imagenesCaras[38].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/19-0.png?alt=media&token=e5e516ec-eab1-4c29-970b-972c64108053'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[38].id2} value="2" onClick={() => deshabilitar(imagenesCaras[38].pos2, i*2, imagenesCaras[38].correct)}/>
                                    <label htmlFor={imagenesCaras[38].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/19-1.png?alt=media&token=56391f6a-bbe8-471d-9aa7-299a02939ee6'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[38].id3} value="3" onClick={() => deshabilitar(imagenesCaras[38].pos3, i*2, imagenesCaras[38].correct)}/>
                                    <label htmlFor={imagenesCaras[38].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/19-1.png?alt=media&token=56391f6a-bbe8-471d-9aa7-299a02939ee6'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 20) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[40].id1} value="1" onClick={() => deshabilitar(imagenesCaras[40].pos1, i*2, imagenesCaras[40].correct)}/>
                                    <label htmlFor={imagenesCaras[40].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/20-0.png?alt=media&token=c2b63780-50d9-4770-b93d-3ca67031ecdb'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[40].id2} value="2" onClick={() => deshabilitar(imagenesCaras[40].pos2, i*2, imagenesCaras[41].correct)}/>
                                    <label htmlFor={imagenesCaras[40].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/20-1.png?alt=media&token=96c27942-3dda-4dc1-b810-7d2ac9f30b33'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[40].id3} value="3" onClick={() => deshabilitar(imagenesCaras[40].pos3, i*2, imagenesCaras[40].correct)}/>
                                    <label htmlFor={imagenesCaras[40].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/20-0.png?alt=media&token=c2b63780-50d9-4770-b93d-3ca67031ecdb'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 21) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[42].id1} value="1" onClick={() => deshabilitar(imagenesCaras[42].pos1, i*2, imagenesCaras[42].correct)}/>
                                    <label htmlFor={imagenesCaras[42].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/21-0.png?alt=media&token=bd0ebf37-0fe9-4006-b1d6-098a6005409e'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[42].id2} value="2" onClick={() => deshabilitar(imagenesCaras[42].pos2, i*2, imagenesCaras[43].correct)}/>
                                    <label htmlFor={imagenesCaras[42].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/21-1.png?alt=media&token=fc2201d6-07cc-44ff-b350-7583130908cc'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[42].id3} value="3" onClick={() => deshabilitar(imagenesCaras[42].pos3, i*2, imagenesCaras[42].correct)}/>
                                    <label htmlFor={imagenesCaras[42].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/21-0.png?alt=media&token=bd0ebf37-0fe9-4006-b1d6-098a6005409e'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 22) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[44].id1} value="1" onClick={() => deshabilitar(imagenesCaras[44].pos1, i*2, imagenesCaras[45].correct)}/>
                                    <label htmlFor={imagenesCaras[44].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/22-0.png?alt=media&token=4e0aba93-8bbd-4f47-95ab-027185cd9f80'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[44].id2} value="2" onClick={() => deshabilitar(imagenesCaras[44].pos2, i*2, imagenesCaras[44].correct)}/>
                                    <label htmlFor={imagenesCaras[44].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/22-1.png?alt=media&token=54e12b3c-90d0-40f7-83ce-f7b71958af7e'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[44].id3} value="3" onClick={() => deshabilitar(imagenesCaras[44].pos3, i*2, imagenesCaras[44].correct)}/>
                                    <label htmlFor={imagenesCaras[44].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/22-1.png?alt=media&token=54e12b3c-90d0-40f7-83ce-f7b71958af7e'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 23) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[46].id1} value="1" onClick={() => deshabilitar(imagenesCaras[46].pos1, i*2, imagenesCaras[47].correct)}/>
                                    <label htmlFor={imagenesCaras[46].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/23-0.png?alt=media&token=881478c5-d676-47aa-b908-136a2c54a371'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[46].id2} value="2" onClick={() => deshabilitar(imagenesCaras[46].pos2, i*2, imagenesCaras[46].correct)}/>
                                    <label htmlFor={imagenesCaras[46].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/23-1.png?alt=media&token=db5e8aca-fe0c-41a5-8739-49b138960485'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[46].id3} value="3" onClick={() => deshabilitar(imagenesCaras[46].pos3, i*2, imagenesCaras[46].correct)}/>
                                    <label htmlFor={imagenesCaras[46].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/23-1.png?alt=media&token=db5e8aca-fe0c-41a5-8739-49b138960485'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 24) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[48].id1} value="1" onClick={() => deshabilitar(imagenesCaras[48].pos1, i*2, imagenesCaras[49].correct)}/>
                                    <label htmlFor={imagenesCaras[48].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/24-0.png?alt=media&token=537fafd3-5a6b-4596-9ab6-b6551beadfc3'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[48].id2} value="2" onClick={() => deshabilitar(imagenesCaras[48].pos2, i*2, imagenesCaras[48].correct)}/>
                                    <label htmlFor={imagenesCaras[48].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/24-1.png?alt=media&token=bdc2d1d9-5c46-4357-8153-71ee39ea06b8'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[48].id3} value="3" onClick={() => deshabilitar(imagenesCaras[48].pos3, i*2, imagenesCaras[48].correct)}/>
                                    <label htmlFor={imagenesCaras[48].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/24-1.png?alt=media&token=bdc2d1d9-5c46-4357-8153-71ee39ea06b8'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 25) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[50].id1} value="1" onClick={() => deshabilitar(imagenesCaras[50].pos1, i*2, imagenesCaras[51].correct)}/>
                                    <label htmlFor={imagenesCaras[50].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/25-0.png?alt=media&token=03d3ca2e-7411-451c-a8c1-0a710c654eaa'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[50].id2} value="2" onClick={() => deshabilitar(imagenesCaras[50].pos2, i*2, imagenesCaras[50].correct)}/>
                                    <label htmlFor={imagenesCaras[50].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/25-1.png?alt=media&token=f0a26140-b8e7-4600-9bb2-be635e6319ba'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[50].id3} value="3" onClick={() => deshabilitar(imagenesCaras[50].pos3, i*2, imagenesCaras[50].correct)}/>
                                    <label htmlFor={imagenesCaras[50].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/25-1.png?alt=media&token=f0a26140-b8e7-4600-9bb2-be635e6319ba'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 26) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[52].id1} value="1" onClick={() => deshabilitar(imagenesCaras[52].pos1, i*2, imagenesCaras[53].correct)}/>
                                    <label htmlFor={imagenesCaras[52].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/26-0.png?alt=media&token=991c8b05-4928-405a-939c-c1b78596959c'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[52].id2} value="2" onClick={() => deshabilitar(imagenesCaras[52].pos2, i*2, imagenesCaras[52].correct)}/>
                                    <label htmlFor={imagenesCaras[52].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/26-1.png?alt=media&token=d72d8ea1-de53-4a43-9acd-6db800c6dcf4'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[52].id3} value="3" onClick={() => deshabilitar(imagenesCaras[52].pos3, i*2, imagenesCaras[52].correct)}/>
                                    <label htmlFor={imagenesCaras[52].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/26-1.png?alt=media&token=d72d8ea1-de53-4a43-9acd-6db800c6dcf4'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 27) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[54].id1} value="1" onClick={() => deshabilitar(imagenesCaras[54].pos1, i*2, imagenesCaras[54].correct)}/>
                                    <label htmlFor={imagenesCaras[54].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/27-0.png?alt=media&token=56447cd3-c1a3-447c-b01f-49356f0593fa'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[54].id2} value="2" onClick={() => deshabilitar(imagenesCaras[54].pos2, i*2, imagenesCaras[54].correct)}/>
                                    <label htmlFor={imagenesCaras[54].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/27-0.png?alt=media&token=56447cd3-c1a3-447c-b01f-49356f0593fa'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[54].id3} value="3" onClick={() => deshabilitar(imagenesCaras[54].pos3, i*2, imagenesCaras[55].correct)}/>
                                    <label htmlFor={imagenesCaras[54].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/27-1.png?alt=media&token=2b9338f2-9861-4dde-bea6-679279a4c67e'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 28) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[56].id1} value="1" onClick={() => deshabilitar(imagenesCaras[56].pos1, i*2, imagenesCaras[57].correct)}/>
                                    <label htmlFor={imagenesCaras[56].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/28-0.png?alt=media&token=39e95f5c-5723-4f29-8693-2d173629aff0'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[56].id2} value="2" onClick={() => deshabilitar(imagenesCaras[56].pos2, i*2, imagenesCaras[56].correct)}/>
                                    <label htmlFor={imagenesCaras[56].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/28-1.png?alt=media&token=10fdae32-64ad-4fc4-bc56-927b3acf29df'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[56].id3} value="3" onClick={() => deshabilitar(imagenesCaras[56].pos3, i*2, imagenesCaras[56].correct)}/>
                                    <label htmlFor={imagenesCaras[56].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/28-1.png?alt=media&token=10fdae32-64ad-4fc4-bc56-927b3acf29df'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 29) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[58].id1} value="1" onClick={() => deshabilitar(imagenesCaras[58].pos1, i*2, imagenesCaras[58].correct)}/>
                                    <label htmlFor={imagenesCaras[58].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/29-0.png?alt=media&token=3e6eafd7-bcac-4e17-829b-d3e90a65a98d'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[58].id2} value="2" onClick={() => deshabilitar(imagenesCaras[58].pos2, i*2, imagenesCaras[58].correct)}/>
                                    <label htmlFor={imagenesCaras[58].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/29-0.png?alt=media&token=3e6eafd7-bcac-4e17-829b-d3e90a65a98d'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[58].id3} value="3" onClick={() => deshabilitar(imagenesCaras[58].pos3, i*2, imagenesCaras[59].correct)}/>
                                    <label htmlFor={imagenesCaras[58].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/29-1.png?alt=media&token=4c128ab5-2d47-4cdd-a8a1-fa948d7d05ff'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 30) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[60].id1} value="1" onClick={() => deshabilitar(imagenesCaras[60].pos1, i*2, imagenesCaras[60].correct)}/>
                                    <label htmlFor={imagenesCaras[60].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/30-0.png?alt=media&token=c45e53cd-d758-416a-8de5-4fcc519915dc'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[60].id2} value="2" onClick={() => deshabilitar(imagenesCaras[60].pos2, i*2, imagenesCaras[61].correct)}/>
                                    <label htmlFor={imagenesCaras[60].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/30-1.png?alt=media&token=8bd8d4d0-0f10-4e90-8874-f93abcedd367'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[60].id3} value="3" onClick={() => deshabilitar(imagenesCaras[60].pos3, i*2, imagenesCaras[60].correct)}/>
                                    <label htmlFor={imagenesCaras[60].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/30-0.png?alt=media&token=c45e53cd-d758-416a-8de5-4fcc519915dc'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 31) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[62].id1} value="1" onClick={() => deshabilitar(imagenesCaras[62].pos1, i*2, imagenesCaras[62].correct)}/>
                                    <label htmlFor={imagenesCaras[62].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/31-0.png?alt=media&token=508635cd-123e-494e-9467-f1d22e745a72'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[62].id2} value="2" onClick={() => deshabilitar(imagenesCaras[62].pos2, i*2, imagenesCaras[63].correct)}/>
                                    <label htmlFor={imagenesCaras[62].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/31-1.png?alt=media&token=577092cf-edb6-4f04-afcf-12a649951fd9'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[62].id3} value="3" onClick={() => deshabilitar(imagenesCaras[62].pos3, i*2, imagenesCaras[62].correct)}/>
                                    <label htmlFor={imagenesCaras[62].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/31-0.png?alt=media&token=508635cd-123e-494e-9467-f1d22e745a72'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 32) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[64].id1} value="1" onClick={() => deshabilitar(imagenesCaras[64].pos1, i*2, imagenesCaras[65].correct)}/>
                                    <label htmlFor={imagenesCaras[64].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/32-0.png?alt=media&token=927830f1-b520-4c91-9197-a53e84acf9d1'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[64].id2} value="2" onClick={() => deshabilitar(imagenesCaras[64].pos2, i*2, imagenesCaras[64].correct)}/>
                                    <label htmlFor={imagenesCaras[64].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/32-1.png?alt=media&token=a8603a88-94d9-48a6-af1e-9bdbfadb5347'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[64].id3} value="3" onClick={() => deshabilitar(imagenesCaras[64].pos3, i*2, imagenesCaras[64].correct)}/>
                                    <label htmlFor={imagenesCaras[64].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/32-1.png?alt=media&token=a8603a88-94d9-48a6-af1e-9bdbfadb5347'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 33) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[66].id1} value="1" onClick={() => deshabilitar(imagenesCaras[66].pos1, i*2, imagenesCaras[67].correct)}/>
                                    <label htmlFor={imagenesCaras[66].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/33-0.png?alt=media&token=3b87fd04-7edf-431f-9674-33daa46de944'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[66].id2} value="2" onClick={() => deshabilitar(imagenesCaras[66].pos2, i*2, imagenesCaras[66].correct)}/>
                                    <label htmlFor={imagenesCaras[66].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/33-1.png?alt=media&token=312e1fa5-20d0-4206-8003-71fac05eca82'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[66].id3} value="3" onClick={() => deshabilitar(imagenesCaras[66].pos3, i*2, imagenesCaras[66].correct)}/>
                                    <label htmlFor={imagenesCaras[66].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/33-1.png?alt=media&token=312e1fa5-20d0-4206-8003-71fac05eca82'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 34) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[68].id1} value="1" onClick={() => deshabilitar(imagenesCaras[68].pos1, i*2, imagenesCaras[68].correct)}/>
                                    <label htmlFor={imagenesCaras[68].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/34-0.png?alt=media&token=02c7f50a-b0c1-4c45-a13f-4e958d3b54ae'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[68].id2} value="2" onClick={() => deshabilitar(imagenesCaras[68].pos2, i*2, imagenesCaras[69].correct)}/>
                                    <label htmlFor={imagenesCaras[68].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/34-1.png?alt=media&token=e298218c-3a6b-4d0a-a6f2-a10c62ca0b4d'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[68].id3} value="3" onClick={() => deshabilitar(imagenesCaras[68].pos3, i*2, imagenesCaras[68].correct)}/>
                                    <label htmlFor={imagenesCaras[68].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/34-0.png?alt=media&token=02c7f50a-b0c1-4c45-a13f-4e958d3b54ae'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 35) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[70].id1} value="1" onClick={() => deshabilitar(imagenesCaras[70].pos1, i*2, imagenesCaras[70].correct)}/>
                                    <label htmlFor={imagenesCaras[70].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/35-0.png?alt=media&token=cb7a0c39-5c06-4fb2-b37b-8cf75b4fb620'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[70].id2} value="2" onClick={() => deshabilitar(imagenesCaras[70].pos2, i*2, imagenesCaras[70].correct)}/>
                                    <label htmlFor={imagenesCaras[70].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/35-0.png?alt=media&token=cb7a0c39-5c06-4fb2-b37b-8cf75b4fb620'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[70].id3} value="3" onClick={() => deshabilitar(imagenesCaras[70].pos3, i*2, imagenesCaras[71].correct)}/>
                                    <label htmlFor={imagenesCaras[70].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/35-1.png?alt=media&token=ef9f8fa8-adc1-46bd-b22d-6ea70edad5b1'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 36) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[72].id1} value="1" onClick={() => deshabilitar(imagenesCaras[72].pos1, i*2, imagenesCaras[73].correct)}/>
                                    <label htmlFor={imagenesCaras[72].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/36-0.png?alt=media&token=ebe2930a-641e-4784-bf0f-01cb98894434'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[72].id2} value="2" onClick={() => deshabilitar(imagenesCaras[72].pos2, i*2, imagenesCaras[72].correct)}/>
                                    <label htmlFor={imagenesCaras[72].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/36-1.png?alt=media&token=e6e73dd2-aa28-4408-affa-8daacc91de58'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[72].id3} value="3" onClick={() => deshabilitar(imagenesCaras[72].pos3, i*2, imagenesCaras[72].correct)}/>
                                    <label htmlFor={imagenesCaras[72].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/36-1.png?alt=media&token=e6e73dd2-aa28-4408-affa-8daacc91de58'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 37) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[74].id1} value="1" onClick={() => deshabilitar(imagenesCaras[74].pos1, i*2, imagenesCaras[75].correct)}/>
                                    <label htmlFor={imagenesCaras[74].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/37-0.png?alt=media&token=87ee5a44-17f0-4249-a597-7617d1f1d896'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[74].id2} value="2" onClick={() => deshabilitar(imagenesCaras[74].pos2, i*2, imagenesCaras[74].correct)}/>
                                    <label htmlFor={imagenesCaras[74].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/37-1.png?alt=media&token=7366f907-4571-4994-858b-f8bfa2cd7939'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[74].id3} value="3" onClick={() => deshabilitar(imagenesCaras[74].pos3, i*2, imagenesCaras[74].correct)}/>
                                    <label htmlFor={imagenesCaras[74].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/37-1.png?alt=media&token=7366f907-4571-4994-858b-f8bfa2cd7939'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 38) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[76].id1} value="1" onClick={() => deshabilitar(imagenesCaras[76].pos1, i*2, imagenesCaras[76].correct)}/>
                                    <label htmlFor={imagenesCaras[76].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/38-0.png?alt=media&token=0aab9936-745b-438e-b376-b1d07b8f0dbc'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[76].id2} value="2" onClick={() => deshabilitar(imagenesCaras[76].pos2, i*2, imagenesCaras[77].correct)}/>
                                    <label htmlFor={imagenesCaras[76].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/38-1.png?alt=media&token=59e2aae9-268f-4240-a107-da02e5483f30'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[76].id3} value="3" onClick={() => deshabilitar(imagenesCaras[76].pos3, i*2, imagenesCaras[76].correct)}/>
                                    <label htmlFor={imagenesCaras[76].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/38-0.png?alt=media&token=0aab9936-745b-438e-b376-b1d07b8f0dbc'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 39) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[78].id1} value="1" onClick={() => deshabilitar(imagenesCaras[78].pos1, i*2, imagenesCaras[78].correct)}/>
                                    <label htmlFor={imagenesCaras[78].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/39-0.png?alt=media&token=a7c0b4ff-1127-4f67-87d7-151c69ea51ea'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[78].id2} value="2" onClick={() => deshabilitar(imagenesCaras[78].pos2, i*2, imagenesCaras[78].correct)}/>
                                    <label htmlFor={imagenesCaras[78].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/39-0.png?alt=media&token=a7c0b4ff-1127-4f67-87d7-151c69ea51ea'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[78].id3} value="3" onClick={() => deshabilitar(imagenesCaras[78].pos3, i*2, imagenesCaras[79].correct)}/>
                                    <label htmlFor={imagenesCaras[78].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/39-1.png?alt=media&token=a4c4ac17-e288-4a71-b905-3e4b493abe0c'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 40) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[80].id1} value="1" onClick={() => deshabilitar(imagenesCaras[80].pos1, i*2, imagenesCaras[80].correct)}/>
                                    <label htmlFor={imagenesCaras[80].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/40-0.png?alt=media&token=3dcb7aba-34c5-4f1d-9c3b-84cfb2f1bcc6'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[80].id2} value="2" onClick={() => deshabilitar(imagenesCaras[80].pos2, i*2, imagenesCaras[81].correct)}/>
                                    <label htmlFor={imagenesCaras[80].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/40-1.png?alt=media&token=e950ffb2-d0fa-4de1-bbb9-985c80470d82'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[80].id3} value="3" onClick={() => deshabilitar(imagenesCaras[80].pos3, i*2, imagenesCaras[80].correct)}/>
                                    <label htmlFor={imagenesCaras[80].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/40-0.png?alt=media&token=3dcb7aba-34c5-4f1d-9c3b-84cfb2f1bcc6'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 41) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[82].id1} value="1" onClick={() => deshabilitar(imagenesCaras[82].pos1, i*2, imagenesCaras[82].correct)}/>
                                    <label htmlFor={imagenesCaras[82].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/41-0.png?alt=media&token=6c43f57a-2d73-4053-8361-db9e28d9d537'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[82].id2} value="2" onClick={() => deshabilitar(imagenesCaras[82].pos2, i*2, imagenesCaras[83].correct)}/>
                                    <label htmlFor={imagenesCaras[82].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/41-1.png?alt=media&token=f3627f0c-3aa9-4d42-9aee-b370bba34a9b'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[82].id3} value="3" onClick={() => deshabilitar(imagenesCaras[82].pos3, i*2, imagenesCaras[82].correct)}/>
                                    <label htmlFor={imagenesCaras[82].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/41-0.png?alt=media&token=6c43f57a-2d73-4053-8361-db9e28d9d537'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 42) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[84].id1} value="1" onClick={() => deshabilitar(imagenesCaras[84].pos1, i*2, imagenesCaras[84].correct)}/>
                                    <label htmlFor={imagenesCaras[84].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/42-0.png?alt=media&token=34f05ec9-0544-4dd3-8a28-c5b9265f0699'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[84].id2} value="2" onClick={() => deshabilitar(imagenesCaras[84].pos2, i*2, imagenesCaras[84].correct)}/>
                                    <label htmlFor={imagenesCaras[84].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/42-0.png?alt=media&token=34f05ec9-0544-4dd3-8a28-c5b9265f0699'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[84].id3} value="3" onClick={() => deshabilitar(imagenesCaras[84].pos3, i*2, imagenesCaras[85].correct)}/>
                                    <label htmlFor={imagenesCaras[84].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/42-1.png?alt=media&token=15ba9e87-42e9-4ae6-aa10-9e58a567041f'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 43) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[86].id1} value="1" onClick={() => deshabilitar(imagenesCaras[86].pos1, i*2, imagenesCaras[86].correct)}/>
                                    <label htmlFor={imagenesCaras[86].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/43-0.png?alt=media&token=5dc9178c-c118-4f36-b7a0-f518bc93961f'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[86].id2} value="2" onClick={() => deshabilitar(imagenesCaras[86].pos2, i*2, imagenesCaras[86].correct)}/>
                                    <label htmlFor={imagenesCaras[86].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/43-0.png?alt=media&token=5dc9178c-c118-4f36-b7a0-f518bc93961f'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[86].id3} value="3" onClick={() => deshabilitar(imagenesCaras[86].pos3, i*2, imagenesCaras[87].correct)}/>
                                    <label htmlFor={imagenesCaras[86].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/43-1.png?alt=media&token=595789f7-a7ed-4eee-8cc8-97db8af315e0'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 44) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[88].id1} value="1" onClick={() => deshabilitar(imagenesCaras[88].pos1, i*2, imagenesCaras[88].correct)}/>
                                    <label htmlFor={imagenesCaras[88].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/44-0.png?alt=media&token=9fd0ae6a-8b9f-404c-8e8a-78a36e539047'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[88].id2} value="2" onClick={() => deshabilitar(imagenesCaras[88].pos2, i*2, imagenesCaras[88].correct)}/>
                                    <label htmlFor={imagenesCaras[88].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/44-0.png?alt=media&token=9fd0ae6a-8b9f-404c-8e8a-78a36e539047'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[88].id3} value="3" onClick={() => deshabilitar(imagenesCaras[88].pos3, i*2, imagenesCaras[89].correct)}/>
                                    <label htmlFor={imagenesCaras[88].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/44-1.png?alt=media&token=cd05ed2c-61fc-4bb7-80de-0f9b6225194e'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 45) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[90].id1} value="1" onClick={() => deshabilitar(imagenesCaras[90].pos1, i*2, imagenesCaras[90].correct)}/>
                                    <label htmlFor={imagenesCaras[90].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/45-0.png?alt=media&token=db72285e-530f-4e2e-8aa6-397b9cff0140'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[90].id2} value="2" onClick={() => deshabilitar(imagenesCaras[90].pos2, i*2, imagenesCaras[91].correct)}/>
                                    <label htmlFor={imagenesCaras[90].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/45-1.png?alt=media&token=a5cbb20d-a319-49a0-b1f9-5270e26ff15a'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[90].id3} value="3" onClick={() => deshabilitar(imagenesCaras[90].pos3, i*2, imagenesCaras[90].correct)}/>
                                    <label htmlFor={imagenesCaras[90].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/45-0.png?alt=media&token=db72285e-530f-4e2e-8aa6-397b9cff0140'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 46) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[92].id1} value="1" onClick={() => deshabilitar(imagenesCaras[92].pos1, i*2, imagenesCaras[92].correct)}/>
                                    <label htmlFor={imagenesCaras[92].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/46-0.png?alt=media&token=ebad25d5-3c90-4dfd-8683-bc045c5af73c'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[92].id2} value="2" onClick={() => deshabilitar(imagenesCaras[92].pos2, i*2, imagenesCaras[93].correct)}/>
                                    <label htmlFor={imagenesCaras[92].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/46-1.png?alt=media&token=76c1ffc6-dacb-4d33-aeca-c75b012d1d0d'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[92].id3} value="3" onClick={() => deshabilitar(imagenesCaras[92].pos3, i*2, imagenesCaras[92].correct)}/>
                                    <label htmlFor={imagenesCaras[92].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/46-0.png?alt=media&token=ebad25d5-3c90-4dfd-8683-bc045c5af73c'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 47) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[94].id1} value="1" onClick={() => deshabilitar(imagenesCaras[94].pos1, i*2, imagenesCaras[95].correct)}/>
                                    <label htmlFor={imagenesCaras[94].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/47-0.png?alt=media&token=5e5ea257-7350-4367-aa64-a6edb78bdefb'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[94].id2} value="2" onClick={() => deshabilitar(imagenesCaras[94].pos2, i*2, imagenesCaras[94].correct)}/>
                                    <label htmlFor={imagenesCaras[94].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/47-1.png?alt=media&token=57698721-4e5a-47c9-ac58-60372257e6cf'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[94].id3} value="3" onClick={() => deshabilitar(imagenesCaras[94].pos3, i*2, imagenesCaras[94].correct)}/>
                                    <label htmlFor={imagenesCaras[94].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/47-1.png?alt=media&token=57698721-4e5a-47c9-ac58-60372257e6cf'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 48) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[96].id1} value="1" onClick={() => deshabilitar(imagenesCaras[96].pos1, i*2, imagenesCaras[97].correct)}/>
                                    <label htmlFor={imagenesCaras[96].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/48-0.png?alt=media&token=d4882336-789f-4df7-80e6-4ab73dcec8dc'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[96].id2} value="2" onClick={() => deshabilitar(imagenesCaras[96].pos2, i*2, imagenesCaras[96].correct)}/>
                                    <label htmlFor={imagenesCaras[96].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/48-1.png?alt=media&token=2b7d8e55-7120-44ca-b8d1-14d4c00f5e24'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[96].id3} value="3" onClick={() => deshabilitar(imagenesCaras[96].pos3, i*2, imagenesCaras[96].correct)}/>
                                    <label htmlFor={imagenesCaras[96].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/48-1.png?alt=media&token=2b7d8e55-7120-44ca-b8d1-14d4c00f5e24'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 49) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[98].id1} value="1" onClick={() => deshabilitar(imagenesCaras[98].pos1, i*2, imagenesCaras[99].correct)}/>
                                    <label htmlFor={imagenesCaras[98].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/49-0.png?alt=media&token=3121e2b6-239a-404f-a64f-11f2eecd232d'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[98].id2} value="2" onClick={() => deshabilitar(imagenesCaras[98].pos2, i*2, imagenesCaras[98].correct)}/>
                                    <label htmlFor={imagenesCaras[98].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/49-1.png?alt=media&token=955fcccb-9879-410c-b20a-0d52bd004627'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[98].id3} value="3" onClick={() => deshabilitar(imagenesCaras[98].pos3, i*2, imagenesCaras[98].correct)}/>
                                    <label htmlFor={imagenesCaras[98].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/49-1.png?alt=media&token=955fcccb-9879-410c-b20a-0d52bd004627'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 50) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[100].id1} value="1" onClick={() => deshabilitar(imagenesCaras[100].pos1, i*2, imagenesCaras[101].correct)}/>
                                    <label htmlFor={imagenesCaras[100].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/50-0.png?alt=media&token=e0c3987a-597d-4bf5-9ba2-7f15fb283237'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[100].id2} value="2" onClick={() => deshabilitar(imagenesCaras[100].pos2, i*2, imagenesCaras[100].correct)}/>
                                    <label htmlFor={imagenesCaras[100].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/50-1.png?alt=media&token=42dc8a3d-2318-46c6-bbc4-dd140c10df5a'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[100].id3} value="3" onClick={() => deshabilitar(imagenesCaras[100].pos3, i*2, imagenesCaras[100].correct)}/>
                                    <label htmlFor={imagenesCaras[100].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/50-1.png?alt=media&token=42dc8a3d-2318-46c6-bbc4-dd140c10df5a'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 51) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[102].id1} value="1" onClick={() => deshabilitar(imagenesCaras[102].pos1, i*2, imagenesCaras[102].correct)}/>
                                    <label htmlFor={imagenesCaras[102].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/51-0.png?alt=media&token=9a46a3f6-f7dd-4656-a690-c6790e528a4f'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[102].id2} value="2" onClick={() => deshabilitar(imagenesCaras[102].pos2, i*2, imagenesCaras[103].correct)}/>
                                    <label htmlFor={imagenesCaras[102].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/51-1.png?alt=media&token=0acd7ab9-4d93-4e57-af02-f07a21b37ecd'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[102].id3} value="3" onClick={() => deshabilitar(imagenesCaras[102].pos3, i*2, imagenesCaras[102].correct)}/>
                                    <label htmlFor={imagenesCaras[102].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/51-0.png?alt=media&token=9a46a3f6-f7dd-4656-a690-c6790e528a4f'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 52) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[104].id1} value="1" onClick={() => deshabilitar(imagenesCaras[104].pos1, i*2, imagenesCaras[104].correct)}/>
                                    <label htmlFor={imagenesCaras[104].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/52-0.png?alt=media&token=9a8e9ae7-1a55-4bd5-acd2-f22f6bed026e'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[104].id2} value="2" onClick={() => deshabilitar(imagenesCaras[104].pos2, i*2, imagenesCaras[105].correct)}/>
                                    <label htmlFor={imagenesCaras[104].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/52-1.png?alt=media&token=e20cd0ce-a37f-4166-bc06-d3c35f36e8b0'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[104].id3} value="3" onClick={() => deshabilitar(imagenesCaras[104].pos3, i*2, imagenesCaras[104].correct)}/>
                                    <label htmlFor={imagenesCaras[104].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/52-0.png?alt=media&token=9a8e9ae7-1a55-4bd5-acd2-f22f6bed026e'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 53) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[106].id1} value="1" onClick={() => deshabilitar(imagenesCaras[106].pos1, i*2, imagenesCaras[106].correct)}/>
                                    <label htmlFor={imagenesCaras[106].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/53-0.png?alt=media&token=61b062a4-ad1f-4e21-ae95-e9e8926c24d8'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[106].id2} value="2" onClick={() => deshabilitar(imagenesCaras[106].pos2, i*2, imagenesCaras[106].correct)}/>
                                    <label htmlFor={imagenesCaras[106].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/53-0.png?alt=media&token=61b062a4-ad1f-4e21-ae95-e9e8926c24d8'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[106].id3} value="3" onClick={() => deshabilitar(imagenesCaras[106].pos3, i*2, imagenesCaras[107].correct)}/>
                                    <label htmlFor={imagenesCaras[106].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/53-1.png?alt=media&token=89568212-2a10-4f70-8435-2833ec4f395f'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 54) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[108].id1} value="1" onClick={() => deshabilitar(imagenesCaras[108].pos1, i*2, imagenesCaras[108].correct)}/>
                                    <label htmlFor={imagenesCaras[108].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/54-0.png?alt=media&token=762f10a9-9e95-47fb-b87f-f64d1ac63456'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[108].id2} value="2" onClick={() => deshabilitar(imagenesCaras[108].pos2, i*2, imagenesCaras[109].correct)}/>
                                    <label htmlFor={imagenesCaras[108].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/54-1.png?alt=media&token=44a40909-413f-4ac0-a213-aa77d4d30418'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[108].id3} value="3" onClick={() => deshabilitar(imagenesCaras[108].pos3, i*2, imagenesCaras[108].correct)}/>
                                    <label htmlFor={imagenesCaras[108].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/54-0.png?alt=media&token=762f10a9-9e95-47fb-b87f-f64d1ac63456'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 55) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[110].id1} value="1" onClick={() => deshabilitar(imagenesCaras[110].pos1, i*2, imagenesCaras[110].correct)}/>
                                    <label htmlFor={imagenesCaras[110].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/55-0.png?alt=media&token=0e416b4c-cc3b-45cd-ad6b-547191c1c5cd'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[110].id2} value="2" onClick={() => deshabilitar(imagenesCaras[110].pos2, i*2, imagenesCaras[110].correct)}/>
                                    <label htmlFor={imagenesCaras[110].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/55-0.png?alt=media&token=0e416b4c-cc3b-45cd-ad6b-547191c1c5cd'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[110].id3} value="3" onClick={() => deshabilitar(imagenesCaras[110].pos3, i*2, imagenesCaras[111].correct)}/>
                                    <label htmlFor={imagenesCaras[110].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/55-1.png?alt=media&token=49ea2be8-a886-4325-9ccb-d1dc0472cf43'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 56) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[112].id1} value="1" onClick={() => deshabilitar(imagenesCaras[112].pos1, i*2, imagenesCaras[112].correct)}/>
                                    <label htmlFor={imagenesCaras[112].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/56-0.png?alt=media&token=bf316e3a-ce8d-4f69-9f09-b24c9569d099'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[112].id2} value="2" onClick={() => deshabilitar(imagenesCaras[112].pos2, i*2, imagenesCaras[112].correct)}/>
                                    <label htmlFor={imagenesCaras[112].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/56-0.png?alt=media&token=bf316e3a-ce8d-4f69-9f09-b24c9569d099'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[112].id3} value="3" onClick={() => deshabilitar(imagenesCaras[112].pos3, i*2, imagenesCaras[113].correct)}/>
                                    <label htmlFor={imagenesCaras[112].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/56-1.png?alt=media&token=d4b2daf4-d5c0-41ae-8dcd-c9c7a39adbe7'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 57) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[114].id1} value="1" onClick={() => deshabilitar(imagenesCaras[114].pos1, i*2, imagenesCaras[115].correct)}/>
                                    <label htmlFor={imagenesCaras[114].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/57-0.png?alt=media&token=4ff734b6-7484-401e-885f-2aef84a152d9'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[114].id2} value="2" onClick={() => deshabilitar(imagenesCaras[114].pos2, i*2, imagenesCaras[114].correct)}/>
                                    <label htmlFor={imagenesCaras[114].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/57-1.png?alt=media&token=bea248b3-c3d2-496d-ab74-9ac96aaba8f1'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[114].id3} value="3" onClick={() => deshabilitar(imagenesCaras[114].pos3, i*2, imagenesCaras[114].correct)}/>
                                    <label htmlFor={imagenesCaras[114].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/57-1.png?alt=media&token=bea248b3-c3d2-496d-ab74-9ac96aaba8f1'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 58) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[116].id1} value="1" onClick={() => deshabilitar(imagenesCaras[116].pos1, i*2, imagenesCaras[116].correct)}/>
                                    <label htmlFor={imagenesCaras[116].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/58-0.png?alt=media&token=85f5df3d-82a4-448f-ae94-4316b64c630f'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[116].id2} value="2" onClick={() => deshabilitar(imagenesCaras[116].pos2, i*2, imagenesCaras[117].correct)}/>
                                    <label htmlFor={imagenesCaras[116].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/58-1.png?alt=media&token=40122f1b-9c4f-434e-8e3f-fb06abf5c364'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[116].id3} value="3" onClick={() => deshabilitar(imagenesCaras[116].pos3, i*2, imagenesCaras[116].correct)}/>
                                    <label htmlFor={imagenesCaras[116].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/58-0.png?alt=media&token=85f5df3d-82a4-448f-ae94-4316b64c630f'}/>
                                    </label>
                                </form>
                            </div>}
                            {(i == 59) && <div className={styles.facesContainer}>
                                <form className={styles.formSelect}>
                                    <input type="radio" name="choice" id={imagenesCaras[118].id1} value="1" onClick={() => deshabilitar(imagenesCaras[118].pos1, i*2, imagenesCaras[119].correct)}/>
                                    <label htmlFor={imagenesCaras[118].id1} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/59-0.png?alt=media&token=972afc5e-4d8f-4b88-ab09-66ac8ebcc37b'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[118].id2} value="2" onClick={() => deshabilitar(imagenesCaras[118].pos2, i*2, imagenesCaras[118].correct)}/>
                                    <label htmlFor={imagenesCaras[118].id2} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/59-1.png?alt=media&token=8fe32567-3882-4ee5-9940-aa3997805f49'}/>
                                    </label>
                                    <input type="radio" name="choice" id={imagenesCaras[118].id3} value="3" onClick={() => deshabilitar(imagenesCaras[118].pos3, i*2, imagenesCaras[118].correct)}/>
                                    <label htmlFor={imagenesCaras[118].id3} className={styles.imgLabel}>
                                        <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/59-1.png?alt=media&token=8fe32567-3882-4ee5-9940-aa3997805f49'}/>
                                    </label>
                                </form>
                            </div>}
                        </div>
                    );
                })}
            </div>
            {/* <div className={styles.headerTimeLeft}>
                <div className={styles.bodyTimeLeft}>
                    <ProgressBar value={totalTimeT2} max={180}/>
                    <span>{totalTimeT2} seg</span>       
                </div>
            </div> */}
        </div>
    );
    /* } */
};

export default FacesTest;