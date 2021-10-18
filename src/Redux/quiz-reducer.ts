export type ListQuestionAndAmountType = {
    id: number,
    amount: string
    saveMoney: boolean
}
export type QuestionsType = {
    id: number,
    question: string,
    answers: Array<AnswersType>
}
export type AnswersType = {
    text: string,
    correct: boolean
}
export type InitialStateType = {
    userName: null | string
    pyramid: Array<ListQuestionAndAmountType>,
    activeQuestion: number
    questions: Array<QuestionsType>,
    earnedMoney: string,
    stopGame: boolean,
    timeGame: number,
    timerID: number | null,
    tryAgainGame: boolean
}
export const initialState: InitialStateType = {
    userName: null,
    pyramid: [
        {id: 1, amount: '$ 100', saveMoney: false},
        {id: 2, amount: '$ 200', saveMoney: false},
        {id: 3, amount: '$ 300', saveMoney: false},
        {id: 4, amount: '$ 500', saveMoney: false},
        {id: 5, amount: '$ 1000', saveMoney: true},
        {id: 6, amount: '$ 2000', saveMoney: false},
        {id: 7, amount: '$ 4000', saveMoney: false},
        {id: 8, amount: '$ 8000', saveMoney: false},
        {id: 9, amount: '$ 16000', saveMoney: false},
        {id: 10, amount: '$ 32000', saveMoney: true},
        {id: 11, amount: '$ 64000', saveMoney: false},
        {id: 12, amount: '$ 125000', saveMoney: false},
        {id: 13, amount: '$ 250000', saveMoney: false},
        {id: 14, amount: '$ 500000', saveMoney: false},
        {id: 15, amount: '$ 1000000', saveMoney: false},
    ],
    activeQuestion: 1,
    questions: [
        {
            id: 1,
            question: `Откуда сотрудники офисов наливают в чашки воду?`,
            answers: [
                {
                    text: 'из принтера',
                    correct: false,
                },
                {
                    text: 'из сканера',
                    correct: false,
                },
                {
                    text: 'из степлера',
                    correct: false,
                },
                {
                    text: 'из кулера',
                    correct: true,
                },
            ]
        },
        {
            id: 2,
            question: 'Что построил Джек в стихотворении, переведенным с английского Маршаком?',
            answers: [
                {
                    text: 'маршрут',
                    correct: false,
                },
                {
                    text: 'график',
                    correct: false,
                },
                {
                    text: 'дом',
                    correct: true,
                },
                {
                    text: 'коммунизм',
                    correct: false,
                },
            ]
        },
        {
            id: 3,
            question: 'Что может возникнуть на шахматной доске?',
            answers: [
                {
                    text: 'вечный шах',
                    correct: true,
                },
                {
                    text: 'вечный мат',
                    correct: false,
                },
                {
                    text: 'вечный зов',
                    correct: false,
                },
                {
                    text: 'вечный двигатель',
                    correct: false,
                },
            ]
        },
        {
            id: 4,
            question: 'Что такое каршеринг?',
            answers: [
                {
                    text: 'секонд-хенд',
                    correct: false,
                },
                {
                    text: 'напольный светильник',
                    correct: false,
                },
                {
                    text: 'брачный танец вороны',
                    correct: false,
                },
                {
                    text: 'аренда автомобиля',
                    correct: true,
                },
            ]
        },
        {
            id: 5,
            question: 'Какие мужчины, согласно этикету, не обязаны идти слева от дамы?',
            answers: [
                {
                    text: 'высокие',
                    correct: false,
                },
                {
                    text: 'пожилые',
                    correct: false,
                },
                {
                    text: 'иногородние',
                    correct: false,
                },
                {
                    text: 'военнослужащие',
                    correct: true,
                },
            ]
        },
        {
            id: 6,
            question: 'Какую песню распевает при народе белочка в «Сказке о царе Салтане»?',
            answers: [
                {
                    text: '«Во поле береза стояла»',
                    correct: false,
                },
                {
                    text: '«Во кузнице»',
                    correct: false,
                },
                {
                    text: '«Во саду ли, в огороде»',
                    correct: true,
                },
                {
                    text: '«Вот кто-то с горочки спустился»',
                    correct: false,
                },
            ]
        },
        {
            id: 7,
            question: 'Кто «помогал» делать записи в судовом журнале плота «Кон-Тики» Тура Хейердала?',
            answers: [
                {
                    text: 'чайки',
                    correct: false,
                },
                {
                    text: 'каракатицы',
                    correct: true,
                },
                {
                    text: 'дельфины',
                    correct: false,
                },
                {
                    text: 'крысы',
                    correct: false,
                },
            ]
        },
        {
            id: 8,
            question: 'Какой возможности лишен крупье казино?',
            answers: [
                {
                    text: 'пригладить рукой волосы',
                    correct: false,
                },
                {
                    text: 'снять пылинку с жилета',
                    correct: false,
                },
                {
                    text: 'поправить галстук',
                    correct: false,
                },
                {
                    text: 'достать платок из кармана',
                    correct: true,
                },
            ]
        },
        {
            id: 9,
            question: 'В каком кинофильме нет сцены на экзамене?',
            answers: [
                {
                    text: '«Доживем до понедельника»',
                    correct: true,
                },
                {
                    text: '«Операция «Ы»…»',
                    correct: false,
                },
                {
                    text: '«Старик Хоттабыч»',
                    correct: false,
                },
                {
                    text: '«Большая перемена»',
                    correct: false,
                },
            ]
        },
        {
            id: 10,
            question: 'Что отсутствует в конструкции всех дворцов Запретного города китайских императоров?',
            answers: [
                {
                    text: 'двери',
                    correct: false,
                },
                {
                    text: 'лестницы',
                    correct: false,
                },
                {
                    text: 'окна',
                    correct: false,
                },
                {
                    text: '«Большая перемена»',
                    correct: true,
                },
            ]
        },
        {
            id: 11,
            question: 'Какая книга в так называемой «макулатурной серии» СССР вышла первой?',
            answers: [
                {
                    text: '«Собор Парижской Богоматери»',
                    correct: false,
                },
                {
                    text: '«Королева Марго»',
                    correct: true,
                },
                {
                    text: '«Лунный камень»',
                    correct: false,
                },
                {
                    text: '«Собака Баскервилей»',
                    correct: false,
                },
            ]
        },
        {
            id: 12,
            question: 'Кому Анна Ахматова посвятила стихотворение «Я пришла к поэту в гости»?',
            answers: [
                {
                    text: 'Николаю Гумилеву',
                    correct: false,
                },
                {
                    text: 'Александру Блоку',
                    correct: true,
                },
                {
                    text: 'Сергею Есенину',
                    correct: false,
                },
                {
                    text: 'Александру Пушкину',
                    correct: false,
                },
            ]
        },
        {
            id: 13,
            question: 'Какого переулка нет в Москве?',
            answers: [
                {
                    text: 'Гусятникова',
                    correct: false,
                },
                {
                    text: 'Воронова',
                    correct: true,
                },
                {
                    text: 'Орловского',
                    correct: false,
                },
                {
                    text: 'Сорокина',
                    correct: false,
                },
            ]
        },
        {
            id: 14,
            question: 'Как Чехов писал об Айвазовском: «Был приятелем Пушкина, но Пушкина…»?',
            answers: [
                {
                    text: 'не читал',
                    correct: true,
                },
                {
                    text: 'не любил',
                    correct: false,
                },
                {
                    text: 'не рисовал',
                    correct: false,
                },
                {
                    text: 'не одобрял',
                    correct: false,
                },
            ]
        },
        {
            id: 15,
            question: 'Какое название, ставшее фразеологизмом, было у циркового номера танцора Матус-Марчука?',
            answers: [
                {
                    text: '«Бред сивой кобылы»',
                    correct: false,
                },
                {
                    text: '«Борьба нанайских мальчиков»',
                    correct: true,
                },
                {
                    text: '«Буря в стакане воды»',
                    correct: false,
                },
                {
                    text: '«Заколдованный круг»',
                    correct: false,
                },
            ]
        },
    ],
    earnedMoney: '$ 0',
    stopGame: false,
    timeGame: 30,
    timerID: null,
    tryAgainGame: false
}

