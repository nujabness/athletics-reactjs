import {Router} from 'express';
import NationaliteController from '../controller/NationaliteController';
import AthleteController from '../controller/AthleteController';
import EtatController from '../controller/EtatController';
import ParticipationController from '../controller/ParticipationController';
import MedailleController from '../controller/MedailleController';
import EpreuveController from '../controller/EpreuveController';

const router = new Router();

router.get('/hello', (request, response) => {
    response.send('hello');
});

router.get('/athlete', AthleteController.list);
router.post('/athlete', AthleteController.create);
router.get('/athlete/:id', AthleteController.details);
router.delete('/athlete/:id', AthleteController.delete);
router.put('/athlete/:id', AthleteController.update);

router.get('/nationalite', NationaliteController.list)

router.get('/epreuve', EpreuveController.list)

router.get('/etat', EtatController.list)

router.get('/participation', ParticipationController.list)

router.get('/medaille', MedailleController.list)



export default router;
