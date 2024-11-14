import { Navigate, Route, Routes } from "react-router-dom";
// Este es un ejemplo de como dividir rutas
// haces la carga mas liviana del archivo AppRoutes
export const ExampleRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<>Example Routes</>} />
				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>
		</div>
	);
};
