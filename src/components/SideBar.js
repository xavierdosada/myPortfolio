import styles from './SideBar.module.css'

const SideBar = () => {
    return <section className={styles.container}>
        <ul>
            <li>Sobre Mi</li>
            <li>Proyectos</li>
            <li>Tecnologias</li>
            <li>Contactame</li>
        </ul>
    </section>
}

export default SideBar;