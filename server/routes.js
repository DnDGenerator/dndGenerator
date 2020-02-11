const app = require('./index.js');
const characterObj = require('./randomStats');
const path = require('path');
const express = require('express');
const loot = require('./lootBranch');
const npc = require('./npcGenerator');
const cors = require('cors');
app.use(cors())
app.use(express.static(path.join(__dirname, '../dist')))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
})

app.get('/character', (req, res)=>{
    console.log(req.query);
    res.send(characterObj(req.query))
})

app.get('/loot', (req, res)=>{
    res.send(loot(req.query));
})

app.get('/npc', (req, res)=>{
    res.send(npc());
})