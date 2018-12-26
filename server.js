const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/ng6'));

app.get('/*',function(req,res) { 
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

app.listen(process.env.port || 8080);