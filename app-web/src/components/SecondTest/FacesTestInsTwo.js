import React, { useContext, useState } from 'react';
import styles from "./FacesTest.module.css";
import imagenesCaras from "../../img/face_img/img_face";
import { Link, useNavigate } from "react-router-dom";
import ScreenContext from '../ScreenContext';

const FacesTestInsTwo = () => {

    const {
        data,
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

    console.log(userTest);

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
                                    <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/60-1.png?alt=media&token=639f470b-d15d-49ab-a162-895aabd2592e'} alt="cara"/>
                                </div>
                                <div className={styles.faceGoodImgFL}>
                                    <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/60-0.png?alt=media&token=9b208860-f0b5-4164-8b71-44cef2beb7a9'} alt="cara"/>
                                </div>
                                <div className={styles.faceGoodImgFL}>
                                    <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/60-0.png?alt=media&token=9b208860-f0b5-4164-8b71-44cef2beb7a9'} alt="cara"/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.secondRowLeft}>
                            <div className={styles.textSecondRowLeft}>
                                <p>Boca</p>
                            </div>
                            <div className={styles.containerFacesSecondRowLeft}>
                                <div className={styles.faceGoodImgSL}>
                                    <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/61-0.png?alt=media&token=2a435b0d-1be0-4d86-babd-5106c81d25e3'} alt="cara"/>
                                </div>
                                <div className={styles.faceGoodImgSL}>
                                    <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/61-0.png?alt=media&token=2a435b0d-1be0-4d86-babd-5106c81d25e3'} alt="cara"/>
                                </div>
                                <div className={styles.faceBadImgSL}>
                                    <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/61-1.png?alt=media&token=b8acbdc8-e92f-4046-90aa-bb2f9d376aad'} alt="cara"/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.thirdRowLeft}>
                            <div className={styles.textThirdRowLeft}>
                                <p>Pelo</p>
                            </div>
                            <div className={styles.containerFacesThirdRowLeft}>
                                <div className={styles.faceGoodImgTL}>
                                    <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/62-0.png?alt=media&token=f9a1f1ee-9489-4d44-93b3-e8586bf35cde'} alt="cara"/>
                                </div>
                                <div className={styles.faceBadImgTL}>
                                    <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/62-1.png?alt=media&token=c21028c7-4122-4317-8ec7-7f12de3704c2'} alt="cara"/>
                                </div>
                                <div className={styles.faceGoodImgTL}>
                                    <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/62-0.png?alt=media&token=f9a1f1ee-9489-4d44-93b3-e8586bf35cde'} alt="cara"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <div className={styles.firstRowRight}>
                            <div className={styles.containerFacesFirstRowRight}>
                                <div className={styles.faceBadImgFR}>
                                    <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/16-0.png?alt=media&token=08eee059-2650-49d1-a100-f5ee3f7960fc'} alt="cara"/>
                                </div>
                                <div className={styles.faceGoodImgFR}>
                                    <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/16-1.png?alt=media&token=d525fe7e-bad7-40b9-8b54-6e72e81cc566'} alt="cara"/>
                                </div>
                                <div className={styles.faceGoodImgFR}>
                                    <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/16-1.png?alt=media&token=d525fe7e-bad7-40b9-8b54-6e72e81cc566'} alt="cara"/>
                                </div>
                            </div>
                            <div className={styles.textFirstRowRight}>
                                <p>Pelo</p>
                            </div>
                        </div>
                        <div className={styles.secondRowRight}>
                            <div className={styles.containerFacesSecondRowRight}>
                                <div className={styles.faceGoodImgSR}>
                                    <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/25-0.png?alt=media&token=03d3ca2e-7411-451c-a8c1-0a710c654eaa'} alt="cara"/>
                                </div>
                                <div className={styles.faceBadImgSR}>
                                    <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/25-1.png?alt=media&token=f0a26140-b8e7-4600-9bb2-be635e6319ba'} alt="cara"/>
                                </div>
                                <div className={styles.faceGoodImgSR}>
                                    <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/25-0.png?alt=media&token=03d3ca2e-7411-451c-a8c1-0a710c654eaa'} alt="cara"/>
                                </div>
                            </div>
                            <div className={styles.textSecondRowRight}>
                                <p>Ojos</p>
                            </div>
                        </div>
                        <div className={styles.thirdRowRight}>
                            <div className={styles.containerFacesThirdRowRight}>
                                <div className={styles.faceBadImgTR}>
                                    <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/46-0.png?alt=media&token=ebad25d5-3c90-4dfd-8683-bc045c5af73c'} alt="cara"/>
                                </div>
                                <div className={styles.faceGoodImgTR}>
                                    <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/46-1.png?alt=media&token=76c1ffc6-dacb-4d33-aeca-c75b012d1d0d'} alt="cara"/>
                                </div>
                                <div className={styles.faceGoodImgTR}>
                                    <img className={styles.faceImg} src={'https://firebasestorage.googleapis.com/v0/b/prueba-tesis-8e65c.appspot.com/o/46-1.png?alt=media&token=76c1ffc6-dacb-4d33-aeca-c75b012d1d0d'} alt="cara"/>
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
                        {/* <Link to="/FacesTest"> */}
                            <button type='submit' className={styles.buttonNext}>Iniciar test</button>
                        {/* </Link> */}
                    </div>
                    {/* <button type="submit">Crear usuario</button> */}
                </form>
                {/* <div className={styles.containerButtonNext}>
                    <Link to="/FacesTest">
                        <button className={styles.buttonNext}>Iniciar test</button>
                    </Link>
                </div> */}
            </div>
        </div>
    );
}

export default FacesTestInsTwo;