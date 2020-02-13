const location = require('./dungeonLocation');
const creator = require('./dungeonCreator');
const purpose = require('./dungeonPurpose');
const history = require('./dungeonHistory');
const Dungeon = require('./dungeonClass');
module.exports = ()=>{
    const dungeon = {};
    dungeon.location = location();
    dungeon.creator = creator();
    dungeon.purpose = purpose();
    dungeon.history = history();

    return dungeon;
}