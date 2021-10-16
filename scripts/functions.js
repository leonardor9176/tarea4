export function countStudents(jsonObject, levelWanted, genderWanted) {
    let includeElementary = false;
    let includeMidHig = false;
    let readParameter = false;
    let totalStudents = 0;
    if (levelWanted == 'colegio' || levelWanted == undefined) {
        includeElementary = true;
        includeMidHig = true;
        readParameter = true;
    }
    else if (levelWanted == 'primaria') {
        includeElementary = true;
        readParameter = true;
    }
    else if (levelWanted == 'secundaria') {
        includeMidHig = true;
        readParameter = true;
    }
    if (['niños', 'niñas', undefined].includes(genderWanted)) {
        readParameter *= 1;
        if (genderWanted == 'niños') {
            genderWanted = 'male';
        }
        else if (genderWanted == 'niñas') {
            genderWanted = 'female';
        }
    }
    else {
        readParameter = false;
    }
    if (readParameter) {
        let arrayKeys;
        if (includeElementary) {
            let elementaryJson = jsonObject[0].colegio.primaria[0];
            arrayKeys = Object.keys(elementaryJson);
            let elementaryDictionary = new Map();
            for (let i = 0; i < arrayKeys.length; i++) {
                elementaryDictionary.set(i, arrayKeys[i]);
            }
            for (let grade = 0; grade < arrayKeys.length; grade++) {
                if (genderWanted == undefined) {
                    totalStudents += elementaryJson[elementaryDictionary.get(grade)][0].estudiantes.length;
                    totalStudents += elementaryJson[elementaryDictionary.get(grade)][1].estudiantes.length;
                }
                else {
                    let arrayStudentsA = elementaryJson[elementaryDictionary.get(grade)][0].estudiantes;
                    let arrayStudentsB = elementaryJson[elementaryDictionary.get(grade)][1].estudiantes;
                    for (let studentsIter = 0; studentsIter < arrayStudentsA.length; studentsIter++) {
                        if (arrayStudentsA[studentsIter].genero == genderWanted) {
                            totalStudents++;
                        }
                    }
                    for (let studentsIter = 0; studentsIter < arrayStudentsB.length; studentsIter++) {
                        if (arrayStudentsB[studentsIter].genero == genderWanted) {
                            totalStudents++;
                        }
                    }
                }
            }
        }
        if (includeMidHig) {
            let migHigJson = jsonObject[0].colegio.secundaria[0];
            arrayKeys = Object.keys(migHigJson);
            let midHigDictionary = new Map();
            for (let i = 0; i < arrayKeys.length; i++) {
                midHigDictionary.set(i, arrayKeys[i]);
            }
            for (let grade = 0; grade < arrayKeys.length; grade++) {
                if (genderWanted == undefined) {
                    totalStudents += migHigJson[midHigDictionary.get(grade)][0].estudiantes.length;
                    totalStudents += migHigJson[midHigDictionary.get(grade)][1].estudiantes.length;
                }
                else {
                    let arrayStudentsA = migHigJson[midHigDictionary.get(grade)][0].estudiantes;
                    let arrayStudentsB = migHigJson[midHigDictionary.get(grade)][1].estudiantes;
                    for (let studentsIter = 0; studentsIter < arrayStudentsA.length; studentsIter++) {
                        if (arrayStudentsA[studentsIter].genero == genderWanted) {
                            totalStudents++;
                        }
                    }
                    for (let studentsIter = 0; studentsIter < arrayStudentsB.length; studentsIter++) {
                        if (arrayStudentsB[studentsIter].genero == genderWanted) {
                            totalStudents++;
                        }
                    }
                }
            }
        }
        return totalStudents
    }
    else {
        return undefined;
    }
}

