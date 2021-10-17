import React, {useEffect, useState} from 'react';
import s from './BlockTask.module.scss';
import {Answer} from "./Answer/Answer";
import {useSelector} from "react-redux";
import {RootReducerType} from "../../../../Redux/store";
import {AnswersType, QuestionsType} from "../../../../Redux/quiz-reducer";

type BlockTaskType = {
    stop: boolean
    setStop: (value: boolean) => void
}
export const BlockTask: React.FC<BlockTaskType> = React.memo((props) => {
    const {
        stop,
        setStop
    } = props;

    const questions = useSelector<RootReducerType, Array<QuestionsType>>(state => state.quiz.questions);
    const activeQuestion = useSelector<RootReducerType, number>(state => state.quiz.activeQuestion);

    const [question, setQuestion] = useState<QuestionsType | null>(null);
    //const [question, setQuestion] = useState<QuestionsType>(questions[activeQuestion - 1]); //хотел написат

    const [selectAnswer, setSelectAnswer] = useState<AnswersType | null>(null);

    useEffect(() => {
        setQuestion(questions[activeQuestion - 1])
    }, [activeQuestion, questions])


    return (
        <div className={s.task}>
            <div className={s.question}>{question?.question}</div>
            <div className={s.answers}>
                {question?.answers.map((an, index) => {
                    return (
                        <Answer
                            key={index}
                            element={an}
                            text={an.text}
                            selectAnswer={selectAnswer}
                            setSelectAnswer={setSelectAnswer}
                        />
                    )
                })}
            </div>
        </div>
    )
})