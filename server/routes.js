const app = require('./index.js');
const characterObj = require('./randomStats');


app.get('/', (req, res)=>{
    res.send(characterObj())
})