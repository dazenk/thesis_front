import React, { useContext, useEffect, useState } from 'react';
import ScreenContext from '../ScreenContext';

const SymbolTestEnd = () => {

    const {
        answerCorrect,
        answerCorrect2,
        answerCorrect3,
        answerCorrect4,
        answerCorrect5,
        timeTest
    } = useContext(ScreenContext);

    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);
    const [totalAnswers, setTotalAnswers] = useState([]);
    const [naturalScore, setNaturalScore] = useState(0);

    useEffect(() => {
        setTotalAnswers(answerCorrect.concat(answerCorrect2).concat(answerCorrect3).concat(answerCorrect4).concat(answerCorrect5));
        setCorrect(totalAnswers.filter(value => value == 'correct'));
        setWrong(totalAnswers.filter(value => value == 'incorrect'));
        if (correct.length - wrong.length <= 0) {
            setNaturalScore(0);
        } else {
            setNaturalScore(correct.length - wrong.length);
        }
        
    }, [naturalScore]);

    console.log(totalAnswers);
    console.log(naturalScore);

    return(
        <div>
            <p>Corrects: {correct.length}</p>
            <p>Wrongs: {wrong.length}</p>
            <p>Natural Score: {naturalScore}</p>
            <p>Total Time: {120 - timeTest}</p>
            <p>Time Left: {timeTest}</p>
        </div>
    );
};

export default SymbolTestEnd;