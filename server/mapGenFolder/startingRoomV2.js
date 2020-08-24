class StartingRoom{
    constructor(){
        this.width = 2;
        this.length = 2;

        this.getWidth = this.getWidth.bind(this);
        this.getLength = this.getLength.bind(this);
        this.buildRoom = this.buildRoom.bind(this);
    }
    getWidth(){
        return this.width;
    }
    getLength(){
        return this.length;
    }
    buildRoom(startTile){
        startTile.updateType('starting room');
        
    }
}

module.exports = StartingRoom;