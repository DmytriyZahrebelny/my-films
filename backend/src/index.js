const App = require('./app');
const FilmsController = require('./controllers/films/films.controller');

const app = new App([new FilmsController()]);

app.listen();