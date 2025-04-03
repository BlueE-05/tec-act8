import StudentsDB from '@/db/students';

export default class StudentsController {
    private db = new StudentsDB();

    async getStudentSituations() {
        return this.db.getStudentSituations();
    }
}