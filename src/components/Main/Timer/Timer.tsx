import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {
    changeTimerIdAC,
    QuizReducerType,
    stopGameAC
} from "../../../Redux/quiz-reducer";
import useSound from "use-sound";

type TimerType = {
    activeQuestion:number,
}

export const Timer:React.FC<TimerType> = React.memo(props => {

    const {activeQuestion} = props;
    const[wrongAnswer] = useSound('https://allsoundsaround.com/wp-content/uploads/2021/01/zvuk-nepravilnogo-otveta-vkto-hochet-stat-millionerom-5262-1.mp3?_=36');

    const dispatch = useDispatch<Dispatch<QuizReducerType>>();

    let [timerValue, setTimerValue] = useState(30);

    useEffect(() => {
        let intervalId: number = window.setInterval(() => {
            if (timerValue === 0) {
                wrongAnswer();
                dispatch(stopGameAC(true));
                return clearInterval(intervalId)
            }
            setTimerValue(value => value - 1);

        }, 1000);

        dispatch(changeTimerIdAC(intervalId))

        return (() => {
            clearInterval(intervalId)
        })
    }, [timerValue, dispatch]);

    useEffect(() => {
        setTimerValue(30);
    },[activeQuestion])

    return <span>{timerValue}</span>
})