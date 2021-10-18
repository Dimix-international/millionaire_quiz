import React, {useEffect} from 'react';
import s from './App.module.scss';
import {Pyramid} from "./components/Pyramid/Pyramid";
import {Main} from "./components/Main/Main";
import {useSelector} from "react-redux";
import {RootReducerType} from "./Redux/store";
import {StartGame} from "./components/StartGame/StartGame";
import useSound from "use-sound";

//@ts-ignore
import startGameMusic from './assets/start_game.mp3';

export const App = () => {

    const userName = useSelector<RootReducerType, null | string>(state => state.quiz.userName);

    const [startMusicGame, { stop }] = useSound(startGameMusic);

    useEffect(() => {
        if(!userName) {
            startMusicGame();
        } else{
            stop();
        }
    },[userName, startMusicGame, stop]);


    return (
        <div className={s.app}>
            {userName
                ? <>
                    <Main/>
                    <Pyramid/>
                </>
                : <StartGame/>
            }
        </div>
    );
}

