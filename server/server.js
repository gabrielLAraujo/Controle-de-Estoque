const express = require('express');
const app = express();

app.listen(3000, () => console.log(`Servidor rodando , porta: 3000`));

app.get('/', (req, resp) => resp.send('/client/index.html'));