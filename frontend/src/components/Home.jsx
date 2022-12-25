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
		<div className="m-0 w-full h-full bg-gray-100">
			<div className="fixed top-0 z-20 w-full flex flex-row justify-start bg-slate-800 h-16 p-2 shadow-md ">
				<HeaderButton source={home} />
			</div>
			<div className=' flex flex-row justify-between bg-lime-300 h-full w-full'>
				<div className="flex  flex-row bg-orange-400">
					<div className="grid grid-cols-3 gap-4 p-8">{populate_img}</div>
				</div>
				<Menu />
			</div>
		</div>
	);
}

export default Home;
