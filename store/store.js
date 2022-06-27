import { createStore, combineReducers, applyMiddleware} from "redux";
import { createWrapper } from "next-redux-wrapper";
import {composeWithDevtools} from "redux-devtools-extension";

import { appointmentsReducer } from "./reducers/appointmentsReducer";
import { calendarReducer } from "./reducers/calendarReducer";

const rootReducer = combineReducers({
    appointments: appointmentsReducer,
    calendar: calendarReducer,
})

const initStore = () => {
    return createStore(rootReducer)
}
export const wrapper = createWrapper(initStore);