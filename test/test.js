const Passage = require('../server/mapGenFolder/dndPassage');
const Tile = require('../server/mapGenFolder/tile');
const StartingArea = require('../server/mapGenFolder/dndStartingLocation');
const Door = require('../server/mapGenFolder/dndDoor');
const Chamber = require('../server/mapGenFolder/dndChamber');
const MapGen = require('../server/mapGenFolder/dndMapMaker');
const MapGenVTwo = require('../server/mapGenFolder/dndMapMakerv2');
const MapCompiler = require('../server/mapGenFolder/mapCompiler');
const { test } = require('mocha');
var expect = require('chai').expect;

const map = [];

for(let i = 0; i < 200; i++){
    map[i]=[];
    for(let j = 0; j < 200; j++){
        const tile = new Tile('*', i, j);
        map[i].push(tile)
    }
};
map.forEach((yArray, x)=>{
    yArray.forEach((tile, y)=>{
        const n = (x-1 < 0);
        const e = (y+1 >= 200);
        const s = (x+1 >= 200);
        const w = (y-1 < 0)
        const neighbors = {
            n: n ? null : map[x-1][y],
            e: e ? null : map[x][y+1],
            s: s ? null : map[x+1][y],
            w: w ? null : map[x][y-1]
        };
        tile.setNeightbors(neighbors);
    })
});

var passage; 
var startingArea;
var door;
var chamber;
var mapGen;



describe('the map', () => {
    it('should have tiles in every space', ()=>{
        const trueOrFalse = map.reduce((reducedArray, yArray)=>{
            return reducedArray.concat(yArray.map(tile=>{
                if(tile.getTileInfo().type === '*'){
                    return true
                }else{
                    return false;
                }
            }));
        },[]);
        expect(trueOrFalse).to.be.an('array').that.does.not.includes(false);
    })
    it('should have each tile keep track of neighbors',()=>{
        const trueOrFalse = map.reduce((reducedArray, yArray)=>{
            return reducedArray.concat(yArray.map(tile=>{
                count = 0;
                if(tile.getNeighbors().n !== null){
                    count += 1;
                }
                if(tile.getNeighbors().s !== null){
                    count += 1;
                }
                if(tile.getNeighbors().e !== null){
                    count += 1;
                }
                if(tile.getNeighbors().w !== null){
                    count += 1;
                }
                if(count === 4){
                    return 'inner';
                }else if(count === 3){
                    return 'edge';
                }else if(count === 2){
                    return 'corner';
                }else{
                    return 'error';
                }
            }));
        },[]);
        expect(trueOrFalse).to.be.an('array').that.does.not.includes('error');
        expect(trueOrFalse.filter(corner=>corner==='corner')).to.be.an('array').to.have.lengthOf(4);
        expect(trueOrFalse.filter(edge=>edge==='edge')).to.be.an('array').to.have.lengthOf(792);
        expect(trueOrFalse.filter(edge=>edge==='inner')).to.be.an('array').to.have.lengthOf((200*200)-796);
    })
});

describe('passage()', function() {

    
    
    
    // add a test hook
    beforeEach(function() {
      // ...some logic before each test is run
        for(let i = 0; i < 200; i++){
            for(let j = 0; j < 200; j++){
                map[i][j].updateType('*');
            }
        }
        passage = new Passage(map, 100, 100);
    })
    
    // test a functionality
    it('getNumOfAdditionals() returns an object with three properties', function() {
        const additionalObjs= passage.getNumOfAdditionals();
        expect(additionalObjs).to.be.an('object');
        additionalObjsKeys = Object.keys(additionalObjs);
        expect(additionalObjsKeys).to.be.an('array').to.have.lengthOf(3);
    });

    it('detrmineDirection() should return true', function(){
        const isValidDirection = passage.determineDirection();
        expect(isValidDirection).to.be.a('boolean').that.equals(true);
    })

    it('createPassage() should lay down passages marked as "P" or should place chamber or stairs', ()=>{
        passage.createPassage();
        const reducedMap = map.reduce((reducedArray, yArray)=>{
            return reducedArray.concat(yArray.filter(tile=>tile.getTileInfo().type === 'P'? true : tile.getTileInfo().type === 'chamber' ? true : tile.getTileInfo().type === 'stairs')
            .map(tile=>{
                return tile.getTileInfo().type;
            }))
        },[]);

        expect(reducedMap).to.be.an('array');
        if(reducedMap.length > 1){
            expect(reducedMap).to.include('P');
            it('if the a passage is created. the length of the number of p tiles should equal the distance by width',()=>{
                expect(reducedMap).to.have.lengthOf(passage.width * passage.distance);
            })
        }else{
            expect(reducedMap).not.include('P');
        }
    })
    it('if the a passage is created. the length of the number of p tiles should equal the distance by width',()=>{
        passage.createPassage();
        const reducedMap = map.reduce((reducedArray, yArray)=>{
            return reducedArray.concat(yArray.filter(tile=>tile.getTileInfo().type === 'P'? true : tile.getTileInfo().type === 'chamber' ? true : tile.getTileInfo().type === 'stairs')
            .map(tile=>{
                return tile.getTileInfo().type;
            }))
        },[]);
        
        expect(reducedMap).to.have.lengthOf(passage.width * passage.distance);
    })
    
    // ...some more tests
    
})

