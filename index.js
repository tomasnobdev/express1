const express = require('express');
const morgan = require('morgan');
const app = express(); 


// rutas requeridas

const routes = require('./routes');
const routesApi = require('./routes-api');
// Settings

app.set('appName', 'Mi Primer Server');
app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

// Middlewares
app.use(morgan('combined'));

// Rutas
app.use(routes);
app.use('/api', routesApi);

app.get('*', (req, res) => {
	res.end('Not Found');
});

app.listen(3000, () => {
	console.log('Server listen');
	console.log('Nombre de la APP: ' + app.get('appName'));
});
