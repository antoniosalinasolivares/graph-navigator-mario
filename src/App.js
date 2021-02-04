import { useState } from 'react';
import map from './map.jpeg'
import world11 from './world11.json'
import './uistyles.css'
import Graph from './modules/Graph'
function App() {

const [route, setRoute] = useState([])
const algo = Graph(world11)
	return (
	  <>
		<nav className="navbar navbar-dark bg-dark">
			<div className="container-fluid">
			<span className="navbar-brand mb-0 h1">Navegacion de Grafos con Dijkstra</span>
			</div>
		</nav>

		<div>
			<div className="button-container" style={{
				position: 'relative'
			}}>
				<img src={map} alt="Super mario 3 world 1"/ >

				<button onClick={()=>{
					setRoute(algo.Dijkstra('Start', 'Start'))
				}} style={locate(38,67)}>Start</button>
				<button onClick={()=>{
					setRoute(algo.Dijkstra('Start', 'N1'))
				}} style={locate(49,59)}>N1</button>
				<button onClick={()=>{
					setRoute(algo.Dijkstra('Start', 'N2'))
				}} style={locate(49,37.5)}>N2</button>
				<button onClick={()=>{
					setRoute(algo.Dijkstra('Start', 'N3'))
				}} style={locate(49,27)}>N3</button>
				<button onClick={()=>{
					setRoute(algo.Dijkstra('Start', 'N4'))
				}} style={locate(38,27)}>N4</button>
				<button onClick={()=>{
					setRoute(algo.Dijkstra('Start', 'CH1'))
				}} style={locate(38,15)}>Ch1</button>
				<button onClick={()=>{
					setRoute(algo.Dijkstra('Start', 'Castillo'))
				}} style={locate(26,45)}>Castillo</button>
				<button onClick={()=>{
					setRoute(algo.Dijkstra('Start', 'Diamante'))
				}} style={locate(26,35)}>Diamante</button>
				<button onClick={()=>{
					setRoute(algo.Dijkstra('Start', 'N5'))
				}} style={locate(6.5,59)}>N5</button>
				<button onClick={()=>{
					setRoute(algo.Dijkstra('Start', 'N6'))
				}} style={locate(6.5,37.5)}>N6</button>
				<button onClick={()=>{
					setRoute(algo.Dijkstra('Start', 'CH2'))
				}} style={locate(17,47)}>Ch2</button>
				<button onClick={()=>{
					setRoute(algo.Dijkstra('Start', 'Bowser'))
				}} style={locate(17,13.5)}>Bowser</button>
			</div>
		</div>
			<div className="container px-4">
		<div className="btn-group" role="group" aria-label="Basic example">
			{
				[...route].map(element=>{
					return(
						<button key={element} type="button" className="btn btn-primary">{element}</button>
					)
				})
			}


			</div>
		</div>
	  </>
  )
}

const locate = (bottom, right) => {
	return {
		bottom: `${bottom}em`, 
		right: `${right}em`
	}
}

export default App;
