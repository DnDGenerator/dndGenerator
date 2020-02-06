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
            if(precentileResult < 16){
                return "Weapon, +1";
            }else if(precentileResult < 19){
                return "Shield,+ 1";
            }else if(precentileResult < 22){
                return "Sentinel shield"
            }else if(precentileResult < 24){
                return "Amulet of proof against detection and location";
            }else if(precentileResult < 26){
                return "Boots of elvenkind";
            }else if(precentileResult < 28){
                return "Boots of striding and springing";
            }else if(precentileResult < 30){
                return "Bracers of archery";
            }else if(precentileResult < 32){    
                return "Brooch of shielding";
            }else if(precentileResult < 34){
                return "Broom of flying";
            }else if(precentileResult < 36){
                return "Cloak of elvenkind";
            }else if(precentileResult < 38){
                return "Cloak of protection";
            }else if(precentileResult < 40){
                return "Gauntlets of ogre power";
            }else if(precentileResult < 42){
                return "Hat of disguise";
            }else if(precentileResult < 44){
                return "Javelin of lightning";
            }else if(precentileResult < 46){
                return "Pearl of power";
            }else if(precentileResult < 48){
                return "Rod of the pact keeper, +1";
            }else if(precentileResult < 50){
                return "Slippers of spider climbing";
            }else if(precentileResult < 52){
                return "Staff of the adder";
            }else if(precentileResult < 54){
                return "Staff of the python";
            }else if(precentileResult < 56){
                return "Sword of vengeance";
            }else if(precentileResult < 58){
                return "Trident of fish command";
            }else if(precentileResult < 60){
                return "Wand of magic missiles";
            }else if(precentileResult < 62){
                return "Wand of the war mage, +1";
            }else if(precentileResult < 64){
                return "Wand of web";
            }else if(precentileResult < 66){
                return "Weapon of warning";
            }else if(precentileResult === 66){
                return "Adamantine armor (chain mail)";
            }else if(precentileResult === 67){
                return "Adamantine armor (chain shirt)";
            }else if(precentileResult === 68){
                return "Adamantine armor (scale mail)";
            }else if(precentileResult === 69){
                return "Bag of tricks (gray)";
            }else if(precentileResult === 70){
                return "Bag of tricks (rust)";
            }else if(precentileResult === 71){
                return "Bag of tricks (tan)";
            }else if(precentileResult === 72){
                return "Boots of the winterlands";
            }else if(precentileResult === 73){
                return "Circlet of blasting";
            }else if(precentileResult === 74){
                return "Deck of illusions";
            }else if(precentileResult === 75){
                return "Eversmoking bottle";
            }else if(precentileResult === 76){
                return "Eyes of charming";
            }else if(precentileResult === 77){
                return "Eyes of the eagle";
            }else if(precentileResult === 78){
                return "Figurine of wondrous power (silver raven)";
            }else if(precentileResult === 79){
                return "Gem of brightness";
            }else if(precentileResult === 80){
                return "Gloves of missile snaring";
            }else if(precentileResult === 81){
                return "Gloves of swimming and climbing";
            }else if(precentileResult === 82){
                return "Gloves of thievery";
            }else if(precentileResult === 83){
                return "Headband of intellect";
            }else if(precentileResult === 84){
                return "Helm of telepathy";
            }else if(precentileResult === 85){
                return "Instrument of the bards (Doss lute)";
            }else if(precentileResult === 86){
                return "Instrument of the bards (Fochlucan bandore)";
            }else if(precentileResult === 87){
                return "Instrument of the bards (Mac-Fuimidh cittern)";
            }else if(precentileResult === 88){
                return "Medallion of thoughts";
            }else if(precentileResult === 89){
                return "Necklace of adaptation";
            }else if(precentileResult === 90){
                return "Periapt of wound closure";
            }else if(precentileResult === 91){
                return "Pipes of haunting";
            }else if(precentileResult === 92){
                return "Pipes of the sewers";
            }else if(precentileResult === 93){
                return "Ring of jumping";
            }else if(precentileResult === 94){ 
                return "Ring of mind shielding";
            }else if(precentileResult === 95){
                return "Ring of warmth";
            }else if(precentileResult === 96){
                return "Ring of water walking";
            }else if(precentileResult === 97){
                return "Quiver of Ehlonna";
            }else if(precentileResult === 98){
                return "Stone of good luck";
            }else if(precentileResult === 99){
                return "Wind fan";
            }else{
                return "Winged boots";
            }
        case 'G':
            if(precentileResult < 12){
                return "Weapon, +2";
            }else if(precentileResult < 15){

            }else if(precentileResult === 15){

            }else if(precentileResult === 16){

            }else if(precentileResult === 17){

            }else if(precentileResult === 18){

            }else if(precentileResult === 19){

            }else if(precentileResult === 20){

            }else if(precentileResult === 21){

            }else if(precentileResult === 22){

            }else if(precentileResult === 23){

            }else if(precentileResult === 24){

            }else if(precentileResult === 25){

            }else if(precentileResult === 26){

            }else if(precentileResult === 27){

            }else if(precentileResult === 28){

            }else if(precentileResult === 29){

            }else if(precentileResult === 30){

            }else if(precentileResult === 31){

            }else if(precentileResult === 32){

            }else if(precentileResult === 33){

            }else if(precentileResult === 34){

            }else if(precentileResult === 35){

            }else if(precentileResult === 36){

            }else if(precentileResult === 37){

            }else if(precentileResult === 38){

            }else if(precentileResult === 39){

            }else if(precentileResult === 40){

            }else if(precentileResult === 41){

            }else if(precentileResult === 42){

            }else if(precentileResult === 43){

            }else if(precentileResult === 44){

            }else if(precentileResult === 45){

            }else if(precentileResult === 46){

            }else if(precentileResult === 47){

            }else if(precentileResult === 48){

            }else if(precentileResult === 49){

            }else if(precentileResult === 50){

            }else if(precentileResult === 51){

            }else if(precentileResult === 52){

            }else if(precentileResult === 53){

            }else if(precentileResult === 54){

            }else if(precentileResult === 55){

            }else if(precentileResult === 56){

            }else if(precentileResult === 57){

            }else if(precentileResult === 58){

            }else if(precentileResult === 59){

            }else if(precentileResult === 60){

            }else if(precentileResult === 61){

            }else if(precentileResult === 62){

            }else if(precentileResult === 63){

            }else if(precentileResult === 64){

            }else if(precentileResult === 65){

            }else if(precentileResult === 66){

            }else if(precentileResult === 67){

            }else if(precentileResult === 68){

            }else if(precentileResult === 69){

            }else if(precentileResult === 70){

            }else if(precentileResult === 71){

            }else if(precentileResult === 72){

            }else if(precentileResult === 73){

            }else if(precentileResult === 74){

            }else if(precentileResult === 75){

            }else if(precentileResult === 76){

            }else if(precentileResult === 77){

            }else if(precentileResult === 78){

            }else if(precentileResult === 79){

            }else if(precentileResult === 80){

            }else if(precentileResult === 81){

            }else if(precentileResult === 82){

            }else if(precentileResult === 83){

            }else if(precentileResult === 84){

            }else if(precentileResult === 85){

            }else if(precentileResult === 86){

            }else if(precentileResult === 87){

            }else if(precentileResult === 88){

            }else if(precentileResult === 89){

            }else if(precentileResult === 90){

            }else if(precentileResult === 91){

            }else if(precentileResult === 92){

            }else if(precentileResult === 93){

            }else if(precentileResult === 94){

            }else if(precentileResult === 95){

            }else if(precentileResult === 96){

            }else if(precentileResult === 97){

            }else if(precentileResult === 98){

            }else if(precentileResult === 99){

            }else{

            }
        case 'H':
        case 'I':
        default:
            console.log(
                'invalid table'
            )
    }
}