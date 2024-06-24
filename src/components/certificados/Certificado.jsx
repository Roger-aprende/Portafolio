import "../certificados/certificado.css"
import { useState } from "react";

export function Carrusel({img1, img2}){
let img = [
    `./img/certificados/${img1}`,
    `./img/certificados/${img2}`
];

const [imgInit, setImg] = useState(0);

const clickSuma = () =>{
     setImg(imgInit + 1);
     if(imgInit >= img.length-1) setImg(0);
}

const clickResta = () =>{
    setImg(imgInit - 1);
    if(imgInit <= 0) setImg(img.length-1);
}

    return(
            <section className="slider">
                <h3 className="slider__title">Certificados</h3>
                <div className="slider__container">
                    <i className='bx bx-left-arrow-circle slider-icons' onClick={clickResta}></i>
                    <img src={img[imgInit]} alt="hola" className="slider-img"/>
                    <i className='bx bx-right-arrow-circle slider-icons' onClick={clickSuma}></i>

                </div>
            </section>
    )
}