import styles from "../../styles/More.module.scss";

import MainContainer from "../../components/MainContainer";
import Appointment from "../../components/Appointment";
import Calendar from "../../components/Calendar";

import Link from "next/link";

import { useSelector } from "react-redux";

import Image from "next/image";


function More(){
    const appointments = useSelector(state=>state.appointments.appointments);

    return (
        <MainContainer>
            <div className={styles.more}>
                <div className={styles.back}>
                    <Link href="/profile">
                        <Image src="/back.svg" width={18} height={13} className={styles.backImage}/>
                    </Link>
                    Мои записи
                </div>

                <div className={styles.content}>
                    <div className={styles.appointments}>
                        {
                            appointments.map(function(appointment){
                                return(
                                    <Appointment key={Math.random()} {...appointment}/> 
                                )
                            })
                        }
                    </div>

                    <Calendar/>
                </div>
            </div>
        </MainContainer>
    )
}

export default More;