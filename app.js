var api = require('./routes/api');

app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/api/v1', api);