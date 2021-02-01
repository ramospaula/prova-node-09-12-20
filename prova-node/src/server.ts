import express, { Request, Response, NextFunction } from 'express';
import routes from './routes';
import { HttpError } from 'http-errors';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json());
app.use(routes);

app.use((request: Request, response: Response, next: NextFunction) => {
    let err = new HttpError('Not found');
    err.status = 404;
    next(err);
}); 

app.use((error: HttpError, request: Request, response: Response, next: NextFunction) => {
    response.status(error.status || 500);
    response.json({ json: error.message });
}); 

app.listen(3333);