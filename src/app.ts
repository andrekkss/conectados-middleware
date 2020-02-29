// @ts-ignore
import express from 'express';
import proxy from 'http-proxy-middleware';
import logger from 'morgan';
// @ts-ignore
import cookie from 'cookie-parser';
import helmet from 'helmet';

const app = express();

const userServiceProxy = proxy({ target: 'http://conectados-post:3001/api/v1/posts', changeOrigin: true });

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie());

app.use('/', userServiceProxy);

app.listen(3000, '0.0.0.0');