const location = require('./dungeonLocation');
const creator = require('./dungeonCreator');
const purpose = require('./dungeonPurpose');
const history = require('./dungeonHistory');
const MapMaker = require('./dndMapMaker');
module.exports = ()=>{
    const dungeon = {};
    dungeon.location = location();
    dungeon.creator = creator();
    dungeon.purpose = purpose();
    dungeon.history = history();
    const mapMaker = new MapMaker(100,100);
    mapMaker.setStartingArea();
    mapMaker.upDateMap();
    mapMaker.upDateMap();
    mapMaker.upDateMap();
    dungeon.map = mapMaker.getMap();
    return dungeon;
}