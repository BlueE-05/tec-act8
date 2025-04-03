import { Request, Response, NextFunction } from 'express';
import StudentController from '@/controllers/students';

export default class StudentHTTPHandler {
    private studentController: StudentController;

    constructor() {
        this.studentController = new StudentController();
    }

    async getStudentSituations(req: Request, res: Response, next: NextFunction) {
        try {
            const situations = await this.studentController.getStudentSituations();
            res.json(situations);
        } catch (error) {
            next(error);
        }
    }
}