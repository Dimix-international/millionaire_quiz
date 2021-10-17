import React from "react";
import s from './Pyramid.module.scss';
import {MoneyItem} from "./MoneyItem/MoneyItem";
import {useSelector} from "react-redux";
import {RootReducerType} from "../../Redux/store";
import {ListQuestionAndAmountType} from "../../Redux/quiz-reducer";

export const Pyramid = React.memo(() => {

    const pyramid = useSelector<RootReducerType, Array<ListQuestionAndAmountType>>(state => state.quiz.pyramid);
    const activeQuestion = useSelector<RootReducerType, number>(state => state.quiz.activeQuestion);

        return (
            <div className={s.pyramid}>
                <ul className={s.moneyList}>
                    {pyramid.map(q => {
                        return (
                            <MoneyItem
                                key={q.id}
                                id={q.id}
                                amount={q.amount}
                                activeQuestion={activeQuestion}
                            />
                        )
                    }).reverse()}
                </ul>
            </div>
        )
    }
)