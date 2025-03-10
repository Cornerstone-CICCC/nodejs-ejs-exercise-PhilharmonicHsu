import {Router, Request, Response} from 'express'

const baseRouter = Router();

const title = 'Homework'

baseRouter.get('/', (request: Request, response: Response) => {
    response.status(200).render('index', {title});
});

baseRouter.get('/about', (request: Request, response: Response) => {
    response.status(200).render('about', {title});
})

baseRouter.get('/contact', (request: Request, response: Response) => {
    response.status(200).render('contact', {title});
})

export default baseRouter;