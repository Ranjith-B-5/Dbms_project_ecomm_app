import React from 'react';
import Pimage from './Pimage';
import image_array from './image_array';
import logout_logo from '../images/logout.png';
import cart from '../images/cart.png';
import order from '../images/order.png';
import home from '../images/home.png';
import user from '../images/user.png';
import add_to_cart from '../images/add-to-cart.png';
import HeaderButton from './HeaderButton';

const populate_img = image_array.map((img) => <Pimage id={img.id} />);

function isUserLoggedIn(e) {
	e.preventDefault();
	window.localStorage.removeItem('user');
	window.location.href = '/';
}

function Home() {
	return (
		<div className="m-0 w-full h-full bg-gray-100">
			<div className="w-full flex flex-row justify-between bg-slate-800 h-16 p-2 ">
				<div className="flex flex-row justify-start">
					<HeaderButton source={home} />
				</div>
				<div className="flex flex-row flex-1 justify-end">
					<HeaderButton source={user} />
					<HeaderButton source={cart} />
					<HeaderButton source={order} />
					<button onClick={isUserLoggedIn} className="mx-2  bg-slate-800  hover:scale-75">
						<img src={logout_logo} alt="logout icon" className="w-12 h-12" />
					</button>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-4 justify-around p-8">{populate_img}</div>
		</div>
	);
}

export default Home;
