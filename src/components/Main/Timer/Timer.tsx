import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {
    changeTimerIdAC,
    QuizReducerType,
    stopGameAC
} from "../../../Redux/quiz-reducer";
import useSound from "use-sound";

//@ts-ignore
import finishTimeMusic from './../../../assets/finishTime.mp3';


type TimerType = {
    activeQuestion:number,
}

export const Timer:React.FC<TimerType> = React.memo(props => {

    const {activeQuestion} = props;
    const[finishedTime] = useSound(finishTimeMusic);

    const dispatch = useDispatch<Dispatch<QuizReducerType>>();

    let [timerValue, setTimerValue] = useState(30);

    useEffect(() => {
        let intervalId: number = window.setInterval(() => {
            if (timerValue === 0) {
                finishedTime();
                dispatch(stopGameAC(true));
                return clearInterval(intervalId)
            }
            setTimerValue(value => value - 1);

        }, 1000);

        dispatch(changeTimerIdAC(intervalId))

        return (() => {
            clearInterval(intervalId)
        })
    }, [timerValue, dispatch, finishedTime]);

    useEffect(() => {
        setTimerValue(30);
    },[activeQuestion])

    return <span>{timerValue}</span>
})