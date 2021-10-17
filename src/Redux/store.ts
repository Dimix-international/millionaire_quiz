import {combineReducers, createStore, Store} from "redux";
import {quizReducer} from "./quiz-reducer";

export let rootReducerType = combineReducers({
    quiz: quizReducer
})
export type RootReducerType = ReturnType<typeof rootReducerType> ;

export let store: Store<RootReducerType, any> = createStore(rootReducerType)