function getScores(jsonObject, levelWanted) {
    let includeElementary = false;
    let includeMidHig = false;
    let readParameter = false;
    let limitOneGrade = false;
    let includeA = true;
    let includeB = true;
    let scores = [];
    if (levelWanted == 'colegio' || levelWanted == undefined) {
        includeElementary = true;
        includeMidHig = true;
        readParameter = true;
    }
    else if (levelWanted == 'primaria') {
        includeElementary = true;
        readParameter = true;
    }
    else if (levelWanted == 'secundaria') {
        includeMidHig = true;
        readParameter = true;
    }
    else if (['primero', 'segundo', 'tercero', 'cuarto', 'quinto'].includes(levelWanted)) {
        includeElementary = true;
        limitOneGrade = true;
        readParameter = true;
    }
    else if (['sexto', 'septimo', 'octavo', 'noveno', 'decimo', 'once'].includes(levelWanted)) {
        includeMidHig = true;
        limitOneGrade = true;
        readParameter = true;
    }
    else if (levelWanted.toLowerCase() == 'a') {
        includeElementary = true;
        includeMidHig = true;
        includeB = false;
        readParameter = true;
    }
    else if (levelWanted.toLowerCase() == 'b') {
        includeElementary = true;
        includeMidHig = true;
        includeA = false;
        readParameter = true;
    }
    if (readParameter) {
        let arrayKeys;
        let arraySubjects;
        let currentSubject;
        if (includeElementary) {
            let elementaryJson = jsonObject[0].colegio.primaria[0];
            let elementaryDictionary = new Map();
            if (limitOneGrade) {
                arrayKeys = [levelWanted];
                elementaryDictionary.set(0, levelWanted);
            }
            else {
                arrayKeys = Object.keys(elementaryJson);
                for (let i = 0; i < arrayKeys.length; i++) {
                    elementaryDictionary.set(i, arrayKeys[i]);
                }
            }
            for (let grade = 0; grade < arrayKeys.length; grade++) {
                if (includeA) {
                    let arrayStudentsA = elementaryJson[elementaryDictionary.get(grade)][0].estudiantes;
                    for (let studentsIter = 0; studentsIter < arrayStudentsA.length; studentsIter++) {
                        arraySubjects = arrayStudentsA[studentsIter].asignaturas;
                        for (let subjectsIter = 0; subjectsIter < arraySubjects.length; subjectsIter++) {
                            currentSubject = (Object.keys(arraySubjects[subjectsIter])[0]);
                            scores.push(arraySubjects[subjectsIter][currentSubject].primerCorte);
                            scores.push(arraySubjects[subjectsIter][currentSubject].segundoCorte);
                            scores.push(arraySubjects[subjectsIter][currentSubject].tercerCorte);
                            scores.push(arraySubjects[subjectsIter][currentSubject].cuartoCorte);
                        }
                    }
                }
                if (includeB) {
                    let arrayStudentsB = elementaryJson[elementaryDictionary.get(grade)][1].estudiantes;
                    for (let studentsIter = 0; studentsIter < arrayStudentsB.length; studentsIter++) {
                        arraySubjects = arrayStudentsB[studentsIter].asignaturas;
                        for (let subjectsIter = 0; subjectsIter < arraySubjects.length; subjectsIter++) {
                            currentSubject = (Object.keys(arraySubjects[subjectsIter])[0]);
                            scores.push(arraySubjects[subjectsIter][currentSubject].primerCorte);
                            scores.push(arraySubjects[subjectsIter][currentSubject].segundoCorte);
                            scores.push(arraySubjects[subjectsIter][currentSubject].tercerCorte);
                            scores.push(arraySubjects[subjectsIter][currentSubject].cuartoCorte);
                        }
                    }
                }

            }
        }
        if (includeMidHig) {
            let migHigJson = jsonObject[0].colegio.secundaria[0];
            let midHigDictionary = new Map();
            if (limitOneGrade) {
                arrayKeys = [levelWanted];
                midHigDictionary.set(0, levelWanted);
            }
            else {
                arrayKeys = Object.keys(migHigJson);
                for (let i = 0; i < arrayKeys.length; i++) {
                    midHigDictionary.set(i, arrayKeys[i]);
                }
            }
            for (let grade = 0; grade < arrayKeys.length; grade++) {
                if (includeA) {
                    let arrayStudentsA = migHigJson[midHigDictionary.get(grade)][0].estudiantes;
                    for (let studentsIter = 0; studentsIter < arrayStudentsA.length; studentsIter++) {
                        arraySubjects = arrayStudentsA[studentsIter].asignaturas;
                        for (let subjectsIter = 0; subjectsIter < arraySubjects.length; subjectsIter++) {
                            currentSubject = (Object.keys(arraySubjects[subjectsIter])[0]);
                            scores.push(arraySubjects[subjectsIter][currentSubject].primerCorte);
                            scores.push(arraySubjects[subjectsIter][currentSubject].segundoCorte);
                            scores.push(arraySubjects[subjectsIter][currentSubject].tercerCorte);
                            scores.push(arraySubjects[subjectsIter][currentSubject].cuartoCorte);
                        }
                    }
                }
                if (includeB) {
                    let arrayStudentsB = migHigJson[midHigDictionary.get(grade)][1].estudiantes;
                    for (let studentsIter = 0; studentsIter < arrayStudentsB.length; studentsIter++) {
                        arraySubjects = arrayStudentsB[studentsIter].asignaturas;
                        for (let subjectsIter = 0; subjectsIter < arraySubjects.length; subjectsIter++) {
                            currentSubject = (Object.keys(arraySubjects[subjectsIter])[0]);
                            scores.push(arraySubjects[subjectsIter][currentSubject].primerCorte);
                            scores.push(arraySubjects[subjectsIter][currentSubject].segundoCorte);
                            scores.push(arraySubjects[subjectsIter][currentSubject].tercerCorte);
                            scores.push(arraySubjects[subjectsIter][currentSubject].cuartoCorte);
                        }
                    }
                }
            }
        }
        scores.sort();
        return scores;
    }
    else {
        return undefined;
    }
}

