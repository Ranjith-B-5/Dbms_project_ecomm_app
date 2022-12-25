import React from 'react';
import logout_logo from '../images/logout.png';
import cart from '../images/cart.png';
import order from '../images/order.png';
import home from '../images/home.png';
import user from '../images/user.png';
import HeaderButton from './HeaderButton';

function isUserLoggedIn(e) {
	e.preventDefault();
	window.localStorage.removeItem('user');
	window.location.href = '/';
}

function Menu() {

	return(
	<div className="fixed top-0 right-0 h-screen bg-slate-800 w-64 flex flex-col">
        <div className='flex flex-1 flex-col justify-start pt-24 pl-4'>
		<HeaderButton source={home} txt="Home" />
		<HeaderButton source={user} txt="Profile" />
		<HeaderButton source={cart} txt="Cart"/>
		<HeaderButton source={order} txt="Order"/>
        </div>
        <div className='flex flex-col justify-end pl-6'>
		<button onClick={isUserLoggedIn} className="h-12 w-48 bg-slate-700 flex flex-row hover:scale-75 border-solid border-b-2 mb-4">
		<div>
			<img src={logout_logo} alt="logo" className="w-12 h-12 hover:scale-75 "></img></div>
            <div className="pl-12 pt-2"><text className="text-white text-lg">Logout</text></div>
		</button>
        </div>
	</div>
    )
}
export default Menu;
