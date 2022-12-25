import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Home from './Home.jsx';
import Cart from './Cart';
import { Routes, Route } from "react-router-dom";

function App() {

	let uname = window.localStorage.getItem("user");
	return(
	<Routes>
		<Route path="/" element={uname?<Home/>:<Login />}/>
		<Route path ="/signup" element={<Signup/>}/>
		<Route path ="/cart" element={<Cart/>}/>
	</Routes>
	);
}

export default App;