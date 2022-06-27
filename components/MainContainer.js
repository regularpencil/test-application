import styles from "../styles/MainContainer.module.scss";
import Sidebar from "./Sidebar";
import Header from "./Header";

import avatar from "../public/avatar.svg";

function MainContainer ({children}) {
    return (
        <div className={styles.container}>
            <Sidebar/>
            <div className={styles.wrapper}>
                <Header avatar={avatar}/>
                {children}
            </div>
        </div>
    )
}


export default MainContainer;
