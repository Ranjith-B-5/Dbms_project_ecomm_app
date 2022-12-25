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
	<div className="fixed h-screen bg-slate-800 w-64 flex flex-col">
        <div className='flex flex-1 flex-col justify-start pt-36'>
		<HeaderButton source={user} />
		<HeaderButton source={cart} />
		<HeaderButton source={order} />
        </div>
        <div className='flex flex-1 flex-col justify-end'>
		<button onClick={isUserLoggedIn} className="mx-2  bg-slate-800 pb-4 ">
			<img src={logout_logo} alt="logout icon" className="w-12 h-12 hover:scale-75" />
		</button>
        </div>
	</div>
    )
}
export default Menu;
