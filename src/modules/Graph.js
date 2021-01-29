const Graph = (graph) => {
    /*
    const graph = {
        'A': {
            'B': 13,
            'C': 1
        },
        'B': {
            'A': 3,
            'C': 6,
        },
        'C':{
            'A': 5,
            'B': 6,
        }
    }
    */
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

                Dijkstra(vertice, final, graph[inicio][vertice]+distancia, backtrack)
            }

        })

        return(backtrack)
    }

    return {
        addNode,
        connect,
        nodes,
        Dijkstra
    }
}

module.exports = Graph


