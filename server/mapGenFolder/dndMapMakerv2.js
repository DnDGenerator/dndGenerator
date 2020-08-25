const Tile = require('./tile');

class MapGen{
    constructor(x,y){
        this.x = x/5;
        this.y = y/5;
        this.fiveFootTileMap = [];
        for(let i = 0; i < this.x; i++){
            this.fiveFootTileMap[i] = [];
            for(let j = 0; j < this.y; j++){
                this.fiveFootTileMap[i][j] = 'needs a tile';
            };
        };
        this.fiveFootTileMap = this.fiveFootTileMap.map((theYs, x)=>{
            return theYs.map((notUsed, y)=>{
                const tile = new Tile('available', x, y);
                return tile;
            })
        });
        this.fiveFootTileMap.forEach((theYs, x)=>{
            theYs.forEach((tile, y)=>{
                const n = (x-1 < 0);
                const e = (y+1 >= this.y);
                const s = (x+1 >= this.x);
                const w = (y-1 < 0);
                const neighbors = {
                    n: n ? null : this.fiveFootTileMap[x-1][y],
                    e: e ? null : this.fiveFootTileMap[x][y+1],
                    s: s ? null : this.fiveFootTileMap[x+1][y],
                    w: w ? null : this.fiveFootTileMap[x][y-1],
                };
                tile.setNeightbors(neighbors);
            });
        });

        this.getMap = this.getMap.bind(this);
    }
    getMap(){
        return this.fiveFootTileMap;
    }
    
}

module.exports = MapGen;