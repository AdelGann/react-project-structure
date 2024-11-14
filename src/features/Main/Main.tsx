// En versiones nuevas, este import no es necesario
// import React from 'react'

// Para crear componentes rapidos
// descarga una extension de react y escribe rafc

import { CustomButton } from "../../components/button/CustomButton";
import style from "./main.module.css";
// module.css te permite crear instancias de css que no interfieran entre si
// con otras propiedades, facilitando el desarrollo.

export const Main = () => {
	// Importante, el nombre de las funciones que vayas a crear
	// tienen que estar en Mayuscula, sino react no las detecta
	return (
		<div className={style.body}>
			{/* Para usar el estilado basta con llamar a la clase y colocarle el nombre del estilo*/}
			<div className={style.content}>
				<h1>Hola Mundo</h1>
			</div>
			<div className={style.content}>
				<h3>¿como te encuentras?</h3>
			</div>
			<div>
				<CustomButton
					text="Hola Button!"
					onClick={() => {
						alert("Hola a todos");
					}}
				/>
			</div>
		</div>
	);
};
