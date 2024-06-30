import '../card-project/card-project.css'

export function CardNew({children, img, fecha, description}){
    
    return(
      
            <article className="card-project">
                <img src={`./img/proyectos/${img}`} alt="hola" className='card-project__img'/>

                <footer className='card-project__layer'>

                    <div className="card-project__tecno">
                        {children}
                    </div>

                    <h3 className='layer__title'>Sobre el proyecto:</h3>
                    <p className='layer__text'>{description}</p>
                        <span className='layer__fecha'>Creado: {fecha}</span>
                </footer>
            </article>
      
    )
}