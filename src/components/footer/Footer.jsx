import '../footer/footer.css'


export function Footer ({children, tecno1, tecno2, tecno3}){
    return(
        <footer className="footer">
            <p className="footer__text">Este portafolio fue creado con </p>
             <span className="footer__icon">{children}</span>

             
            <p className="footer__text">contantame <a href="#" className='footer__contacto'>programador.resa@gmail.com</a></p>
        </footer>

    )
}
