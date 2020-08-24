class mapCompiler{
    constructor(tiledMap){
        this.tiledMap = tiledMap;
        this.manipulateThisTile = this.manipulateThisTile.bind(this);
    }
    /**
     * applies different methods to different tiles
     * high order function methods need to be made
     */
    /**
     * 
     * @param {number} x x coordinate of tile that needs to be manipulated
     * @param {number} y y coordinate of tile that needs to be manipulated
     * @param {function} tileManipulation passed in function that will act directly onto the tile itself
     */
    manipulateThisTile(x, y, tileManipulation){
        const tile = this.tiledMap[x][y];
        return tileManipulation(tile);
    }
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {string} cardinalDirection 
     * @param {function} tileManipulation 
     */
    manipulateThisTileNeighbor(x, y, cardinalDirection, tileManipulation){
        if(cardinalDirection !== 'n' || cardinalDirection !== 'e' || cardinalDirection !== 's' || cardinalDirection !== 'w'){
            console.error('valid cardinal directions are n, e, s, w. not ', cardinalDirection);
            return null;
        }
        if(!this.tiledMap[x][y]){
            console.error('x and y are not within the boundaries of the table, please verify ', x, '&', y);
            return null;
        }
        const tileNeighbor = this.tiledMap[x][y].getNeighbors()[cardinalDirection];
        return tileManipulation(tileNeighbor);
    }
}