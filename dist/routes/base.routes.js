"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const baseRouter = (0, express_1.Router)();
const title = 'Homework';
baseRouter.get('/', (request, response) => {
    response.status(200).render('index', { title });
});
baseRouter.get('/about', (request, response) => {
    response.status(200).render('about', { title });
});
baseRouter.get('/contact', (request, response) => {
    response.status(200).render('contact', { title });
});
exports.default = baseRouter;
