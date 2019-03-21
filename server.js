const express = require('express');

const path = require('path');
const app = express();

const port = process.env.PORT || 5005;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname + '/dist/')));

    app.get(/.*/, (req, res) => {
        res.send(__dirname + '/dist/index.html');
    })

}

app.listen(port);