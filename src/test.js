const Graph = require('./modules/Graph')

const gr = Graph({
        'A':{
            'D':1,
            'B':6
        },
        'B':{
            'A':6,
            'D':2,
            'E':2,
            'C':5
        },
        'C':{
            'B':5,
            'E':5
        },
        'D':{
            'A':1,
            'B':2,
            'E':1
        },
        'E':{
            'D':1,
            'B':2,
            'C':5
        }
    })


console.log(gr.Dijkstra('A'))