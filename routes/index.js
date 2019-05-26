const fs = require('fs');
const express = require('express');
const router = express.Router();

/* GET home page.
    router.get('/', function(req, res, next) {
      res.render('index', { title: 'Express' });
    });

*/

router.get('/*', (req, res) => {
    fs.readFile('dist/index.html', 'utf-8', (err, content) => {
        if (err) {
            console.error('We cannot open "index.html" file.')
        }

        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        res.end(content)
    });
});

module.exports = router;
