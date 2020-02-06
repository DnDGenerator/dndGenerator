const dice = require('./dice');


module.exports = (table)=>{
    const precentileResult = dice.roll(`1d100`).result;

    switch(table){
        case 'A':
                if(precentileResult < 51){
                    return 'Potion of healing';
                }else if(precentileResult < 61){
                    return 'Spell scroll (cantrip)';
                }else if (precentileResult < 71){
                    return 'Potion of climbing';
                }else if(precentileResult < 91){
                    return 'Spell scroll (1st level)';
                }else if(precentileResult < 95){
                    return 'Spell scroll (2nd level)';
                }else if(precentileResult < 99){
                    return 'Potion of greater healing';
                }else if(precentileResult === 99){
                    return 'Bag of holding';
                }else{
                    return 'Driftglobe';
                }
        case 'B':
            if(precentileResult < 16){
                return 'Potion of greater healing';
            }else if(precentileResult < 23){
                return 'Potion of fire breath';
            }else if(precentileResult < 30){
                return 'Potion of resistance';
            }else if(precentileResult < 35){
                return 'Ammunition, +1';
            }else if(precentileResult < 40){
                return 'Potion of animal friendship';
            }else if(precentileResult < 45){
                return 'Potion of hill giant strength';
            }else if(precentileResult < 50){
                return 'Potion of growth';
            }else if(precentileResult < 55){
                return 'Potion of water breathing';
            }else if(precentileResult < 60){
                return 'Spell scroll (2nd level)';
            }else if(precentileResult < 65){
                return 'Spell scroll (3rd leve l)';
            }else if(precentileResult < 68){
                return 'Bag of holding';
            }else if(precentileResult < 71){
                return "Keoghtom's ointment";
            }else if(precentileResult < 74){
                return "Oil of slipperiness";
            }else if(precentileResult < 76){
                return "Dust of disappearance";
            }else if(precentileResult < 78){
                return "Dust ·of dryness";
            }else if(precentileResult < 80){
                return "Dust of sneezing and choking";
            }else if(precentileResult < 82){
                return "Elemental gem";
            }else if(precentileResult < 84){
                return "Philter of love";
            }else if(precentileResult === 84){
                return "Alchemy jug";
            }else if(precentileResult === 85){
                return "Cap of water breathing";
            }else if(precentileResult === 86){
                return "Cloak of the manta ray";
            }else if(precentileResult === 87){
                return "Driftglobe";
            }else if(precentileResult === 88){
                return "Goggles of night";
            }else if(precentileResult === 89){
                return "Helm of comprehending languages";
            }else if(precentileResult === 90){
                return "Immovable rod";
            }else if(precentileResult === 91){
                return "Lantern of revealing";
            }else if(precentileResult === 92){
                return "Mariner's armor";
            }else if(precentileResult === 93){
                return "Mithral armor";
            }else if(precentileResult === 94){
                return "Potion of poison";
            }else if(precentileResult === 95){
                return "Ring of swimming";
            }else if(precentileResult === 96){
                return "Robe of useful items";
            }else if(precentileResult === 97){
                return "Rope of climbing";
            }else if(precentileResult === 98){
                return "Saddle of the cavalier";
            }else if(precentileResult === 99){
                return "Wand of magic detection";
            }else{
                return "Wand of secrets";
            }
        case 'C':
            if(precentileResult < 16){
                return 'Potion of superior healing';
            }else if(precentileResult < 23){
                return 'Spell scroll (4th level)';
            }else if(precentileResult < 28){
                return 'Ammunition, +2';
            }else if(precentileResult < 33){
                return 'Potion of clairvoyance';
            }else if(precentileResult < 38){
                return 'Potion of diminution';
            }else if(precentileResult < 43){
                return 'Potion of gaseous form';
            }else if(precentileResult < 48){
                return 'Potion of frost giant strength';
            }else if(precentileResult < 53){
                return 'Potion of stone giant strength';
            }else if(precentileResult < 58){
                return 'Potion of heroism';
            }else if(precentileResult < 63){
                return 'Potion of invu lnerability';
            }else if(precentileResult < 68){
                return 'Potion of mind reading';
            }else if(precentileResult < 73){
                return 'Spell scroll (5th level)';
            }else if(precentileResult < 76){
                return 'Elixir of health';
            }else if(precentileResult < 79){
                return 'Oil of etherealness';
            }else if(precentileResult < 82){
                return 'Potion of fire giant strength';
            }else if(precentileResult < 85){
                return "Quaal's feather token";
            }else if(precentileResult < 88){
                return "Scroll of protection";
            }else if(precentileResult < 90){
                return "Bag of beans";
            }else if(precentileResult < 92){
                return "Bead of force";
            }else if(precentileResult === 92){
                return "Chime of opening";
            }else if(precentileResult === 93){
                return "Decanter of endless water";
            }else if(precentileResult === 94){
                return "Eyes of minute seeing";
            }else if(precentileResult === 95){
                return "Folding boat";
            }else if(precentileResult === 96){
                return "Heward's handy haversack";
            }else if(precentileResult === 97){
                return "Horseshoes of speed";
            }else if(precentileResult === 98){
                return "Necklace of fireballs";
            }else if(precentileResult === 99){
                return "Periapt of health"
            }else{
                return "Sending stones"
            }
        case 'D':
            if(precentileResult < 21){
                return "Potion of supreme healing";
            }else if(precentileResult < 31){
                return "Potion of invisibility";
            }else if(precentileResult < 41){
                return "Potion of speed";
            }else if(precentileResult < 51){
                return "Spell scroll (6th level)";
            }else if(precentileResult < 58){
                return "Spell scroll (7th level)";
            }else if(precentileResult < 63){
                return "Ammunition, +3";
            }else if(precentileResult < 68){
                return "Oil of sharpness";
            }else if(precentileResult < 73){
                return "Potion of fl ying";
            }else if(precentileResult < 78){
                return "Potion of cloud giant strength";
            }else if(precentileResult < 83){
                return "Potion of longevity";
            }else if(precentileResult < 88){
                return "Potion of vitality";
            }else if(precentileResult < 93){
                return "Spell scroll (8th level)";
            }else if(precentileResult < 96){
                return "Horseshoes of a zephyr";
            }else if(precentileResult < 99){
                return "Nolzur's marvelous pigments";
            }else if(precentileResult === 99){
                return "Bag of devouring";
            }else{
                return "Portable hole";
            }
        case 'E':
            if(precentileResult < 31){
                return "Spell scroll (8th level)";
            }else if(precentileResult < 56){
                return "Potion of storm giant strength";
            }else if(precentileResult < 71){
                return "Potion of supreme healing";
            }else if(precentileResult < 86){
                return "Spell scroll (9th level)"
            }else if(precentileResult < 94){
                return "Universal solvent";
            }else if(precentileResult < 99){
                return "Arrow of slaying";
            }else{
                return "Sovereign glue";
            }
        case 'F':
        case 'G':
        case 'H':
        case 'I':
        default:
            console.log(
                'invalid table'
            )
    }
}