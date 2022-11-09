import React, { useContext } from 'react';
import styles from './HomeScreen.module.css';
/* import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; */
/* import ScreenContext from './FirstTest/ScreenContext'; */
import { Link, useNavigate } from 'react-router-dom';
import ScreenContext from './ScreenContext';

const Home = () => {

    /* const {
        onClickButton,
        setCurrentPage
      } = useContext(ScreenContext);
      
      const onClick = () => {
        setCurrentPage(1);
        onClickButton();
      }; */

      const navigate = useNavigate();

      const { user, logout } = useContext(ScreenContext);
      
      const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.log(error.message);
        }        
      };

      const handleClick = () => {        
        navigate("/Results");
      };

    return(
        <div className={styles.headerScreen}>
            <p className={styles.welcomeTitle}>Te damos la bienvenida {user.displayName || user.email}</p>
            <h2 className={styles.titleContainer}>Pruebas neuropsicológicas disponibles</h2>
            <div className={styles.containerScreen}>
                {/* <Link to="/FirstTestIns">
                    <div className={styles.buttonTest1}>
                        <p>Test de discriminación visual simple de árboles</p>
                    </div>
                </Link> */}
                <div className={styles.titleTestB}>
                    <p>Evaluación de la atención</p>
                    <img src='https://www.neuronup.com/wp-content/uploads/2021/07/atencion.svg' alt='atencion'/>
                    <Link to="/FacesTestIns">
                        <div className={styles.buttonTest2}>
                            <p>Test de percepción de diferencias</p>
                        </div>
                    </Link>
                </div>
                {/* <Link to="/SymbolTestIns">
                    <div className={styles.buttonTest3}>
                        <p>Test de búsqueda de símbolos</p>
                    </div>
                </Link> */}
                <div className={styles.titleTestB}>
                    <p>Evaluación de la memoria</p>
                    <img src='https://www.neuronup.com/wp-content/uploads/2021/07/memoria.svg' alt='memoria'/>
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


/* import { useContext } from "react";
import FirstScreen from "./components/FirstTest/FirstScreen";
import { Routes, Route } from "react-router-dom";
import ScreenContext from "./components/FirstTest/ScreenContext";
import ScreenContext from "./components/ScreenContext";
import SecondScreen from "./components/FirstTest/SecondScreen";
import ThirdScreen from "./components/FirstTest/ThirdScreen";
import FourthScreen from "./components/FirstTest/FourthScreen";
import FifthScreen from "./components/FirstTest/FifthScreen";
import SixthScreen from "./components/FirstTest/SixthScreen";
import SeventhScreen from "./components/FirstTest/SeventhScreen";
import EighthScreen from "./components/FirstTest/EighthScreen";
import OtherScreen from "./components/FirstTest/OtherScreen";
import FirstTestIns from "./components/FirstTest/FirstTestIns";
import FirstTestInsTwo from "./components/FirstTest/FirstTestInsTwo";
import FirstTestInsThree from "./components/FirstTest/FirstTestInsThree";
import FirstTestInsFour from "./components/FirstTest/FirstTestInsFour";
import FacesTest from "./components/SecondTest/FacesTest";
import FacesTestIns from "./components/SecondTest/FacesTestIns";
import FacesTestInsTwo from "./components/SecondTest/FacesTestInsTwo";
import EndTest from "./components/SecondTest/EndTest";
import SymbolTest from "./components/ThirdTest/SymbolTest";
import SymbolTest2 from "./components/ThirdTest/SymbolTest2";
import SymbolTest3 from "./components/ThirdTest/SymbolTest3";
import SymbolTest4 from "./components/ThirdTest/SymbolTest4";
import SymbolTest5 from "./components/ThirdTest/SymbolTest5";
import SymbolTestEnd from "./components/ThirdTest/SymbolTestEnd";
import SymbolTestIns from "./components/ThirdTest/SymbolTestIns";
import SymbolTestInsTwo from "./components/ThirdTest/SymbolTestInsTwo";
import BentonTest from "./components/FourthTest/BentonTest";
import HomeScreen from "./components/HomeScreen";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";

const Home = () => {

  return (
         
      <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/FirstTestIns" component={FirstTestIns}></Route>
          <Route path="/FirstTestInsTwo" component={FirstTestInsTwo}></Route>
          <Route path="/FirstTestInsThree" component={FirstTestInsThree}></Route>
          <Route path="/FirstTestInsFour" component={FirstTestInsFour}></Route>
          <Route path="/FirstScreen" component={FirstScreen}></Route>
          <Route path="/SecondScreen" component={SecondScreen}></Route>
          <Route path="/ThirdScreen" component={ThirdScreen}></Route>
          <Route path="/FourthScreen" component={FourthScreen}></Route>
          <Route path="/FifthScreen" component={FifthScreen}></Route>
          <Route path="/SixthScreen" component={SixthScreen}></Route>
          <Route path="/SeventhScreen" component={SeventhScreen}></Route>
          <Route path="/EighthScreen" component={EighthScreen}></Route>
          <Route path="/OtherScreen" component={OtherScreen}></Route>
          <Route path="/FacesTestInsTwo" component={FacesTestInsTwo}></Route>
          <Route path="/FacesTestIns" component={FacesTestIns}></Route>
          <Route path="/FacesTest" component={FacesTest}></Route>
          <Route path="/EndTest" component={EndTest}></Route>
          <Route path="/SymbolTestIns" component={SymbolTestIns}></Route>
          <Route path="/SymbolTestInsTwo" component={SymbolTestInsTwo}></Route>
          <Route path="/SymbolTest" component={SymbolTest}></Route>
          <Route path="/SymbolTestTwo" component={SymbolTest2}></Route>
          <Route path="/SymbolTestThree" component={SymbolTest3}></Route>
          <Route path="/SymbolTestFour" component={SymbolTest4}></Route>
          <Route path="/SymbolTestFive" component={SymbolTest5}></Route>
          <Route path="/SymbolTestEnd" component={SymbolTestEnd}></Route>
          <Route path="/BentonTest" component={BentonTest}></Route>
      </Routes>
  );
};

export default Home; */