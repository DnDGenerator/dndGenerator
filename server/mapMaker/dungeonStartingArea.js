const dice = require('./dice');

module.export = (graph, row, col)=>{
    let width = 0;
    let height = 0;
    let radius = 0;
    let description;
    let numPassages = 0;
    let numDoors = 0;
    const dTen = dice.roll(`1d10`).result;
    if(dTen === 1){
        width = 20/5;
        height = 20/5;
        description = "Square, 20 x 20ft.; passage on each wall";
        numPassages = 4;
    }else if(dTen === 2){
        width = 20/5;
        height = 20/5;
        description = "Square, 20 x 20ft.; door on two walls, passage in third wall";
        numPassages = 1;
        numDoors = 2;
    }else if(dTen === 3){
        width = 40/5;
        height = 40/5;
        description = "Square, 40 x 40 ft.; doors on three walls";
        numDoors = 3;
    }else if(dTen === 4){
        width = 80/5;
        height = 20/5;
        description = "Rectangle, 80 x 20ft., with row of pillars down the middle; two passages leading from each long wall, doors on each short wall";
        numPassages = 4;
        numDoors = 2;
    }else if(dTen === 6){
        radius = 20/5;
        width = Math.abs(Math.sqrt(2*(Math.pow(radius, 2))));
        height = Math.abs(Math.sqrt(2*(Math.pow(radius, 2))));
        description = "Circle, 40ft. diameter; one passage at each cardinal direction";
        numPassages = 4;
    }else if(dTen === 7){
        radius = 20/5;
        width = Math.abs(Math.sqrt(2*(Math.pow(radius, 2))));
        height = Math.abs(Math.sqrt(2*(Math.pow(radius, 2))));
        description = "Circle, 40ft. diameter; one passage in each cardinal direction; well in middle of room (might lead down to lower level)"
        numPassages = 4;
    }else if(dTen === 8){
        width = 20/5;
        height= 20/5;
        description = "Square, 20 x 20ft.; door on two wal ls, passage on third wall, secret door on fourth wall"
        numPassages = 1;
        numDoors = 3;
    }else if(dTen === 5){
        width = 20/5;
        height = 40/5;
        description = "Rectangle, 20 x 40ft.; passage on each wall";
        numPassages = 4;
    }else if(dTen === 9){
        width = 10/5;
        description = "Passage, 10 ft. wide; T intersection";
        numPassages = 2;
    }else{
        width = 10/5;
        description = "Passage, 10ft. wide; four-way intersection";
        numPassages = 3;
    }

    for(let i = row + width; i > row; i--){
        for(let j = col + height; j > col; j--){
            graph[i][j] = description;
        }
    }

    return {graph, numDoors, numPassages, description, width, height};
}