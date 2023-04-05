import React, { useState, MouseEvent, ChangeEvent } from 'react';
import './App.css';


type State = {
    currentValue: number
    maxValue: number
    maxValueReached: boolean
}

function App() {

    const [counter, setCounter] = useState<State>({
        currentValue: 0, //текущее значение
        maxValue: 5, //максимальное значение
        maxValueReached: false //максимальное значение достигнуто
    })

    //прирастить значение
    const incrementValue = () => {
        const newValue = counter.currentValue + 1 //новое значение = текущее значение + 1
        if (newValue >= counter.maxValue) { // если новое значение >= максимальному значению (5)
            setCounter({
                ...counter, 
                currentValue: counter.maxValue,
                maxValueReached: true
            })
        } else {
            setCounter({
                ...counter,
                currentValue: newValue
            })
        }
    }
    //сбросить значение
    const resetValue = () => {
        setCounter({ currentValue: 0, maxValue: 5, maxValueReached: false })
    }
    return (
        <div>
            <h1 style={{ color: counter.maxValueReached ? "red" : "black" }}>{counter.currentValue}</h1>
            <button disabled={counter.maxValueReached} onClick={incrementValue}>Inc</button>
            <button disabled={counter.currentValue === 0} onClick={resetValue}>Reset</button>
        </div>
    )
}





export default App;

