const dice = require('./dice')

const Door = require('./dndDoor');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


class StartingLocation{
    constructor(map, maxX, maxY){
        this.startingCord = {x:0,y:0,farX:0,topY:0}
        this.maxWidth = maxX;
        this.maxHeight = maxY;
        this.map = map;
        this.startingArea = {
            shape:"",
            width:0,
            height:0,
            exitLocations:[],
            exitType:[],
            exits:[],
            numPassages:0,
            numDoors:0,
            doors:{}

        };
        const startingRoll = dice.roll(`1d10`).result;

        switch(startingRoll){
            case 1:
                this.startingArea.shape = "square";
                this.startingArea.width = 20/5;
                this.startingArea.height = 20/5;
                this.startingArea.numPassages += 4;
                this.startingArea.exitLocations = ["l","opp","r","same"];
                this.startingArea.exitType = ["passage","passage","passage","passage"];
                break;
            case 2:
                this.startingArea.shape = "square";
                this.startingArea.width = 20/5;
                this.startingArea.height = 20/5;
                this.startingArea.numPassages += 1;
                this.startingArea.numDoors += 2;
                this.startingArea.exitLocations = ["l", "r", "opp"];
                this.startingArea.exitType = ["door", "passage", "door"];
                break;
            case 3:
                this.startingArea.shape = "square";
                this.startingArea.width = 40/5;
                this.startingArea.height = 40/5;
                this.startingArea.numDoors += 3;
                this.startingArea.exitLocations = ["l","r","opp"];
                this.startingArea.exitType = ["door","door","door"];
                break;
            case 4:
                this.startingArea.shape = "rectangle";
                this.startingArea.width = 80/5;
                this.startingArea.height = 20/5;
                this.startingArea.numPassages += 2;
                this.startingArea.numDoors += 2;
                this.startingArea.exitLocations = ["l","opp","r","same"];
                this.startingArea.exitType = ["passage","door","passage", "door"];
                break;
            case 5:
                this.startingArea.shape = "rectangle";
                this.startingArea.width = 20/5;
                this.startingArea.height = 40/5;
                this.startingArea.numPassages += 4;
                this.startingArea.exitLocations = ["l","opp","r","same"];
                this.startingArea.exitType = ["passage","passage","passage","passage"];
                break;
            case 6:
            case 7:
            case 8:
                this.startingArea.shape = "square";
                this.startingArea.width = 20/5;
                this.startingArea.height = 20/5;
                this.startingArea.numPassages += 1;
                this.startingArea.numDoors += 3;
                this.startingArea.exitLocations = ["l","opp","r","same"];
                this.startingArea.exitType = ["door", "door", "passage", "door"];
                break;
            case 9:
            case 10:
                const options = ["l","opp","r","same"];
                this.startingArea.shape = "passage";
                this.startingArea.numPassages += 1;
                this.startingArea.width = 10/5;
                this.startingArea.height = 5/5;
                this.startingArea.exitLocations = [`${options[dice.roll(`1d${options.length}`).result - 1]}`]
                this.startingArea.exitType = ["passage"];
                break;
        }
        const startingX = dice.roll(`1d${this.maxWidth}`).result - 1;
        const startingY = dice.roll(`1d${this.maxHeight}`).result - 1;

        if(startingX + this.startingArea.width < this.maxWidth){
            this.startingCord.x = startingX;
            this.startingCord.farX = this.startingArea.width + startingX;;
        }else if(startingX + this.startingArea.width > this.maxWidth){
            this.startingCord.x = this.maxWidth - this.startingArea.width;
            this.startingCord.farX = this.maxWidth;
        }else{
            this.startingCord.x = startingX;
            this.startingCord.farX = startingX + this.startingArea.width;
        }
        if(startingY + this.startingArea.height < this.maxHeight){
            this.startingCord.y = startingY;
            this.startingCord.topY = this.startingArea.height +startingY;
        }else if(startingY + this.startingArea.height > this.maxHeight){
            this.startingCord.y = this.maxHeight - this.startingArea.height;
            this.startingCord.topY = this.maxHeight;
        }else{
            this.startingCord.y = startingY;
            this.startingCord.y = startingY + this.startingArea.height;
        }
        if(this.startingCord.x >= this.map.length - 1){
            this.startingCord.x += (this.map.length - 1 - this.startingCord.x);
        }if(this.startingCord.farX >= this.map.length - 1){
            this.startingCord.farX += (this.map.length - 1 - this.startingCord.farX);
        }if(this.startingCord.topY >= this.map.length - 1){
            this.startingCord.topY += (this.map.length - 1 - this.startingCord.topY);
        }if(this.startingCord.y >= this.map.length - 1){
            this.startingCord.y += (this.map.length - 1 - this.startingCord.y);
        }
        for(let x = this.startingCord.x; x < this.startingCord.farX; x++){
            for(let y = this.startingCord.y; y < this.startingCord.topY; y++){
                this.map[x][y] = this.map[x][y].updateType("R");
            }
        }
        for(let i = 0; i < this.startingArea.exitLocations.length; i++){
            const exitCord = {
                x:0,y:0
            }
            const decsion = this.startingArea.exitLocations[i];
            switch(decsion){
                case "opp":
                    exitCord.x = getRandomInt(this.startingCord.x, this.startingCord.farX);
                    exitCord.y = this.startingCord.y;
                    break;
                case "same":
                    exitCord.x = getRandomInt(this.startingCord.x, this.startingCord.farX);
                    exitCord.y = this.startingCord.topY - 1;
                    break;
                case "l":
                    exitCord.x = this.startingCord.x;
                    exitCord.y = getRandomInt(this.startingCord.y, this.startingCord.topY);
                    break;
                default:
                    exitCord.x = this.startingCord.farX - 1;
                    exitCord.y = getRandomInt(this.startingCord.y, this.startingCord.topY);
                    break;
            }
            if(exitCord.x === this.startingArea.exitLocations.length){
                exitCord.x -= 1;
            }
            if(exitCord.y === this.startingArea.exitLocations.length){
                exitCord.y -= 1;
            }
            if(exitCord.x >=0 && exitCord.x < this.map.length && exitCord.y >=0 && exitCord.y < this.map.length && this.map[exitCord.x][exitCord.y].getTileInfo().type === 'R'){
                this.map[exitCord.x][exitCord.y] = this.map[exitCord.x][exitCord.y].updateType(this.startingArea.exitType[i]);
                this.startingArea.exits.push(exitCord);
            }
        }
        
        this.getMapWithStartingLocation = this.getMapWithStartingLocation.bind(this);
    }
    getMapWithStartingLocation(){
        return this.map;
    }
    
}

module.exports = StartingLocation;

