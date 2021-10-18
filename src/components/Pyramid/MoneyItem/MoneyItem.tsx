import React, {useState} from "react";
import s from './MoneyItem.module.scss'


type MoneyItemType = {
    id: number,
    amount: string
    activeQuestion: number
    saveMoney:boolean
}

export const MoneyItem: React.FC<MoneyItemType> = React.memo((props) => {
        const {id, amount, activeQuestion, saveMoney} = props;


        const finalClass = activeQuestion === id ? `${s.moneyListItem} ${s.active}` : s.moneyListItem;
        const classSave = saveMoney ? s.save : '';
        return (
            <li className={`${finalClass} ${classSave}`}>
                <span className={s.moneyListItem__number}>{id}</span>
                <span className={s.moneyListItem__amount}>{amount}</span>
            </li>
        )
    }
)