import styles from "../styles/Sidebar.module.scss";
import Link from "next/link";
import Image from "next/image";

import Menu from "./Menu";

function Sidebar(){

    return(
        <div className={styles.sidebar}>
            <Link href="/">
                <div className={styles.sidebar__logo}>Логотип</div>
            </Link>
            
            <Menu/>

            <Link href="/bid">
                <a className={styles.sidebar__button}>Подать заявку</a>
            </Link>

            <div className={styles.sidebar__footer}>
                <div className={styles.sidebar__help}>
                    <Image src="/help.svg" width={18} height={18}/>
                    <div className={styles.sidebar__text}>Помощь</div>
                </div>
                <div className={styles.company}>
                    <Image src="/company-logo.png" width={112} height={20}/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;