const Graph = require('./modules/Graph')

const gr = Graph({
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
    })

    console.log(gr.nodes)