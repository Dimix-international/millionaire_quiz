import React from 'react';
import s from './Main.module.scss'
import {BlockTask} from "./BlockTask/BlockTask";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../Redux/store";

import {
    InitialStateType, nextGameAC, QuizReducerType, setUserNameAC,
} from "../../Redux/quiz-reducer";
import {Timer} from "./Timer/Timer";
import {Dispatch} from "redux";

export const Main = React.memo(() => {

        const {
            stopGame,
            earnedMoney,
            questions,
            activeQuestion,
            userName,
        } = useSelector<RootReducerType, InitialStateType>(state => state.quiz);

        const dispatch = useDispatch<Dispatch<QuizReducerType>>();

        const tryGameAgain = () => {
            dispatch(nextGameAC(true))
        }

        return (
            <main className={s.main}>
                {stopGame
                    ?
                    <h2 className={s.result}>
                        {activeQuestion > questions.length
                            ?
                            <div className={s.winner}>
                                <div>{userName} - you are winner!!!</div>
                                <div>
                                    You earned: <span>{earnedMoney}</span>
                                </div>
                                <button className={s.btnNewGame}
                                        onClick={tryGameAgain}>try again?
                                </button>
                            </div>
                            : <div className={s.loose}>
                                <div>
                                    {userName} - you earned:
                                    <span>{earnedMoney}</span>
                                </div>
                                <button className={s.btnNewGame}
                                        onClick={tryGameAgain}>try again?
                                </button>
                            </div>
                        }
                    </h2>
                    :
                    <>
                        <div className={s.top}>
                            <div className={s.timer}>
                                <Timer
                                    activeQuestion={activeQuestion}
                                />
                            </div>
                        </div>
                        <div className={s.bottom}>
                            <BlockTask
                            />
                        </div>
                    </>
                }
            </main>
        )
    }
)