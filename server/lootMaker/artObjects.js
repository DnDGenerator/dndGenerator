const dice= require('../dice');

const artPieces = {
    '25gp': [
        `Silver ewer`,
        `Carved bone statuette`,
        `Small gold bracelet`,
        `Cloth-of-gold vestments`,
        `Black velvet mask stitched with silver thread`,
        `Copper chalice with silver filigree`,
        `Pair of engraved bone dice`,
        `Small mirror set in a painted wooden frame`,
        `Embroidered silk handkerchief`,
        `Gold locket with a painted portrait inside`
    ],
    '250gp': [
        `Gold ring set with bloodstones`,
        `Carved ivory statuette`,
        `Large gold bracelet`,
        `Silver necklace with a gemstone pendant`,
        `Bronze crown`,
        `Silk robe with gold embroidery`,
        `Large well-made tapestry`,
        `Brass mug with jade inlay`,
        `Box of turquoise animal figurines`,
        `Gold bird cage with electrum filigree`
    ],
    '750gp': [
        `Silver chalice set with moonstones`,
        `Silver-plated steellongsword with jet set in hilt`,
        `Carved harp of exotic wood with ivory inlay and zircon gems`,
        `Small gold idol`,
        `Gold dragon comb set with red garnets as eyes`,
        `Bottle stopper cork embossed with gold leaf and set with amethysts`,
        `Ceremonial electrum dagger wit~ a black pearl in the pommel`,
        `Silver and gold brooch`,
        `Obsidian statuette with gold fittings and inlay`,
        `Painted gold war mask`
    ],
    '2500gp': [
        `Fine gold chain set with a fire opal`,
        `Old masterpiece painting`,
        `Embroidered silk and velvet mantle set with numerous moonstones`,
        `Platinum bracelet set with a sapphire`,
        `Embroidered glove set with jewel chips`,
        `jeweled anklet`,
        `Gold music box`,
        `Gold circlet set with four aquamarines`,
        `Eye patch with a mock eye set in blue sapphire and moonstone`,
        `A necklace string of small pink pearls`
    ],
    '7500gp': [
        `Jeweled gold crown `,
        `jeweled platinum ring`,
        `Small gold statuette set with rubies`,
        `Gold cup set with emeralds`,
        `Gold jewelry box with platinum filigree`,
        `Painted gold child's sarcophagus`,
        `jade game board with solid gold playing pieces`,
        `Bejeweled ivory drinking horn with gold filigree`
    ]
}


module.exports = (cost) =>{
    if(typeof cost === 'string'){
        return artPieces[cost][dice.roll(`1d${artPieces[cost].length}`).result - 1];
    }else{
        const artKeys = Object.keys(artPieces);
        const artCost = artPieces[artKeys[dice.roll(`1d${artKeys.length}`).result - 1]];

        return artPieces[artCost][dice.roll(`1d${artPieces[artCost].length}`).result - 1];
    }
}