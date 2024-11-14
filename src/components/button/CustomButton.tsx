import { MouseEventHandler } from "react";
import style from "./CustomButton.module.css";

// trata de definir interfaces con tipados correctos
// no implementes any a todo es mala practica
interface ButtonProperties {
	text: string; // define los tipos en base a lo que necesitas
	onClick?: MouseEventHandler; // si no conoces los tipos investigalos
	//agrega mas propiedades de acuerdo a lo que necesites
}
export const CustomButton = ({ text, onClick }: ButtonProperties) => {
	return (
		<div>
			<button className={style.button} onClick={onClick}>
				{text}
			</button>
		</div>
	);
};

// puedes agregar mas componentes
// recomiendo usar componentes prediseñados como shadcn
// https://ui.shadcn.com
// esto va a implicar una logica extra para poder instalar tailwind, dependencia
// que shadcn utiliza
