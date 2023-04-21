import styles from './AboutMe.module.css'
import profilePicture from '../../assets/fotoPerfilXavier.jpg'
import TimeLine from './TimeLine.js'
import { useState } from 'react'

const AboutMe = () => {
    const [timeLineOn, setTimeLineOn] = useState(false)

    const handleClick = () => {
        setTimeLineOn(true)
    }

    const handleBackButtonClick = () => {
        setTimeLineOn(false)
    }

    return <>
        { timeLineOn === false ?
        <section className={styles.container}>
        <div className={styles.textAndArrowContainer}>
            <p>
                Eres una persona única e interesante. Desde muy joven, siempre has tenido una curiosidad innata y una pasión por aprender. Esto te ha llevado a explorar una amplia variedad de intereses, desde la música hasta la literatura, pasando por la ciencia y la tecnología.
                Tienes una mente analítica y crítica que te permite cuestionar todo lo que te rodea. Te encanta investigar y analizar los temas complejos y encontrar soluciones creativas y efectivas. Tus amigos y familiares te describen como una persona reflexiva y astuta, siempre lista para ofrecer una nueva perspectiva.
                Aunque disfrutas de la tranquilidad de tu hogar, también te encanta explorar el mundo. Te gusta viajar a nuevos lugares y sumergirte en culturas diferentes. De hecho, has visitado varios países y has aprendido a hablar varios idiomas con fluidez.
                Cuando no estás viajando o estudiando, te gusta pasar tiempo en la naturaleza. Disfrutas de la paz y la tranquilidad que ofrece el aire libre y te gusta explorar los senderos y las montañas de tu área local.
                Eres una persona muy empática y amable, siempre dispuesta a ayudar a los demás. Te preocupa mucho el bienestar de los que te rodean y trabajas para crear un mundo más justo y equitativo. Te involucras en causas sociales y eres un defensor de los derechos humanos y la justicia.
            </p>
            <div className={styles.arrow}>
                <h3>Conoce mi Linea del Tiempo</h3>
                <button onClick={handleClick}>Flecha hacia abajo</button>
            </div>
        </div>
        <div className={styles.imgContainer}>
            <img src={profilePicture}/>
        </div>
        </section> : 
        <TimeLine onBackButtonClick={handleBackButtonClick} timeLineOn={timeLineOn}/>
        }
    </>
}

export default AboutMe;