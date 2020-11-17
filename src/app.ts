// @ts-ignore
import express from 'express';
// @ts-ignore
import { createProxyMiddleware, Filter, Options, RequestHandler } from 'http-proxy-middleware';
// @ts-ignore
import cookie from 'cookie-parser';

const app = express();

const postServiceProxy = createProxyMiddleware({ target: 'http://conectados-post:3001/api/v1/', changeOrigin: true });
const userServiceProxy = createProxyMiddleware({ target: 'http://conectados-client:3002/api/v1/', changeOrigin: true });

app.use('/posts', postServiceProxy);
app.use('/client', userServiceProxy);

app.listen(3000);