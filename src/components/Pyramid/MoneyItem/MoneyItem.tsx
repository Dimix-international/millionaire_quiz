import React, {useState} from "react";
import s from './MoneyItem.module.scss'


type MoneyItemType = {
    id: number,
    amount: string
    activeQuestion: number
}

export const MoneyItem: React.FC<MoneyItemType> = React.memo((props) => {
        const {id, amount, activeQuestion} = props;


        const finalClass = activeQuestion === id ? `${s.moneyListItem} ${s.active}` : s.moneyListItem;
        return (
            <li className={`${finalClass}`}>
                <span className={s.moneyListItem__number}>{id}</span>
                <span className={s.moneyListItem__amount}>{amount}</span>
            </li>
        )
    }
)