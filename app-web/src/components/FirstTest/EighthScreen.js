import React, { useContext, useState, useEffect } from "react";
import styles from "./FirstScreen.module.css";
import imagenes from "../../img/tree_img/imagenes";
/* import ScreenContext from "./ScreenContext"; */
import ScreenContext from "../ScreenContext";
import ProgressBar from "./ProgressBar/ProgressBar";
import { Link, useNavigate } from "react-router-dom";

const EighthScreen = () => {

    const [value, setValue] = useState(60);
    const navigate = useNavigate();

    const {
      correctTree,
      wrongTree1,
      wrongTree2,
      wrongTree3,
      wrongTree4,
      wrongTree5,
      wrongTree6,
      wrongTree7,
      wrongTree8,
      wrongTree9,
      onClickButton,
      corrects,
      setCorrects,
      commission,
      setCommission,
      inaccuracies,
      setInaccuracies,
      omission,
      setOmission,
      total,
      setTotal,
      totalTime,
      totalInterval,
      setStopTimer,
      currentPage,
      setTotalTime
    } = useContext(ScreenContext);

    useEffect(() => {
      onClickButton();
    }, []);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setValue((oldValue) => {
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
      const interval = setInterval(() => {
        setTotalTime((oldValue) => {
          const newValue = oldValue + 1;
          return newValue;
        })
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }, []);

    useEffect(() => {
      if (value == 0) {
          navigate("/OtherScreen", { replace: true });
      }
    }, [value]);

    const onClick = (index, id) => {
      console.log(index);
      setTotal(currentTotal => currentTotal + 1);
      if (correctTree.includes(index)) {
        setOmission(currentOmission => currentOmission - 1);
        setCorrects(currentCorrect => currentCorrect + 1);
        let change = document.getElementById(id);
        change.style.visibility = 'hidden';
      }
      if (wrongTree1.includes(index) || wrongTree2.includes(index) || wrongTree3.includes(index) ||
          wrongTree4.includes(index) || wrongTree5.includes(index) || wrongTree6.includes(index) ||
          wrongTree7.includes(index) || wrongTree8.includes(index) || wrongTree9.includes(index)) {
        setCommission(currentCommission => currentCommission + 1);
        let change = document.getElementById(id);
        change.style.visibility = 'hidden';
      }
      if (!wrongTree1.includes(index) && !wrongTree2.includes(index) && !wrongTree3.includes(index) &&
          !wrongTree4.includes(index) && !wrongTree5.includes(index) && !wrongTree6.includes(index) &&
          !wrongTree7.includes(index) && !wrongTree8.includes(index) && !wrongTree9.includes(index) &&
          !correctTree.includes(index)) {
        setInaccuracies(currentInaccuracie => currentInaccuracie + 1);
      }
      console.log('correctTree:')
      console.log(correctTree)
    };

/*     console.log('corrects:')
    console.log(corrects)
    console.log('commission:')
    console.log(commission) */

    return (
        <div className={styles.bodyContainer}>
          <div className={styles.wrapper}>
            {[...Array(144)].map((e, i) => {
              return (
                <div onClick={() => onClick(i, i)} className={styles.gridContainer} key={i} id={i}>
                  {correctTree.includes(i) && <img className={styles.imgArbol} src={imagenes[8].img} alt={'arbol'}/>}
                  {wrongTree1.includes(i) && <img className={styles.imgArbol} src={imagenes[0].img} alt={'arbol'}/>}
                  {wrongTree2.includes(i) && <img className={styles.imgArbol} src={imagenes[2].img} alt={'arbol'}/>}              
                  {wrongTree3.includes(i) && <img className={styles.imgArbol} src={imagenes[3].img} alt={'arbol'}/>}              
                  {wrongTree4.includes(i) && <img className={styles.imgArbol} src={imagenes[4].img} alt={'arbol'}/>}
                  {wrongTree5.includes(i) && <img className={styles.imgArbol} src={imagenes[5].img} alt={'arbol'}/>}
                  {wrongTree6.includes(i) && <img className={styles.imgArbol} src={imagenes[6].img} alt={'arbol'}/>}
                  {wrongTree7.includes(i) && <img className={styles.imgArbol} src={imagenes[7].img} alt={'arbol'}/>}
                  {wrongTree8.includes(i) && <img className={styles.imgArbol} src={imagenes[9].img} alt={'arbol'}/>}
                  {wrongTree9.includes(i) && <img className={styles.imgArbol} src={imagenes[10].img} alt={'arbol'}/>}
                </div>
              );
            })}
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.exampleTree}>
              <div className={styles.containerImageExample}>
                <img className={styles.imageExample} src={imagenes[8].img} alt={'arbol'}/>
              </div>
            </div>
            <div className={styles.timeLeft}>
              <div className={styles.containerTimeLeft}>
                <ProgressBar value={value} max={60}/>
                <span>{value} seg</span>
                <Link to="/OtherScreen" replace>
                  <button className={styles.buttonNext2}>Siguiente</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    );
};

export default EighthScreen;
