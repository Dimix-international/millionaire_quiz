import React, {useState} from 'react';
import s from "./Answer.module.scss"
import {
    AnswersType,
    changeQuestionAC,
    QuizReducerType, stopGameAC
} from "../../../../../Redux/quiz-reducer";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";

type AnswerType = {
    text: string,
    element: AnswersType,
    activeQuestion: number,
    timerID: number | null,
    setStartTime: () => void,
}
export const Answer: React.FC<AnswerType> = React.memo((props) => {

    const {text, element, activeQuestion, timerID, setStartTime} = props;

    const [className, setClassName] = useState(s.answer);
    //const [selectAnswer, setSelectAnswer] = useState<AnswersType | null>(null);

    const dispatch = useDispatch<Dispatch<QuizReducerType>>();

    const delay = (duration: number, callback: () => void) => {
        setTimeout(() => {
            callback();
        }, duration)
    }
    const changeAnswer = () => {

        timerID && clearInterval(timerID);

        setClassName(`${s.answer} ${s.active}`);

        delay(1500, () => {
            setClassName(element.correct ? `${s.answer} ${s.correct}` : `${s.answer} ${s.wrong}`)
        })
        delay(4500, () => {
            if (element.correct) {
                dispatch(changeQuestionAC(activeQuestion + 1));
                setClassName(s.answer);
                setStartTime();
            } else {
                dispatch(stopGameAC(true))
            }
        })
    }

    return (
        <div
            className={className}
            onClick={changeAnswer}
        >{text}
        </div>
    )
})