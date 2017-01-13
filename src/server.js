import http from 'http';
import express from 'express';
import config from './config';
import routes from './routes/main';
import errorHandler from './middleware/errorHandler';

const app = express();
const port = process.env.PORT || config.port;

const server = {
  init() {
    app.server = http.createServer(app);
    app.use('/', express.static(`${__dirname}/public`));
    app.use(errorHandler);
    app.server.listen(port);
    routes.init(app);
  }
};

export default server;