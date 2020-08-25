const dice = require('../dice');
class StartingRoom{
    constructor(){
        this.width = 2;
        this.length = 2;

        const startingRoll = dice.roll(`1d10`).result;
        switch(startingRoll){
            case 1:
                this.width = 20/5;
                this.length = 20/5;
                break;
            case 2:
                this.width = 20/5;
                this.length = 20/5;
                break;
            case 3:
                this.width = 40/5;
                this.length = 40/5;
                break;
            case 4:
                this.width = 80/5;
                this.length = 20/5;
                break;
            case 5:
                this.width = 20/5;
                this.length = 40/5;
                break;
            case 6:
            case 7:
            case 8:
                this.width = 20/5;
                this.length = 20/5;
                break;
            case 9:
            case 10:
                this.width = 10/5;
                this.length = 5/5;
                break;
        }

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