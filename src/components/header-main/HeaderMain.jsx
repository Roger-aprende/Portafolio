import '../header-main/header-main.css';
import { useState } from 'react';

export function HeaderMain (){
    let imgIz = "/public/img/logo-deku-iz.png";
    let imgDe = "/public/img/logo-deku-de.png";


    return(
        <header className="header">
            <img src={imgIz} alt="LogoDeku" className="img img-1"/>

            <div className="box-header">
                <h1 className="title"><span className="letters">B</span>ienv<span className="letters">e</span>nido</h1>
                <span className="separator">A mi</span>
                <h2 className='animation'>   
                P<span className="animation-on">o</span>rta<span className="animation-on">f</span>olio
                </h2>
            </div>

            <img src={imgDe} alt="LogoDeku" className="img img-2" />
        </header>

    )}