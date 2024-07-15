import '../about-me/about-me.css'

export function AbuotMe ({title, memo_1, memo_2, memo_3 ,who_I}){


    return(
        <article className='about-me'>
            <header className='about-me__header'>
                <h3 className="about-me__title">{title}</h3>

                <p className="about-me__text">
                    Descubrí mi pasión hace 3 años amo y me llena mucho como persona, <span className="about-me__highlight">hacer ideas realidad</span> cuando aprendí que la <span className="span span-grey">programación</span> me permite plasmar lo que hay en mi mente, decidí luchar, crecer y aprender para lograr ser un programador que sea capaz de crear lo que pase por mi <span className="span span-yellow">imaginación</span>
                </p>
                    
                <img src={`./img/${who_I}`} alt="Yo"  className='about-me__I'/>

                <p className="about-me__text">
                     Me llamo <span className="span span-green">Roger Salazar</span> cuando inicie este viaje las circunstancias no estaban a mi favor <span className="about-me__highlight"> no contaba con apoyo, no tenía recursos</span>, y lo más importante para esta carrera no contaba con <span className="span span-blue">internet</span> tenía miedo a dedicarle tiempo a empezar algo que ni siquiera podía practicarlo y perder mi tiempo
                </p>
                    
                    
                    

                <p className="about-me__text">
                     En el camino <span className="about-me__highlight">aprendí que cuando tienes tu <span className="span span-green">meta</span> muy clara sin importar tus condiciones con disciplina y constancia logras avanzar</span> así que tome una gran <span className="span span-yellow">decisión</span> después de muchos fracasos decidi dar el todo por lograr este sueño
                </p>

                <p className="about-me__text">
                    Programaba en casa de conocidos,<span className="about-me__highlight"> <span className="span span-grey">descargaba</span> los tutoriales, para repasarlos en donde pudiera,</span>  ya que en mi casa no podía estar siempre, a la vez trabajaba para conseguir mejores herramientas e internet 
                </p> 
                
                <p className="about-me__text">
                  Aprendí <span className="span span-orange">HTML</span> Y <span className="span span-blue">CSS</span> sin internet, practicaba sin luz, caminaba con mi pc a todos lados para practicar, muchos cuando le hablaba de lo que hacia pensaban que era una locura, que no iba a poder lograrlo por mis recursos
                </p>

                <div className="about-me__memories">
                    <img src={`./img/${memo_1}`} alt="Imagenes que muestran mi progreso" className="box1"/>
                    <img src={`./img/${memo_2}`} alt="Imagenes que muestran mi progreso" className="box2"/>
                    <img src={`./img/${memo_3}`} alt="Imagenes que muestran mi progreso" className="box3"/>
                </div>

                <p className="about-me__text">
                        Por ello decidí crecer en silencio, pero ya es hora de demostrar de que soy capaz, quiero agradecerle a <a href="https://manz.dev/" target="_blank" title="Visita su web" className="span span-purple">MANZ</a> <a href="https://www.youtube.com/@DorianDesings" title="Visita su web" className="span span-black">DORIAN</a> <a href="https://jonmircha.com/" target="_blank" title="Visita su web" className="span span-orange">JONMIRCHA</a> <a href="https://midu.dev/" target="_blank" title="Visita su web" className="span span-blue">MIDUDEV</a> y a todas esas personas que subieron cursos gratuitos de los cuales aprendí
                </p>

                <p className="about-me__text">
                        También a DIOS por regalarme esta historia la cual quiero llevar alrededor del <span className="span span-green">mundo</span> para ser un ejemplo más <span className="span span-yellow">que todo es posible</span> soy venezolano me llamo Roger Salazar, y las circunstancias no dicen quien serás, lo dicen tus decisiones.
                </p>
                
            </header>
        </article>
   )
}
