import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Home from './Home.jsx';
import Cart from './Cart';
import Orderpage from './Orderpage.jsx';
import { Routes, Route } from "react-router-dom";

function App() {

	let uname = window.localStorage.getItem("user");
	return(
	<Routes>
		<Route path="/" element={uname?<Home/>:<Login />}/>
		<Route path ="/signup" element={<Signup/>}/>
		<Route path ="/cart" element={<Cart/>}/>
		<Route path ="/order" element={<Orderpage/>}/>
	</Routes>
	);
}

export default App;