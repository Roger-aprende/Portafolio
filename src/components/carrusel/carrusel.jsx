import './carrusel.css';
import { useState } from 'react';


export function Slider({ imagenes }) {
	// Variables y Estados
	const [imagenActual, setImagenActual] = useState(0);
	const cantidad = imagenes?.length;

	// Return prematuro para evitar errores
	if (!Array.isArray(imagenes) || cantidad === 0) return;

	const siguienteImagen = () => {
		setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
	};

	const anteriorImagen = () => {
		setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
	};

	return (
		<div className=".container">
			<button onClick={anteriorImagen}>-</button>
			{imagenes.map((imagen, index) => {
				return (
					<div
						className={
							imagenActual === index ? 'slide active': 'slide'
						}>
						{imagenActual === index && (
							<img key={index} src={imagen} alt="imagen" />
						)}
					</div>
				);
			})}
			<button onClick={siguienteImagen}> + </button>
		</div>
	);
}

