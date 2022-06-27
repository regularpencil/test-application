import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import '../styles/globals.scss'
import { wrapper } from '../store/store';

import doctorImage1 from "../public/doctor1.svg";
import doctorImage2 from "../public/doctor2.svg";

const appointmentsFromServer = [
  {id: 1, dayOfTheWeek: "Понедельник", date: "15.06.2022", time:"15:30", doctor:"Малушко Т.Н.", specialization:"Хирургия", hospital: "СПБ ГБУЗ Городская поликлиника №25", address: "пр. Солидарности, д. 1, к. 1, лит. А", photo: doctorImage1},
  {id: 2, dayOfTheWeek: "Понедельник", date: "15.06.2022", time:"18:30", doctor:"Малушко Т.Н.", specialization:"Терапевтическое отделение", hospital: "СПБ ГБУЗ Городская поликлиника №25", address: "пр. Солидарности, д. 1, к. 1, лит. А", photo: doctorImage2},
  {id: 3, dayOfTheWeek: "Понедельник", date: "30.06.2022", time:"15:30", doctor:"Малушко Т.Н.", specialization:"Хирургия", hospital: "СПБ ГБУЗ Городская поликлиника №25", address: "пр. Солидарности, д. 1, к. 1, лит. А", photo: doctorImage1},
  {id: 4, dayOfTheWeek: "Понедельник", date: "01.07.2022", time:"15:30", doctor:"Малушко Т.Н.", specialization:"Терапевтическое отделение", hospital: "СПБ ГБУЗ Городская поликлиника №25", address: "пр. Солидарности, д. 1, к. 1, лит. А", photo: doctorImage2},
  {id: 4, dayOfTheWeek: "Понедельник", date: "17.07.2022", time:"17:00", doctor:"Малушко Т.Н.", specialization:"Хирургия", hospital: "СПБ ГБУЗ Городская поликлиника №25", address: "пр. Солидарности, д. 1, к. 1, лит. А", photo: doctorImage1},
]

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();

  useEffect(function(){
    dispatch({type:"APPOINTMENTS_INIT", payload:appointmentsFromServer});
  }, []);

  return(
      <Component {...pageProps} />
  )
}

export default wrapper.withRedux(MyApp);
