import streching from '../../assets/streching full.jpg.png'
import boxeo from '../../assets/boxeo.jpg.png'
import yoga from '../../assets/yoga.jpg.png'
import indoor from '../../assets/indoor.jpg.png'
import baileLatino from '../../assets/baile latino.jpg'
import danza from '../../assets/danza arabe.jpg'
import local from '../../assets/local streching.jpg'

import './activitiesPage.css'

const ActivitiesPage = () =>{
    return (
        <>
        <div className='big-home-cards'>

                <div className='home-cards'>

                    <div class="card home-card indoor">
                        <img src={indoor} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title home-card-title">Indoor</h5>
                            <div>
                                <div className='d-flex'>
                                    <p className='intensity'>Intensidad</p>
                                    <div className='indoor-padre'>
                                        <div className='indoor-hijo'>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <p className='title-duration'>Duración</p>
                                    <p className='duration'>60min</p>
                                </div>
                            </div>
                            <p className='card-description'>Entrenamiento que combina ejercicios con pesas, yoga, pilates, spinning, baile y otras actividades</p>
                        </div>
                    </div>

                    <div class="card home-card streching">
                        <img src={streching} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title home-card-title">Streching</h5>
                            <div>
                                <div className='d-flex'>
                                    <p className='intensity'>Intensidad</p>
                                    <div className='streching-padre'>
                                        <div className='streching-hijo'>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <p className='title-duration'>Duración</p>
                                    <p className='duration'>60min</p>
                                </div>
                            </div>
                            <p className='card-description'>Serie de ejercicios enfocados en estirar los músculos para mejorar la flexibilidad y reducir la tensión muscular</p>
                        </div>
                    </div>

                </div>

                <div className='home-cards'>

                    <div class="card home-card boxeo">
                        <img src={boxeo} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title home-card-title">Boxeo</h5>
                            <div>
                                <div className='d-flex'>
                                    <p className='intensity'>Intensidad</p>
                                    <div className='boxeo-padre'>
                                        <div className='boxeo-hijo'>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <p className='title-duration'>Duración</p>
                                    <p className='duration'>60min</p>
                                </div>
                            </div>
                            <p className='card-description'>Entrenamiento que combina técnicas de golpeo, resistencia y acondicionamiento físico para mejorar la fuerza y agilidad</p>
                        </div>
                    </div>

                    <div class="card home-card yoga">
                        <img src={yoga} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title home-card-title">Yoga</h5>
                            <div>
                                <div className='d-flex'>
                                    <p className='intensity'>Intensidad</p>
                                    <div className='yoga-padre'>
                                        <div className='yoga-hijo'>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <p className='title-duration'>Duración</p>
                                    <p className='duration'>60min</p>
                                </div>
                            </div>
                            <p className='card-description'>Práctica que combina posturas, respiración y meditación para mejorar la flexibilidad, fuerza y bienestar mental</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className='big-home-cards'>

                <div className='home-cards'>

                    <div class="card home-card functional">
                        <img src={indoor} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title home-card-title">Funcional</h5>
                            <div>
                                <div className='d-flex'>
                                    <p className='intensity'>Intensidad</p>
                                    <div className='functional-padre'>
                                        <div className='functional-hijo'>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <p className='title-duration'>Duración</p>
                                    <p className='duration'>60min</p>
                                </div>
                            </div>
                            <p className='card-description'>Entrenamiento que se enfoca en movimientos naturales del cuerpo para mejorar la fuerza, la estabilidad y la movilidad</p>
                        </div>
                    </div>

                    <div class="card home-card streching">
                        <img src={danza} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title home-card-title">Danza árabe</h5>
                            <div>
                                <div className='d-flex'>
                                    <p className='intensity'>Intensidad</p>
                                    <div className='streching-padre'>
                                        <div className='streching-hijo'>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <p className='title-duration'>Duración</p>
                                    <p className='duration'>60min</p>
                                </div>
                            </div>
                            <p className='card-description'>Entrenamiento caracterizado por usar movimientos fluidos, expresión corporal y música oriental</p>
                        </div>
                    </div>

                </div>

                <div className='home-cards'>

                    <div class="card home-card boxeo">
                        <img src={local} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title home-card-title">Local + Streching</h5>
                            <div>
                                <div className='d-flex'>
                                    <p className='intensity'>Intensidad</p>
                                    <div className='boxeo-padre'>
                                        <div className='boxeo-hijo'>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <p className='title-duration'>Duración</p>
                                    <p className='duration'>60min</p>
                                </div>
                            </div>
                            <p className='card-description'>Ejercicios localizados que se centran en trabajar músculos específicos para tonificar y fortalecer áreas corporales específicas</p>
                        </div>
                    </div>

                    <div class="card home-card yoga">
                        <img src={baileLatino} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title home-card-title">Baile latino</h5>
                            <div>
                                <div className='d-flex'>
                                    <p className='intensity'>Intensidad</p>
                                    <div className='yoga-padre'>
                                        <div className='yoga-hijo'>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex'>
                                    <p className='title-duration'>Duración</p>
                                    <p className='duration'>60min</p>
                                </div>
                            </div>
                            <p className='card-description'>Experiencia llena de energía que enseña movimientos apasionados y ritmos contagiosos, como salsa, bachata o merengue</p>
                        </div>
                    </div>

                </div>

            </div>
            </>
    )
}

export default ActivitiesPage;