const location = require('./dungeonLocation');
const creator = require('./dungeonCreator');
const purpose = require('./dungeonPurpose');
const history = require('./dungeonHistory');
const Dungeon = require('./dungeonClass');
module.exports = ()=>{
    const dungeon = {};
    dungeon.location = location();
    dungeon.creator = creator();
    dungeon.purpose = purpose();
    dungeon.history = history();

    const dungeonMap = new Dungeon(1000,1000)
    const startingObj = dungeonMap.getStartingInfo();
    const recursiveConstruction = (numDoorsLeft, numPassagesLeft)=>{
        if(numDoorsLeft === 0 && numPassagesLeft === 0){
            return;
        }

        return recursiveConstruction(dungeonMap.getCurrentNumDoorsLeftToPlace(), dungeonMap.getCurrentNumPassagesLeftToPlace());
    }

    // recursiveConstruction(dungeonMap.getCurrentNumDoorsLeftToPlace(), dungeonMap.getCurrentNumPassagesLeftToPlace());
    dungeon.mapObj = dungeonMap;

    return dungeon;
}