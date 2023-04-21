import { useEffect, useRef, useState } from 'react';
import styles from './TimeLine.module.css'
import botonAmarillo from '../../assets/botonAmarillo.png'
import botonCeleste from '../../assets/botonCeleste.png'

const TimeLine = ({onBackButtonClick, timeLineOn}) => {
    const [isVisible, setIsVisible] = useState(timeLineOn)

    const handleClick = () => {
        setIsVisible(false)
        onBackButtonClick();
    }

    const buttonRef = useRef(null);
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (isVisible){
                const button = buttonRef.current;
                button.style.opacity = '1';
            } else {
                const button = buttonRef.current;
                button.style.opacity = '0';
            }
        }, 300)
        
        return () => {
            clearTimeout(timeoutId)
        };
    },[])

    return <section ref={buttonRef} className={styles.container}>
        
        <div className={styles.timeLineContainer}>
            <div className={styles.section}>
                {/* <div onClick={handleClick} className={styles.vertical}>BACK</div> */}
                <div className={styles.vertical}>2018</div>
                <div className={styles.text}>
                    <p>En este año me recibi de Analista en Sistemas en el Instituto Superior de Informatica Virasoro<br/>
                    Para ese entonces ya habia viajado desde mi ciudad natal en La Patagonia a la ciudad que vivo actualmente La Plata, en busca de crecer como un programador. En una primera instancia, me inscribi en la Universidad Nacional de La Plata en la carrera de Ingeniería en Informatica, fue un cambio muy grande para mi tanto a nivel de estudio como de adaptación a una nueva ciudad. </p>
                    <p>Este primer año fue muy intenso, estudiando matematica, fisica, quimica, y también lo que me gusta programación. Primero aprendimos toda la logica de programación, la cual ya la habia aprendido en la carrera de Analista en Sistemas, y llegue a ver PASCAL.</p>
                </div>
            </div>
            {/* <div className={styles.section}></div>
            <div className={styles.section}></div>
            <div className={styles.section}></div>
            <div className={styles.section}></div>  */}
        </div>
    </section>
}

export default TimeLine;