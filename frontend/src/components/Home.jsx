import React from 'react';
import Pimage from './Pimage';
import image_array from './image_array';
import add_to_cart from '../images/add-to-cart.png';
import HeaderButton from './HeaderButton';
import Menu from './Menu';
import home from '../images/home.png';

const populate_img = image_array.map((img) => <Pimage id={img.id} />);

function Home() {
	return (
		<div className="m-0 w-full h-full bg-gray-100 pr-64 pt-14">
			<div className="fixed top-0 z-20 w-full flex flex-row justify-start bg-slate-800 h-16 p-2 shadow-md ">
			</div>
				<div className="grid grid-cols-3 gap-4 p-8">{populate_img}</div>
				<Menu />
		</div>
	);
}

export default Home;
