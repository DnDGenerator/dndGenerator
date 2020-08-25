const dice = require('../dice');
const roller = ()=>{
    try{
    var str = dice.roll('2d6+6').result;
    var dex = dice.roll('2d6+6').result;
    var con = dice.roll('2d6+6').result;
    var int = dice.roll('2d6+6').result;
    var wis = dice.roll('2d6+6').result;
    var cha = dice.roll('2d6+6').result;
    }
    catch{
        console.log('oops we made a mess in generator')
    }
    return {
        str,dex,con,int,wis,cha,
    }
}


module.exports = roller