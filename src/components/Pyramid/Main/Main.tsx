import React, {useCallback, useEffect, useState} from 'react';
import s from './Main.module.scss'
import {BlockTask} from "./BlockTask/BlockTask";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../../Redux/store";
import {Dispatch} from "redux";
import {
    InitialStateType,
    QuizReducerType,
    stopGameAC
} from "../../../Redux/quiz-reducer";

export const Main = React.memo(() => {

    const {
        stopGame,
        timeGame,
        earnedMoney,
        questions,
        activeQuestion,
    } = useSelector<RootReducerType, InitialStateType>(state => state.quiz);

    const dispatch = useDispatch<Dispatch<QuizReducerType>>();

    let [timerValue, setTimerValue] = useState(timeGame);
    const [timerID, setTimerID] = useState<number | null>(null);


    const setStartTime = useCallback(() => {
        setTimerValue(timeGame);
    },[timeGame]);

    useEffect(() => {
        let intervalId: number = window.setInterval(() => {
            if (timerValue === 0) {
                dispatch(stopGameAC(true))
                return clearInterval(intervalId)
            }

            setTimerValue(value => value - 1);

        }, 1000);

        setTimerID(intervalId);

        return (() => {
            clearInterval(intervalId)
        })
    }, [timerValue, dispatch])

    return (
        <main className={s.main}>
            {stopGame
                ?
                <h2 className={s.result}>
                    {activeQuestion > questions.length
                        ?
                        <div className={s.winner}>
                            <div>You are winner!!!</div>
                            <div>You earned: <span>{earnedMoney}</span></div>
                        </div>
                        : <span>You earned: <span>{earnedMoney}</span></span>
                    }
                </h2>
                :
                <>
                    <div className={s.top}>
                        <div className={s.timer}>{timerValue}</div>
                    </div>
                    <div className={s.bottom}>
                        <BlockTask
                            timerID={timerID}
                            setStartTime={setStartTime}
                        />
                    </div>
                </>
            }
        </main>
    )
}
)