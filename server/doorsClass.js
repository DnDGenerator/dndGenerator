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
            
        }
    }
}

module.exports = Door;