describe('startingLocation()', () => {
    // add a test hook
    beforeEach(function() {
        // ...some logic before each test is run
        for(let i = 0; i < 200; i++){
            for(let j = 0; j < 200; j++){
                map[i][j].updateType('*');
            }
        }
        startingArea = new StartingArea(map, 200, 200);
    })
    it('determineDirection() should return true',()=>{
        const resultOfDetermineDirection = startingArea.determineDirection();

        expect(resultOfDetermineDirection).to.be.a('boolean').that.is.equals(true);
    })
    it('should give access to the width and height of the starting area',()=>{
        expect(startingArea.getWidth()).to.be.a('number').that.is.greaterThan(0);
        expect(startingArea.getHeight()).to.be.a('number').that.is.greaterThan(0);
    })
    it('createStartingArea() should create a room whose tiles are labeled "R" that is widthxheight in size',()=>{
        startingArea.createStartingArea();
        const reducedMap = map.reduce((reducedArray, yArray)=>{
            return reducedArray.concat(yArray)
        },[]).map(tile=>tile.getTileInfo().type).filter(type=>type==='R');
        expect(reducedMap).to.be.an('array').to.include('R');
        console.log('num not placed ', startingArea.getNotPlacedNum())
        console.log('width ', startingArea.getWidth());
        console.log('height ', startingArea.getHeight());
        console.log('widthXheight ', startingArea.getWidth()*startingArea.getHeight())
        expect(reducedMap).to.be.an('array').that.has.lengthOf(startingArea.getWidth()*startingArea.getHeight() - startingArea.getNotPlacedNum());
    })
    it('placeExits() should replace "R" types with the appropriate exit types if there are exit types to place',()=>{
        startingArea.createStartingArea();
        startingArea.placeExits();
        if(startingArea.getNumberOfExits() > 0){
            const reducedMap = map.reduce((reducedArray, yArray)=>{
                return reducedArray.concat(yArray)
            },[]).map(tile=>tile.getTileInfo().type)
            .filter(type=>type !== '*')
            .filter(type=>type !== 'R')
            .filter(type=>type !== 'WR');
            expect(reducedMap).to.be.an('array').that.has.length.greaterThan(0);
        }
    })
});

describe('door()', () => {
    beforeEach(function(){
        for(let i = 0; i < 200; i++){
            for(let j = 0; j < 200; j++){
                map[i][j].updateType('*');
            }
        }
        door = new Door(map, 15, 15)
    })

    it('should have a type that is not *, R, P, S, or C',()=>{
        expect(door.getType()).to.be.a('string').that.does.not.equal('*');
        expect(door.getType()).to.be.a('string').that.does.not.equal('P');
        expect(door.getType()).to.be.a('string').that.does.not.equal('R');
        expect(door.getType()).to.be.a('string').that.does.not.equal('S');
        expect(door.getType()).to.be.a('string').that.does.not.equal('C');
    });

    it('should update the tile that is specified to equal the same type',()=>{
        door.updateTileType()
        expect(door.getType()).to.deep.equal(map[15][15].getTileInfo().type);
    });
    it('should make one of the neighbor tiles type eaual to the exit value',()=>{
        door.updateAppropriateNeighborTile();
        const neighbors = map[15][15].getNeighbors();
        const results = [];
        for (const direction in neighbors) {
            if (neighbors.hasOwnProperty(direction)) {
                const tile = neighbors[direction];
                results.push(tile.getTileInfo().type);
            }
        }
        const exit = results.reduce((exit, type)=>{
            if(type !== null && type !== '*'){
                return type;
            }
            return exit;
        },'');
        expect(exit).to.be.a('string').that.deep.equals(door.getExit());
    });
    it('should be able to update the current tile and the availabel neighbor tile with one outer call',()=>{
        door.runDoorUpdates();
        const neighbors = map[15][15].getNeighbors();
        const results = [];
        for (const direction in neighbors) {
            if (neighbors.hasOwnProperty(direction)) {
                const tile = neighbors[direction];
                results.push(tile.getTileInfo().type);
            }
        }
        const exit = results.reduce((exit, type)=>{
            if(type !== null && type !== '*' && type !== door.getType()){
                return type;
            }
            return exit;
        },'');
        expect(exit).to.be.a('string').that.deep.equals(door.getExit());
        expect(door.getType()).to.deep.equal(map[15][15].getTileInfo().type);
    });

});

