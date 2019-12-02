import {Router} from 'express';
import UserController from '../controller/UserController';
import NationaliteController from '../controller/NationaliteController';
import MedailleController from '../controller/MedailleController';
import EpreuveController from '../controller/EpreuveController';

const router = new Router();

router.get('/hello', (request, response) => {
    response.send('hello');
});

router.get('/user', UserController.list);
router.post('/login', UserController.login);

// router.post('/athlete', AthleteController.create);
// router.get('/athlete/:id', AthleteController.details);
// router.delete('/athlete/:id', AthleteController.delete);
// router.put('/athlete/:id', AthleteController.update);

router.post('/participation', EpreuveController.getParticipation)
router.post('/participer', EpreuveController.participer)
router.post('/annuler/participation', EpreuveController.annulerParticiper)

router.get('/nationalite', NationaliteController.list)

router.get('/epreuve', EpreuveController.list)

router.get('/medaille', MedailleController.list)



export default router;
