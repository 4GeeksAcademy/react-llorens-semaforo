import React, {useState, useEffect} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	const [ color, setColor] = useState("red");
	return (
		<div className="container d-flex flex-column align-items-center justify-content-center">
			<div className="trafficTop bg-dark"></div>
			<div className="d-flex flex-column align-items-center justify-content-center base">
				<div className="red light rounded-circle bg-danger my-2"></div>
				<div className="yellow light rounded-circle bg-warning my-2"></div>
				<div className="green light rounded-circle bg-success my-2"></div>
			</div>
		</div>
	);
};

export default Home;
