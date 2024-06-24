import React from 'react'
import ReactDOM from 'react-dom/client'
import { HeaderMain } from './components/header-main/HeaderMain.jsx'
import { Carrusel } from './components/certificados/Certificado.jsx'
import { CardNew } from './components/card-new-project/card-new.jsx'
import { Buttons } from './components/buttons/buttons.jsx'
import { AbuotMe } from './components/about-me/AbouME.jsx'
import { Footer } from './components/footer/Footer.jsx'

let root = ReactDOM.createRoot(document.getElementById('root'))
let iconCss = <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"   className="icons-tecnologias"/>
let iconHtml = <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"  className="icons-tecnologias"/>
let iconReact = <i className="devicon-react-original colored"> </i>;
let iconJsTwo = <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"  className="icons-tecnologias"/>;


root.render(
    <>    
        <HeaderMain/>
        <h2 className="title-main">&lt;Proyectos <span className="writing">&frasl;&gt;</span></h2>
            <main className="container-projects">

                <article className='card'>
                    <CardNew img="calc.svg" fecha="08-01-2024" description="Una calculadora tototalmente funcional, con lindos estilos que me representan">
                        {iconHtml}
                        {iconCss}
                        {iconJsTwo}
                    </CardNew>

                    <div className="card__button">
                        <Buttons title1="Github" title2="Demo" link_github={"https://github.com/Roger-aprende/Calculadora"} link_demo={"https://roger-aprende.github.io/Calculadora/"}/>
                    </div>                
                </article>    


                <article className='card'>
                    <CardNew img="huddle.svg" fecha="12-04-2022"  description={`Una web atractiva que hice como reto para medir mis habilidades como front-end, el desarrollo de la web fue hecho totalmente por mi, las imagenes el diseño le pertenece a front-mentor una plataforma para medir tus habilidades como dev`}>
                        {iconHtml}
                        {iconCss}
                    </CardNew>

                    <div className="card__button">
                        <Buttons title1="Github" title2="Demo" />
                    </div>                
                </article> 

                <article className='card'>
                    <CardNew img="photo.svg" fecha="03-02-2024"  description={`Un template totalmente funcional de fotografo, donde puedes mostrar toda tu galeria de buenas fotos y experiencia, contiene un slider de imagens que resalta el toque profesional de la web,la web es totalmente responsiva. Esta fue diseñada y desarrollada por mi`}>
                        {iconHtml}
                        {iconCss}
                        {iconJsTwo}
                    </CardNew>

                    <div className="card__button">
                        <Buttons title1="Github" title2="Demo" />
                    </div>                
                </article> 

        </main>

        
        <aside className="slider-certificados">
            <Carrusel img1="cursa.png" img2="movistar.png"/>
        </aside>

        <AbuotMe title="Sobre mi" 
                 memo_1="memories_1.jpg"
                 memo_2="memories_2.png"
                 memo_3="memories_3.jpg"
                 who_I={"perfil.jfif"}
                />



         <Footer tecno1={'HTML'} tecno2={'CSS'} tecno3={'REACT'}> 
                {iconReact}
         </Footer>
    </>
)