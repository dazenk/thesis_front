import React, { useContext } from 'react';
import styles from "./SpanTest.module.css";
import { useNavigate } from 'react-router-dom';
import ScreenContext from '../ScreenContext';

const SpanTestInsThree = () => {

    // Trae los datos desde "ScreenContext" que se requieren para este archivo
    const {
        userTest2,
        setUserTest2,
        ageInMonths,
        setAgeInMonths,
        setAgeNormal
    } = useContext(ScreenContext);

    const navigate = useNavigate();

    // Función que obtiene la edad en años del alumno y manda llamar la que calcula la edad en meses
    const getAge = () => {
        let [year, month, day] = userTest2.edad.split('-');
        setAgeInMonths(calculateAgeInMonths(new Date(year, month, day)));
    }
    
    // Función que calcula la edad en meses del alumno
    const calculateAgeInMonths = (birthDate) => {
        var today = new Date();
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        var str = `${age}.${m}`;
        setAgeNormal(age);
        age = parseFloat(str) * 12;
        return age;
    }    

    // Función que valida si el alumno tiene entre 6 a 16 años de edad
    const handleSubmit = (e) => {
        e.preventDefault();
        if (ageInMonths >= 71 && ageInMonths <= 204) {
            navigate('/SpanTest');
        } else {
            alert("error, tu edad no está entre 6 - 16 años");
        }
    };

    // Función que detecta los cambios en los inputs del formulario para el nombre y la edad del alumno
    const handleChange = ({target: {name, value}}) => {
        setUserTest2({...userTest2, [name]: value});   
    };

    // Muestra como tal la segunda pantalla de la primera parte de instrucciones del test de span de imágenes
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