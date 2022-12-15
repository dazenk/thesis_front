import React, { useContext, useEffect, useState } from 'react';
import styles from './HomeScreen.module.css';
import { Link, useNavigate } from 'react-router-dom';
import ScreenContext from './ScreenContext';
import testImg from '../img/test_img/test_img';
import { getUserResults } from '../utils/database';

const Home = () => {

      const navigate = useNavigate();

      // Trae los datos desde "ScreenContext" que se requieren para este archivo
      const { user, logout, dataCaras, setDataCaras, dataSpan, setDataSpan } = useContext(ScreenContext);
      
      // Función que se encarga de cerrar la sesión al usuario si se hace el respectivo llamado
      const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.log(error.message);
        }        
      };

      // Función que impide navegar al apartado de resultados en caso de que no existan datos en firebase
      const handleClick = () => {
        if (dataCaras != undefined || dataSpan != undefined) {
            navigate("/Results");
        }        
      };

      // Trae y guarda en estados los resultados de ambos test
      useEffect( async () => {
        let dataCaras = await getUserResults(user.email, "todas", "caras");
        let dataSpan = await getUserResults(user.email, "todas", "span");
        setDataCaras(dataCaras);
        setDataSpan(dataSpan);
      }, [])      

    // Muestra como tal la pantalla de bienvenida de la aplicación web
    return(
        <div className={styles.headerScreen}>
            <p className={styles.welcomeTitle}>Te damos la bienvenida {user.displayName || user.email}</p>
            <h2 className={styles.titleContainer}>Pruebas neuropsicológicas disponibles</h2>
            <div className={styles.containerScreen}>                
                <div className={styles.titleTestB}>
                    <p>Evaluación de la atención</p>
                    <img src={testImg[0].img} alt='atencion'/>
                    <Link to="/FacesTestIns">
                        <div className={styles.buttonTest2}>
                            <p>Test de percepción de diferencias</p>
                        </div>
                    </Link>
                </div>
                <div className={styles.titleTestB}>
                    <p>Evaluación de la memoria</p>
                    <img src={testImg[1].img} alt='memoria'/>
                    <Link to="/SpanTestIns">
                        <div className={styles.buttonTest4}>
                            <p>Test de span de dibujos</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div style={{width: "600px", display: "flex", justifyContent: "space-evenly"}}>
                <button onClick={handleClick} className={styles.buttonSeeResults}>Ver resultados</button>
                <button onClick={handleLogout} className={styles.buttonLogout}>Cerrar sesión</button>            
            </div>            
        </div>
    );
};

export default Home;