describe('chamber()',()=>{
    beforeEach(function(){
        for(let i = 0; i < 200; i++){
            for(let j = 0; j < 200; j++){
                map[i][j].updateType('*');
            }
        }
        chamber = new Chamber(map, 100, 100);
    })

    it('should give access to the width and height',()=>{
        expect(chamber.getWidth()).to.be.a('number').that.equals(chamber.width);
        expect(chamber.getHeight()).to.be.a('number').that.equals(chamber.height);
    });
    it('should be able to determine a valid direction to build to',()=>{
        const result = chamber.determineDirection();

        expect(result).to.be.a('boolean').that.is.equals(true);
    });
    it('should change the value of tiles to equal C equal to the widthxheight of the chamber',()=>{
        chamber.createChamber();
        const reducedMap = map.reduce((reducedArray, yArray)=>{
            return reducedArray
                .concat(yArray)
            },[])
            .map(tile=>tile.getTileInfo().type)
            .filter(type=>type==='C');
        console.log('widthXheight = ', chamber.getWidth()*chamber.getHeight());
        expect(reducedMap).to.be.an('array').to.include('C');
        expect(reducedMap).to.be.an('array').that.has.lengthOf(chamber.getWidth()*chamber.getHeight());
    });
    it('should have replaced C tiles with the appropriate number of exits', ()=>{
        chamber.createChamber();
        const numEXits = chamber.getNumExits();
        const exitLocs = chamber.getExits();
        console.log(numEXits ,' numExits');
        console.log(exitLocs.length, ' length of exitLocs')
        const {nLength, eLength, sLength, wLength, tilesUpdated} = chamber.placeExits();
        console.log('north ', nLength);
        console.log('east ', eLength);
        console.log('south ', sLength);
        console.log('west ', wLength);
        console.log(exitLocs);


        const testMap = map
            .reduce((oldArray, currentArray)=>{
                const newArray = oldArray.concat(currentArray);
                return newArray;
            },[])
            .map(tile=>tile.getTileInfo().type)
            .filter(type=>type !== 'C')
            .filter(type=>type!=='*')
            .filter(type=>type!=='WC');
        console.log('testMap ', testMap)
        console.log('num that could not be placed ', chamber.getNumNotPlaced())
        expect(testMap).to.be.an('array').to.not.include('C');
        expect(testMap).to.have.lengthOf(chamber.getNumExits());
        
        const doorArray = testMap
            .filter(value=>value==='door');
        const passageArray = testMap
            .filter(value=>value==='passage');
        expect(doorArray).to.have.lengthOf(chamber.getNumDoors());
        expect(passageArray).to.have.lengthOf(chamber.getNumPassages());
    })
})

