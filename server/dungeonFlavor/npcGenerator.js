const Dice = require('./dice.js');

module.exports = ()=>{
    const appearanceList = [
        "Distinctive jewelry: earrings, necklace, circlet, bracelets",
        "Piercings",
        "Flamboyant or outlandish clothes",
        "Formal, clean clothes",
        "Ragged, dirty clothes",
        "pronounced scar",
        "Missing teeth",
        "Missing fingers",
        "Unusual eye color (or two different colors)",
        "Tattoos",
        "Birthmark",
        "Unusual skin color",
        "Bald",
        "Braided beard or hair",
        "Unusual hair color",
        "Nervous eye twitch",
        "Distinctive nose",
        "Distinctive posture (crooked or rigid)",
        "Exceptionally beautiful",
        "Exceptionally ugly"
    ];
    const abilitiesHighList = [
        "Strength-powerful, brawny, strong as an ox",
        "Dexterity-lithe, agile, graceful",
        "Constitution-hardy, hale, healthy",
        "Intelligence-studious, learned, inquisitive",
        "Wisdom-perceptive, spiritual, insightful",
        "Charisma-persuasive, forceful, born leader"
    ];

    const abilitiesLowList = [
        "Strength-feeble, scrawny",
        "Dexterity-clumsy, fumbling",
        "Constitution-sickly, pale",
        "Intelligence-dim-witted, slow",
        "Wisdom-oblivious, absentminded",
        "Charisma-dull, boring"
    ];

    const talentList = [
        "Plays a musical instrument",
        "Speaks several languages fluently",
        "Unbelievably lucky",
        "Perfect memory",
        "Great with animals",
        "Great with children",
        "Great at solving puzzles",
        "Great at one game",
        "Great at impersonations",
        "Draws beautifully",
        "Paints beautifully",
        "Sings beautifully",
        "Drinks everyone under the table",
        "Expert carpenter",
        "Expert cook",
        "Expert dart thrower and rock skipper",
        "Expert juggler",
        "Skilled actor and master of disguise",
        "Skilled dancer",
        "Knows thieves' cant"
    ];

    const mannerismsList = [
        "Prone to singing, whistling, or humming quietly",
        "Speaks in rhyme or some other peculiar way",
        "Particularly low or high voice",
        "Slurs words, lisps, or stutters",
        "Enunciates overly clearly",
        "Speaks loudly",
        "Whispers",
        "Uses flowery speech or long words",
        "Frequently uses the wrong word",
        "Uses colorful oaths and exclamations",
        "Makes constant jokes or puns",
        "Prone to predictions of doom",
        "Fidgets",
        "Squints",
        "Stares into the distance",
        "Chews something",
        "Paces",
        "Taps fingers",
        "Bites fingernails",
        "Twirls hair or tugs beard"
    ];

    const interactionTraitsList = [
        "Argumentative",
        "Arrogant",
        "Blustering",
        "Rude",
        "Curious",
        "Friendly",
        "Honest",
        "Hot tempered",
        "Irritable",
        "Ponderous",
        "Quiet",
        "Suspicious"
    ];

    const idealsList = [
        "Beauty",
        "Charity",
        "Greater good",
        "Life",
        "Respect",
        "Self-sacrifice",
        "Domination",
        "Greed",
        "Might",
        "Pain",
        "Retribution",
        "Slaughter",
        "Community",
        "Fairness",
        "Honor",
        "Logic",
        "Responsibility",
        "Tradition",
        "Change",
        "Creativity",
        "Freedom",
        "Independence",
        "No limits",
        "Whimsy",
        "Balance",
        "Knowledge",
        "Live and let live",
        "Moderation",
        "Neutrality",
        "People",
        "Aspiration",
        "Discovery",
        "Glory",
        "Nation",
        "Redemption",
        "Self-knowledge"
    ];

    const bondsList = [
        "Dedicated to fulfilling a personal life goal",
        "Protective of close family members",
        "Protective of colleagues or compatriots",
        "Loyal to a benefactor, patron, or employer",
        "Captivated by a romantic interest",
        "Drawn to a special place",
        "Protective of a sentimental keepsake",
        "Protective of a valuable possession",
        "Out for revenge",
    ];

    const flawAndSecretsList = [
        "Forbidden love or susceptibility to romance",
        "Enjoys decadent pleasures",
        "Arrogance",
        "Envies another creature's possessions or station",
        "Overpowering greed",
        "Prone to rage",
        "Has a powerful enemy",
        "Specific phobia",
        "Shameful or scandalous history",
        "Secret crime or misdeed",
        "Possession offorbidden lore",
        "Foolhardy bravery"
    ];

    const npc = {
        appearance:"",
        highAbikity:"",
        lowAbility:"",
        talent:"",
        mannerism:"",
        interaction:"",
        ideals:"",
        bonds:"",
        flawAndOrSecret:""
    }

    npc.appearance = appearanceList[Dice.roll(`1d${appearanceList.length}`).result - 1];
    npc.highAbility = abilitiesHighList[Dice.roll(`1d${abilitiesHighList.length}`).result - 1];
    npc.lowAbility = abilitiesLowList[Dice.roll(`1d${abilitiesLowList.length}`).result - 1];
    npc.talent = talentList[Dice.roll(`1d${talentList.length}`).result - 1];
    npc.mannerism = mannerismsList[Dice.roll(`1d${mannerismsList.length}`).result - 1];
    npc.interaction = interactionTraitsList[Dice.roll(`1d${interactionTraitsList.length}`).result - 1];
    npc.ideals = idealsList[Dice.roll(`1d${idealsList.length}`).result - 1];
    npc.bonds = bondsList[Dice.roll(`1d${bondsList.length}`).result - 1];
    npc.flawAndOrSecret = flawAndSecretsList[Dice.roll(`1d${flawAndSecretsList.length}`).result - 1];

    return npc;
}