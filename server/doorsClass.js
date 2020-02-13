const dice = require('./dice');

class Door{
    constructor(){
        this.typeRoll = dice.roll(`1d20`).result;
        this.beyondRoll = dice.roll(`1d20`).result;
        this.type = '';
        this.beyond = '';
        if(this.typeRoll < 11){
            this.type = 'wooden';
        }else if(this.typeRoll < 13){
            this.type = 'wooden, barred or locked'
        }else if(this.typeRoll === 13){
            this.type = 'stone';
        }else if(this.typeRoll === 14){
            this.type = 'stone, barred or locked';
        }else if(this.typeRoll === 15){
            this.type = 'iron';
        }else if(this.typeRoll === 16){
            this.type = 'iron, barred or locked';
        }else if(this.typeRoll === 17){
            this.type = 'portcullis';
        }else if(this.typeRoll === 18){
            this.type = 'portcullis, locked in place';
        }else if(this.typeRoll === 19){
            this,type = 'secret door';
        }else{
            this.type = 'secret door, barred or locked';
        }
        if(this.beyondRoll < 3){
            this.beyond = "Passage extending 10ft., then T intersection extending 10ft. to the right and left"
        }else if(this.beyondRoll < 9){
            this.beyond = "Passage 20 ft. straight ahead"
        }else if(this.beyondRoll < 19){
            this.beyond = "Chamber (roll on the Chamber table)"
        }else if(this.beyondRoll === 19){
            this.beyond = "Stairs (roll on the Stairs table)"
        }else{
            this.beyond = "False door with trap"
        }
        this.getType = this.getType.bind(this);
        this.getBeyond = this.getBeyond.bind(this);
    }
    getType(){
        return this.type;
    }
    getBeyond(){
        return this.beyond;
    }
}

module.exports = Door;