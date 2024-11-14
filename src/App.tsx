import "./App.css";
import { AppRoutes } from "./router/AppRoutes";
function App() {
	return (
		<>
			<AppRoutes />
		</>
	);
}

export default App;

// este es el App, aca es donde esta el enrutador
// para poder renderizar las paginas, que van a estar guardadas en la carpeta feature
// de ser necesario, y SI y solo si puedes agregar otra dependencia a este archivo
// como por ejemplo un toast
