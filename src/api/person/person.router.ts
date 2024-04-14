import { Router } from 'express';
import { validateRequest } from '../../utils';
import { personSchema, requestPersonSchema } from './person.model';
import { handle_create_user, handle_delete_user, handle_get_user, handle_get_users, handle_update_user } from './person.controller';

export default (): Router => {
    const app = Router();

    //TODO: add routes here...
    app.get('/', handle_get_users)
    app.get('/:id', validateRequest('params', requestPersonSchema), handle_get_user)
    app.post('/', validateRequest('body', personSchema), handle_create_user)
    app.put('/:id', validateRequest('params', requestPersonSchema), validateRequest('body', personSchema), handle_update_user)
    app.delete('/:id', validateRequest('params', requestPersonSchema), handle_delete_user)
    return app;
};