export function getMean(jsonObject, levelWanted) {
    let scores = getScores(jsonObject, levelWanted);
    let mean;
    let accrual = 0;
    for (let scoresIterator = 0; scoresIterator < scores.length; scoresIterator++) {
        accrual += scores[scoresIterator];
    }
    mean = accrual / scores.length;
    return mean;
}

export function getMode(jsonObject, levelWanted) {
    let scores = getScores(jsonObject, levelWanted);
    let mode;
    let modeRepetitions = 0;
    let previousScore = scores[0];
    let previousRepetitions = 1;
    for (let scoresIterator = 1; scoresIterator < scores.length; scoresIterator++) {
        if (previousScore == scores[scoresIterator]) {
            previousRepetitions++;
            if (previousRepetitions > modeRepetitions) {
                mode = previousScore;
                modeRepetitions = previousRepetitions;
            }
        }
        else {
            previousScore = scores[scoresIterator];
            previousRepetitions = 1;
        }
    }
    return mode;
}

export function getMedian(jsonObject, levelWanted) {
    let scores = getScores(jsonObject, levelWanted);
    let median;
    if (scores.length % 2 == 0) {
        let score1 = scores[(scores.length / 2) - 1];
        let score2 = scores[(scores.length / 2)];
        median = (score1 + score2) / 2;
    }
    else {
        median = scores[(scores.length - 1) / 2]
    }
    return median;
}

function compareHigherScores(objectSource, studentData, subjectToCheck) {
    let objectSourceAux = objectSource;
    let objectTemp = {};
    if (!((Object.keys(objectSource)).includes(subjectToCheck))) {
        objectTemp = {
            'grade': studentData.grade,
            'course': studentData.course,
            'name': studentData.name,
            'score': studentData.score
        };
        objectSourceAux[subjectToCheck] = objectTemp;
    }
    else if (studentData.score > objectSource[subjectToCheck]['score']) {
        objectTemp = {
            'grade': studentData.grade,
            'course': studentData.course,
            'name': studentData.name,
            'score': studentData.score
        }
        objectSourceAux[subjectToCheck] = objectTemp;
    }
    return objectSourceAux;
}

