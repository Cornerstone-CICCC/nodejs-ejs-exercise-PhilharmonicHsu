// This is your server file :)
import express, {Request, Response} from 'express'
import path from 'path';
import baseRouter from './routes/base.routes';

const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../src/views'))
app.use(express.static(path.join(__dirname, 'public')))

app.use(baseRouter);

app.use((request: Request, response: Response) => {
    response.status(404).render('404', {title: 'Page not found'});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} ....`)
})