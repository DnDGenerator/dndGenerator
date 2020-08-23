/**
 * @desc Stores and keep tracks of each 5ft square
 * @constructor

 * @param {String} type = the type of tiles 'starting area' 'door' 'chamber' 'stairs' 'chamber'

 */
class Tile{
    constructor(type, x, y){
        this.type = type;
        this.x = x;
        this.y = y;
        this.neighbors = {
            n: '',
            e: '',
            s: '',
            w: ''
        };

        this.setNeightbors = this.setNeightbors.bind(this);
        this.getTileInfo = this.getTileInfo.bind(this);
        this.updateType = this.updateType.bind(this);
        this.getNeighbors = this.getNeighbors.bind(this);
    }
    /**
     * @desc sets an object to keep track of neighboring tiles
     * @param {Object} neighbors an object of the connecting tiles to the n.e.s.w
     * 
     * @return {Object} returns the tile object
     */
    setNeightbors(neighbors){
        this.neighbors = neighbors;
    }
    getNeighbors(){
        return this.neighbors;
    }

    /**
     * @desc returns an object that has the x,y, and type of tile this is
     * 
     * @return {Object} basic tile information
     */
    getTileInfo(){
        return{
            x: this.x,
            y: this.y,
            type: this.type
        }
    }
    /**
     * @desc update type to a new value as things are made after the inital build
     * 
     * @param {String} string that defines the new type such as passage or oddr
     * 
     * @return {Object} Object returns the updated object
     */
    updateType(type){
        this.type = type;
    }
}



module.exports = Tile;