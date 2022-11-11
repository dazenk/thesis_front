import React, { useState, useContext } from 'react';
import ScreenContext from './ScreenContext';
import { useNavigate, Link } from 'react-router-dom';
import styles from './HomeScreen.module.css';
import Alert from './Alert';
import { AddUser, AddUser2 } from '../utils/database';

const Register = () => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const {signup} = useContext(ScreenContext);
    const navigate = useNavigate();

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value});
    };

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