export function getHigherScoresBySubject(jsonObject, levelWanted) {
    let includeElementary = false;
    let includeMidHig = false;
    let readParameter = false;
    let limitOneGrade = false;
    let includeA = true;
    let includeB = true;
    if (levelWanted == 'colegio' || levelWanted == undefined) {
        includeElementary = true;
        includeMidHig = true;
        readParameter = true;
    }
    else if (levelWanted == 'primaria') {
        includeElementary = true;
        readParameter = true;
    }
    else if (levelWanted == 'secundaria') {
        includeMidHig = true;
        readParameter = true;
    }
    else if (['primero', 'segundo', 'tercero', 'cuarto', 'quinto'].includes(levelWanted)) {
        includeElementary = true;
        limitOneGrade = true;
        readParameter = true;
    }
    else if (['sexto', 'septimo', 'octavo', 'noveno', 'decimo', 'once'].includes(levelWanted)) {
        includeMidHig = true;
        limitOneGrade = true;
        readParameter = true;
    }
    else if (levelWanted.toLowerCase() == 'a') {
        includeElementary = true;
        includeMidHig = true;
        includeB = false;
        readParameter = true;
    }
    else if (levelWanted.toLowerCase() == 'b') {
        includeElementary = true;
        includeMidHig = true;
        includeA = false;
        readParameter = true;
    }
    if (readParameter) {
        let arrayKeys;
        let arraySubjects;
        let higherScores = {};
        let currentSubject;
        if (includeElementary) {
            let elementaryJson = jsonObject[0].colegio.primaria[0];
            let elementaryDictionary = new Map();
            if (limitOneGrade) {
                arrayKeys = [levelWanted];
                elementaryDictionary.set(0, levelWanted);
            }
            else {
                arrayKeys = Object.keys(elementaryJson);
                for (let i = 0; i < arrayKeys.length; i++) {
                    elementaryDictionary.set(i, arrayKeys[i]);
                }
            }
            for (let grade = 0; grade < arrayKeys.length; grade++) {
                if (includeA) {
                    let currentGrade = elementaryDictionary.get(grade);
                    let currentCourse = elementaryJson[elementaryDictionary.get(grade)][0].curso;
                    let arrayStudentsA = elementaryJson[elementaryDictionary.get(grade)][0].estudiantes;
                    for (let studentsIter = 0; studentsIter < arrayStudentsA.length; studentsIter++) {
                        arraySubjects = arrayStudentsA[studentsIter].asignaturas;
                        for (let subjectsIter = 0; subjectsIter < arraySubjects.length; subjectsIter++) {
                            currentSubject = (Object.keys(arraySubjects[subjectsIter])[0]);
                            let sumScores = 0;
                            sumScores += arraySubjects[subjectsIter][currentSubject].primerCorte;
                            sumScores += arraySubjects[subjectsIter][currentSubject].segundoCorte;
                            sumScores += arraySubjects[subjectsIter][currentSubject].tercerCorte;
                            sumScores += arraySubjects[subjectsIter][currentSubject].cuartoCorte;
                            let subjectScore = sumScores / 4;
                            let studentInformation = {
                                'grade': currentGrade,
                                'course': currentCourse,
                                'name': arrayStudentsA[studentsIter].nombre,
                                'score': subjectScore
                            };
                            higherScores = compareHigherScores(higherScores, studentInformation, currentSubject);
                        }
                    }
                }
                if (includeB) {
                    let currentGrade = elementaryDictionary.get(grade);
                    let currentCourse = elementaryJson[elementaryDictionary.get(grade)][1].curso;
                    let arrayStudentsB = elementaryJson[elementaryDictionary.get(grade)][1].estudiantes;
                    for (let studentsIter = 0; studentsIter < arrayStudentsB.length; studentsIter++) {
                        arraySubjects = arrayStudentsB[studentsIter].asignaturas;
                        for (let subjectsIter = 0; subjectsIter < arraySubjects.length; subjectsIter++) {
                            currentSubject = (Object.keys(arraySubjects[subjectsIter])[0]);
                            let sumScores = 0;
                            sumScores += arraySubjects[subjectsIter][currentSubject].primerCorte;
                            sumScores += arraySubjects[subjectsIter][currentSubject].segundoCorte;
                            sumScores += arraySubjects[subjectsIter][currentSubject].tercerCorte;
                            sumScores += arraySubjects[subjectsIter][currentSubject].cuartoCorte;
                            let subjectScore = sumScores / 4;
                            let studentInformation = {
                                'grade': currentGrade,
                                'course': currentCourse,
                                'name': arrayStudentsB[studentsIter].nombre,
                                'score': subjectScore
                            };
                            higherScores = compareHigherScores(higherScores, studentInformation, currentSubject);
                        }
                    }
                }

            }
        }
        if (includeMidHig) {
            let migHigJson = jsonObject[0].colegio.secundaria[0];
            let midHigDictionary = new Map();
            if (limitOneGrade) {
                arrayKeys = [levelWanted];
                midHigDictionary.set(0, levelWanted);
            }
            else {
                arrayKeys = Object.keys(migHigJson);
                for (let i = 0; i < arrayKeys.length; i++) {
                    midHigDictionary.set(i, arrayKeys[i]);
                }
            }
            for (let grade = 0; grade < arrayKeys.length; grade++) {
                if (includeA) {
                    let currentGrade = midHigDictionary.get(grade);
                    let currentCourse = migHigJson[midHigDictionary.get(grade)][0].curso;
                    let arrayStudentsA = migHigJson[midHigDictionary.get(grade)][0].estudiantes;
                    for (let studentsIter = 0; studentsIter < arrayStudentsA.length; studentsIter++) {
                        arraySubjects = arrayStudentsA[studentsIter].asignaturas;
                        for (let subjectsIter = 0; subjectsIter < arraySubjects.length; subjectsIter++) {
                            currentSubject = (Object.keys(arraySubjects[subjectsIter])[0]);
                            let sumScores = 0;
                            sumScores += arraySubjects[subjectsIter][currentSubject].primerCorte;
                            sumScores += arraySubjects[subjectsIter][currentSubject].segundoCorte;
                            sumScores += arraySubjects[subjectsIter][currentSubject].tercerCorte;
                            sumScores += arraySubjects[subjectsIter][currentSubject].cuartoCorte;
                            let subjectScore = sumScores / 4;
                            let studentInformation = {
                                'grade': currentGrade,
                                'course': currentCourse,
                                'name': arrayStudentsA[studentsIter].nombre,
                                'score': subjectScore
                            };
                            higherScores = compareHigherScores(higherScores, studentInformation, currentSubject);
                        }
                    }
                }
                if (includeB) {
                    let currentGrade = midHigDictionary.get(grade);
                    let currentCourse = migHigJson[midHigDictionary.get(grade)][1].curso;
                    let arrayStudentsB = migHigJson[midHigDictionary.get(grade)][1].estudiantes;
                    for (let studentsIter = 0; studentsIter < arrayStudentsB.length; studentsIter++) {
                        arraySubjects = arrayStudentsB[studentsIter].asignaturas;
                        for (let subjectsIter = 0; subjectsIter < arraySubjects.length; subjectsIter++) {
                            currentSubject = (Object.keys(arraySubjects[subjectsIter])[0]);
                            let sumScores = 0;
                            sumScores += arraySubjects[subjectsIter][currentSubject].primerCorte;
                            sumScores += arraySubjects[subjectsIter][currentSubject].segundoCorte;
                            sumScores += arraySubjects[subjectsIter][currentSubject].tercerCorte;
                            sumScores += arraySubjects[subjectsIter][currentSubject].cuartoCorte;
                            let subjectScore = sumScores / 4;
                            let studentInformation = {
                                'grade': currentGrade,
                                'course': currentCourse,
                                'name': arrayStudentsB[studentsIter].nombre,
                                'score': subjectScore
                            };
                            higherScores = compareHigherScores(higherScores, studentInformation, currentSubject);
                        }
                    }
                }
            }
        }
        return higherScores;
    }
    else {
        return undefined;
    }
}

