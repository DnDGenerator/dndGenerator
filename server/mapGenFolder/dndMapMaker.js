const Tile = require('./tile');
const Passage = require('./dndPassage');
const Door = require('./dndDoor');
const Chamber = require('./dndChamber');
const StartingArea = require('./dndStartingLocation');

class MapGen{
    constructor(x,y){
        this.x = x/5;
        this.y = y/5;
        this.tileMap = [];
        for(let i = 0; i < this.x; i++){
            this.tileMap[i] = [];
            for(let j = 0; j < this.y; j++){
                this.tileMap[i][j]='';
            }
        }
        this.passages = [];
        this.chambers = [];
        this.doors = [];
        
        
        this.createMap = this.createMap.bind(this);
        this.getMap = this.getMap.bind(this);
        this.layDownAPassage = this.layDownAPassage.bind(this);
        this.initMap = this.initMap.bind(this);
        this.placeStartingArea = this.placeStartingArea.bind(this);
        this.checkIfDone = this.checkIfDone.bind(this);
        this.placeChamber = this.placeChamber.bind(this);
        this.placeDoor = this.placeDoor.bind(this);
        this.getConvertedMap = this.getConvertedMap.bind(this);
    }
/**
 * @description populates the two dimensional array with tiles, then runs over the tiles setting their neighbors
 */
    initMap(){
        this.tileMap = this.tileMap.map((yArray, x)=>{
            return yArray.map((tileLocation, y)=>{
                const tile = new Tile('*', x, y);
                return tile;
            });
        });
        this.tileMap.forEach((yArray, x)=>{
            yArray.forEach((tile, y)=>{
                const n = (x-1 < 0);
                const e = (y+1 >= this.y);
                const s = (x+1 >= this.x);
                const w = (y-1 < 0)
                const neighbors = {
                    n: n ? null : this.tileMap[x-1][y],
                    e: e ? null : this.tileMap[x][y+1],
                    s: s ? null : this.tileMap[x+1][y],
                    w: w ? null : this.tileMap[x][y-1]
                };
                tile.setNeightbors(neighbors);
            })
        })
    }
    createMap(){
        this.initMap()
        this.placeStartingArea();
        this.checkIfDone();
    }
    checkIfDone(){
        const mapCheck = this.getMap().reduce((oldArray, currentArray)=>{
            const newArray = oldArray.concat(currentArray);
            return newArray;
        },[]).filter(tile=>tile.getTileInfo().type !== '*');
        const passageList = mapCheck.filter(tile=>tile.getTileInfo().type === 'passage');
        if(passageList.length > 0){
            this.layDownAPassage(passageList[0].getTileInfo().x, passageList[0].getTileInfo().y);
        }
        const doorList = mapCheck.filter(tile=>tile.getTileInfo().type === 'door');
        if(doorList.length > 0){
            this.placeDoor(doorList[0].getTileInfo().x, doorList[0].getTileInfo().y);
        }
        const chamberList = mapCheck.filter(tile=>tile.getTileInfo().type==='chamber');
        if(chamberList.length > 0){
            this.placeChamber(chamberList[0].getTileInfo().x, chamberList[0].getTileInfo().y);
        }
    }
    placeStartingArea(){
        const startingAra = new StartingArea(this.tileMap, this.x, this.y);
        startingAra.createStartingArea();
        startingAra.placeExits();
    }
    placeChamber(x,y){
        const chamber = new Chamber(this.getMap(), x, y);
        this.chambers.push(chamber);
        chamber.createChamber();
        chamber.placeExits();
        this.checkIfDone();
    }
    placeDoor(x, y){
        const door = new Door(this.getMap(), x, y);
        door.runDoorUpdates();
        this.checkIfDone();
    }
    layDownAPassage(x,y){
        const passage = new Passage(this.getMap(), x, y);
        passage.createPassage();
        passage.placeDoorsAndPassages();
        this.checkIfDone();
    }
    getMap(){
        return this.tileMap;
    }
    getConvertedMap(){
        return {map:this.getMap().map(yArray=>{
            return yArray.map(tile=>{
                return tile.getTileInfo().type;
            })
        }), numChambers: this.chambers.length}
    }
}

module.exports = MapGen;