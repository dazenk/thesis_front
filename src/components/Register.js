import React, { useState, useContext } from 'react';
import ScreenContext from './ScreenContext';
import { useNavigate, Link } from 'react-router-dom';
import styles from './HomeScreen.module.css';
import Alert from './Alert';
import { AddUser, AddUser2 } from '../utils/database';

const Register = () => {

    // Estado que almacena el email y la contraseña para realizar el registro en la aplicación
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    // Estado que guarda los errores de registro en caso de que ocurran
    const [error, setError] = useState('');

    // Trae los datos desde "ScreenContext" que se requieren para este archivo
    const {signup} = useContext(ScreenContext);
    const navigate = useNavigate();

    // Función que detecta los cambios en los inputs del formulario de registro
    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value});
    };

    // Función que realiza el registro de los usuarios en la aplicación web
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signup(user.email, user.password);
            AddUser(user.email);
            AddUser2(user.email);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    // Muestra como tal la pantalla de registro de usuario en la aplicación web
    return(
        <div className={styles.containerForm}>
            <div className={styles.loginForm}>
                {error && <Alert message={error}/>}
                <form onSubmit={handleSubmit} className={styles.formLogin}>
                    <h2>Registrarse</h2>

                    <div className={styles.inputContainer}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="usuario@dominio.com" onChange={handleChange}/>
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="******" id="password" onChange={handleChange}/>
                    </div>
                    
                    <button type="submit">Crear usuario</button>
                </form>

                <div className={styles.redirectRegister}>
                    <p>¿Ya tienes una cuenta?</p>
                    <Link to="/login">Iniciar sesión</Link>
                </div>

            </div>
        </div>
    );
};

export default Register;