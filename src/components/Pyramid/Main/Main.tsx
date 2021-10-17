import React, {useState} from 'react';
import s from './Main.module.scss'
import {BlockTask} from "./BlockTask/BlockTask";

export const Main = React.memo(() => {
    const [stop,setStop] = useState(false);

    return (
        <main className={s.main}>
            <div className={s.top}>
                <div className={s.timer}>30</div>
            </div>
            <div className={s.bottom}>
                <BlockTask
                    stop={stop}
                    setStop={setStop}
                />
            </div>
        </main>
    )
})