function compareAvgScore(objectSource, studentData) {
    let objectTemp = objectSource;
    if ((Object.keys(objectSource)).length == 0) {
        objectTemp = studentData;
    }
    else if (studentData.score > objectSource.score) {
        objectTemp = studentData;
    }
    return objectTemp;
}

export function getStudentHigherAvgScore(jsonObject, levelWanted) {
    let includeElementary = false;
    let includeMidHig = false;
    let readParameter = false;
    let limitOneGrade = false;
    let includeA = true;
    let includeB = true;
    if (levelWanted == 'colegio' || levelWanted == undefined) {
        includeElementary = true;
        includeMidHig = true;
        readParameter = true;
    }
    else if (levelWanted == 'primaria') {
        includeElementary = true;
        readParameter = true;
    }
    else if (levelWanted == 'secundaria') {
        includeMidHig = true;
        readParameter = true;
    }
    else if (['primero', 'segundo', 'tercero', 'cuarto', 'quinto'].includes(levelWanted)) {
        includeElementary = true;
        limitOneGrade = true;
        readParameter = true;
    }
    else if (['sexto', 'septimo', 'octavo', 'noveno', 'decimo', 'once'].includes(levelWanted)) {
        includeMidHig = true;
        limitOneGrade = true;
        readParameter = true;
    }
    else if (levelWanted.toLowerCase() == 'a') {
        includeElementary = true;
        includeMidHig = true;
        includeB = false;
        readParameter = true;
    }
    else if (levelWanted.toLowerCase() == 'b') {
        includeElementary = true;
        includeMidHig = true;
        includeA = false;
        readParameter = true;
    }
    if (readParameter) {
        let arrayKeys;
        let arraySubjects;
        let higherScore = {};
        let studentScores = [];
        let avgScore = 0;
        let currentSubject;
        if (includeElementary) {
            let elementaryJson = jsonObject[0].colegio.primaria[0];
            let elementaryDictionary = new Map();
            if (limitOneGrade) {
                arrayKeys = [levelWanted];
                elementaryDictionary.set(0, levelWanted);
            }
            else {
                arrayKeys = Object.keys(elementaryJson);
                for (let i = 0; i < arrayKeys.length; i++) {
                    elementaryDictionary.set(i, arrayKeys[i]);
                }
            }
            for (let grade = 0; grade < arrayKeys.length; grade++) {
                if (includeA) {
                    let currentGrade = elementaryDictionary.get(grade);
                    let currentCourse = elementaryJson[elementaryDictionary.get(grade)][0].curso;
                    let arrayStudentsA = elementaryJson[elementaryDictionary.get(grade)][0].estudiantes;
                    for (let studentsIter = 0; studentsIter < arrayStudentsA.length; studentsIter++) {
                        studentScores = [];
                        arraySubjects = arrayStudentsA[studentsIter].asignaturas;
                        for (let subjectsIter = 0; subjectsIter < arraySubjects.length; subjectsIter++) {
                            currentSubject = (Object.keys(arraySubjects[subjectsIter])[0]);
                            let sumScores = 0;
                            sumScores += arraySubjects[subjectsIter][currentSubject].primerCorte;
                            sumScores += arraySubjects[subjectsIter][currentSubject].segundoCorte;
                            sumScores += arraySubjects[subjectsIter][currentSubject].tercerCorte;
                            sumScores += arraySubjects[subjectsIter][currentSubject].cuartoCorte;
                            let subjectScore = sumScores / 4;
                            studentScores.push(subjectScore);
                        }
                        let sumScoresSubject = 0;
                        for (let s = 0; s < studentScores.length; s++) {
                            sumScoresSubject += studentScores[s];
                        }
                        avgScore = sumScoresSubject / studentScores.length;
                        let studentInformation = {
                            'grade': currentGrade,
                            'course': currentCourse,
                            'name': arrayStudentsA[studentsIter].nombre,
                            'score': avgScore
                        };
                        higherScore = compareAvgScore(higherScore, studentInformation);
                    }
                }
                if (includeB) {
                    let currentGrade = elementaryDictionary.get(grade);
                    let currentCourse = elementaryJson[elementaryDictionary.get(grade)][1].curso;
                    let arrayStudentsB = elementaryJson[elementaryDictionary.get(grade)][1].estudiantes;
                    for (let studentsIter = 0; studentsIter < arrayStudentsB.length; studentsIter++) {
                        studentScores = [];
                        arraySubjects = arrayStudentsB[studentsIter].asignaturas;
                        for (let subjectsIter = 0; subjectsIter < arraySubjects.length; subjectsIter++) {
                            currentSubject = (Object.keys(arraySubjects[subjectsIter])[0]);
                            let sumScores = 0;
                            sumScores += arraySubjects[subjectsIter][currentSubject].primerCorte;
                            sumScores += arraySubjects[subjectsIter][currentSubject].segundoCorte;
                            sumScores += arraySubjects[subjectsIter][currentSubject].tercerCorte;
                            sumScores += arraySubjects[subjectsIter][currentSubject].cuartoCorte;
                            let subjectScore = sumScores / 4;
                            studentScores.push(subjectScore);
                        }
                        let sumScoresSubject = 0;
                        for (let s = 0; s < studentScores.length; s++) {
                            sumScoresSubject += studentScores[s];
                        }
                        avgScore = sumScoresSubject / studentScores.length;
                        let studentInformation = {
                            'grade': currentGrade,
                            'course': currentCourse,
                            'name': arrayStudentsB[studentsIter].nombre,
                            'score': avgScore
                        };
                        higherScore = compareAvgScore(higherScore, studentInformation);
                    }
                }

            }
        }
        if (includeMidHig) {
            let migHigJson = jsonObject[0].colegio.secundaria[0];
            let midHigDictionary = new Map();
            if (limitOneGrade) {
                arrayKeys = [levelWanted];
                midHigDictionary.set(0, levelWanted);
            }
            else {
                arrayKeys = Object.keys(migHigJson);
                for (let i = 0; i < arrayKeys.length; i++) {
                    midHigDictionary.set(i, arrayKeys[i]);
                }
            }
            for (let grade = 0; grade < arrayKeys.length; grade++) {
                if (includeA) {
                    let currentGrade = midHigDictionary.get(grade);
                    let currentCourse = migHigJson[midHigDictionary.get(grade)][0].curso;
                    let arrayStudentsA = migHigJson[midHigDictionary.get(grade)][0].estudiantes;
                    for (let studentsIter = 0; studentsIter < arrayStudentsA.length; studentsIter++) {
                        studentScores = [];
                        arraySubjects = arrayStudentsA[studentsIter].asignaturas;
                        for (let subjectsIter = 0; subjectsIter < arraySubjects.length; subjectsIter++) {
                            currentSubject = (Object.keys(arraySubjects[subjectsIter])[0]);
                            let sumScores = 0;
                            sumScores += arraySubjects[subjectsIter][currentSubject].primerCorte;
                            sumScores += arraySubjects[subjectsIter][currentSubject].segundoCorte;
                            sumScores += arraySubjects[subjectsIter][currentSubject].tercerCorte;
                            sumScores += arraySubjects[subjectsIter][currentSubject].cuartoCorte;
                            let subjectScore = sumScores / 4;
                            studentScores.push(subjectScore);
                        }
                        let sumScoresSubject = 0;
                        for (let s = 0; s < studentScores.length; s++) {
                            sumScoresSubject += studentScores[s];
                        }
                        avgScore = sumScoresSubject / studentScores.length;
                        let studentInformation = {
                            'grade': currentGrade,
                            'course': currentCourse,
                            'name': arrayStudentsA[studentsIter].nombre,
                            'score': avgScore
                        };
                        higherScore = compareAvgScore(higherScore, studentInformation);
                    }
                }
                if (includeB) {
                    let currentGrade = midHigDictionary.get(grade);
                    let currentCourse = migHigJson[midHigDictionary.get(grade)][1].curso;
                    let arrayStudentsB = migHigJson[midHigDictionary.get(grade)][1].estudiantes;
                    for (let studentsIter = 0; studentsIter < arrayStudentsB.length; studentsIter++) {
                        studentScores = [];
                        arraySubjects = arrayStudentsB[studentsIter].asignaturas;
                        for (let subjectsIter = 0; subjectsIter < arraySubjects.length; subjectsIter++) {
                            currentSubject = (Object.keys(arraySubjects[subjectsIter])[0]);
                            let sumScores = 0;
                            sumScores += arraySubjects[subjectsIter][currentSubject].primerCorte;
                            sumScores += arraySubjects[subjectsIter][currentSubject].segundoCorte;
                            sumScores += arraySubjects[subjectsIter][currentSubject].tercerCorte;
                            sumScores += arraySubjects[subjectsIter][currentSubject].cuartoCorte;
                            let subjectScore = sumScores / 4;
                            studentScores.push(subjectScore);
                        }
                        let sumScoresSubject = 0;
                        for (let s = 0; s < studentScores.length; s++) {
                            sumScoresSubject += studentScores[s];
                        }
                        avgScore = sumScoresSubject / studentScores.length;
                        let studentInformation = {
                            'grade': currentGrade,
                            'course': currentCourse,
                            'name': arrayStudentsB[studentsIter].nombre,
                            'score': avgScore
                        };
                        higherScore = compareAvgScore(higherScore, studentInformation);
                    }
                }
            }
        }
        return higherScore;
    }
    else {
        return undefined;
    }
}

