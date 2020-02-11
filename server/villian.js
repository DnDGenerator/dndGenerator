const dice = require('./dice');

const objectiveList = {
    "Immortality":[
        "Acquire a legendary item to prolong life",
        "Ascend to godhood",
        "Become undead or obtain a younger body",
        "Steal a planar creature's essence"
    ],
    "Influence":[
        "Seize a position of power or title",
        "Win a contest or tournament",
        "Win favor with a powerful individual",
        "Place a pawn in a position of power"
    ],
    "Magic":[
        "Obtain an ancient artifact",
        "Build a construct or magical device",
        "Carry out a deity's wishes",
        "Offer sacrifices to a deity",
        "Contact a lost deity or power",
        "Open a gate to another world"
    ],
    "Mayhem":[
        "Fulfill an apocalyptic prophecy",
        "Enact the vengeful will of a god or patron",
        "Spread a vile contagion",
        "Overthrow a government",
        "Trigger a natural disaster",
        "Utterly destroy a bloodline or clan"
    ],
    "Passion":[
        "Prolong the life of a loved one",
        "Prove worthy of another person's love",
        "Raise or restore a dead loved one",
        "Destroy rivals for another person's affection"
    ],
    "Power":[
        "Conquer a region or incite a rebellion",
        "Seize control of an army",
        "Become the power behind the throne",
        "Gain the favor of a ruler"
    ],
    "Revenge":[
        "Avenge a past humiliation or insult",
        "Avenge a past imprisonment or injury",
        "Avenge the death of a loved one",
        "Retrieve stolen property and punish the thief"
    ],
    "Wealth":[
        "Control natural resources or trade",
        "Marry into wealth",
        "Plunder ancient ruins",
        "Steal land, goods, or money"
    ]
};

const objectiveListKeys = Object.keys(objectiveList);

const methodsList = {
    "Agricultural devastation":[
        "Blight",
        "Crop failure",
        "Drought",
        "Famine"
    ],
    "Assault or beatings":["Assault or beatings"],
    "Bounty hunting or assassination":["Bounty hunting or assassination"],
    "Captivity or coercion":[
        "Bribery",
        "Enticement",
        "Eviction",
        "Imprisonment",
        "Kidnapping",
        "Legal intimidation",
        "Press gangs",
        "Shackling",
        "Slavery",
        "Threats or harassment"
    ],
    "Confidence scams":[
        "Breach of contract",
        "Cheating",
        "Fast talking",
        "Fine print",
        "Fraud or swindling",
        "Quackery or tricks"
    ],
    "Defamation":[
        "Framing",
        "Gossiping or slander",
        "Humiliation",
        "Libel or insults"
    ],
    "Dueling":["Dueling"],
    "Execution":[
        "Beheading",
        "Burning at the stake",
        "Burying alive",
        "Crucifixion",
        "Drawing and quartering",
        "Hanging",
        "Impalement",
        "Sacrifice (living)"
    ],
    "Impersonation or disguise":["Impersonation or disguise"],
    "Lying or perjury":["Lying or perjury"],
    "Magical mayhem":[
        "Hauntings",
        "Illusions",
        "Infernal bargains",
        "Mind control",
        "Petrification",
        "Raising or animating the dead",
        "Summoning monsters",
        "Weather control"
    ],
    "Murder":[
        "Assassination",
        "Cannibalism",
        "Dismemberment",
        "Drowning",
        "Electrocution",
        "Euthanasia (involuntary)",
        "Disease",
        "Poisoning",
        "Stabbing",
        "Strangulation or suffocation"
    ],
    "Neglect":["Neglect"],
    "Politics":[
        "Betrayal or treason",
        "Conspiracy",
        "Espionage or spying",
        "Genocide",
        "Oppression",
        "Raising taxes"
    ],
    "Religion":[
        "Curses",
        "Desecration",
        "False gods",
        "Heresy or cults"
    ],
    "Stalking":["Stalking"],
    "Theft or Property Crime":[
        "Arson",
        "Blackmail or extortion",
        "Burglary",
        "Counterfeiting",
        "Highway robbery",
        "Looting",
        "Mugging",
        "Poaching",
        "Seizing property",
        "Smuggling"
    ],
    "Torture":[
        "Acid",
        "Blinding",
        "Branding",
        "Racking",
        "Thumbscrews",
        "Whipping"
    ],
    "Vice":[
        "Adultery",
        "Drugs or alcohol",
        "Gambling",
        "Seduction"
    ],
    "Warfare":[
        "Ambush",
        "Invasion",
        "Massacre",
        "Mercenaries",
        "Rebellion",
        "Terrorism"
    ]
};
const methodsListKeys = Object.keys(methodsList);
const weakness = [
    "A hidden object holds the villain's soul.",
    "The villain's power is broken if the# death of its true love is avenged.",
    "The villain is weakened in the presence of a particular artifact.",
    "A special weapon deals extra damage when used against the villain.",
    "The villain is destroyed if it speaks its true name.",
    "An ancient prophecy or riddle reveals how the villain can be overthrown.",
    "The villain falls when an ancient enemy forgives its past actions.",
    "The villain loses its power if a mystic bargain it struck long ago is completed."
];

module.exports = ()=>{
    const villian = {};
    const objectiveKey = objectiveListKeys[dice.roll(`1d${objectiveListKeys.length}`).result - 1];
    const methodKey = methodsListKeys[dice.roll(`1d${methodsListKeys.length}`).result - 1];
    if(objectiveKey === objectiveList[objectiveKey][0]){
        villian.objective = objectiveKey;
    }else{
        villian.objective = objectiveKey + " : " + objectiveList[objectiveKey][dice.roll(`1d${objectiveList[objectiveKey].length}`).result - 1] 
    }
    if(methodKey !== methodsList[methodKey][0]){
        villian.method = methodKey + ' by means of ' + methodsList[methodKey][dice.roll(`1d${methodsList[methodKey].length}`).result - 1];        
    }else{
        villian.method = methodKey + ' in its own way';
    }
    villian.weakness = weakness[dice.roll(`1d${weakness.length}`).result - 1];

    return villian;
}