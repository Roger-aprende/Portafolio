import '../buttons/buttons.css'

export function Buttons({title1, title2, link_demo, link_github}){
return(
        <footer className='buttons'> 
                <a href={link_github} target="_blank" className='button__github'>{title1}</a>
                <a href={link_demo} target="_blank" className="button__demo">{title2}</a>
        </footer> 
)}

