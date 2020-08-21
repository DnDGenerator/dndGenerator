const dice = require('./dice');

module.exports = ()=>{
    try{
        str = dice.roll('4d6b3').calculations[0];
        dex = dice.roll('4d6b3').calculations[0];
        con = dice.roll('4d6b3').calculations[0];
        int = dice.roll('4d6b3').calculations[0];
        wis = dice.roll('4d6b3').calculations[0];
        cha = dice.roll('4d6b3').calculations[0];
    }
    catch{
        console.log('opps we broke at classic generator');
    }
    return {str,dex,con,int,wis,cha}
}