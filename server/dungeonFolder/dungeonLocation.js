const dice = require('../dice');

module.exports = ()=>{
    const exoticLocations = [
        "Among the branches of a tree",
        "Around a geyser",
        "Behind a waterfal",
        "Buried in an avalanche",
        "Buried in a sandstorm",
        "Buried in volcanic ash",
        "Castle or structure sunken in a swamp",
        "Castle or structure at the bottom of a sinkhole",
        "Floating on the sea",
        "In a meteorite",
        "On a demiplane or in a pocket dimension",
        "In an area devastated by a magical catastrophe",
        "On a cloud",
        "In the Feywild",
        "In the Shadowfell",
        "On an island in an underground sea",
        "In a volcano",
        "On the back of a Gargantuan living creature",
        "Sealed inside a magical dome of force",
        "Inside a Mordenkainen's magnificent mansion"
    ];
    const precentileRoll = dice.roll(`1d100`).result;

    if(precentileRoll < 5){
        return "A building in a city";
    }else if(precentileRoll < 9){
        return "Catacombs or sewers beneath a city";
    }else if(precentileRoll < 13){
        return "Beneath a farmhouse";
    }else if(precentileRoll < 17){
        return "Beneath a graveyard";
    }else if(precentileRoll < 23){
        return "Beneath a ruined castle";
    }else if(precentileRoll < 27){
        return "Beneath a ruined city";
    }else if(precentileRoll < 31){
        return "Beneath a temple";
    }else if(precentileRoll < 35){
        return "In a chasm";
    }else if(precentileRoll < 39){
        return "In a cliff face";
    }else if(precentileRoll < 43){
        return "In a desert";
    }else if(precentileRoll < 47){
        return "In a forest";
    }else if(precentileRoll < 51){
        return "In a glacier";
    }else if(precentileRoll < 55){
        return "In a glacier";
    }else if(precentileRoll < 59){
        return "In a jungle";
    }else if(precentileRoll < 63){
        return "In a mountain pass";
    }else if(precentileRoll < 67){
        return "In a swamp";
    }else if(precentileRoll < 71){
        return "Beneath or on top of a mesa";
    }else if(precentileRoll < 75){
        return "In sea caves";
    }else if(precentileRoll < 79){
        return "In several connected mesas";
    }else if(precentileRoll < 83){
        return "On a mountain peak";
    }else if(precentileRoll < 87){
        return "On a promontory";
    }else if(precentileRoll < 91){
        return "On an island";
    }else if(precentileRoll < 96){
        return "Underwater";
    }else{
        return exoticLocations[dice.roll(`1d${exoticLocations.length}`).result - 1];
    }
}