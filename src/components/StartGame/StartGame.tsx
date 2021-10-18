import React, {ChangeEvent, useState} from 'react';
import s from './StartGame.module.scss'
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {QuizReducerType, setUserNameAC} from "../../Redux/quiz-reducer";

export const StartGame = () => {
    const dispatch = useDispatch<Dispatch<QuizReducerType>>();

    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setName(e.currentTarget.value)
    }
    const startGame = () => {
        if(name.length === 0) {
            setError('Введите имя');
            return;
        }
        dispatch(setUserNameAC(name))
    }
    return (
        <div className={s.start}>
            <input
                className={error ? s.inputError : ''}
                type="text"
                placeholder={'enter your name'}
                value={name}
                onChange={onChangeHandler}
            />
            <button onClick={startGame}>Start game</button>
        </div>
    )
}