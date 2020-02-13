const dice = require('./dice');
const start = require('./dungeonStartingArea');
module.exports = ()=>{
    let graphPaper = [];
    for(let i = 0; i < 1000; i++){
        graphPaper[i] = [];
        for(let j = 0; j < 1000; i++){
            graphPaper[i][j] = false;
        }
    }

    const centerRow = (graphPaper.length - 1)/2;
    const centerCol = (graphPaper[(graphPaper.length - 1)/2].length - 1)/2;
    const startingLocationObj = start(graphPaper, centerRow, centerCol);


}