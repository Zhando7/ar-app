const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

module.exports = function() {
    let rootDir = path.join.bind(this, __dirname);

    app.engine('ejs', require('ejs').__express);
    app.set('views', rootDir('../../views'));
    app.use(express.static(rootDir('../../assets')));
    app.set('view engine', 'ejs');

    app.get('/', function(req, res) {
        res.render('index');
    });

    app.listen(port, () => { 
        console.log(`Express started on ${port} port`)
    });
}