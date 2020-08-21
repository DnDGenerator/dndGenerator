const dice = require('./dice');
module.exports = ()=>{
    const statBlock= {
        'str':7,
        'dex':7,
        'con':7,
        'int':7,
        'wis':7,
        'cha':7
    };
    let bank = 27;
    
    const pointBuyChart= [
        {'8':0},
        {'9':1},
        {'10':2},
        {'11':3},
        {'12':4},
        {'13':5},
        {'14':7},
        {'15':9}
    ];
    
    while(bank > 0 || bank < 0){
        bank = 27;
        for (let attribute in statBlock){
            const pointBuyObj = pointBuyChart[dice.roll(`1d${pointBuyChart.length}`).result - 1];
            
            const key = Number(Object.keys(pointBuyObj)[0]);
            statBlock[attribute] = key;
            bank -= pointBuyObj[key];
        }
    }
    return statBlock;    
}

