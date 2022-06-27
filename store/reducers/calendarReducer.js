const defaultState = {
    months: [
        {name: "Январь"},
        {name: "Февраль"},
        {name: "Март"},
        {name: "Апрель"},
        {name: "Май"},
        {name: "Июнь"},
        {name: "Июль"},
        {name: "Август"},
        {name: "Сентябрь"},
        {name: "Октябрь"},
        {name: "Ноябрь"},
        {name: "Декабрь"},
    ],
    daysOfTheWeek: ["Пн", "Вт","Ср", "Чт","Пт", "Сб", "Вс"],
    currentDay: 1,
    currentMonth: 1,
    currentYear: 2000,
    numberOfDays: 30,
}

export const calendarReducer = (state=defaultState, {type, payload}) => {
    switch(type){
        case "SET_CURRENT_DAY":
            return {...state, currentDay: payload};
        case "SET_CURRENT_MONTH":
            return {...state, currentMonth: payload};
        case "SET_CURRENT_YEAR":
            return {...state, currentYear: payload};
        case "SET_NUMBER_OF_DAYS":
            return {...state, numberOfDays: payload};
        default:
            return state;
    }
}