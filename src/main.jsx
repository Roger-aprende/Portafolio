import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeaderMain } from './components/header-main/HeaderMain.jsx'
import { Carrusel } from './components/certificados/Certificado.jsx'
import { CardNew } from './components/card-project/card-project.jsx'
import { Buttons } from './components/buttons/buttons.jsx'
import { AbuotMe } from './components/about-me/AbouME.jsx'
import { Footer } from './components/footer/Footer.jsx'

let root = ReactDOM.createRoot(document.getElementById('root'))
let iconCss = <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"   className="icons-tecnologias"/>
let iconHtml = <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"  className="icons-tecnologias"/>
let iconReact = <i className="devicon-react-original colored"></i>;
let iconJsTwo = <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"  className="icons-tecnologias"/>;


root.render(
    <>    
        <HeaderMain/>
        <h2 className="title-main">&lt;Proyectos <span className="writing">&frasl;&gt;</span></h2>
            <main className="container-projects">

                <article className='card'>
                    <CardNew img="calc.webp" fecha="08-01-2024" description="Una calculadora tototalmente funcional, con lindos estilos que me representan">
                        {iconHtml}
                        {iconCss}
                        {iconJsTwo}
                    </CardNew>

                    <div className="card__button">
                        <Buttons 
                            title1="Codigo" 
                            title2="Web" 
                            link_github={"https://github.com/Roger-aprende/Calculadora"} 
                            link_demo={"https://roger-aprende.github.io/Calculadora/"}
                        />
                    </div>                
                </article>    


                <article className='card'>
                    <CardNew img="huddle.webp" fecha="12-04-2022"  description={`Una web atractiva que hice como reto para medir mis habilidades como front-end, el desarrollo de la web fue hecho totalmente por mi, las imagenes el diseño le pertenece a front-mentor una plataforma para medir tus habilidades como dev`}>
                        {iconHtml}
                        {iconCss}
                    </CardNew>

                    <div className="card__button">
                        <Buttons 
                            title1="Codigo" 
                            title2="Web" 
                            link_github={"https://github.com/Roger-aprende/Huddle-Front-Mentor-"}
                            link_demo={"https://huddle-front-mentor.vercel.app/"}
                        />
                    </div>                
                </article> 

                <article className='card'>
                    <CardNew img="photo.webp" fecha="03-02-2024"  description={`Un template totalmente funcional de fotografo, donde puedes mostrar toda tu galeria de buenas fotos y experiencia, contiene un slider de imagens que resalta el toque profesional de la web,la web es totalmente responsiva (esto quiere decir que se adapta a todo tipo de pantallas). Esta fue diseñada y desarrollada por mi`}>
                        {iconHtml}
                        {iconCss}
                        {iconJsTwo}
                    </CardNew>

                    <div className="card__button">
                        <Buttons 
                            title1="Codigo" 
                            title2="Web" 
                            link_github="https://github.com/Roger-aprende/template--photo"
                            link_demo={"https://template-photo-qj0v9nno6-roger-aprendes-projects.vercel.app/"}                      
                        />
                    </div>   
                </article> 

        </main>

        
        <aside className="slider-certificados">
            <Carrusel img1="movistar.webp" img2="cursa.webp"/>
        </aside>

        <AbuotMe title="Sobre mi" 
                 memo_1="memories_1.webp"
                 memo_2="memories_2.webp"
                 memo_3="memories_3.webp"
                 who_I={"perfil.webp"}
                />



         <Footer> 
                {iconReact}
         </Footer>
    </>
)