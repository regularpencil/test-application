import styles from "../styles/Profile.module.scss";

import {useSelector} from "react-redux";
import { useEffect, useState } from "react";

import MainContainer from "../components/MainContainer";
import Appointment from "../components/Appointment";
import Link from "next/link";
import Image from "next/image";


export default function Profile(){

    const [firstTwoAppointments, setFirstTwoAppointments] = useState([]);
    const appointments = useSelector(state=>state.appointments.appointments);

    useEffect(function(){
        setFirstTwoAppointments(appointments.slice(0,2));
    }, [appointments])

    return(
        <MainContainer>
            <div className={styles.profile}>
                <div className={styles.title}>Записи на приём</div>
                <div className={styles.appointments}>
                    {
                        firstTwoAppointments.length > 0
                        ?
                        firstTwoAppointments.map(function(appointment){
                            return(
                                <Appointment key={Math.random()} {...appointment}/> 
                            )
                        })
                        :
                        <div>Записей нет</div>
                    }

                    <div className={styles.more}>
                        {
                            (appointments.length - 2 > 0)
                            ?
                            <>
                                <div className={styles.moreText}>{`Ещё записей: ${appointments.length - 2}`}</div>
                                <Link href="/profile/more">
                                <a className={styles.moreLink}>Подробнее</a>
                                </Link>
                            </>
                            :
                                <Link href="/profile/more">
                                    <a className={styles.moreLink}>Подробнее</a>
                                </Link>
                        }
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardEl}>Электронная карта</div>

                    <div className={styles.cards}>
                        <div className={styles.cardItem}>
                            <div className={styles.icon}>
                                <Image src="/report.svg" width={50} height={50}/>
                            </div>
                            <div className={styles.description}>
                                <div className={styles.cardTitle}>Информация о пациенте</div>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>Ваши личные данные</li>
                                    <li className={styles.listItem}>Рекомендации врачей</li>
                                    <li className={styles.listItem}>История болезней</li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.cardItem}>
                            <div className={styles.icon}>
                                <Image src="/tubes.svg" width={50} height={50}/>
                            </div>
                            <div className={styles.description}>
                                <div className={styles.cardTitle}>Результаты анализов</div>
                                <div className={styles.cardText}>
                                    Вы можете узнать здесь результаты своих анализов
                                </div>
                            </div>
                        </div>

                        <div className={styles.cardItem}>
                            <div className={styles.icon}>
                                <Image src="/info.svg" width={50} height={50}/>
                            </div>
                            <div className={styles.description}>
                                <div className={styles.cardTitle}>Добавить  информацию</div>
                                <div className={styles.cardText}>
                                    Добавляйте в свою электронную медицинскую карту новые данные
                                </div>
                            </div>
                        </div>

                        <div className={styles.cardItem}>
                            <div className={styles.icon}>
                                <Image src="/history.svg" width={50} height={50}/>
                            </div>
                            <div className={styles.description}>
                                <div className={styles.cardTitle}>История приемов</div>
                                <div className={styles.cardText}>
                                    Вся информация о полученных услугах за все время хранится здесь
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainContainer>
    )
}