const { takeWhile } = require("lodash");

class MapCompiler{
    constructor(tiledMap){
        this.tiledMap = tiledMap;
        this.manipulateThisTile = this.manipulateThisTile.bind(this);
        this.manipulateThisTileNeighbor = this.manipulateThisTileNeighbor.bind(this);
        this.traverseTilesInADirection = this.traverseTilesInADirection.bind(this);
        this.findEdgeTilesByType = this.findEdgeTilesByType.bind(this);
        this.getAnchorPointsForBuild = this.getAnchorPointsForBuild.bind(this);
    }
    /**
     * applies different methods to different tiles
     * high order function methods need to be made
     */
    /**
     * 
     * @param {number} x x coordinate of tile that needs to be manipulated
     * @param {number} y y coordinate of tile that needs to be manipulated
     * @param {function} tileManipulation passed in function that will act directly onto the tile that is passed into it
     */
    manipulateThisTile(x, y, tileManipulation){
        if(!this.tiledMap[x] || !this.tiledMap[x][y]){
            console.error('x and y are not within the boundaries of the table, please verify ', x, '&', y);
            return null;
        }
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
        if(cardinalDirection !== 'n' && cardinalDirection !== 'e' && cardinalDirection !== 's' && cardinalDirection !== 'w'){
            console.error('valid cardinal directions are n, e, s, w. not ', cardinalDirection);
            return null;
        }
        if(!this.tiledMap[x] || !this.tiledMap[x][y]){
            console.error('x and y are not within the boundaries of the table, please verify ', x, '&', y);
            return null;
        }
        const tileNeighbor = this.tiledMap[x][y].getNeighbors()[cardinalDirection];
        return tileManipulation(tileNeighbor);
    }
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {string} xCardinalDirection 
     * @param {string} yCardinalDirection 
     * @param {number} xTraverseDistance 
     * @param {number} yTraverseDistance 
     * @param {function} tileManipulation 
     * @description traveses over the map allowing multiple tiles in a rectangular shape to be accessed and manipulated
     */
    traverseTilesInADirection(x, y, xCardinalDirection, yCardinalDirection, xTraverseDistance, yTraverseDistance, tileManipulation){
        if(!this.tiledMap[x] || !this.tiledMap[x][y]){
            return null;
        }
        if(xCardinalDirection === 's'){
            for(let i = x; i < x + xTraverseDistance; i++){
                if(yCardinalDirection === 'e'){
                    for(let j = y; j < y + yTraverseDistance; j++){
                        if(this.tiledMap[i] && this.tiledMap[i][j]){
                            tileManipulation(this.tiledMap[i][j]);
                        }
                    }
                }else if(yCardinalDirection === 'w'){
                    for(let j = y; j > y - yTraverseDistance; j--){
                        if(this.tiledMap[i] && this.tiledMap[i][j]){
                            tileManipulation(this.tiledMap[i][j]);
                        }
                    }
                }else{
                    return null;
                }
            }
        }else if(xCardinalDirection === 'n'){
            for(let i = x; i > x - xCardinalDirection; i--){
                if(yCardinalDirection === 'e'){
                    for(let j = y; j < y + yTraverseDistance; j++){
                        if(this.tiledMap[i] && this.tiledMap[i][j]){
                            tileManipulation(this.tiledMap[i][j]);
                        }
                    }
                }else if(yCardinalDirection === 'w'){
                    for(let j = y; j > y - yTraverseDistance; j--){
                        if(this.tiledMap[i] && this.tiledMap[i][j]){
                            tileManipulation(this.tiledMap[i][j]);
                        }
                    }
                }else{
                    return null;
                }
            }
        }else{
            return null;
        }
        return;
    }
    /**
     * 
     * @param {string} anchorPoint this string will tell the method which type of room/door/etc you are looking to place
     * @description After taking in the anchorPoint that you wish to use, the method will run through the map and find any of the anchor
     * point locations avaliable to the type of anchorpoint you are looking for
     * @returns {Array} that will contain the tiles that are at the acnhorpoint locations 
     */
    getAnchorPointsForBuild(anchorPoint){
        const searchResults = [];
        this.tiledMap.forEach(theYs=>{
            theYs.forEach(tile=>{
                if(tile.getTileInfo().type === anchorPoint){
                    searchResults.push(tile);
                }
            });
        });
        return searchResults;
    }
    /**
     * 
     * @param {string} cardinalEdge n,s,e,w. do determine which edge is to be checked
     * @param {string} roomType the tile type that we are searching
     * @returns {array} of results that meet the condition of a neighboring tile to said roomtype is available to be changed
     */
    findEdgeTilesByType(cardinalEdge, roomType){
        const searchResults = [];
        this.tiledMap.forEach(theYs=>{
            theYs.forEach(tile=>{
                if(tile.getTileInfo().type === roomType && tile.getNeighbors()[cardinalEdge] && tile.getNeighbors()[cardinalEdge].getTileInfo().type === 'available'){
                    searchResults.push(tile.getNeighbors()[cardinalEdge]);
                }
            })
        })
        return searchResults;

    }
}

module.exports = MapCompiler