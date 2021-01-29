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

    let connect = (connection) => {
        nodes = {connection, ...nodes}
    }
    
    let addNode = (nodeName)=> {
        if(nodes[nodeName])
    }

    return {
        addNode,
        connect,
        nodes
    }
}

module.exports = Graph