export function getStudentOfGrade(jsonObject, gradeWanted) {
    let stagesList = ['primaria', 'secundaria'];
    let gradesElementaryList = ['primero', 'segundo', 'tercero', 'cuarto', 'quinto'];
    let gradesMidHigList = ['sexto', 'septimo', 'octavo', 'noveno', 'decimo', 'once'];
    let coursesList = ['A', 'B'];
    if (gradesElementaryList.includes(gradeWanted) || gradesMidHigList.includes(gradeWanted)) {
        let currentStage;
        let currentGrade;
        let currentCourse;

        if (gradesElementaryList.includes(gradeWanted)) {
            currentStage = stagesList[0];
        }
        else {
            currentStage = stagesList[1];
        }
        currentGrade = gradeWanted;
        currentCourse = Math.round(Math.random() * (coursesList.length - 1));
        let studentsList = jsonObject[0].colegio[currentStage][0][currentGrade][currentCourse].estudiantes;
        let currentStudent = Math.round(Math.random() * (studentsList.length - 1))
        let student = {
            stage: currentStage,
            grade: currentGrade,
            course: coursesList[currentCourse],
            name: studentsList[currentStudent].nombre,
            gender: studentsList[currentStudent].genero
        };
        return student;
    }
    else {
        return undefined;
    }
}

export function sayHi(name) {
    if (name == undefined) {
        console.log('hi');
    }
    else {
        console.log(`hi ${name}`)
    }

}

// console.log(countStudents(schoolJson, 'colegio', 'niños'));
// console.log(countStudents(schoolJson, 'primaria', 'niños'));
// console.log(countStudents(schoolJson, 'sexto', 'niñas'));
// console.log(getMean(schoolJson, 'colegio'))

