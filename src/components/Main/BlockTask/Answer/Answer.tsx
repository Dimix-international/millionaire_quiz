import React, {useEffect, useState} from 'react';
import s from "./Answer.module.scss"
import {
    AnswersType,
    changeQuestionAC,
    QuizReducerType, stopGameAC
} from "../../../../Redux/quiz-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";

import useSound from "use-sound";
import {RootReducerType} from "../../../../Redux/store";


type AnswerType = {
    text: string,
    element: AnswersType,
    activeQuestion: number,
    disableAnswer: boolean,
    setDisableAnswer: (value: boolean) => void

}

export const Answer: React.FC<AnswerType> = React.memo((props) => {

    const {
        text,
        element,
        activeQuestion,
        disableAnswer,
        setDisableAnswer
    } = props;

    const [rightAnswer, {stop}] = useSound('https://allsoundsaround.com/wp-content/uploads/2020/12/otvet-vernyiy-5267.mp3?_=2');
    const [wrongAnswer] = useSound('https://allsoundsaround.com/wp-content/uploads/2021/01/zvuk-nepravilnogo-otveta-vkto-hochet-stat-millionerom-5262-1.mp3?_=36');

    const timerID = useSelector<RootReducerType, number | null>(state => state.quiz.timerID);

    const [className, setClassName] = useState(s.answer);

    const dispatch = useDispatch<Dispatch<QuizReducerType>>();

    const delay = (duration: number, callback: () => void) => {
        setTimeout(() => {
            callback();
        }, duration)
    }

    const selectAnswer = () => {
        timerID && clearInterval(timerID);

        setDisableAnswer(true);

        setClassName(`${s.answer} ${s.active}`);


        delay(1500, () => {
            setClassName(element.correct ? `${s.answer} ${s.correct}` : `${s.answer} ${s.wrong}`);
        })
        delay(2500, () => {
            if (element.correct) {
                rightAnswer();
            } else {
                wrongAnswer();
            }
        })
        delay(4500, () => {
            if (element.correct) {
                dispatch(changeQuestionAC(activeQuestion + 1));
                setClassName(s.answer);
            } else {
                dispatch(stopGameAC(true))
            }
        })
        delay(6000, () => {
            stop();
        })
    }

    return (
        <button
            className={className}
            onClick={selectAnswer}
            disabled={disableAnswer}
        >{text}
        </button>
    )
})