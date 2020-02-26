const dice = require('./dice.js');


/**
 * @desc passage should take the map, and the coordinates in which the first corner needs to be located.
 * using the tiles will help navigate the map to make sure things are placed correctly
 */
class Passage{
    constructor(map, x, y){
        this.map = map;
        this.x = x;
        this.y = y;
        this.width = 5/1;
        this.distance = 10/5;
        this.additionalDistance = 0;
        this.turningPoint = 0;
        this.numDoors = 0;
        this.numSidePassages = 0;
        this.numTurns = 0;
        this.turnDirection = '';
        this.isChamber = false;
        this.isStairs = false;
        this.doorPositions = [];
        this.passagePositions = [];
        this.width = 0;
        this.height = 10;
        this.cardnialDirection=''
        // this.map[this.x][this.y].updateType('P')
        this.passageTiles = [];

        const detailRoll = dice.roll(`1d20`).result;
        const fromNonPassageRoll = dice.roll(`1d20`).result;
        let rollWidth = fromNonPassageRoll;
        if(detailRoll < 3){
            this.distance = 30/5;
        }else if(detailRoll === 3){
            this.distance = 20/5;
            this.additionalDistance = 10/5;
            this.numDoors = 1;
            this.doorPositions.push('r');
        }else if(detailRoll === 4){
            this.distance = 20/5;
            this.additionalDistance = 10/5;
            this.numDoors = 1;
            this.doorPositions.push('l');
        }else if(detailRoll === 5){
            this.distance = 20/5;
            this.numDoors = 1;
            this.doorPositions.push('end');
        }else if(detailRoll < 8){
            this.distance = 20/5;
            this.numSidePassages = 1;
            this.additionalDistance = 10/5;
            this.passagePositions.push('r');
        }else if(detailRoll < 10){
            this.distance = 20/5;
            this.numSidePassages = 1;
            this.additionalDistance = 10/5;
            this.passagePositions.push('l');
        }else if(detailRoll === 10){
            this.distance = 20/5;
        }else if(detailRoll < 13){
            this.distance = 20/5;
            this.turnDirection = 'l';
            this.numTurns = 1;
            this.additionalDistance = 10/5;
        }else if(detailRoll < 15){
            this.distance = 20/5;
            this.turnDirection = 'r';
            this.numTurns = 1;
            this.additionalDistance = 10/5;
        }else if(detailRoll < 20){
            this.isChamber = true;
        }
        else{
            this.isStairs = true;
        }

        if(rollWidth < 3){
            this.width = 5/5;
        }else if(rollWidth < 13){
            this.width = 10/5;
        }else if(rollWidth < 15){
            this.width = 20/5;
        }else if(rollWidth < 17){
            this.width = 30/5;
        }else if(rollWidth === 17){
            this.width = 40/5;
        }else if(rollWidth === 18){
            this.width = 40/5;
        }else if(rollWidth === 19){
            this.width = 40/5;
            this.height = 20;
        }
        else{
            this.width = 40/5;
        }
        this.tileLayer = this.tileLayer.bind(this);
        this.tileShortLayer = this.tileShortLayer.bind(this);
        this.getWidth = this.getWidth.bind(this);
        this.getDistance = this.getDistance.bind(this);
        this.getAdditonalDistance = this.getAdditonalDistance.bind(this);
        this.determineDirection = this.determineDirection.bind(this);
        this.filterPassageTilesForDimensions = this.filterPassageTilesForDimensions.bind(this);
        this.placeSidePassagesAndDoors = this.placeSidePassagesAndDoors.bind(this);
    }
    placeSidePassagesAndDoors(){
        const filteredList = this.filterPassageTilesForDimensions();
        if(filteredList.length === 0){
            return;
        }
        for(let i = 0; i < this.numDoors; i++){
            const randomIndex =  dice.roll(`1d${filteredList.length}`).result - 1;
            const doorTile = filteredList.splice(randomIndex, 1)[0];
            doorTile.updateType('door');
        }
        for(let i = 0; i < this.numSidePassages; i++){
            const randomIndex =  dice.roll(`1d${filteredList.length}`).result - 1;
            const sidePassages = filteredList.splice(randomIndex, 1)[0];
            sidePassages.updateType('passage')
        }
        for(let i = 0; i < this.numTurns; i++){
            const randomIndex =  dice.roll(`1d${filteredList.length}`).result - 1;
            const turnTile = filteredList.splice(randomIndex, 1)[0];
            const longDirection = this.determineDirection('x', turnTile.x, turnTile.y) || this.determineDirection('y',turnTile.x, turnTile.y);
            const shortDirection = this.determineDirection('y', turnTile.x, turnTile.y) || this.determineDirection('x', turnTile.x, turnTile.y);
            if(longDirection !== null && shortDirection !== null){
                this.tileLayer(turnTile, this.getAdditonalDistance(), longDirection, 1, shortDirection);
            }
        }
    }
    getNumOfAdditionals(){
        return {numSidePassages:this.numSidePassages, numDoors:this.numDoors, numTurns:this.numTurns};
    }
    getDistance(){
        return this.distance;
    }
    getAdditonalDistance(){
        return this.additionalDistance;
    }
    getWidth(){
        return this.width;
    }
    filterPassageTilesForDimensions(){
        let maxX = 0;
        let minX = this.map.length;
        let maxY = 0;
        let minY = this.map.length;
        this.passageTiles.forEach(tile=>{
            if(maxX < tile.x){
                maxX = tile.x;
            }
            if(minX > tile.x){
                minX = tile.x;
            }
            if(maxY < tile.y){
                maxY = tile.y;
            }
            if(minY > tile.y){
                minY = tile.y;
            }
        });
        const filteredList = this.passageTiles.filter(tile=>{
            return tile.type !== 'P' ? false : tile.x === maxX ? true : tile.x === minX ? true : tile.y === maxY ? true : tile.y === minY ? true : false;
        })
        return filteredList;
    }
    checkForStairsOrChambers(){
        if(this.isChamber){
            this.map[this.x][this.y].updateType("chamber");
            return;
        }
        if(this.isStairs){
            this.map[this.x][this.y].updateType('stairs');
        }
    }
    /**
     * @description This method is used to determine valid directions that can be used to travel
     * 
     * @param {String} axisToCheck  should be x or y to determin which axis needs to be determined for a direction that is valid
     * 
     * @returns {String} it will return either n, s, e, or w based one availability
     */
    determineDirection(axisToCheck, x = this.x, y = this.y){
        if(axisToCheck === 'x'){
            if(x - 1 >= 0 && this.map[x - 1][y].type === 'u'){
                return 'n';
            }
            if(x + 1 <= this.map.length - 1 && this.map[x + 1][y].type === 'u'){
                return 's';
            }
        }
        if(axisToCheck === 'y'){
            if(y - 1 >= 0 && this.map[x][y - 1].type === 'u'){
                return 'w';
            }
            if(y + 1 <= this.map.length - 1 && this.map[x][y + 1].type === 'u'){
                return 'e';
            }
        }
        return null;
    }
    /**
     * @desc so these two methods will work in tandem to move down a row and make a column per row, or vica versa, based on direction
     * this is the shorter of the two
     * 
     * @param {Object} Tile will use the neghbors property to assist in navigation and update type along the way
     * @param {Number} numTilesToLayShort is the number of tiles that will be decremented that will make up the short side
     * @param {Number} numTilesToLayLong is the nujmber of tiles that will be decremented that will make up the long side
     * @param {String} shortDirection is a string that matches the neighbor direction for the short side
     * @param {String} longDirection is a string that matches the neighbor direction for the slong side
     * 
     * @returns {void} the return is used to end the recursion cycle
     */
    tileShortLayer(tile, numTilesToLayShort, shortDirection){
        if(numTilesToLayShort === 0 || tile.getNeighbors()[shortDirection] === null){
            return;
        }
        
        if(tile.getTileInfo().type !== "passage"){
            this.passageTiles.push(tile);
        }
        tile.updateType('P');
        
        if(tile.getNeighbors()[shortDirection].getTileInfo().type === "u"){
            this.tileShortLayer(tile.getNeighbors()[shortDirection], numTilesToLayShort - 1, shortDirection);
        }
    }


