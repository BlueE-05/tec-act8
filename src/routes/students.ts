import express from 'express';
import StudentHTTPHandler from '@/handlers/students';

const router = express.Router();
const studentHandler = new StudentHTTPHandler();

router.get('/situacion', (req, res, next) => studentHandler.getStudentSituations(req, res, next));


export default router;