import { Router } from 'express';
import personRouter from './person/person.router';

export default (): Router => {
  const app = Router();

  //TODO: add routes here...
  app.use('/person', personRouter());
  return app;
};
