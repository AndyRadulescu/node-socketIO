const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT;
const publicPath = path.join(__dirname, '../public');
console.log(publicPath);

app.use(express.static(publicPath))

app.listen(3000, () => {
    console.log(`Started on port ${3000}`);
});

module.exports = {app};