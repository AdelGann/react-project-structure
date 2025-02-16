import style from "./AppRoutes.module.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// ordena siempre las paginas
import { Main } from "../features/Main/Main";
import { ExampleRoutes } from "./ExampleRoutes";

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<div className={style.content}>
				<Routes>
					<Route path="/inicio" element={<Main />} />
					<Route path="/Example/*" element={<ExampleRoutes />} />
                    {/* Todas las rutas que crees desde Example Routes */}
                    {/* van a empezar por example, lo que va a cambiar van a ser las subrutas */}
                    {/* /Example/route1. /Example/route2 */}
					<Route path="/*" element={<Navigate to="/inicio" />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
