import styles from "../styles/Menu.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import heart from "../public/heart.svg";
import ins from "../public/ins.svg";
import speak from "../public/speak.svg";
import test from "../public/test.svg";
import book from "../public/book.svg";

const links = [
    {text:"Профиль", link:"/profile", image:heart},
    {text:"Врачи и клиники", link:"/doctors", image:ins},
    {text:"Сообщения", link:"/messages", image:speak},
    {text:"Тестирование", link:"/testing", image:test},
    {text:"Полезно знать", link:"/know", image:book},
]

function Menu(){
    const router = useRouter();
    const activeLinkStyles = styles.link + " " + styles.link_active; 
    return(
        <div className={styles.menu}>
            {
                links.map(function(item){
                    return <Link key={item.text}  href={item.link}>
                        <div className={router.pathname == item.link || router.pathname.includes(item.link) ? activeLinkStyles : styles.link}>
                           <Image src={item.image} width={18} height={18}/>
                           <div className={styles.text}>{item.text}</div> 
                        </div>
                    </Link>
                })
            }
        </div>
    )
}

export default Menu;