class StartingRoom{
    constructor(){
        this.width = 2;
        this.length = 2;

        this.buildRoom = this.buildRoom.bind(this);
    }
    buildRoom(startTile){
        startTile.updateType('starting room');
    }
}

module.exports = StartingRoom;