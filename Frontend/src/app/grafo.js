import Graph from 'graphology';

const graph = new Graph();

graph.addNode(0);
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);
graph.addNode(6);
graph.addNode(7);
graph.addNode(8);
graph.addNode(9);
graph.addNode(10);
graph.addNode(11);
graph.addNode(12);
graph.addNode(13);
graph.addNode(14);
graph.addNode(15);
graph.addNode(16);
graph.addNode(17);
graph.addNode(18);
graph.addNode(19);
graph.addNode(20);
graph.addNode(21);
graph.addNode(22);
graph.addNode(23);

graph.addEdge(0, 1,{type: 'KNOWS', weight: 5});
graph.addEdge(1, 0,{type: 'KNOWS', weight: 5});
graph.addEdge(1, 6,{type: 'KNOWS', weight: 5});
graph.addEdge(6, 1,{type: 'KNOWS', weight: 5});
graph.addEdge(0, 6,{type: 'KNOWS', weight: 5});
graph.addEdge(6, 0,{type: 'KNOWS', weight: 5});
graph.addEdge(6, 7,{type: 'KNOWS', weight: 10});
graph.addEdge(7, 6,{type: 'KNOWS', weight: 10});
graph.addEdge(6, 8,{type: 'KNOWS', weight: 8});
graph.addEdge(8, 6,{type: 'KNOWS', weight: 8});

graph.addEdge(8, 3,{type: 'KNOWS', weight: 4});
graph.addEdge(3, 8,{type: 'KNOWS', weight: 4});

// graph.addEdge(1, 4,{type: 'KNOWS', weight: 5});

graph.addEdge(7, 2,{type: 'KNOWS', weight: 4});
graph.addEdge(2, 7,{type: 'KNOWS', weight: 4});

graph.addEdge(7, 3,{type: 'KNOWS', weight: 5});
graph.addEdge(3, 7,{type: 'KNOWS', weight: 5});

graph.addEdge(7, 4,{type: 'KNOWS', weight: 4});
graph.addEdge(4, 7,{type: 'KNOWS', weight: 4});

graph.addEdge(7, 8,{type: 'KNOWS', weight: 4});
graph.addEdge(8, 7,{type: 'KNOWS', weight: 4});

graph.addEdge(8, 9,{type: 'KNOWS', weight: 20});
graph.addEdge(9, 8,{type: 'KNOWS', weight: 20});
graph.addEdge(9, 10,{type: 'KNOWS', weight: 15});
graph.addEdge(10, 9,{type: 'KNOWS', weight: 15});
graph.addEdge(10, 11,{type: 'KNOWS', weight: 7});
graph.addEdge(11, 10,{type: 'KNOWS', weight: 7});

graph.addEdge(10, 12,{type: 'KNOWS', weight: 7});
graph.addEdge(12, 10,{type: 'KNOWS', weight: 7});
graph.addEdge(10, 5,{type: 'KNOWS', weight: 7});
graph.addEdge(5, 10,{type: 'KNOWS', weight: 7});
graph.addEdge(12, 13,{type: 'KNOWS', weight: 7});
graph.addEdge(13, 12,{type: 'KNOWS', weight: 7});

// baños, loza y auditorio 
graph.addEdge(14, 12,{type: 'KNOWS', weight: 10});
graph.addEdge(12, 14,{type: 'KNOWS', weight: 10});

graph.addEdge(14, 15,{type: 'KNOWS', weight: 7});
graph.addEdge(15, 14,{type: 'KNOWS', weight: 7});
graph.addEdge(14, 16,{type: 'KNOWS', weight: 7});
graph.addEdge(16, 14,{type: 'KNOWS', weight: 7});

graph.addEdge(15, 16,{type: 'KNOWS', weight: 7});
graph.addEdge(16, 15,{type: 'KNOWS', weight: 7});
graph.addEdge(16, 17,{type: 'KNOWS', weight: 7});
graph.addEdge(17, 16,{type: 'KNOWS', weight: 7});

graph.addEdge(18, 17,{type: 'KNOWS', weight: 7});
graph.addEdge(17, 18,{type: 'KNOWS', weight: 7});
graph.addEdge(18, 19,{type: 'KNOWS', weight: 7});
graph.addEdge(19, 18,{type: 'KNOWS', weight: 7});

graph.addEdge(14, 20,{type: 'KNOWS', weight: 7});
graph.addEdge(20, 14,{type: 'KNOWS', weight: 7});
graph.addEdge(20, 21,{type: 'KNOWS', weight: 7});
graph.addEdge(21, 20,{type: 'KNOWS', weight: 7});

graph.addEdge(22, 20,{type: 'KNOWS', weight: 7});
graph.addEdge(20, 22,{type: 'KNOWS', weight: 7});
graph.addEdge(22, 23,{type: 'KNOWS', weight: 7});
graph.addEdge(23, 22,{type: 'KNOWS', weight: 7});

graph.addEdge(21, 16,{type: 'KNOWS', weight: 5});
graph.addEdge(16, 21,{type: 'KNOWS', weight: 5});

export default graph;