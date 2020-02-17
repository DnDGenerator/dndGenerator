const dice = require('./dice');

class Door{
    constructor(){
        const typeRoll = dice.roll(`1d20`).result;
        const beyondRoll = dice.roll(`1d20`).result;
        this.type = '';
        this.beyond = '';
        if(typeRoll < 11){
            this.type = 'wooden';
        }else if(typeRoll < 13){
            this.type = 'wooden, barred or locked'
        }else if(typeRoll === 13){
            this.type = 'stone';
        }else if(typeRoll === 14){
            this.type = 'stone, barred or locked';
        }else if(typeRoll === 15){
            this.type = 'iron';
        }else if(typeRoll === 16){
            this.type = 'iron, barred or locked';
        }else if(typeRoll === 17){
            this.type = 'portcullis';
        }else if(typeRoll === 18){
            this.type = 'portcullis, locked in place';
        }else if(typeRoll === 19){
            this.type = 'secret door';
        }else{
            this.type = 'secret door, barred or locked';
        }
        if(beyondRoll < 3){
            this.beyond = "passage"
        }else if(beyondRoll < 9){
            this.beyond = "passage"
        }else if(beyondRoll < 19){
            this.beyond = "chamber"
        }
        // else if(beyondRoll === 19){
        //     this.beyond = "stairs"
        // }else{
        //     this.beyond = "trap"
        // }
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