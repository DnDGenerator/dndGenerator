const MapGenVTwo = require('./server/mapGenFolder/dndMapMakerv2');
const MapCompiler = require('./server/mapGenFolder/mapCompiler');
const StartingRoom = require('./server/mapGenFolder/startingRoomV2');
const dice = require('./server/dice');

const mapGen = new MapGenVTwo(100,100);
const testMap = mapGen.getMap();
const mapCompiler = new MapCompiler(testMap);
const startingRoom = new StartingRoom();
mapCompiler.traverseTilesInADirection(5, 5, 's', 'e', startingRoom.getWidth(), startingRoom.getLength(), (tile)=>{
    startingRoom.buildRoom(tile);
});
const cardnialExits = startingRoom.getExitLocations();
const exitTypes = startingRoom.getExitTypes();
const mapCompilerSearchresults = [];
for(let i = 0; i < cardnialExits.length; i++){
    mapCompilerSearchresults.push(mapCompiler.findEdgeTilesByType(cardnialExits[i], 'starting room'));
}
for(let i = 0; i < mapCompilerSearchresults.length; i++){
    const resultsLength = mapCompilerSearchresults[i].length;
    mapCompilerSearchresults[i][dice.roll(`1d${resultsLength}`).result - 1].updateType(exitTypes[i]);
}
const filtedResults = mapCompilerSearchresults.map(array=>{
    return array.filter(tile=>tile.getTileInfo().type !== 'available').pop();
});

console.log(filtedResults)