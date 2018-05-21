import Grade from '../typings/grade';
import LocalStorageAccess from '../storage/localstorage';

export default class GradeService {
    grades: Grade[];
    saveGrade(name: string, marks: number) {
        this.grades = LocalStorageAccess.saveGrade(name, marks);
    }
    deleteGrade(id: number) {
        this.grades = LocalStorageAccess.deleteGrade(id);
    }
    updateGrade(id: number, name: string, marks: number) {
        this.grades = LocalStorageAccess.updateGrade(
            id, name, marks
        );
    }
    getAllGrades() {
        this.grades = LocalStorageAccess.getAllGrades();
    }
}
