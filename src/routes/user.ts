import { Router } from 'express';
import { listAcsUsers, acsUserByEmail, acsUsersByIdComp, acsUserById } from '../controllers/acsUser/list';
import { insertAcsUser } from '../controllers/acsUser/insert';
import { deleteUser } from '../controllers/acsUser/delete';
import { updateUser } from '../controllers/acsUser/update';
import { login } from '../controllers/acsUser/login';

const user: Router = Router();
user.post('/login', login);
user.post('/', insertAcsUser);
user.put('/:chPass', updateUser);
user.delete('/:id', deleteUser);
user.get('/', listAcsUsers);
user.get('/email/:email', acsUserByEmail);
user.get('/id/:id', acsUserById);
user.get('/id_comp/:id_comp', acsUsersByIdComp);
//user.get('/ganaderos', listRanchers);
//user.get('/pagos', listPay);
//user.put('/pagos/:id', updatePay);
//user.get('/:id', byId);
export default user;