import React, {useState} from 'react';
import s from "./Answer.module.scss"
import {AnswersType} from "../../../../../Redux/quiz-reducer";

type AnswerType = {
    text: string,
    element:AnswersType,
    selectAnswer: AnswersType | null,
    setSelectAnswer: (element: AnswersType | null) => void,
}
export const Answer: React.FC<AnswerType> = React.memo((props) => {
    const [className, setClassName] = useState(s.answer);

    const {text, selectAnswer, setSelectAnswer, element} = props;

    const changeAnswer = () => {
        setSelectAnswer(element)
        setClassName(`${s.answer} ${s.active}`);

        setTimeout(() => {
            element.correct ? setClassName(`${s.answer} ${s.correct}`) : setClassName(`${s.answer} ${s.wrong}`)
        },1500)
    }

    return (
        <div
            className={className}
            onClick={changeAnswer}
        >{text}
        </div>
    )
})