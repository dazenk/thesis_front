import React, { useContext } from 'react';
import ScreenContext from './ScreenContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(ScreenContext);

    if (loading) {
        return(
            <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h1 style={{ color: "#403D58" }}>Cargando...</h1>
            </div>            
        );          
    } 

    if (!user) return <Navigate to="/login"/>

    return(
        <>
            {children}
        </>
    );
};

export default ProtectedRoute;