export default class StudentsDB {
    private students: { matricula: string, nombre: string, tieneAdeudo: boolean, calificacion: number }[] = [
        { matricula: 'a001122334', nombre: 'Victor Frankenstein', tieneAdeudo: true, calificacion: 90 },    // "tenías honores, pero tienes un adeudo"
        { matricula: 'a001122335', nombre: 'Maria Curie', tieneAdeudo: false, calificacion: 95 },           // "te graduaste con honores"
        { matricula: 'a001122336', nombre: 'Isaac Newton', tieneAdeudo: false, calificacion: 88 },          // "pasaste muy apenas"
        { matricula: 'a001122337', nombre: 'Nikola Tesla', tieneAdeudo: true, calificacion: 92 },           // "tenías honores, pero tienes un adeudo"
        { matricula: 'a001122338', nombre: 'Ada Lovelace', tieneAdeudo: false, calificacion: 67 },          // "como no tienes adeudo, tienes derecho a un examen de recuperación"
        { matricula: 'a001122339', nombre: 'Charles Darwin', tieneAdeudo: true, calificacion: 85 },         // "pasaste muy apenas"
        { matricula: 'a001122340', nombre: 'Albert Einstein', tieneAdeudo: false, calificacion: 45 },       // "como no tienes adeudo, tienes derecho a un examen de recuperación"
        { matricula: 'a001122341', nombre: 'Galileo Galilei', tieneAdeudo: false, calificacion: 58 },       // "como no tienes adeudo, tienes derecho a un examen de recuperación"
        { matricula: 'a001122342', nombre: 'Leonardo da Vinci', tieneAdeudo: true, calificacion: 69 },      // "expulsado"
        { matricula: 'a001122343', nombre: 'Sophie Germain', tieneAdeudo: false, calificacion: 94 }         // "te graduaste con honores"
    ];

    // version reducida :p solo para intentar si se podia
    async getStudentSituations() {
        return this.students.map(student => ({
            matricula: student.matricula,
            situacion: student.calificacion >= 90
                ? (student.tieneAdeudo ? "tenías honores, pero tienes un adeudo" : "te graduaste con honores")
                : student.calificacion >= 70
                    ? "pasaste muy apenas"
                    : (student.tieneAdeudo ? "expulsado" : "como tienes adeudo, tienes derecho a un examen de recuperación")
        }));
    }

    /* Og
        async getStudentSituations() {
        return this.students.map(student => {
            let situacion = "";

            if (student.calificacion >= 90) {
                situacion = student.tieneAdeudo
                    ? "tenías honores, pero tienes un adeudo"
                    : "te graduaste con honores";
            } else if (student.calificacion >= 70) {
                situacion = "pasaste muy apenas";
            } else {
                situacion = student.tieneAdeudo
                    ? "expulsado"
                    : "como tienes adeudo, tienes derecho a un examen de recuperación";
            }

            return { matricula: student.matricula, situacion };
        });
    }
        */
}