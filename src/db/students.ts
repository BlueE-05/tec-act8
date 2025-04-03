export default class UserDB {
    private students: { matricula: string, nombre: string, tieneAdeudo: boolean, calificacion: number }[] = [
        { matricula: 'a001122334', nombre: 'Victor Frankenstein', tieneAdeudo: true, calificacion: 90 },
        { matricula: 'a001122335', nombre: 'Maria Curie', tieneAdeudo: false, calificacion: 95 },
        { matricula: 'a001122336', nombre: 'Isaac Newton', tieneAdeudo: false, calificacion: 88 },
        { matricula: 'a001122337', nombre: 'Nikola Tesla', tieneAdeudo: true, calificacion: 92 },
        { matricula: 'a001122338', nombre: 'Ada Lovelace', tieneAdeudo: false, calificacion: 97 },
        { matricula: 'a001122339', nombre: 'Charles Darwin', tieneAdeudo: true, calificacion: 85 },
        { matricula: 'a001122340', nombre: 'Albert Einstein', tieneAdeudo: false, calificacion: 99 },
        { matricula: 'a001122341', nombre: 'Galileo Galilei', tieneAdeudo: false, calificacion: 89 },
        { matricula: 'a001122342', nombre: 'Leonardo da Vinci', tieneAdeudo: true, calificacion: 91 },
        { matricula: 'a001122343', nombre: 'Sophie Germain', tieneAdeudo: false, calificacion: 94 }
    ];
    

    async getStudentSituations() {
        return this.students;
    }
}