const express = require('express');

const App = express();
const PORT = 3001;

App.use(express.static('public'));

App.listen(PORT);