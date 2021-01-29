import { useState , useEffect} from 'react';
import map from './map.jpeg'
import world11 from './world11.json'
import './uistyles.css'

function App() {

const [destiny, setDestiny] = useState('Start')
const [route, setRoute] = useState([])
const algo = Graph(world11)


	return (
	  <>
		<nav className="navbar navbar-dark bg-dark">
			<div className="container-fluid">
			<span className="navbar-brand mb-0 h1">Navegacion de Grafos con Dijkstra</span>
			</div>
		</nav>
		<div className="">
			<div className="button-container" style={{
				position: 'relative'
			}}>
				<img src={map} style={{}}/ >

				<a onClick={()=>{
					setDestiny('Start')
					setRoute(algo.Dijkstra('Start', destiny))
				}} style={locate(38,67)}>Start</a>
				<a onClick={()=>{
					setDestiny('N1')
					setRoute(algo.Dijkstra('Start', destiny))
				}} style={locate(49,59)}>N1</a>
				<a onClick={()=>{
					setDestiny('N2')
					setRoute(algo.Dijkstra('Start', destiny))
				}} style={locate(49,37.5)}>N2</a>
				<a onClick={()=>{
					setDestiny('N3')
					setRoute(algo.Dijkstra('Start', destiny))
				}} style={locate(49,27)}>N3</a>
				<a onClick={()=>{
					setDestiny('N4')
					setRoute(algo.Dijkstra('Start', destiny))
				}} style={locate(38,27)}>N4</a>
				<a onClick={()=>{
					setDestiny('Champi')
					setRoute(algo.Dijkstra('Start', destiny))
				}} style={locate(38,15)}>Ch1</a>
				<a onClick={()=>{
					setDestiny('Castillo')
					setRoute(algo.Dijkstra('Start', destiny))
				}} style={locate(26,45)}>Castillo</a>
				<a onClick={()=>{
					setDestiny('Diamante')
					setRoute(algo.Dijkstra('Start', destiny))
				}} style={locate(26,35)}>Diamante</a>
				<a onClick={()=>{
					setDestiny('N5')
					setRoute(algo.Dijkstra('Start', destiny))
				}} style={locate(6.5,59)}>N5</a>
				<a onClick={()=>{
					setDestiny('N6')
					setRoute(algo.Dijkstra('Start', destiny))
				}} style={locate(6.5,37.5)}>N6</a>
				<a onClick={()=>{
					setDestiny('Champi')
					setRoute(algo.Dijkstra('Start', destiny))
				}} style={locate(17,47)}>Ch2</a>
				<a onClick={()=>{
					setDestiny('Bowser')
					setRoute(algo.Dijkstra('Start', destiny))
				}} style={locate(17,13.5)}>Bowser</a>
			</div>
		</div>

		<div className="btn-group" role="group" aria-label="Basic example">

			{
				route.forEach(element=>{
					return(
						<button type="button" className="btn btn-primary">{element}</button>
					)
				})
			}
		<>{route}</>
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


const Graph = (graph) => {

    let nodes = graph

    let connect = (origin, destination, weight, bidirectional=false) => {
        nodes[origin][destination] = weight
        if(bidirectional) nodes[destination][origin] = weight
    }
    
    let addNode = (nodeName)=> {
        nodes[nodeName] = {... nodes[nodeName]}
    }

    
    let Dijkstra = (inicio, final , distancia=0, backtrack={} ) => {
        // Establecemos las condiciones iniciales
        if(!Object.keys(backtrack).length){
                backtrack[inicio] = {
                distancia,
                anterior:""
            }
        }

        // Iteramos en los vertices que el nodo en curso puede visitar 
        Object.keys(nodes[inicio]).forEach(vertice => {
            if(backtrack[vertice] === undefined || nodes[inicio][vertice]+distancia < backtrack[vertice].distancia){
                backtrack[vertice] = {
                    distancia: nodes[inicio][vertice] + distancia,
                    anterior: inicio
                }
                // aplicamos, de forma recursiva el algoritmo de Dijkstra
                Dijkstra(vertice, final, graph[inicio][vertice]+distancia, backtrack)
            }

        })


        //usamos la tabla de backtrack para obtener la ruta mas corta hacia el origen y la regresamos inversa
        if(distancia == 0){
           const bt = (_inicio, _final) => {
               const {anterior} = backtrack[_final]
               return anterior === ''?
               [_inicio]:
               [_final, ...bt(_inicio, anterior)]
           }

           console.log(backtrack)
           return bt(inicio, final).reverse()

        }
    }

    return {
        addNode,
        connect,
        nodes,
        Dijkstra
    }
}



export default App;
