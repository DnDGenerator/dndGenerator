const dice= require('./dice');

const gemstones = {
    '10gp':[
        'Azurite (opaque mottled deep blue)',
        'Banded agate (translucent striped brown, blue, white, or red)',
        'Blue quartz (transparent pale blue)',
        'Eye agate (translucent circles of gray, white, brown, blue, or green)',
        'Hematite (opaque gray-black)',
        'Lapis lazuli (opaque light and dark blue with yellow flecks)',
        'Malachite (opaque striated light and dark green)',
        `Moss agate (translucent pink or yellow-white with mossy gray or green markings)`,
        `Obsidian (opaque black)`,
        `Rhodochrosite (opaque light pink)`,
        `Tiger eye (translucent brown with golden center)`,
        `Turquoise (opaque light blue-green)`
    ],
    '50gp':[
        'Bloodstone (opaque dark gray with red flecks)',
        `Carnelian (opaque orange to red-brown)`,
        `Chalcedony (opaque white)`,
        `Chrysoprase (translucent green)`,
        `Citrine (transparent pale yellow-brown)`,
        `Jasper (opaque blue, black, or brown)`,
        `Moonstone (translucent white with pale blue glow)`,
        `Onyx (opaque bands of black and white, or pure black or white)`,
        `Quartz (transparent white, smoky gray, or yellow)`,
        `Sardonyx (opaque bands of red and white)`,
        `Star rose quartz (translucent rosy stone with white star-shaped center)`,
        `Zircon (transparent pale blue-green)`
    ],
    '100gp':[
        'Amber (transparent watery gold to rich gold)',
        `Amethyst (transparent deep purple)`,
        `Chrysoberyl (transparent yellow-green to pale green)`,
        `Coral (opaque crimson)`,
        `Garnet (transparent red, brown-green, or violet)`,
        `jade (translucent light green, deep green, or white)`,
        `jet (opaque deep black)`,
        `Pearl (opaque lustrous white, yellow, or pink)`,
        `Spinel (transparent red, red-brown, or deep green)`,
        `Tourmaline (transparent pale green, blue, brown, or red)`
    ],
    '500gp':[
        `Alexandrite (transparent dark green)`,
        `Aquamarine (transparent pale blue-green)`,
        `Black pearl (opaque pure black)`,
        `Blue spinel (transparent deep blue)`,
        `Peridot (transparent rich olive green)`,
        `Topaz (transparent golden yellow)`
    ],
    '1000gp':[
        `Black opal (translucent dark green with black mottling and golden flecks)`,
        `Blue sapphire (transparent blue-white to medium blue)`,
        `Emerald (transparent deep bright green)`,
        `Fire opal (translucent fiery red)`,
        `Opal (translucent pale blue with green and golden mottling)`,
        `Star ruby (translucent ruby with white star-shaped center)`,
        `Star sapphire (translucent blue sapphire with white star-shaped center)`,
        `Yellow sapphire (transparent fiery yellow or yellow-green)`
    ],
    '5000gp':[
        `Black sapphire (translucent lustrous black with glowing highlights)`,
        `Diamond (transparent blue-white , canary, pink, brown, or blue)`,
        `jacinth (transparent fiery orange)`,
        `Ruby (transparent clear red to deep crimson)`
    ]
}


module.exports = (cost)=>{
    if(typeof cost === 'string'){
        return gemstones[cost][dice.roll(`1d${gemstones[cost].length}`).result - 1]
    }else{
        const gemstoneKeys = Object.keys(gemstones);
        const gemstoneCost = gemstones[dice.roll(`1d${gemstoneKeys.length}`).result - 1];

        return gemstones[gemstoneCost][dice.roll(`1d${gemstones[gemstoneCost].length}`).result - 1];
    }
}