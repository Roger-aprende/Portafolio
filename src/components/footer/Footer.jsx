import '../footer/footer.css'


export function Footer ({children}){
    return(
        <footer className="footer">
            <p className="footer__text">Este portafolio fue creado con <span className="footer__icon">{children}</span>contantame <a href="#" className='footer__contacto'>programador.resa@gmail.com</a></p>
        </footer>

    )
}
