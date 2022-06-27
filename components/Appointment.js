import styles from "../styles/Appointment.module.scss";

import { useDispatch } from "react-redux";

import Image from "next/image";

function Appointment({id, dayOfTheWeek, date, time, doctor, specialization, hospital, address, photo}) {

    const dispatch = useDispatch();

    function removeAppointment(){
        dispatch({type:"REMOVE_APPOINTMENT", payload: id});
    }

    return(
        <div className={styles.appointment}>
            <div className={styles.date}>{`${dayOfTheWeek} ${date} | ${time}`}</div>
            <div className={styles.hospital}>{hospital},</div>
            <div className={styles.address}>{address}</div>
            <div className={styles.footer}>
                <div className={styles.wrapper}>
                    <Image src={photo} width={60} height={60}/>
                    <div className={styles.doctorInfo}>
                        <div className={styles.name}>{doctor}</div>
                        <div className={styles.specialization}>{specialization}</div>
                    </div>
                </div>
                <button className={styles.button} onClick={removeAppointment}>Отменить</button>
            </div>
        </div>
    )
}

export default Appointment;