const dice = require('./dice');

class Chamber{
    constructor(){
        this.chamberShape = '';
        this.width = 0;
        this.height = 0;
        this.diameter = 0;
        const chamberRoll = dice.roll(`1d20`);
        const chamberExitRoll = dice.roll(`1d20`);
        let chamberSize = '';
        let numExits = 0;
        this.exitLocAndType = [];
        
        if(chamberRoll < 3){
            this.chamberShape = 'square';
            chamberSize = 'normal';
            this.width = 20;
            this.height = 20;
        }else if(chamberRoll < 5){
            this.chamberShape = 'square';
            chamberSize = 'normal';
            this.width = 30;
            this.height = 30;
        }else if(chamberRoll < 7){
            this.chamberShape = 'square';
            chamberSize = 'normal';
            this.width = 40;
            this.height = 40;
        }else if(chamberRoll < 10){
            this.chamberShape = "rectangle";
            chamberSize = "normal";
            this.width = 20;
            this.height = 30;
        }else if(chamberRoll < 13){
            this.chamberShape = "rectangle";
            chamberSize = "normal";
            this.width = 30;
            this.height = 40;
        }else if(chamberRoll < 15){
            this.chamberShape = "rectangle";
            chamberSize = "large";
            this.width = 40;
            this.height = 50;
        }else if(chamberRoll === 15){
            this.chamberShape = "rectangle";
            chamberSize = "large";
            this.width = 50;
            this.height = 80;
        }else if(chamberRoll === 16){
            this.chamberShape = "circle";
            chamberSize = "normal";
            this.diameter = 30;
        }else if(chamberRoll === 17){
            this.chamberShape = "circle";
            chamberSize = "large";
            this.diameter = 50;
        }else if(chamberRoll === 18){
            this.chamberShape = "octagon";
            chamberSize = "large";
            this.width = 40;
            this.height = 40;
        }else if(chamberRoll === 19){
            this.chamberShape = "octagon";
            chamberSize = "large";
            this.width = 60;
            this.height = 60;
        }else{
            this.chamberShape = "trapezoid";
            chamberSize = "large";
            this.width = 40;
            this.height = 60;
        }
        if(chamberSize === 'normal'){
            if(chamberExitRoll < 6){
                numExits = 0;                                
            }else if(chamberExitRoll < 12){
                numExits = 1;                
            }else if(chamberExitRoll < 16){
                numExits = 2;
            }else if(chamberExitRoll < 19){
                numExits = 3;                                
            }else{
                numExits = 4;
            }
        }else{
            if(chamberExitRoll < 4){
                numExits = 0                
            }else if(chamberExitRoll < 9){
                numExits = 1;                
            }else if(chamberExitRoll < 14){
                numExits = 2;                
            }else if(chamberExitRoll < 18){
                numExits = 3;
            }else if(chamberExitRoll === 18){
                numExits = 4;
            }else if(chamberExitRoll === 19){
                numExits = 5;
            }else{
                numExits = 6;
            }
        }
        for(let i = 0; i < numExits; i++){
            let exitLocRoll = dice.roll(`1d20`).result;
            let exitTypeRoll = dice.roll(`1d20`).result;
            this.exitLocAndType[i] = {};
            if(exitTypeRoll < 11){
                this.exitLocAndType[i].exitType = "door";
                if(exitLocRoll < 8){
                    this.exitLocAndType[i].loc = "opp";
                }else if(exitLocRoll < 13){
                    this.exitLocAndType[i].loc = "l";
                }else if(exitLocRoll < 18){
                    this.exitLocAndType[i].loc = "r";
                }else{
                    this.exitLocAndType[i].loc = "same";
                }
            }else{
                this.exitLocAndType[i].exitType = "passage"
                if(exitLocRoll < 8){
                    this.exitLocAndType[i].loc = "opp";
                }else if(exitLocRoll < 13){
                    this.exitLocAndType[i].loc = "l";
                }else if(exitLocRoll < 18){
                    this.exitLocAndType[i].loc = "r";
                }else{
                    this.exitLocAndType[i].loc = "same";
                }
            }
        }
        this.getChamberDimentions = this.getChamberDimentions.bind(this);
    }
    getChamberDimentions(){
        return {
            width:this.width, 
            height:this.height, 
            diameter:this.diameter, 
            shape:this.chamberShape, 
            exitLocAndTypeArray:this.exitLocAndType, 
            numberOfConnections:this.exitLocAndType.length};
    }
}


module.exports = Chamber;