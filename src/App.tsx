import React from 'react';
import s from './App.module.scss';
import {Pyramid} from "./components/Pyramid/Pyramid";
import {Main} from "./components/Pyramid/Main/Main";


function App() {
    return (
        <div className={s.app}>
            <Main />
            <Pyramid />
        </div>
    );
}

export default App;
