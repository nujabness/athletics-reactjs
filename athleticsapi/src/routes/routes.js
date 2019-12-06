import {Router} from 'express';
import UserController from '../controller/UserController';
import NationaliteController from '../controller/NationaliteController';
import EpreuveController from '../controller/EpreuveController';
import TypeController from '../controller/TypeController';

const router = new Router();

/********************* USER ROUTE ******************************/
router.get('/users', UserController.list);
router.post('/login', UserController.login);
router.post('/register', UserController.register);
router.post('/user/details', UserController.details);
router.delete('/user/delete', UserController.delete);
router.put('/user/update', UserController.update);

/******************* PARTICIPATION ROUTE ***********************/
router.post('/participation', EpreuveController.getParticipation)
router.post('/participer', EpreuveController.participer)
router.post('/annuler/participation', EpreuveController.annulerParticiper)

/******************** EPREUVE ROUTE ***************************/
router.get('/epreuve', EpreuveController.list)
router.post('/epreuve/create', EpreuveController.create)
router.delete('/epreuve/delete', EpreuveController.delete)
router.put('/epreuve/update', EpreuveController.update)
router.post('/epreuve/details', EpreuveController.details)

/******************** TYPEUSERS ROUTE **************************/
router.get('/typeusers', TypeController.list)

/******************* NATIONALITE ROUTE *************************/
router.get('/nationalite', NationaliteController.list)

export default router;
