import styles from "../styles/Calendar.module.scss";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Image from "next/image";

function Calendar() {
    const dispatch = useDispatch();

    const currentDay = useSelector(state=>state.calendar.currentDay);
    const currentMonth = useSelector(state=>state.calendar.currentMonth);
    const currentYear = useSelector(state=>state.calendar.currentYear);
    const numberOfDays = useSelector(state=>state.calendar.numberOfDays);
    const months = useSelector(state=>state.calendar.months);
    const daysOfTheWeek = useSelector(state=>state.calendar.daysOfTheWeek);
    const [appointmentDates, setAppointmentDates] = useState({});
    const [lastDays, setLastDays] = useState([]);

    const appointments = useSelector(state=>state.appointments.appointments);

    useEffect(function(){
        const currentDate = new Date;
        const splitedDateInfo = currentDate.toLocaleDateString().split(".");
        dispatch({type:"SET_CURRENT_DAY", payload:Number(splitedDateInfo[0])});
        dispatch({type:"SET_CURRENT_MONTH", payload:Number(splitedDateInfo[1])-1});
        dispatch({type:"SET_CURRENT_YEAR", payload:Number(splitedDateInfo[2])});
    },[])

    useEffect(function(){
        let appointmentDates = {};

        appointments.forEach(function(appointment){
            if(appointmentDates[appointment.date]){
                appointmentDates[appointment.date] += 1;
            } else {
                appointmentDates[appointment.date] = 1;
            }
        })
        setAppointmentDates(appointmentDates);
    }, [appointments])

    useEffect(function(){
        dispatch({type:"SET_NUMBER_OF_DAYS", payload:new Date(currentYear, currentMonth+1, 0).getDate()});
        checkWeekBegin();
    }, [currentMonth])


    function prevMonth(){
        if(currentMonth-1 < 1){
            dispatch({type:"SET_CURRENT_MONTH", payload:11});
            dispatch({type:"SET_CURRENT_YEAR", payload:currentYear-1});
        } else {
            dispatch({type:"SET_CURRENT_MONTH", payload:currentMonth-1});
        }
    }

    function nextMonth(){
        if(currentMonth + 1 > 11){
            dispatch({type:"SET_CURRENT_MONTH", payload:1});
            dispatch({type:"SET_CURRENT_YEAR", payload:currentYear+1});
        } else {
            dispatch({type:"SET_CURRENT_MONTH", payload:currentMonth+1});
        }
    }

    function appointmentsCheck(year, month, day){
        const date = new Date(year, month, day).toLocaleDateString();

        for(let key in appointmentDates){
            if(key == date){
                return appointmentDates[key];
            }
        }
        return null;
    }

    function checkWeekBegin() {
        let numberOfDaysPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
        const firstDateOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        let dayDifference = 0;

        if(firstDateOfMonth === 0) {
            dayDifference = 6;
        } else {
            dayDifference = firstDateOfMonth - 1;
        }

        const lastDaysPrevMonth = [];

        for(let i = 0; i < dayDifference; i++) {
            lastDaysPrevMonth.push(numberOfDaysPrevMonth);
            numberOfDaysPrevMonth--;
        }
        lastDaysPrevMonth.reverse();
        setLastDays(lastDaysPrevMonth);
    }


    return (
        <div className={styles.calendar}>
            <div className={styles.header}>
                <Image className={styles.arrow} src="/arrow-left.svg" width={8} height={14} onClick={prevMonth}/>
                <div className={styles.date}>
                    {`${months[currentMonth].name}, ${currentYear}`}
                </div>
                <Image className={styles.arrow} src="/arrow-right.svg" width={8} height={14} onClick={nextMonth}/>
            </div>


            <div className={styles.wrapper}>
                <div className={styles.daysOfWeeks}>
                    {
                        daysOfTheWeek.map(function(day){
                            return <div key={Math.random()} className={styles.dayOfWeek}>{day}</div>
                        })
                    }
                </div>

                <div className={styles.dates}>
                {
                    lastDays.map(function(day){
                        return <div key={Math.random()} className={styles.prevMonthDays}>
                        {day}
                        
                        {
                            appointmentsCheck(currentYear, currentMonth-1, day) && <span className={styles.number}>{appointmentsCheck(currentYear, currentMonth-1, day)}</span>
                        }
                    </div>
                    })
                }

                {
                   Array.apply(null, Array(numberOfDays)).map((item, day)=>
                        <div key={day} className={currentDay-1 === day ? styles.day + " " + styles.currentDay : styles.day}>
                            {day+1}
                            
                            {
                                appointmentsCheck(currentYear, currentMonth, day+1) && <span className={styles.number}>{appointmentsCheck(currentYear, currentMonth, day+1)}</span>
                            }
                        </div>
                   )
                }
            </div>
            </div>
        </div>
    )
}

export default Calendar;