import React, { useContext } from 'react';
import styles from "./FacesTest.module.css";
import imagenesCaras from "../../img/face_img/img_face";
import { useNavigate } from "react-router-dom";
import ScreenContext from '../ScreenContext';

const FacesTestInsTwo = () => {

    const {
        userTest,
        setUserTest
    } = useContext(ScreenContext);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/FacesTest");
    };

    const handleChange = ({target: {name, value}}) => {
        setUserTest({...userTest, [name]: value});        
    };

    return(
        <div className={styles.headerInstructions2}>
            <div className={styles.titleInstructions}>
                <p>Instrucciones</p>
            </div>
            <div className={styles.bodyInstructions2}>
                <div className={styles.titleInstructions2}>
                    <p>A continuación se presentan otros ejemplos para que te acostumbres a la dinámica que plantea el test.</p>
                </div>
                <div className={styles.thirdInstructions}>
                    <div className={styles.leftSide}>
                        <div className={styles.firstRowLeft}>
                            <div className={styles.textFirstRowLeft}>
                                <p>Cejas</p>
                            </div>
                            <div className={styles.containerFacesFirstRowLeft}>
                                <div className={styles.faceBadImgFL}>
                                    <img className={styles.faceImg} src={imagenesCaras[121].img} alt="cara"/>
                                </div>
                                <div className={styles.faceGoodImgFL}>
                                    <img className={styles.faceImg} src={imagenesCaras[120].img} alt="cara"/>
                                </div>
                                <div className={styles.faceGoodImgFL}>
                                    <img className={styles.faceImg} src={imagenesCaras[120].img} alt="cara"/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.secondRowLeft}>
                            <div className={styles.textSecondRowLeft}>
                                <p>Boca</p>
                            </div>
                            <div className={styles.containerFacesSecondRowLeft}>
                                <div className={styles.faceGoodImgSL}>
                                    <img className={styles.faceImg} src={imagenesCaras[122].img} alt="cara"/>
                                </div>
                                <div className={styles.faceGoodImgSL}>
                                    <img className={styles.faceImg} src={imagenesCaras[122].img} alt="cara"/>
                                </div>
                                <div className={styles.faceBadImgSL}>
                                    <img className={styles.faceImg} src={imagenesCaras[123].img} alt="cara"/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.thirdRowLeft}>
                            <div className={styles.textThirdRowLeft}>
                                <p>Pelo</p>
                            </div>
                            <div className={styles.containerFacesThirdRowLeft}>
                                <div className={styles.faceGoodImgTL}>
                                    <img className={styles.faceImg} src={imagenesCaras[124].img} alt="cara"/>
                                </div>
                                <div className={styles.faceBadImgTL}>
                                    <img className={styles.faceImg} src={imagenesCaras[125].img} alt="cara"/>
                                </div>
                                <div className={styles.faceGoodImgTL}>
                                    <img className={styles.faceImg} src={imagenesCaras[124].img} alt="cara"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <div className={styles.firstRowRight}>
                            <div className={styles.containerFacesFirstRowRight}>
                                <div className={styles.faceBadImgFR}>
                                    <img className={styles.faceImg} src={imagenesCaras[32].img} alt="cara"/>
                                </div>
                                <div className={styles.faceGoodImgFR}>
                                    <img className={styles.faceImg} src={imagenesCaras[33].img} alt="cara"/>
                                </div>
                                <div className={styles.faceGoodImgFR}>
                                    <img className={styles.faceImg} src={imagenesCaras[33].img} alt="cara"/>
                                </div>
                            </div>
                            <div className={styles.textFirstRowRight}>
                                <p>Pelo</p>
                            </div>
                        </div>
                        <div className={styles.secondRowRight}>
                            <div className={styles.containerFacesSecondRowRight}>
                                <div className={styles.faceGoodImgSR}>
                                    <img className={styles.faceImg} src={imagenesCaras[51].img} alt="cara"/>
                                </div>
                                <div className={styles.faceBadImgSR}>
                                    <img className={styles.faceImg} src={imagenesCaras[50].img} alt="cara"/>
                                </div>
                                <div className={styles.faceGoodImgSR}>
                                    <img className={styles.faceImg} src={imagenesCaras[51].img} alt="cara"/>
                                </div>
                            </div>
                            <div className={styles.textSecondRowRight}>
                                <p>Ojos</p>
                            </div>
                        </div>
                        <div className={styles.thirdRowRight}>
                            <div className={styles.containerFacesThirdRowRight}>
                                <div className={styles.faceBadImgTR}>
                                    <img className={styles.faceImg} src={imagenesCaras[92].img} alt="cara"/>
                                </div>
                                <div className={styles.faceGoodImgTR}>
                                    <img className={styles.faceImg} src={imagenesCaras[93].img} alt="cara"/>
                                </div>
                                <div className={styles.faceGoodImgTR}>
                                    <img className={styles.faceImg} src={imagenesCaras[93].img} alt="cara"/>
                                </div>
                            </div>
                            <div className={styles.textThirdRowRight}>
                                <p>Boca</p>
                            </div>
                        </div>
                    </div>  
                </div>
                <div className={styles.fourthInstructions}>
                    <p>Por favor completa el formulario con los datos solicitados para dar inicio a la prueba:</p>
                </div>
                <form onSubmit={handleSubmit} className={styles.formFaces}>
                    <div className={styles.formFacesText}>
                        <div className={styles.inputFaces}>
                            <label htmlFor="nombre">Nombre del estudiante</label>
                            <input type="text" name="nombre" placeholder="Kevin Clavijo" required={true} onChange={handleChange} minLength="3"/>
                        </div>

                        <div className={styles.inputFaces}>
                            <label htmlFor="edad">Edad</label>
                            <input type="number" name="edad" placeholder="6" id="edad" required={true} onChange={handleChange} max='13' min='6'/>
                        </div>
                    </div>
                    
                    <div className={styles.containerButtonNext}>
                        <button type='submit' className={styles.buttonNext}>Iniciar test</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FacesTestInsTwo;