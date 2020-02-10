const hoard = require('./hoardByChallenge');
const individual = require('./coinTreasureByChallenge');

module.exports = ({CR, lootType})=>{
    if(lootType === "hoard"){
        return hoard(CR);
    }else{
        return individual(CR);
    }
}