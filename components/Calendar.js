import styles from "../styles/Calendar.module.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Image from "next/image";

const months = [
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
];

const daysOfTheWeek = ["Пн", "Вт","Ср", "Чт","Пт", "Сб", "Вс"];

function Calendar() {

    const [currentMonth, setCurrentMonth] = useState(1);
    const [currentDay, setCurrentDay] = useState(1);
    const [currentYear, setCurrentYear] = useState(2000);
    const [numberOfDays, setNumberOfDays] = useState(1);
    const [appointmentDates, setAppointmentDates] = useState({});
    const [lastDays, setLastDays] = useState([]);

    const appointments = useSelector(state=>state.appointments.appointments);

    useEffect(function(){
        const currentDate = new Date;
        const splitedDateInfo = currentDate.toLocaleDateString().split(".");
        setCurrentDay(Number(splitedDateInfo[0]));
        setCurrentMonth(Number(splitedDateInfo[1])-1);
        setCurrentYear(Number(splitedDateInfo[2]));
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
        setNumberOfDays(new Date(currentYear, currentMonth+1, 0).getDate());
        checkWeekBegin();
    }, [currentMonth])


    function prevMonth(){
        if(currentMonth-1 < 1){
            setCurrentMonth(11);
            setCurrentYear(currentYear-1);
        } else {
            setCurrentMonth(currentMonth-1);
        }
    }

    function nextMonth(){
        if(currentMonth + 1 > 11){
            setCurrentMonth(1);
            setCurrentYear(currentYear+1);
        } else {
            setCurrentMonth(currentMonth+1);
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