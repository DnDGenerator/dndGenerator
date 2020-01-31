const app = require('./index.js');
const characterObj = require('./randomStats');
const path = require('path');
const express = require('express');

app.use(express.static(path.join(__dirname, '../dist')))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
})

app.get('/character', (req, res)=>{
    res.send(characterObj())
})