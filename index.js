const express  = require('express');
const app = express();
const path = require('path');

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/views/pages/index.html'))
});

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(3000, () =>{
    console.log('server started in port 3000');
})
