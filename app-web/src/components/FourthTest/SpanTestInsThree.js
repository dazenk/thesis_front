import React, { useState, useContext } from 'react';
import styles from "./SpanTest.module.css";
import { Link, useNavigate } from 'react-router-dom';
import ScreenContext from '../ScreenContext';

const SpanTestInsThree = () => {

    const {
        data,
        userTest2,
        setUserTest2,
        ageInMonths,
        setAgeInMonths,
        ageNormal,
        setAgeNormal
    } = useContext(ScreenContext);

    const navigate = useNavigate();

    const getAge = () => {
        let [year, month, day] = userTest2.edad.split('-');
        setAgeInMonths(calculateAgeInMonths(new Date(year, month, day)));
    }
    
    const calculateAgeInMonths = (birthDate) => {
        var today = new Date();
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        var str = `${age}.${m}`;
        setAgeNormal(age);
        age = parseFloat(str) * 12;
        return age;
    }    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (ageInMonths >= 71 && ageInMonths <= 204) {
            console.log("Dentro del rango")
            navigate('/SpanTest');
        } else {
            console.log("error");
        }
    };

    const handleChange = ({target: {name, value}}) => {
        setUserTest2({...userTest2, [name]: value});   
    };

    console.log(ageInMonths);
    console.log(ageNormal);

    return(
        <div className={styles.containerSpan}>
            <div className={styles.titleInsSpan}>
                <p>Instrucciones parte 1</p>
            </div>
            <div className={styles.bodyInsSpan}>
                <p style={{marginTop: "20px", marginBottom: "30px"}}>
                    Muy bien, si ya entendiste mejor la dinámica de la prueba, puedes
                    dar clic en el siguiente botón cuando te sientas preparad@ para
                    iniciar con el test:
                </p>
                <form onSubmit={handleSubmit} className={styles.formSpan}>
                    <div className={styles.formSpanText}>
                        <div className={styles.inputSpan}>
                            <label htmlFor="nombre">Nombre del estudiante</label>
                            <input type="text" name="nombre" placeholder="Kevin Clavijo" required={true} onChange={handleChange} minLength="3"/>
                        </div>

                        <div className={styles.inputSpan}>
                            <label htmlFor="edad-t2">Fecha de nacimiento</label>
                            <input type="date" name="edad" id="edad-t2" required={true} onChange={handleChange}/>
                        </div>
                    </div>
                    
                    <div className={styles.containerButtonNext}>
                        <button type='submit' className={styles.buttonNextSpan} onClick={getAge}>Iniciar test</button>                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SpanTestInsThree;