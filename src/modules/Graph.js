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

module.exports = Graph