    /**
     * @desc so these two methods will work in tandem to move down a row and make a column per row, or vica versa, based on direction
     * 
     * @param {Object} Tile will use the neghbors property to assist in navigation and update type along the way
     * @param {Number} numTilesToLayShort is the number of tiles that will be decremented that will make up the short side
     * @param {Number} numTilesToLayLong is the nujmber of tiles that will be decremented that will make up the long side
     * @param {String} shortDirection is a string that matches the neighbor direction for the short side
     * @param {String} longDirection is a string that matches the neighbor direction for the slong side
     * 
     * @returns {void} the return is used to end the recursion cycle
     */
    tileLayer(tile, numTilesToLayLong, longDirection, numTilesToLayShort, shortDirection){
        // if(longDirection !== null && shortDirection !== null){
        //     return;
        // }
        if(numTilesToLayLong === 0 || tile.getNeighbors()[longDirection] === null){
            this.cardnialDirection = longDirection;
            return;
        }
        if(tile.getTileInfo().type === "u" || tile.getTileInfo().type === "passage"){
            this.tileShortLayer(tile, numTilesToLayShort, shortDirection);
        }

        if(tile.getNeighbors()[longDirection].getTileInfo().type === "u"){
            this.tileLayer(tile.getNeighbors()[longDirection], numTilesToLayLong - 1, longDirection, numTilesToLayShort, shortDirection);
        }

    }
}

module.exports = Passage;