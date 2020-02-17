const Dungeon = require('./dungeonClass');

const dungeonMap = new Dungeon(500,500)
    
    
    const startingObj = dungeonMap.getStartingInfo();

    const checkCord = (x, y, lastSpace, room)=>{
        let nextSpace = null;
        for(let i = 0; i < room.exitLocations.length; i++){
            if(room.exits[i].x === x && room.exits[i].y === y){
                let exitType =room.exitType[i];

                switch(exitType){
                    case "door":
                        nextSpace = dungeonMap.makeADoor();
                        return {exitType, nextSpace};
                    case "passage":
                        nextSpace = dungeonMap.makeAPassage(lastSpace);
                        return {exitType, nextSpace};
                    case "chamber":
                        nextSpace = dungeonMap.makeAChamber();
                        return {exitType, nextSpace};
                }
            }
        }
        return {exitType:"unused", nextSpace};

    }

    const recursiveConstruction = (numDoorsLeft, numPassagesLeft, room)=>{
        if(numDoorsLeft === 0 && numPassagesLeft === 0){
            return;
        }
        const currentMap = dungeonMap.getCurrentMap();
        let lastSpace = "unused";
        for(let x = 0; x < dungeonMap.mapWidth; x++){
            for(let y = 0; y < dungeonMap.mapHeight; y++){
                //need to procederually plot stuff
                currentSpace = checkCord(x,y, lastSpace, room)
                currentMap[x][y] = currentSpace.exitType;
                lastSpace = currentMap[x][y];
                if(currentSpace.nextSpace !== null){
                    room = currentMap[x][y].nextSpace;
                }
                
            }
        }
        return recursiveConstruction(dungeonMap.getCurrentNumDoorsLeftToPlace(), dungeonMap.getCurrentNumPassagesLeftToPlace(), room);
    }

    recursiveConstruction(dungeonMap.getCurrentNumDoorsLeftToPlace(), dungeonMap.getCurrentNumPassagesLeftToPlace(), startingObj)

    recursiveConstruction(dungeonMap.getCurrentNumDoorsLeftToPlace(), dungeonMap.getCurrentNumPassagesLeftToPlace());
