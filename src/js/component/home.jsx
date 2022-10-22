import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	 const [color, setColor] = useState("")

	const colorElegido = (color) =>{
		 setColor(color)

	}
	
	return (
		<div>
			<div><h2>Semaforo con botones de activación</h2></div>
			<div className="semaforo">
				<div className="fondoVerde" style={{backgroundColor:color == "green" ? "#7CFC00" : "#013220"  }} ></div>
				<div className="fondoAmarillo" style={{backgroundColor:color == "yellow" ? "yellow" : "#999900"  }} ></div>
				<div className="fondoRojo" style={{backgroundColor:color == "red" ? "red" : "#8B0000"  }} ></div>			
			</div>

			<div className="centerButton">
				{/* Creamos un boton enlazado a la función colorElegido
				Le introducimos el color que queremos que nos muestre
				Posteriormente creamos los divs que se encuentran arriba y creamos un condicional ternario
				en el que con un estilo Inline le decimos que si el color corresponde al obtenido en la función nos 
				muestre el color claro para mostrar el semaforo encendido y en caso contrario que nos muestre el color oscuro */}
				<button className="btnGreen" onClick={()=> colorElegido("green")}>Pase</button> 
				<button className="btnYellow" onClick={() => colorElegido("yellow")}>Precaución</button>
				<button className="btnRed" onClick={()=> colorElegido("red")}>Stop</button>
			</div>
			
			<div><h2>Boton en las luces del semaforo</h2></div>
			<div className="semaforo">
				<button className="fondoVerde" style={{backgroundColor:color == "green" ? "#7CFC00" : "#013220"  }}
				onClick={()=> colorElegido("green")}></button>
				<button className="fondoAmarillo" style={{backgroundColor:color =="yellow" ? "yellow" : "#999900"}}
				onClick={()=> colorElegido("yellow")}></button>
				<button className="fondoRojo" style={{backgroundColor:color == "red"? "red": "#8B0000"}}
				onClick={()=> colorElegido("red")} ></button>
			</div>
		</div>
	);
};

export default Home;
