import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
	const [ip, setIp] = useState('');
	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch(
					`https://geo.ipify.org/api/v2/country?apiKey=${process.env.REACT_APP_API_KEY}`
				);
				if (response.ok) {
					const jsonResponse = await response.json();
					console.log('response', jsonResponse);
					return setIp(jsonResponse.ip);
				} else {
					console.error('Request failed!');
				}
			} catch (error) {
				console.log(error.message);
			}
		};
		getData();
	}, []);

	return (
		<div>
			<h2>IP ADDRESS</h2>
			<p>Your ip:{ip}</p>
		</div>
	);
}

export default App;
