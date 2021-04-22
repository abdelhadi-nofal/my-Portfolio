'use strict';


const express = require('express');

const server = express();

const PORT = process.env.PORT || 3000;


server.use(express.static('./public'));

server.get('/',(req,res) =>{
  res.send('you are live');
});


server.listen(PORT , ( ) => {
  console.log(` listening to ${PORT}`);
});





