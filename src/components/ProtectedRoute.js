import React, { useContext } from 'react';
import ScreenContext from './ScreenContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    // Trae los datos desde "ScreenContext" que se requieren para este archivo
    const {user, loading} = useContext(ScreenContext);

    // Actúa como cargador por si no hay datos de carga antes de que se renderice una pantalla
    if (loading) {
        return(
            <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h1 style={{ color: "#403D58" }}>Cargando...</h1>
            </div>            
        );          
    } 

    // Si el usuario no ha iniciado sesión no se le permite acceder a ninguna otra pantalla a excepción de la de registro
    if (!user) return <Navigate to="/login"/>

    return(
        <>
            {children}
        </>
    );
};

export default ProtectedRoute;