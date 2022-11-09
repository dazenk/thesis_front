import React, { useContext } from 'react';
import ScreenContext from "../ScreenContext";

const OtherScreen = () => {

    const {
        corrects,
        commission,
        inaccuracies,
        omission,
        total,
        totalTime
    } = useContext(ScreenContext);

    return(
        <div>
            Pantalla final por ahora
            <div>
                Aciertos: {corrects}
            </div>
            <div>
                Errores por comisión: {commission} 
            </div>
            <div>
                Errores de imprecisión: {inaccuracies}
            </div>
            <div>
                Errores por omisión: {omission}
            </div>
            <div>
                Total de pulsaciones: {total}
            </div>
            <div>
                Duración del ensayo: {totalTime}
            </div>
        </div>
    );
};

export default OtherScreen;