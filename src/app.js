"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
var express_1 = __importDefault(require("express"));
// @ts-ignore
var http_proxy_middleware_1 = require("http-proxy-middleware");
var app = express_1.default();
var postServiceProxy = http_proxy_middleware_1.createProxyMiddleware({ target: 'http://conectados-post:3001/api/v1/', changeOrigin: true });
var userServiceProxy = http_proxy_middleware_1.createProxyMiddleware({ target: 'http://conectados-client:3002/api/v1/', changeOrigin: true });
app.use('/posts', postServiceProxy);
app.use('/client', userServiceProxy);
app.listen(3000);
