import '../footer/footer.css'


export function Footer ({children}){
    return(
        <footer className="footer">
            <p className="footer__text">Este portafolio fue diseñado y desarollado <a href="https://ve.linkedin.com/in/roger-salazar-8035a525a" target='_blank' title="Visita mi linkedIn" className='footer__contacto'>por mi</a> con <span className="footer__icon">{children}</span> contantame <a href="#" className='footer__contacto'>programador.resa@gmail.com</a></p>
        </footer>

    )
}
