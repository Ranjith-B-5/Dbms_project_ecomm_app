import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Home from './Home.jsx';
import { Routes, Route } from "react-router-dom";

function App() {

	let uname = window.localStorage.getItem("user");
	return(
	<Routes>
		<Route path="/" element={uname?<Home/>:<Login />}/>
		<Route path ="/signup" element={<Signup/>}/>
	</Routes>
	);
}

export default App;