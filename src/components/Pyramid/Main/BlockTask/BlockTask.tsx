import React, {useEffect, useState} from 'react';
import s from './BlockTask.module.scss';
import {Answer} from "./Answer/Answer";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../../../Redux/store";
import {
    QuestionsType,
    QuizReducerType,
    stopGameAC
} from "../../../../Redux/quiz-reducer";
import {Dispatch} from "redux";

type BlockTaskType = {
    timerID: number | null
    setStartTime: () => void
}
export const BlockTask: React.FC<BlockTaskType> = React.memo((props) => {

    const {timerID, setStartTime} = props;

    const questions = useSelector<RootReducerType, Array<QuestionsType>>(state => state.quiz.questions);
    const activeQuestion = useSelector<RootReducerType, number>(state => state.quiz.activeQuestion);

    const [question, setQuestion] = useState<QuestionsType | null>(null);

    const dispatch = useDispatch<Dispatch<QuizReducerType>>()

    useEffect(() => {
        if (activeQuestion === questions.length + 1) {
            dispatch(stopGameAC(true));
            return
        }
        setQuestion(questions[activeQuestion - 1])
    }, [activeQuestion, questions, dispatch])


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
                            activeQuestion={activeQuestion}
                            timerID={timerID}
                            setStartTime={setStartTime}

                        />
                    )
                })}
            </div>
        </div>
    )
})