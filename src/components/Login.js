import React, { useState, useContext } from 'react';
import ScreenContext from './ScreenContext';
import { useNavigate, Link } from 'react-router-dom';
import styles from './HomeScreen.module.css';
import Alert from './Alert';

const Login = () => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState("");

    const {login, resetPassword} = useContext(ScreenContext);
    const navigate = useNavigate();

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await login(user.email, user.password);
            navigate("/");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleResetPassword = async () => {
        if (!user.email) return setError("¡Por favor ingresa tu correo!");

        try {
            await resetPassword(user.email);
            setError("Se ha enviado un email con un enlace para recuperar la contraseña.")
        } catch (error) {
            setError(error.message);
        }
    };

    return(
        <div className={styles.containerForm}>        
            <div className={styles.loginForm}>
                {error && <Alert message={error}/>}
                <form onSubmit={handleSubmit} className={styles.formLogin}>
                    <h2>Iniciar sesión</h2>

                    <div className={styles.inputContainer}>
                        <label htmlFor="email">Correo</label>
                        <input type="email" name="email" placeholder="usuario@dominio.com" onChange={handleChange}/>
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" placeholder="******" id="password" onChange={handleChange}/>
                    </div>

                    <button type="submit">Ingresar</button>

                    <a href='#!' onClick={handleResetPassword}>¿Olvidaste la contraseña?</a>
                </form>

                <div className={styles.redirectRegister}>
                    <p>¿Aún no tienes una cuenta?</p>
                    <Link to="/register">Registrarse</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;