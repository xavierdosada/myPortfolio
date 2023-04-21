import AboutMe from './AboutMe/AboutMe';
import styles from './HomePage.module.css'
import SideBar from './SideBar';

const HomePage = () => {
    return <section className={styles.container}>
        <SideBar/>
        <AboutMe/>
    </section>
}

export default HomePage;