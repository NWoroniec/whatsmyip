import './App.css';
import { useState, useEffect } from 'react';
import { Map, Marker } from 'pigeon-maps';

function App() {
	const [ip, setIp] = useState('');
	const [location, setLocation] = useState();

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch(
					`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}`
				);
				if (response.ok) {
					const jsonResponse = await response.json();
					console.log('response', jsonResponse);
					// IP
					setIp(jsonResponse.ip);
					// location
					setLocation(jsonResponse.location);
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
			<p>Your City:{location.city}</p>
      <p>Your Country:{location.country}</p>
			<Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
				<Marker width={50} anchor={[50.879, 4.6997]} />
			</Map>
		</div>
	);
}

export default App;
