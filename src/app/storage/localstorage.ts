import Grade from '../typings/grade';

const STORAGE_KEY = 'suriatApp';
const localStorageAccess = {
    getLastGradeId: () => {
        return localStorageAccess.getAllGrades().length;
    },
    getAllGrades: (): Grade[] => {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    },
    saveAllGrades: (grades: Grade[]) => {
        const gradesString = JSON.stringify(grades);
        localStorage.setItem(STORAGE_KEY, gradesString);
    },
    saveGrade: (name: string, marks: number): Grade[] => {
        const allGrades = localStorageAccess.getAllGrades();
        const id = allGrades.length + 1 + Math.floor(Math.random() * 20);
        allGrades.push({ id, name, marks });
        localStorageAccess.saveAllGrades(allGrades);
        return allGrades;
    },
    deleteGrade: (id: number): Grade[] => {
        const allGrades = localStorageAccess.getAllGrades();
        const updatedGrades = allGrades.filter(grade => {
            return grade.id !== id;
        });
        localStorageAccess.saveAllGrades(updatedGrades);
        return updatedGrades;
    },
    updateGrade: (id: number, name: string, marks: number): Grade[] => {
        const allGrades = localStorageAccess.getAllGrades();
        const updatedGrades = allGrades.map(grade => {
            if (grade.id === id) {
                grade.name = name;
                grade.marks = marks;
            }

            return grade;
        });
        localStorageAccess.saveAllGrades(updatedGrades);
        return updatedGrades;
    }
};

export default localStorageAccess;

