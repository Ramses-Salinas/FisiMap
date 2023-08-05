import Graph from 'graphology';

const graph2 = new Graph();

graph2.addNode(0);
graph2.addNode(1);
graph2.addNode(2);
graph2.addNode(3);
graph2.addNode(4);
graph2.addNode(5);
graph2.addNode(6);
graph2.addNode(7);
graph2.addNode(8);
// graph2.addNode(9);
// graph2.addNode(10);

graph2.addEdge(0, 4,{type: 'KNOWS', weight: 5});
graph2.addEdge(4, 0,{type: 'KNOWS', weight: 5});
graph2.addEdge(4, 5,{type: 'KNOWS', weight: 5});
graph2.addEdge(5, 4,{type: 'KNOWS', weight: 5});

graph2.addEdge(1, 5,{type: 'KNOWS', weight: 5});
graph2.addEdge(5, 1,{type: 'KNOWS', weight: 5});
graph2.addEdge(6, 2,{type: 'KNOWS', weight: 5});
graph2.addEdge(2, 6,{type: 'KNOWS', weight: 5});
graph2.addEdge(6, 5,{type: 'KNOWS', weight: 5});
graph2.addEdge(5, 6,{type: 'KNOWS', weight: 5});

graph2.addEdge(7, 4,{type: 'KNOWS', weight: 5});
graph2.addEdge(4, 7,{type: 'KNOWS', weight: 5});
graph2.addEdge(8, 7,{type: 'KNOWS', weight: 5});
graph2.addEdge(7, 8,{type: 'KNOWS', weight: 5});
graph2.addEdge(8, 3,{type: 'KNOWS', weight: 5});
graph2.addEdge(3, 8,{type: 'KNOWS', weight: 5});

export default graph2;