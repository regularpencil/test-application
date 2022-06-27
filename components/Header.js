import styles from "../styles/Header.module.scss";
import Image from "next/image";

function Header({avatar}) {
    return (
        <div className={styles.header}>
            <div className={styles.pageName}>Мой профиль</div>
            <div className={styles.actions}>
                <Image className={styles.icon} src="/search.svg" width={18} height={18}/>
                <Image className={styles.icon} src="/bell.svg" width={18} height={18}/>
                <Image className={styles.icon} src="/eye.svg" width={18} height={18}/>
                <Image className={styles.avatar} src={avatar} width={45} height={45}/>
            </div>
        </div>
    )
}

export default Header;