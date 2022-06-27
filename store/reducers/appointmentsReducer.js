const defaultState = {
    appointments: [],
}

export const appointmentsReducer = (state=defaultState, {type, payload}) => {
    switch(type){
        case "APPOINTMENTS_INIT":
            return {...state, appointments: payload};
        case "REMOVE_APPOINTMENT":
            return {...state, appointments: state.appointments.filter(item=>item.id !== payload)};
        default:
            return state;
    }
}