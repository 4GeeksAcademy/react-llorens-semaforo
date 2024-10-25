import React, {useState, useEffect} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	const [ color, setColor] = useState(" ");

	const cambio = () =>{
		switch (color) {
			case 'rojo':
				return 'amarillo';
				break;
			case 'amarillo':
				return 'verde';
				break;
			case 'verde':
				return 'rojo';
				break;
			default:
				break;
		}
	}
	
	return (
		<div className="container d-flex flex-column align-items-center justify-content-center">
			<div className="trafficTop bg-dark"></div>
			<div className="d-flex flex-column align-items-center justify-content-center base">
				<div onClick={()=>setColor('rojo')} className={`red light rounded-circle bg-danger my-2 ${color === 'rojo' ? 'iluminado': ''}`}></div>
				<div onClick={()=>setColor('amarillo')}  className={`yellow light rounded-circle bg-warning my-2 ${color === 'amarillo' ? 'iluminado': ''}`}></div>
				<div onClick={()=>setColor('verde')}  className={`green light rounded-circle bg-success my-2 ${color === 'verde' ? 'iluminado': ''}`}></div>
			</div>
			<button className="btn btn-success" onClick={()=>setColor(prev=>prev=cambio())}>Cambiar</button>
		</div>
	);
};

export default Home;
