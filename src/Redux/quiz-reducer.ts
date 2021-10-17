export type ListQuestionAndAmountType = {
    id:number,
    amount:string
}
export type QuestionsType = {
    id:number,
    question:string,
    answers: Array<AnswersType>
}
export type AnswersType = {
    text:string,
    correct:boolean
}
type InitialStateType = {
    pyramid: Array<ListQuestionAndAmountType>,
    activeQuestion:number
    questions: Array<QuestionsType>
}
const initialState:InitialStateType = {
    pyramid: [
        {id:1, amount:'$ 100'},
        {id:2, amount:'$ 200'},
        {id:3, amount:'$ 300'},
        {id:4, amount:'$ 500'},
        {id:5, amount:'$ 1000'},
        {id:6, amount:'$ 2000'},
        {id:7, amount:'$ 4000'},
        {id:8, amount:'$ 8000'},
        {id:9, amount:'$ 16000'},
        {id:10, amount:'$ 32000'},
        {id:11, amount:'$ 64000'},
        {id:12, amount:'$ 125000'},
        {id:13, amount:'$ 250000'},
        {id:14, amount:'$ 500000'},
        {id:15, amount:'$ 1000000'},
    ],
    activeQuestion:1,
    questions: [
        {
            id:1,
            question: `Откуда сотрудники офисов наливают в чашки воду?`,
            answers:[
                {
                    text:'из принтера',
                    correct: false,
                },
                {
                    text:'из сканера',
                    correct: false,
                },
                {
                    text:'из степлера',
                    correct: false,
                },
                {
                    text:'из кулера',
                    correct: true,
                },
            ]
        },
        {
            id:2,
            question: 'Что построил Джек в стихотворении, переведенным с английского Маршаком?',
            answers:[
                {
                    text:'маршрут',
                    correct: false,
                },
                {
                    text:'график',
                    correct: false,
                },
                {
                    text:'дом',
                    correct: true,
                },
                {
                    text:'коммунизм',
                    correct: false,
                },
            ]
        },
        {
            id:3,
            question: 'Что может возникнуть на шахматной доске?',
            answers:[
                {
                    text:'вечный шах',
                    correct: true,
                },
                {
                    text:'вечный мат',
                    correct: false,
                },
                {
                    text:'вечный зов',
                    correct: false,
                },
                {
                    text:'вечный двигатель',
                    correct: false,
                },
            ]
        },
    ]
}

export const quizReducer = (state:InitialStateType = initialState, action:any):InitialStateType => {
    switch (action.type) {
        default: return state
    }
}