export type QuizReducerType = ChangeQuestionType | StopGameType |
    ChangeTimerIdType | SetUserNameType | NextGameType;

export const quizReducer = (state: InitialStateType = initialState, action: QuizReducerType): InitialStateType => {
    switch (action.type) {
        case "CHANGE-QUESTION":
            return {
                ...state,
                activeQuestion: action.activeQuestion,
                earnedMoney: state.pyramid[action.activeQuestion - 2].amount
            }
        case "STOP-GAME": {
            if (state.activeQuestion < 5) {
                return {
                    ...state,
                    stopGame: action.stopGame,
                    earnedMoney: '$ 0'
                }
            }
            if (state.activeQuestion < 10) {
                return {
                    ...state,
                    stopGame: action.stopGame,
                    earnedMoney: '$ 1000'
                }
            }
            return {
                ...state,
                stopGame: action.stopGame,
                earnedMoney: '$ 32000'
            }
        }
        case "CHANGE-TIMER-ID": {
            return {
                ...state,
                timerID: action.timerID
            }
        }
        case "SET-USER-NAME":
            return {
                ...state,
                userName: action.userName
            }
        case "TRY-GAME-AGAIN":
            return {
                ...initialState
            }
        default:
            return state
    }
}


type ChangeQuestionType = ReturnType<typeof changeQuestionAC>
export const changeQuestionAC = (activeQuestion: number) => {
    return {
        type: 'CHANGE-QUESTION',
        activeQuestion,
    } as const
}

type StopGameType = ReturnType<typeof stopGameAC>
export const stopGameAC = (stopGame: boolean) => {
    return {
        type: 'STOP-GAME',
        stopGame,
    } as const
}

type ChangeTimerIdType = ReturnType<typeof changeTimerIdAC>
export const changeTimerIdAC = (timerID: number) => {
    return {
        type: 'CHANGE-TIMER-ID',
        timerID,
    } as const
}

type SetUserNameType = ReturnType<typeof setUserNameAC>
export const setUserNameAC = (userName: string) => {
    return {
        type: 'SET-USER-NAME',
        userName,
    } as const
}

type NextGameType = ReturnType<typeof nextGameAC>
export const nextGameAC = (tryAgainGame: boolean) => {
    return {
        type: 'TRY-GAME-AGAIN',
        tryAgainGame,
    } as const
}

