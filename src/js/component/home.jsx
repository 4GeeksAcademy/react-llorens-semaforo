import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState(" ");
	const [showPurple, setMuestraPurpura] = useState(false);

	const cambio = () => {
		switch (color) {
			case 'rojo':
				return 'amarillo';
			case 'amarillo':
				return 'verde';
			case 'verde':
				return showPurple ? 'purpura' : 'rojo';
			case 'purpura':
				return 'rojo';
			case ' ':
				return 'rojo';
			default:
				return color;
		}
	};
	
	return (
		<div className="container d-flex flex-column align-items-center justify-content-center">
			<div className="trafficTop bg-dark"></div>
			<div className="d-flex flex-column align-items-center justify-content-center base">
				<div onClick={() => setColor('rojo')} className={`red light rounded-circle bg-danger my-2 ${color === 'rojo' ? 'iluminado' : ''}`}></div>
				<div onClick={() => setColor('amarillo')} className={`yellow light rounded-circle bg-warning my-2 ${color === 'amarillo' ? 'iluminado' : ''}`}></div>
				<div onClick={() => setColor('verde')} className={`green light rounded-circle bg-success my-2 ${color === 'verde' ? 'iluminado' : ''}`}></div>
				{showPurple && (
					<div onClick={() => setColor('purpura')} className={`purple light rounded-circle bg-info my-2 ${color === 'purpura' ? 'iluminado' : ''}`}></div>
				)}
			</div>
			<button className="btn btn-success" onClick={() => setColor(cambio())}>Cambiar</button>
			<button className="btn btn-secondary mt-3" onClick={() => setMuestraPurpura(true)}>Añadir púrpura</button>
		</div>
	);
};

export default Home;

