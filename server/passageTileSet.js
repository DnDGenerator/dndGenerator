/**
 * @description So this class will be used to keep track of the tiles that make up one passage
 */

class PassageTileSet{
    constructor(){
        this.tileSet=[];
        this.wallObj={
            nWall: [],
            sWall: [],
            wWall: [],
            eWall: []
        }
        this.setProps = this.setProps.bind(this);
        this.getTileSet = this.getTileSet.bind(this);
        this.populateWall = this.populateWall.bind(this);
        this.getWallTiles = this.getWallTiles.bind(this);
    }
    
    setProps(tile){
        this.tileSet.push(tile);
    }
    getTileSet(){
        return this.tileSet;
    }
    getWallTiles(){
        return this.wallObj;
    }
    populateWall(){
        let largestX = 0;
        let largestY = 0;
        this.tileSet.forEach(tile=>{
            if(tile === null){
                return;
            }
            if(tile.getTileInfo().x > largestX){
                largestX = tile.getTileInfo().x;
            }
            if(tile.getTileInfo().y > largestY){
                largestY = tile.getTileInfo().y;
            }
        })
        let smallestX = largestX;
        let smallestY = largestY;
        this.tileSet.forEach(tile=>{
            if(tile === null){
                return;
            }
            if(tile.getTileInfo().x < smallestX){
                smallestX = tile.getTileInfo().x;
            }
            if(tile.getTileInfo().y < smallestY){
                smallestY = tile.getTileInfo().y;
            }
        })
        this.tileSet.forEach(tile=>{
            if(tile === null){
                return null;
            }
            if(tile.getTileInfo().x === largestX){
                this.wallObj.sWall.push(tile); 
            }
            if(tile.getTileInfo().x === smallestX){
                this.wallObj.nWall.push(tile);
            }
            if(tile.getTileInfo().y === largestY){
                this.wallObj.eWall.push(tile);
            }
            if(tile.getTileInfo().y === smallestY){
                this.wallObj.wWall.push(tile);
            }
        })

    }

}

module.exports = PassageTileSet;