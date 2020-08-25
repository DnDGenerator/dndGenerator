const MapGenVTwo = require('./server/mapGenFolder/dndMapMakerv2');
const MapCompiler = require('./server/mapGenFolder/mapCompiler');

const mapGen = new MapGenVTwo(100,100);
const testMap = mapGen.getMap();
const mapCompiler = new MapCompiler(testMap);
const testTile = testMap[5][5];
testTile.updateType('changed');
const result = mapCompiler.getAnchorPointsForBuild('changed')[0].getTileInfo().type;

console.log(result);
