import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from './Button';

function Login() {
	const [ name, setName ] = useState('');
	const [ password, setPsswd ] = useState('');

	function handleSubmit(e) {
		axios
			.post('http://localhost:3000', {
				name: name,
				password: password
			})
			.then((res) => {
				window.localStorage.setItem('user', res.data[0].name);
			})
			.then(() => {
				const uname = window.localStorage.setItem('user');
				if (uname) {
					window.location.href = '/';
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return (
		<div className="h-screen w-full bg-slate-400 pt-44">
			<form
				onSubmit={(e) => {
					handleSubmit(e);
				}}
			>
				<div className="h-64 w-96 mx-auto bg-slate-600 rounded shadow-lg items-center">
					<div className="flex flex-col items-center p-12">
						<input
							className="m-4 w-64 h-8 rounded-md"
							type="text"
							value={name}
							placeholder="Username"
							required
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
						<input
							className=" w-64 h-8 rounded-md"
							type="password"
							value={password}
							placeholder="Password"
							required
							onChange={(e) => {
								setPsswd(e.target.value);
							}}
						/>
						<div className="flex flex-row justify-around w-64">
							<input
								type="submit"
								value="Login"
								className="w-24 h-12 bg-gray-800 rounded-md text-cyan-50 mt-8"
							/>
							<Link to="/signup">
								<Button text="SignUp" />
							</Link>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Login;
