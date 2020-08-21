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
                return 'Potion of invulnerability';
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
                const whichFigurine = dice.roll(`1d8`).result;
                const figurineOfPower = " figurine of wondrous power";
                if(whichFigurine === 1){
                    return "Bronze griffon" + figurineOfPower;
                }else if(whichFigurine === 2){
                    return "Ebon fly" + figurineOfPower;
                }else if(whichFigurine === 3){
                    return "Golden lions" + figurineOfPower;
                }else if(whichFigurine === 4){
                    return "Ivory goats" + figurineOfPower;
                }else if(whichFigurine === 5){
                    return "Marble elephant" + figurineOfPower;
                }else if(whichFigurine < 8){
                    return "Onyx dog" + figurineOfPower;
                }else{
                    return "Serpentine Owl" + figurineOfPower;
                }

            }else if(precentileResult === 15){
                return "Adamantine armor (breastplate)";
            }else if(precentileResult === 16){
                return "Adamantine armor (splint)";
            }else if(precentileResult === 17){
                return "Amulet of health";
            }else if(precentileResult === 18){
                return "Armor of vulnerability";
            }else if(precentileResult === 19){
                return "Arrow-catching shield";
            }else if(precentileResult === 20){
                return "Belt of dwarvenkind";
            }else if(precentileResult === 21){
                return "Belt of hill giant strength";
            }else if(precentileResult === 22){
                return "Berserker axe";
            }else if(precentileResult === 23){
                return "Boots of levitation";
            }else if(precentileResult === 24){
                return "Boots of speed";
            }else if(precentileResult === 25){
                return "Bowl of commanding water elementals";
            }else if(precentileResult === 26){
                return "Bracers of defense";
            }else if(precentileResult === 27){
                return "Brazier of commanding fire elementals";
            }else if(precentileResult === 28){
                return "Cape of the mountebank";
            }else if(precentileResult === 29){
                return "Censer of controlling air elementals";
            }else if(precentileResult === 30){
                return "Armor, +1 chain mail";
            }else if(precentileResult === 31){
                return "Armor of resistance (chain mail)";
            }else if(precentileResult === 32){
                return "Armor,+ 1 chain shirt";
            }else if(precentileResult === 33){
                return "Armor of resistance (chain shirt)";
            }else if(precentileResult === 34){
                return "Cloak of displacement";
            }else if(precentileResult === 35){
                return "Cloak of the bat";
            }else if(precentileResult === 36){
                return "Cube afforce";
            }else if(precentileResult === 37){
                return "Daern's instant fortress";
            }else if(precentileResult === 38){
                return "Dagger of venom";
            }else if(precentileResult === 39){
                return "Dimensional shackles";
            }else if(precentileResult === 40){
                return "Dragon slayer";
            }else if(precentileResult === 41){
                return "Elven chain";
            }else if(precentileResult === 42){
                return "Flame tongue";
            }else if(precentileResult === 43){
                return "Gem of seeing";
            }else if(precentileResult === 44){
                return "Giant slayer";
            }else if(precentileResult === 45){
                return "Glamoured studded leather";
            }else if(precentileResult === 46){
                return "Helm of teleportation";
            }else if(precentileResult === 47){
                return "Horn of blasting";
            }else if(precentileResult === 48){
                return "Horn of Valhalla (silver or brass)";
            }else if(precentileResult === 49){
                return "Instrument of the bards (Canaith mandolin)";
            }else if(precentileResult === 50){
                return "Instrument ofthe bards (Cii lyre)";
            }else if(precentileResult === 51){
                return "loun stone (awareness)";
            }else if(precentileResult === 52){
                return "loun stone (protection)";
            }else if(precentileResult === 53){
                return "loun stone (reserve)";
            }else if(precentileResult === 54){
                return "loun stone (sustenance)";
            }else if(precentileResult === 55){
                return "Iron bands of Bilarro ";
            }else if(precentileResult === 56){
                return "Armor, + 1 leather";
            }else if(precentileResult === 57){
                return "Armor of resistance (leather)";
            }else if(precentileResult === 58){ 
                return "Mace of disruption";
            }else if(precentileResult === 59){
                return "Mace of smiting";
            }else if(precentileResult === 60){
                return "Mace of terror";
            }else if(precentileResult === 61){
                return "Mantle of spell resistance";
            }else if(precentileResult === 62){
                return "Necklace of prayer beads";
            }else if(precentileResult === 63){
                return "Periapt of proof against poison";
            }else if(precentileResult === 64){
                return "Ring of animal influence";
            }else if(precentileResult === 65){
                return "Ring of evasion";
            }else if(precentileResult === 66){
                return "Ring of feather falling";
            }else if(precentileResult === 67){
                return "Ring of free action";
            }else if(precentileResult === 68){
                return "Ring of protection";
            }else if(precentileResult === 69){
                return "Ring of resistance";
            }else if(precentileResult === 70){
                return "Ring of spell storing";
            }else if(precentileResult === 71){
                return "Ring of the ram";
            }else if(precentileResult === 72){
                return "Ring of X-ray vision";
            }else if(precentileResult === 73){
                return "Robe of eyes";
            }else if(precentileResult === 74){
                return "Rod of rulership";
            }else if(precentileResult === 75){
                return "Rod of the pact keeper, +2";
            }else if(precentileResult === 76){
                return "Rope of entanglement";
            }else if(precentileResult === 77){
                return "Armor, +1 scale mail";
            }else if(precentileResult === 78){
                return "Armor of resistance (scale mail)";
            }else if(precentileResult === 79){
                return "Shield, +2";
            }else if(precentileResult === 80){
                return "Shield of missile attraction";
            }else if(precentileResult === 81){
                return "Staff of charming";
            }else if(precentileResult === 82){
                return "Staff of healing";
            }else if(precentileResult === 83){
                return "Staff of swarming insects";
            }else if(precentileResult === 84){
                return "Staff of the woodlands";
            }else if(precentileResult === 85){
                return "Staff of withering";
            }else if(precentileResult === 86){
                return "Stone of controlling earth elementals";
            }else if(precentileResult === 87){
                return "Sun blade";
            }else if(precentileResult === 88){
                return "Sword of life stealing";
            }else if(precentileResult === 89){
                return "Sword of wounding";
            }else if(precentileResult === 90){
                return "Tentacle rod";
            }else if(precentileResult === 91){
                return "Vicious weapon";
            }else if(precentileResult === 92){
                return "Wand of binding";
            }else if(precentileResult === 93){
                return "Wand of enemy detection";
            }else if(precentileResult === 94){
                return "Wand of fear";
            }else if(precentileResult === 95){
                return "Wand of fireballs";
            }else if(precentileResult === 96){
                return "Wand of lightning bolts";
            }else if(precentileResult === 97){
                return "Wand of paralysis";
            }else if(precentileResult === 98){
                return "Wand of the war mage, +2";
            }else if(precentileResult === 99){
                return "Wand of wonder";
            }else{
                return "Wings of flying"
            }
        case 'H':
            if(precentileResult < 11){
                return "Weapon, +3";
            }else if(precentileResult < 13){
                return "Amulet of the planes";
            }else if(precentileResult < 15){
                return "Carpet of flying";
            }else if(precentileResult < 17){
                return "Crystal ball (very rare version)";
            }else if(precentileResult < 19){
                return "Ring of regeneration";
            }else if(precentileResult < 21){
                return "Ring of shooting stars";
            }else if(precentileResult < 23){
                return "Ring of telekinesis";
            }else if(precentileResult < 25){
                return "Robe of scintillating colors";
            }else if(precentileResult < 27){
                return "Robe of stars";
            }else if(precentileResult < 29){
                return "Rod of absorption";
            }else if(precentileResult < 31){
                return "Rod of alertness";
            }else if(precentileResult < 33){
                return "Rod of security";
            }else if(precentileResult < 35){
                return "Rod of the pact keeper, +3";
            }else if(precentileResult < 37){
                return "Scimitar of speed";
            }else if(precentileResult < 39){
                return "Shield, +3";
            }else if(precentileResult < 41){
                return "Staff of fire";
            }else if(precentileResult < 43){
                return "Staff of frost";
            }else if(precentileResult < 45){
                return "Staff of power";
            }else if(precentileResult < 47){
                return "Staff of striking";
            }else if(precentileResult < 49){
                return "Staff of thunder and lightning";
            }else if(precentileResult < 51){
                return "Sword of sharpness";
            }else if(precentileResult < 53){
                return "Wand of polymorph";
            }else if(precentileResult < 55){
                return "Wand of the war mage, +3";
            }else if(precentileResult === 55){
                return "Adamantine armor (half plate)";
            }else if(precentileResult === 56){
                return "Adamantine armor (plate)";
            }else if(precentileResult === 57){
                return "Animated shield";
            }else if(precentileResult === 58){
                return "Belt of fire giant strength";
            }else if(precentileResult === 59){
                return "Belt of frost (or stone) giant strength";
            }else if(precentileResult === 60){
                return "Armor, + 1 breastplate";
            }else if(precentileResult === 61){
                return "Armor of resistance (breastplate)";
            }else if(precentileResult === 62){
                return "Candle of invocation";
            }else if(precentileResult === 63){
                return "Armor, +2 chain mail";
            }else if(precentileResult === 64){
                return "Armor, +2 chain shirt";
            }else if(precentileResult === 65){
                return "Cloak of arachnida";
            }else if(precentileResult === 66){
                return "Dancing sword";
            }else if(precentileResult === 67){
                return "Demon armor";
            }else if(precentileResult === 68){
                return "Dragon scale mail";
            }else if(precentileResult === 69){
                return "Dwarven plate";
            }else if(precentileResult === 70){
                return "Dwarven thrower";
            }else if(precentileResult === 71){
                return "Efreeti bottle";
            }else if(precentileResult === 72){
                return "Figurine of wondrous power (obsidian steed)";
            }else if(precentileResult === 73){
                return "Frost brand";
            }else if(precentileResult === 74){
                return "Helm of brilliance";
            }else if(precentileResult === 75){
                return "Horn ofValhalla (bronze)";
            }else if(precentileResult === 76){
                return "Instrument of the bards (Anstruth harp)";
            }else if(precentileResult === 77){
                return "loun stone (absorption)";
            }else if(precentileResult === 78){
                return "loun stone (agility)";
            }else if(precentileResult === 79){
                return "loun stone (fortitude)";
            }else if(precentileResult === 80){
                return "loun stone (insight)";
            }else if(precentileResult === 81){
                return "loun stone (intellect)";
            }else if(precentileResult === 82){
                return "loun stone (leadership)";
            }else if(precentileResult === 83){
                return "loun stone (strength)";
            }else if(precentileResult === 84){
                return "Armor, +2 leather";
            }else if(precentileResult === 85){
                return "Manual of bodily health";
            }else if(precentileResult === 86){
                return "Manual of gainful exercise";
            }else if(precentileResult === 87){
                return "Manual of golems";
            }else if(precentileResult === 88){
                return "Manual of quickness of action";
            }else if(precentileResult === 89){
                return "Mirror of life trapping";
            }else if(precentileResult === 90){
                return "Nine lives stealer";
            }else if(precentileResult === 91){
                return "Oath bow";
            }else if(precentileResult === 92){
                return "Armor, +2 scale mail";
            }else if(precentileResult === 93){
                return "Spellguard shield";
            }else if(precentileResult === 94){
                return "Armor, + 1 splint";
            }else if(precentileResult === 95){
                return "Armor of resistance (splint)";
            }else if(precentileResult === 96){
                return "Armor, + 1 studded leather";
            }else if(precentileResult === 97){
                return "Armor of resistance (studded leather)";
            }else if(precentileResult === 98){
                return "Tome of clear thought";
            }else if(precentileResult === 99){
                return "Tome of leadership and influence";
            }else{
                return "Tome of understanding"
            }
        case 'I':
            if(precentileResult < 6){
                return "Defender";
            }else if(precentileResult < 11){
                return "Hammer of thunderbolts";
            }else if(precentileResult < 16){
                return "Luck blade";
            }else if(precentileResult < 21){
                return "Sword of answering";
            }else if(precentileResult < 24){
                return "Holy avenger";
            }else if(precentileResult < 27){
                return "Ring of djinni summoning";
            }else if(precentileResult < 30){
                return "Ring of invisibility";
            }else if(precentileResult < 33){
                return "Ring of spell turning";
            }else if(precentileResult < 36){
                return "Rod of lordly might";
            }else if(precentileResult < 39){
                return "Staff of the magi";
            }else if(precentileResult < 42){
                return "Vorpal sword";
            }else if(precentileResult < 44){
                return "Belt of cloud giant strength";
            }else if(precentileResult < 46){
                return "Armor, +2 breastplate";
            }else if(precentileResult < 48){
                return "Armor, +3 chain mail";
            }else if(precentileResult < 50){
                return "Armor, +3 chain shirt";
            }else if(precentileResult < 52){
                return "Cloak of invisibility";
            }else if(precentileResult < 54){
                return "Crystal ball (legendary version)";
            }else if(precentileResult < 56){
                return "Armor, +1 half plate";
            }else if(precentileResult < 58){
                return "Iron flask";
            }else if(precentileResult < 60){
                return "Armor, +3 leather";
            }else if(precentileResult < 62){
                return "Armor, +1 plate";
            }else if(precentileResult < 64){
                return "Robe of the archmagi";
            }else if(precentileResult < 66){
                return "Rod of resurrection";
            }else if(precentileResult < 68){
                return "Armor, +1 scale mail";
            }else if(precentileResult < 70){
                return "Scarab of protection";
            }else if(precentileResult < 72){
                return "Armor, +2 splint";
            }else if(precentileResult < 74){
                return "Armor, +2 studded leather";
            }else if(precentileResult < 76){
                return "Well of many worlds";
            }else if(precentileResult === 76){
                const magicArmorNumber = dice.roll('`d12').result;

                if(magicArmorNumber < 3){
                    return "Armor, +2 half plate";
                }else if(magicArmorNumber < 5){
                    return "Armor, +2 plate";
                }else if(magicArmorNumber < 7){
                    return "Armor, +3 studded leather";
                }else if(magicArmorNumber < 9){
                    return "Armor, +3 breastplate";
                }else if(magicArmorNumber < 11){
                    return "Armor, +3 splint";
                }else if(magicArmorNumber === 11){
                    return "Armor, +3 half plate";
                }else{
                    return "Armor, +3 plate";
                }
            }else if(precentileResult === 77){
                return "Apparatus of Kwalish";
            }else if(precentileResult === 78){
                return "Armor of invulnerability";
            }else if(precentileResult === 79){
                return "Belt of storm giant strength";
            }else if(precentileResult === 80){
                return "Cubic gate";
            }else if(precentileResult === 81){
                return "Deck of many things";
            }else if(precentileResult === 82){
                return "Efreeti chain";
            }else if(precentileResult === 83){
                return "Armor of resistance (half plate)";
            }else if(precentileResult === 84){
                return "Horn ofValhalla (iron)";
            }else if(precentileResult === 85){
                return "Instrument of the bards (OIIamh harp)";
            }else if(precentileResult === 86){
                return "loun stone (greater absorption)";
            }else if(precentileResult === 87){
                return "loun stone (mastery)";
            }else if(precentileResult === 88){
                return "loun stone (regeneration)";
            }else if(precentileResult === 89){
                return "Plate armor of etherealness";
            }else if(precentileResult === 90){
                return "Plate armor of resistance";
            }else if(precentileResult === 91){
                return "Ring of air elemental command";
            }else if(precentileResult === 92){
                return "Ring of earth elemental command";
            }else if(precentileResult === 93){
                return "Ring of fire elemental command";
            }else if(precentileResult === 94){
                return "Ring of three wishes";
            }else if(precentileResult === 95){
                return "Ring of water elemental command";
            }else if(precentileResult === 96){
                return "Sphere of annihilation";
            }else if(precentileResult === 97){
                return "Talisman of pure good";
            }else if(precentileResult === 98){
                return "Talisman of the sphere";
            }else if(precentileResult === 99){
                return "Talisman of ultimate evil";
            }else{
                return "Tome of the stilled tongue";
            }
        default:
            console.log(
                'invalid table'
            )
    }
}