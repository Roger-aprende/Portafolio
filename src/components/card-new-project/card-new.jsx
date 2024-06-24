import '../card-new-project/card-new.css'
// import { Buttons } from '../../components/buttons/buttons.jsx'

export function CardNew({children, img, fecha, description}){
    
    return(
      
            <article className="card-project-new">
                <img src={`/public/img/proyectos/${img}`} alt="hola" className='card-project-new__img'/>

                <footer className='card-project-new__layer'>

                    <div className="card-project-new__tecno">
                        {children}
                    </div>

                    <h3 className='layer__title'>Sobre el proyecto:</h3>
                    <p className='layer__text'>{description}</p>
                        <span className='layer__fecha'>Creado: {fecha}</span>
                </footer>
            </article>
      
    )
}