import {useEffect, useState} from "react";


export const Timer = () => {
    let [timerValue, setTimerValue] = useState(30);

    useEffect(() => {
        let intervalId: number = window.setInterval(() => {
            if (timerValue === 0) {
                return clearInterval(intervalId)
            }
            setTimerValue(value => value - 1);

        }, 1000);

        return (() => {
            clearInterval(intervalId)
        })
    }, [timerValue]);

    return timerValue
}