describe('mapGen', ()=>{
    beforeEach(()=>{
        mapGen = new MapGen(100,100);
    });

    it('should generate a two dimensional array', ()=>{
        mapGen.initMap();
        const testMap = mapGen.getMap();
        expect(testMap).to.be.an('array').to.have.lengthOf(100/5);
        expect(testMap[0]).to.be.an('array').to.have.lengthOf(100/5);
    });
    it('should when placing the starting area, actualy place the starting area',()=>{
        mapGen.initMap();
        mapGen.placeStartingArea();
        const testMap = mapGen.getMap()
            .reduce((olderArray, currentArray)=>{
                const newArray = olderArray.concat(currentArray);
                return newArray;
            },[])
            .map(tile=>tile.getTileInfo().type);
        // console.log('testmap ', testMap.filter(type=>type==='R' || type==='WR'))
        expect(testMap).to.be.an('array');
        expect(function (testMap){
            const filteredArray = testMap.filter(type=>type==='R' || type==='WR');
            if(filteredArray.length > 0){
                return true;
            }else{
                return false;
            }
        }(testMap)).to.be.true;
    });

    it('should be able to run and clear up any of the need to be replaced tages replaced with the appropriate letters',()=>{
        mapGen.initMap();
        mapGen.placeStartingArea();
        mapGen.checkIfDone();
        const testMap = mapGen.getMap()
            .reduce((oldArray, currentArray)=>{
                const newArray = oldArray.concat(currentArray);
                return newArray;
            },[])
            .map(tile=>tile.getTileInfo().type);
        // let testMap = [];
        // const twoDMap = mapGen.getMap();
        // for(let i = 0; i < twoDMap.length; i++){
        //     const indexer = testMap.length || 0;
        //     testMap = testMap.concat(twoDMap[i]);
        //     for(let j = indexer; j < testMap.length; i++){
        //         if(testMap[j]){
        //             testMap[j] = testMap[j].type;
        //         }
        //     }
        // }
        expect(testMap).to.be.an('array').with.length.greaterThan(0)
        expect(testMap).to.be.an('array').to.not.include('chamber');
        expect(testMap).to.be.an('array').to.not.include('door');
        expect(testMap).to.be.an('array').to.not.include('passage');
    });

    it('should when run appropriatly translate into a map', ()=>{
        mapGen.initMap();
        mapGen.placeStartingArea();
        mapGen.checkIfDone();
        const stringMap = mapGen.getMap()
            .map(yArray=>{
                return yArray.map(tile=>{
                    return tile.getTileInfo().type;
                })
            }).reduce((finalString, yArray)=>{
                finalString += '\n';

                const tempString = yArray.reduce((tiledString, type)=>{
                    const tempString = '|'+type+'|';
                    tiledString+=tempString;
                    return tiledString;
                },'')
                finalString+=tempString;
                return finalString;
            },'');
        // let stringMap = "";
        // const map = mapGen.getMap();
        // console.log(map.length)
        // for(let x = 0; x < map.length; x++){
        //     for(let y = 0; map[x].length; y++){
        //         const tile = map[x][y];
        //         if(tile){
        //             stringMap+= '|'+ tile.getTileInfo().type +'|';
        //         }
                
        //     }
        // }
        console.log(stringMap)
        expect(mapGen.getMap()).to.be.an('array');
        expect(mapGen.getMap()[0]).to.be.an('array');
    });

   
})
describe('mapGenV2', ()=>{
    beforeEach(()=>{
        mapGen = new MapGenVTwo(100,100);
    });

    it('should already populate a 2D array with tiles once it has been created, that is 1/5 the value that was entered in', ()=>{
        const testMap = mapGen.getMap();
        expect(testMap).to.be.an('array').to.have.lengthOf(100/5);
        expect(testMap[0]).to.be.an('array').to.have.lengthOf(100/5);
    });
    it('should be populated with tiles', ()=>{
        const testMap = mapGen.getMap();
        expect(testMap[0][0].getTileInfo().x).to.be.a('number')
        expect(testMap[10][0].getTileInfo().y).to.be.a('number');
        expect(testMap[0][10].getTileInfo().type).to.be.a('string')
        expect(testMap[5][5].getTileInfo().type).to.equal('available');
    });
    it('should be populated with tiles that know their neighbors', ()=>{
        const testMap = mapGen.getMap();
        expect(testMap[0][0].getNeighbors());
        expect(testMap[0][0].getNeighbors().n).to.equal(null);
        expect(testMap[19][19].getNeighbors().e).to.equal(null);
        // console.log(testMap[0][0].getNeighbors())
        expect(testMap[10][10].getNeighbors().e.y).to.equal(11)
    });
    
    it('should let tiles keep track of neighbor changes', ()=>{
        const testMap = mapGen.getMap();
        const testTile = testMap[5][5];
        const testNeighbor = testMap[5][6];
        const preChangeNeighborType = testNeighbor.type;
        expect(testTile.getNeighbors().e.type).to.equal(preChangeNeighborType);
        testNeighbor.updateType('changed');
        expect(testTile.getNeighbors().e.type).to.equal('changed');
    })
});

describe('mapCompiler',()=>{
    beforeEach(()=>{
        mapGen = new MapGenVTwo(100,100);
    });
    it('should use high order functions inorder to allow for reusable code on individual tiles', ()=>{
        const testMap = mapGen.getMap();
        const mapCompiler = new MapCompiler(testMap);
        const testTile = testMap[5][5];
        expect(testTile.getTileInfo().type).to.be.a('string');
        expect(testTile.getTileInfo().type).to.equal('available');
        mapCompiler.manipulateThisTile(5, 5, (tile)=>{
            tile.updateType('changeMade');
        })
        expect(testTile.getTileInfo().type).to.equal('changeMade');

    });
    it('should handle an error if x and y are too large or too small for the table', ()=>{
        const testMap = mapGen.getMap();
        const mapCompiler = new MapCompiler(testMap);
        expect(mapCompiler.manipulateThisTile(100,100, ()=>{
            console.log('does nothing');
        })).to.equal(null);
    })

})