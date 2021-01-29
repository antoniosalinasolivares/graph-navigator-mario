import { useRef, useState } from 'react';
import map from './map.jpeg'

function App() {

const button1 = useRef()

	return (
	  <>
		<nav class="navbar navbar-dark bg-dark">
			<div class="container-fluid">
			<span class="navbar-brand mb-0 h1">Navegacion de Grafos con Dijkstra</span>
			</div>
		</nav>
		<div style={{
			position: 'relative'
		}}>
			<img src={map} style={{
				'display': 'block',
				'width': 'auto',
				'height': 'auto',
				'max-width': '100%',
				'max-height': '90%',
				'margin': '20px auto',
				position:'relative'
			}}>


			</img>

			<button style={{
				position: 'fixed',
				top:'100px',
				left: '200px' 
			}}>this is a fucking button</ button>
			
		</div>

	  </>
  )
}

export default App;
