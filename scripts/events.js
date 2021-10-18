import * as functionsT3 from './functions.js';
import { schoolJson } from '../data/data.js';

function printObject(object, divContainerId) {
    const divContainer = document.getElementById(divContainerId);
    let objectKeys = Object.keys(object);
    for (let key in objectKeys) {
        if (typeof object[objectKeys[key]] == 'object') {
            const pObjectKey = document.createElement('p');
            pObjectKey.setAttribute('class', 'object-key1');
            pObjectKey.innerText = `${objectKeys[key]}:`;
            divContainer.appendChild(pObjectKey);

            printObject(object[objectKeys[key]], divContainerId);
        }
        else {
            const pObject = document.createElement('p');
            const spanObjectKey = document.createElement('span');
            spanObjectKey.setAttribute('class', 'object-key2');
            spanObjectKey.innerText = `${objectKeys[key]}: `;

            const spanObjectValue = document.createElement('span');
            spanObjectValue.setAttribute('class', 'object-value');
            spanObjectValue.innerText = `${object[objectKeys[key]]}`;

            pObject.appendChild(spanObjectKey);
            pObject.appendChild(spanObjectValue);
            divContainer.appendChild(pObject);
        }
    }
}

// Student information display
const navBar = document.querySelectorAll('.nav-list-div-element-course-a');//nav-list-div-element-course-a
for (let i = 0; i < navBar.length; i++) {
    navBar[i].addEventListener('click', (clicCourse) => {

        const checkDivStudentsInformation = document.getElementById('div-Students-information');
        if (document.body.contains(checkDivStudentsInformation)) {
            const father = checkDivStudentsInformation.parentElement;
            father.removeChild(checkDivStudentsInformation);
        }

        const bodyMain = document.getElementById('body-main');

        const divSutudentsInformation = document.createElement('div');
        divSutudentsInformation.setAttribute('id', 'div-Students-information');

        const h2SutudentsInformation = document.createElement('h2');
        h2SutudentsInformation.innerText = 'Información de Estudiantes';

        bodyMain.appendChild(divSutudentsInformation);
        divSutudentsInformation.appendChild(h2SutudentsInformation);

        const divFilter = document.getElementById('div-filter');
        divFilter.before(divSutudentsInformation);

        const currentCourse = (clicCourse.target.innerText == 'A') ? 0 : 1;

        const currentGrade = navBar[i].parentElement.parentElement.parentElement.getElementsByClassName('nav-list-div-li-a')[0].innerText.toLowerCase();

        let currentStage;
        if ((['primero', 'segundo', 'tercero', 'cuarto', 'quinto']).includes(currentGrade)) {
            currentStage = 'primaria';
        }
        else {
            currentStage = 'secundaria';
        }
        const courseJson = schoolJson[0].colegio[currentStage][0][currentGrade][currentCourse].estudiantes;
        // console.log(courseJson);

        const h3SutudentsInformation = document.createElement('h3');
        h3SutudentsInformation.innerText = `${currentGrade} ${clicCourse.target.innerText}`;
        divSutudentsInformation.appendChild(h3SutudentsInformation);

        const divSutudentsInformation2 = document.createElement('div');
        divSutudentsInformation2.setAttribute('id', 'div-Students-information-2');
        divSutudentsInformation.appendChild(divSutudentsInformation2);

        for (let student in courseJson) {
            const pStudent = document.createElement('p');
            pStudent.setAttribute('class', 'p-Students-information');
            // pStudent.setAttribute('href','#');

            const studentKeys = Object.keys(courseJson[student]);
            for (let key in studentKeys) {
                if (typeof (courseJson[student][studentKeys[key]]) != 'object') {
                    const spanStudent = document.createElement('span');
                    spanStudent.innerText += `${studentKeys[key]}: ${courseJson[student][studentKeys[key]]}         `;
                    pStudent.appendChild(spanStudent);
                }
                
            }
            divSutudentsInformation2.appendChild(pStudent);
        }

    });
}


// searching functions actions
const divFilter = document.getElementById('div-filter');

const checkSelectFunction = document.getElementById('select-function');
if (document.body.contains(checkSelectFunction) == true) {

    let answerTemplate = new Map();
    answerTemplate.set(0, `El total de `);
    answerTemplate.set(1, `La media de totas las notas en `);
    answerTemplate.set(2, `La moda de las totas las notas en `);
    answerTemplate.set(3, `La mediana de totas las notas en `);
    answerTemplate.set(41, `El estudiante con mejor nota promedio en `);
    answerTemplate.set(42, `Los estudiante con mejor nota promedio en cada materia son: `);
    answerTemplate.set(5, `Un estudiante de grado `);

    let answerTemplateOption = new Map();
    answerTemplateOption.set('colegio', `el colegio es: `);
    answerTemplateOption.set('primaria', `primaria es: `);
    answerTemplateOption.set('secundaria', `secundaria es: `);
    answerTemplateOption.set('grade', `grado `);
    answerTemplateOption.set('course', `los cursos `);
    answerTemplateOption.set('estudiantes', `estudiantes en `);
    answerTemplateOption.set('niños', `niños en `);
    answerTemplateOption.set('niñas', `niñas en `);

    const selectFunction = document.querySelector('#select-function');

    selectFunction.addEventListener('change', (eventFunctOpt1) => {

        const valueSelectOpt1 = eventFunctOpt1.target.value;
        const checkDivopt1 = document.getElementById('div-opt1');
        if (document.body.contains(checkDivopt1) == true) {
            const check2 = document.getElementById('form-function-selector')
            check2.removeChild(checkDivopt1);
        }
        if (valueSelectOpt1 != '') {
            const divOption1 = document.createElement('div');
            divOption1.setAttribute('id', 'div-opt1');

            const labelOption1 = document.createElement('label');
            labelOption1.setAttribute('for', 'func-opt1');

            const selectOption1 = document.createElement('select');
            selectOption1.setAttribute('name', 'func-opt1');
            selectOption1.setAttribute('id', 'func-opt1');

            const formFunctionSelector = document.getElementById('form-function-selector');
            formFunctionSelector.appendChild(divOption1);
            divOption1.appendChild(labelOption1);
            divOption1.appendChild(selectOption1);

            if (valueSelectOpt1 == 'count-students') {
                labelOption1.innerText = `¿Donde deseas realizar el conteo de estudiantes?`;

                const opt10 = document.createElement('option');
                opt10.setAttribute('value', '')
                opt10.setAttribute('selected', 'selected')
                opt10.innerText = `Selecciona una opción`;
                selectOption1.appendChild(opt10);

                const opt11 = document.createElement('option');
                opt11.setAttribute('value', 'colegio')
                opt11.innerText = `Estudiantes del colegio`;
                selectOption1.appendChild(opt11);

                const opt12 = document.createElement('option');
                opt12.setAttribute('value', 'primaria')
                opt12.innerText = `Estudiantes de primaria`;
                selectOption1.appendChild(opt12);

                const opt13 = document.createElement('option');
                opt13.setAttribute('value', 'secundaria')
                opt13.innerText = `Estudiantes de secundaria`;
                selectOption1.appendChild(opt13);
            }
            else if (valueSelectOpt1 == 'calc-mean') {
                labelOption1.innerText = `¿Donde deseas calcular la media?`;

                const opt10 = document.createElement('option');
                opt10.setAttribute('value', '')
                opt10.setAttribute('selected', 'selected')
                opt10.innerText = `Selecciona una opción`;
                selectOption1.appendChild(opt10);

                const opt11 = document.createElement('option');
                opt11.setAttribute('value', 'colegio')
                opt11.innerText = `Notas de todo el colegio`;
                selectOption1.appendChild(opt11);

                const opt12 = document.createElement('option');
                opt12.setAttribute('value', 'primaria')
                opt12.innerText = `Notas de primaria`;
                selectOption1.appendChild(opt12);

                const opt13 = document.createElement('option');
                opt13.setAttribute('value', 'secundaria')
                opt13.innerText = `Notas de secundaria`;
                selectOption1.appendChild(opt13);

                const opt14 = document.createElement('option');
                opt14.setAttribute('value', 'grade')
                opt14.innerText = `Notas de un grado`;
                selectOption1.appendChild(opt14);

                const opt15 = document.createElement('option');
                opt15.setAttribute('value', 'course')
                opt15.innerText = `Notas de cursos`;
                selectOption1.appendChild(opt15);
            }
            else if (valueSelectOpt1 == 'calc-mode') {
                labelOption1.innerText = `¿Donde deseas calcular la moda?`;

                const opt10 = document.createElement('option');
                opt10.setAttribute('value', '')
                opt10.setAttribute('selected', 'selected')
                opt10.innerText = `Selecciona una opción`;
                selectOption1.appendChild(opt10);

                const opt11 = document.createElement('option');
                opt11.setAttribute('value', 'colegio')
                opt11.innerText = `Notas de todo el colegio`;
                selectOption1.appendChild(opt11);

                const opt12 = document.createElement('option');
                opt12.setAttribute('value', 'primaria')
                opt12.innerText = `Notas de primaria`;
                selectOption1.appendChild(opt12);

                const opt13 = document.createElement('option');
                opt13.setAttribute('value', 'secundaria')
                opt13.innerText = `Notas de secundaria`;
                selectOption1.appendChild(opt13);

                const opt14 = document.createElement('option');
                opt14.setAttribute('value', 'grade')
                opt14.innerText = `Notas de un grado`;
                selectOption1.appendChild(opt14);

                const opt15 = document.createElement('option');
                opt15.setAttribute('value', 'course')
                opt15.innerText = `Notas de cursos`;
                selectOption1.appendChild(opt15);
            }
            else if (valueSelectOpt1 == 'calc-median') {
                labelOption1.innerText = `¿Donde deseas calcular la media?`;

                const opt10 = document.createElement('option');
                opt10.setAttribute('value', '')
                opt10.setAttribute('selected', 'selected')
                opt10.innerText = `Selecciona una opción`;
                selectOption1.appendChild(opt10);

                const opt11 = document.createElement('option');
                opt11.setAttribute('value', 'colegio')
                opt11.innerText = `Notas de todo el colegio`;
                selectOption1.appendChild(opt11);

                const opt12 = document.createElement('option');
                opt12.setAttribute('value', 'primaria')
                opt12.innerText = `Notas de primaria`;
                selectOption1.appendChild(opt12);

                const opt13 = document.createElement('option');
                opt13.setAttribute('value', 'secundaria')
                opt13.innerText = `Notas de secundaria`;
                selectOption1.appendChild(opt13);

                const opt14 = document.createElement('option');
                opt14.setAttribute('value', 'grade')
                opt14.innerText = `Notas de un grado`;
                selectOption1.appendChild(opt14);

                const opt15 = document.createElement('option');
                opt15.setAttribute('value', 'course')
                opt15.innerText = `Notas de cursos`;
                selectOption1.appendChild(opt15);
            }
            else if (valueSelectOpt1 == 'show-best-scores') {
                labelOption1.innerText = `¿Las notas de qué estudiante deseas ver?`;

                const opt10 = document.createElement('option');
                opt10.setAttribute('value', '')
                opt10.setAttribute('selected', 'selected')
                opt10.innerText = `Selecciona una opción`;
                selectOption1.appendChild(opt10);

                const opt11 = document.createElement('option');
                opt11.setAttribute('value', 'colegio')
                opt11.innerText = `Estudiante con mejor nota promedio en todo el colegio`;
                selectOption1.appendChild(opt11);

                const opt12 = document.createElement('option');
                opt12.setAttribute('value', 'primaria')
                opt12.innerText = `Estudiante con mejor nota promedio en primaria`;
                selectOption1.appendChild(opt12);

                const opt13 = document.createElement('option');
                opt13.setAttribute('value', 'secundaria')
                opt13.innerText = `Estudiante con mejor nota promedio en secundaria`;
                selectOption1.appendChild(opt13);

                const opt14 = document.createElement('option');
                opt14.setAttribute('value', 'grade')
                opt14.innerText = `Estudiante con mejor nota promedio en un grado`;
                selectOption1.appendChild(opt14);

                const opt15 = document.createElement('option');
                opt15.setAttribute('value', 'course')
                opt15.innerText = `Estudiante con mejor nota promedio en los cursos`;
                selectOption1.appendChild(opt15);

                const opt16 = document.createElement('option');
                opt16.setAttribute('value', 'subjects')
                opt16.innerText = `Estudiantes con mejor nota promedio en cada materia `;
                selectOption1.appendChild(opt16);
            }
            else if (valueSelectOpt1 == 'show-student') {

                labelOption1.innerText = `¿Un estudiante de que grado deseas ver?`;

                const opt10 = document.createElement('option');
                opt10.setAttribute('value', '')
                opt10.setAttribute('selected', 'selected')
                opt10.innerText = `Selecciona una opción`;
                selectOption1.appendChild(opt10);

                const opt11 = document.createElement('option');
                opt11.setAttribute('value', 'primero')
                opt11.innerText = `Primero`;
                selectOption1.appendChild(opt11);

                const opt12 = document.createElement('option');
                opt12.setAttribute('value', 'segundo')
                opt12.innerText = `Segundo`;
                selectOption1.appendChild(opt12);

                const opt13 = document.createElement('option');
                opt13.setAttribute('value', 'tercero')
                opt13.innerText = `Tercero`;
                selectOption1.appendChild(opt13);

                const opt14 = document.createElement('option');
                opt14.setAttribute('value', 'cuarto')
                opt14.innerText = `Cuarto`;
                selectOption1.appendChild(opt14);

                const opt15 = document.createElement('option');
                opt15.setAttribute('value', 'quinto')
                opt15.innerText = `Quinto`;
                selectOption1.appendChild(opt15);

                const opt16 = document.createElement('option');
                opt16.setAttribute('value', 'sexto')
                opt16.innerText = `Sexto`;
                selectOption1.appendChild(opt16);

                const opt17 = document.createElement('option');
                opt17.setAttribute('value', 'septimo')
                opt17.innerText = `Septimo`;
                selectOption1.appendChild(opt17);

                const opt18 = document.createElement('option');
                opt18.setAttribute('value', 'octavo')
                opt18.innerText = `Octavo`;
                selectOption1.appendChild(opt18);

                const opt19 = document.createElement('option');
                opt19.setAttribute('value', 'noveno')
                opt19.innerText = `Noveno`;
                selectOption1.appendChild(opt19);

                const opt110 = document.createElement('option');
                opt110.setAttribute('value', 'decimo')
                opt110.innerText = `Decimo`;
                selectOption1.appendChild(opt110);

                const opt111 = document.createElement('option');
                opt111.setAttribute('value', 'once')
                opt111.innerText = `Once`;
                selectOption1.appendChild(opt111);
            }

            const checkFuncOpt1 = document.getElementById('func-opt1');
            if (document.body.contains(checkFuncOpt1) == true) {
                const selectFunctionOpt1 = document.querySelector('#func-opt1');

                selectFunctionOpt1.addEventListener('change', (eventFunctOpt2) => {

                    const valueSelectOpt2 = eventFunctOpt2.target.value;

                    const checkDivOpt2 = document.getElementById('div-opt2');
                    if ((document.body.contains(checkDivOpt2) == true)) {
                        const check2 = document.getElementById('div-opt1')
                        check2.removeChild(checkDivOpt2);
                    }

                    if (valueSelectOpt2 != '') {
                        const divOption2 = document.createElement('div');
                        divOption2.setAttribute('id', 'div-opt2');

                        const divOption1 = document.getElementById('div-opt1');
                        divOption1.appendChild(divOption2);

                        if (valueSelectOpt1 == 'count-students') {
                            const labelOption2 = document.createElement('label');
                            labelOption2.setAttribute('for', 'func-opt2');

                            const selectOption2 = document.createElement('select');
                            selectOption2.setAttribute('name', 'func-opt2');
                            selectOption2.setAttribute('id', 'func-opt2');

                            divOption2.appendChild(labelOption2);
                            divOption2.appendChild(selectOption2);

                            labelOption2.innerText = `¿Deseas filtrar el conteo por género?`;

                            const opt20 = document.createElement('option');
                            opt20.setAttribute('value', '')
                            opt20.setAttribute('selected', 'selected')
                            opt20.innerText = `Selecciona una opción`;
                            selectOption2.appendChild(opt20);

                            const opt21 = document.createElement('option');
                            opt21.setAttribute('value', 'any')
                            opt21.innerText = `No, contar niños y niñas`;
                            selectOption2.appendChild(opt21);

                            const opt22 = document.createElement('option');
                            opt22.setAttribute('value', 'niños')
                            opt22.innerText = `Si, contar solo niños`;
                            selectOption2.appendChild(opt22);

                            const opt33 = document.createElement('option');
                            opt33.setAttribute('value', 'niñas')
                            opt33.innerText = `Si, contar solo niñas`;
                            selectOption2.appendChild(opt33);
                        }
                        else if (valueSelectOpt1 == 'calc-mean') {
                            if ((valueSelectOpt2 == 'colegio') || (valueSelectOpt2 == 'primaria') || (valueSelectOpt2 == 'secundaria')) {

                                const divShowButton = document.getElementById('div-show-button');
                                if ((document.body.contains(divShowButton) == false)) {
                                    const divSubButton = document.createElement('div');
                                    divSubButton.setAttribute('id', 'div-show-button');
                                    const subButton = document.createElement('input');
                                    subButton.setAttribute('type', 'button');
                                    subButton.setAttribute('value', 'Mostrar Resultado');
                                    subButton.setAttribute('id', 'show-button');
                                    divOption2.appendChild(divSubButton);
                                    divSubButton.appendChild(subButton);
                                }
                            }
                            else if (valueSelectOpt2 == 'grade') {
                                const labelOption2 = document.createElement('label');
                                labelOption2.setAttribute('for', 'func-opt2');

                                const selectOption2 = document.createElement('select');
                                selectOption2.setAttribute('name', 'func-opt2');
                                selectOption2.setAttribute('id', 'func-opt2');

                                divOption2.appendChild(labelOption2);
                                divOption2.appendChild(selectOption2);

                                labelOption2.innerText = `¿En que grado deseas realizar el cálculo?`;

                                const opt20 = document.createElement('option');
                                opt20.setAttribute('value', '')
                                opt20.setAttribute('selected', 'selected')
                                opt20.innerText = `Selecciona una opción`;
                                selectOption2.appendChild(opt20);

                                const opt21 = document.createElement('option');
                                opt21.setAttribute('value', 'primero')
                                opt21.innerText = `Primero`;
                                selectOption2.appendChild(opt21);

                                const opt22 = document.createElement('option');
                                opt22.setAttribute('value', 'segundo')
                                opt22.innerText = `Segundo`;
                                selectOption2.appendChild(opt22);

                                const opt23 = document.createElement('option');
                                opt23.setAttribute('value', 'tercero')
                                opt23.innerText = `Tercero`;
                                selectOption2.appendChild(opt23);

                                const opt24 = document.createElement('option');
                                opt24.setAttribute('value', 'cuarto')
                                opt24.innerText = `Cuarto`;
                                selectOption2.appendChild(opt24);

                                const opt25 = document.createElement('option');
                                opt25.setAttribute('value', 'quinto')
                                opt25.innerText = `Quinto`;
                                selectOption2.appendChild(opt25);

                                const opt26 = document.createElement('option');
                                opt26.setAttribute('value', 'sexto')
                                opt26.innerText = `Sexto`;
                                selectOption2.appendChild(opt26);

                                const opt27 = document.createElement('option');
                                opt27.setAttribute('value', 'septimo')
                                opt27.innerText = `Septimo`;
                                selectOption2.appendChild(opt27);

                                const opt28 = document.createElement('option');
                                opt28.setAttribute('value', 'octavo')
                                opt28.innerText = `Octavo`;
                                selectOption2.appendChild(opt28);

                                const opt29 = document.createElement('option');
                                opt29.setAttribute('value', 'noveno')
                                opt29.innerText = `Noveno`;
                                selectOption2.appendChild(opt29);

                                const opt210 = document.createElement('option');
                                opt210.setAttribute('value', 'decimo')
                                opt210.innerText = `Decimo`;
                                selectOption2.appendChild(opt210);

                                const opt211 = document.createElement('option');
                                opt211.setAttribute('value', 'once')
                                opt211.innerText = `Once`;
                                selectOption2.appendChild(opt211);
                            }
                            else if (valueSelectOpt2 == 'course') {
                                const labelOption2 = document.createElement('label');
                                labelOption2.setAttribute('for', 'func-opt2');

                                const selectOption2 = document.createElement('select');
                                selectOption2.setAttribute('name', 'func-opt2');
                                selectOption2.setAttribute('id', 'func-opt2');

                                divOption2.appendChild(labelOption2);
                                divOption2.appendChild(selectOption2);

                                labelOption2.innerText = `¿En que cursos deseas realizar el cálculo?`;

                                const opt20 = document.createElement('option');
                                opt20.setAttribute('value', '')
                                opt20.setAttribute('selected', 'selected')
                                opt20.innerText = `Selecciona una opción`;
                                selectOption2.appendChild(opt20);

                                const opt21 = document.createElement('option');
                                opt21.setAttribute('value', 'A')
                                opt21.innerText = `A`;
                                selectOption2.appendChild(opt21);

                                const opt22 = document.createElement('option');
                                opt22.setAttribute('value', 'B')
                                opt22.innerText = `B`;
                                selectOption2.appendChild(opt22);
                            }
                        }
                        else if (valueSelectOpt1 == 'calc-mode') {
                            if ((valueSelectOpt2 == 'colegio') || (valueSelectOpt2 == 'primaria') || (valueSelectOpt2 == 'secundaria')) {
                                const divShowButton = document.getElementById('div-show-button');
                                if ((document.body.contains(divShowButton) == false)) {
                                    const divSubButton = document.createElement('div');
                                    divSubButton.setAttribute('id', 'div-show-button');
                                    const subButton = document.createElement('input');
                                    subButton.setAttribute('type', 'button');
                                    subButton.setAttribute('value', 'Mostrar Resultado');
                                    subButton.setAttribute('id', 'show-button');
                                    divOption2.appendChild(divSubButton);
                                    divSubButton.appendChild(subButton);
                                }
                            }
                            else if (valueSelectOpt2 == 'grade') {
                                const labelOption2 = document.createElement('label');
                                labelOption2.setAttribute('for', 'func-opt2');

                                const selectOption2 = document.createElement('select');
                                selectOption2.setAttribute('name', 'func-opt2');
                                selectOption2.setAttribute('id', 'func-opt2');

                                divOption2.appendChild(labelOption2);
                                divOption2.appendChild(selectOption2);

                                labelOption2.innerText = `¿En que grado deseas realizar el cálculo?`;

                                const opt20 = document.createElement('option');
                                opt20.setAttribute('value', '')
                                opt20.setAttribute('selected', 'selected')
                                opt20.innerText = `Selecciona una opción`;
                                selectOption2.appendChild(opt20);

                                const opt21 = document.createElement('option');
                                opt21.setAttribute('value', 'primero')
                                opt21.innerText = `Primero`;
                                selectOption2.appendChild(opt21);

                                const opt22 = document.createElement('option');
                                opt22.setAttribute('value', 'segundo')
                                opt22.innerText = `Segundo`;
                                selectOption2.appendChild(opt22);

                                const opt23 = document.createElement('option');
                                opt23.setAttribute('value', 'tercero')
                                opt23.innerText = `Tercero`;
                                selectOption2.appendChild(opt23);

                                const opt24 = document.createElement('option');
                                opt24.setAttribute('value', 'cuarto')
                                opt24.innerText = `Cuarto`;
                                selectOption2.appendChild(opt24);

                                const opt25 = document.createElement('option');
                                opt25.setAttribute('value', 'quinto')
                                opt25.innerText = `Quinto`;
                                selectOption2.appendChild(opt25);

                                const opt26 = document.createElement('option');
                                opt26.setAttribute('value', 'sexto')
                                opt26.innerText = `Sexto`;
                                selectOption2.appendChild(opt26);

                                const opt27 = document.createElement('option');
                                opt27.setAttribute('value', 'septimo')
                                opt27.innerText = `Septimo`;
                                selectOption2.appendChild(opt27);

                                const opt28 = document.createElement('option');
                                opt28.setAttribute('value', 'octavo')
                                opt28.innerText = `Octavo`;
                                selectOption2.appendChild(opt28);

                                const opt29 = document.createElement('option');
                                opt29.setAttribute('value', 'noveno')
                                opt29.innerText = `Noveno`;
                                selectOption2.appendChild(opt29);

                                const opt210 = document.createElement('option');
                                opt210.setAttribute('value', 'decimo')
                                opt210.innerText = `Decimo`;
                                selectOption2.appendChild(opt210);

                                const opt211 = document.createElement('option');
                                opt211.setAttribute('value', 'once')
                                opt211.innerText = `Once`;
                                selectOption2.appendChild(opt211);
                            }
                            else if (valueSelectOpt2 == 'course') {
                                const labelOption2 = document.createElement('label');
                                labelOption2.setAttribute('for', 'func-opt2');

                                const selectOption2 = document.createElement('select');
                                selectOption2.setAttribute('name', 'func-opt2');
                                selectOption2.setAttribute('id', 'func-opt2');

                                divOption2.appendChild(labelOption2);
                                divOption2.appendChild(selectOption2);

                                labelOption2.innerText = `¿En que cursos deseas realizar el cálculo?`;

                                const opt20 = document.createElement('option');
                                opt20.setAttribute('value', '')
                                opt20.setAttribute('selected', 'selected')
                                opt20.innerText = `Selecciona una opción`;
                                selectOption2.appendChild(opt20);

                                const opt21 = document.createElement('option');
                                opt21.setAttribute('value', 'A')
                                opt21.innerText = `A`;
                                selectOption2.appendChild(opt21);

                                const opt22 = document.createElement('option');
                                opt22.setAttribute('value', 'B')
                                opt22.innerText = `B`;
                                selectOption2.appendChild(opt22);
                            }
                        }
                        else if (valueSelectOpt1 == 'calc-median') {
                            if ((valueSelectOpt2 == 'colegio') || (valueSelectOpt2 == 'primaria') || (valueSelectOpt2 == 'secundaria')) {
                                const divShowButton = document.getElementById('div-show-button');
                                if ((document.body.contains(divShowButton) == false)) {
                                    const divSubButton = document.createElement('div');
                                    divSubButton.setAttribute('id', 'div-show-button');
                                    const subButton = document.createElement('input');
                                    subButton.setAttribute('type', 'button');
                                    subButton.setAttribute('value', 'Mostrar Resultado');
                                    subButton.setAttribute('id', 'show-button');
                                    divOption2.appendChild(divSubButton);
                                    divSubButton.appendChild(subButton);
                                }
                            }
                            else if (valueSelectOpt2 == 'grade') {
                                const labelOption2 = document.createElement('label');
                                labelOption2.setAttribute('for', 'func-opt2');

                                const selectOption2 = document.createElement('select');
                                selectOption2.setAttribute('name', 'func-opt2');
                                selectOption2.setAttribute('id', 'func-opt2');

                                divOption2.appendChild(labelOption2);
                                divOption2.appendChild(selectOption2);

                                labelOption2.innerText = `¿En que grado deseas realizar el filtro?`;

                                const opt20 = document.createElement('option');
                                opt20.setAttribute('value', '')
                                opt20.setAttribute('selected', 'selected')
                                opt20.innerText = `Selecciona una opción`;
                                selectOption2.appendChild(opt20);

                                const opt21 = document.createElement('option');
                                opt21.setAttribute('value', 'primero')
                                opt21.innerText = `Primero`;
                                selectOption2.appendChild(opt21);

                                const opt22 = document.createElement('option');
                                opt22.setAttribute('value', 'segundo')
                                opt22.innerText = `Segundo`;
                                selectOption2.appendChild(opt22);

                                const opt23 = document.createElement('option');
                                opt23.setAttribute('value', 'tercero')
                                opt23.innerText = `Tercero`;
                                selectOption2.appendChild(opt23);

                                const opt24 = document.createElement('option');
                                opt24.setAttribute('value', 'cuarto')
                                opt24.innerText = `Cuarto`;
                                selectOption2.appendChild(opt24);

                                const opt25 = document.createElement('option');
                                opt25.setAttribute('value', 'quinto')
                                opt25.innerText = `Quinto`;
                                selectOption2.appendChild(opt25);

                                const opt26 = document.createElement('option');
                                opt26.setAttribute('value', 'sexto')
                                opt26.innerText = `Sexto`;
                                selectOption2.appendChild(opt26);

                                const opt27 = document.createElement('option');
                                opt27.setAttribute('value', 'septimo')
                                opt27.innerText = `Septimo`;
                                selectOption2.appendChild(opt27);

                                const opt28 = document.createElement('option');
                                opt28.setAttribute('value', 'octavo')
                                opt28.innerText = `Octavo`;
                                selectOption2.appendChild(opt28);

                                const opt29 = document.createElement('option');
                                opt29.setAttribute('value', 'noveno')
                                opt29.innerText = `Noveno`;
                                selectOption2.appendChild(opt29);

                                const opt210 = document.createElement('option');
                                opt210.setAttribute('value', 'decimo')
                                opt210.innerText = `Decimo`;
                                selectOption2.appendChild(opt210);

                                const opt211 = document.createElement('option');
                                opt211.setAttribute('value', 'once')
                                opt211.innerText = `Once`;
                                selectOption2.appendChild(opt211);
                            }
                            else if (valueSelectOpt2 == 'course') {
                                const labelOption2 = document.createElement('label');
                                labelOption2.setAttribute('for', 'func-opt2');

                                const selectOption2 = document.createElement('select');
                                selectOption2.setAttribute('name', 'func-opt2');
                                selectOption2.setAttribute('id', 'func-opt2');

                                divOption2.appendChild(labelOption2);
                                divOption2.appendChild(selectOption2);

                                labelOption2.innerText = `¿En que cursos deseas realizar el filtro?`;

                                const opt20 = document.createElement('option');
                                opt20.setAttribute('value', '')
                                opt20.setAttribute('selected', 'selected')
                                opt20.innerText = `Selecciona una opción`;
                                selectOption2.appendChild(opt20);

                                const opt21 = document.createElement('option');
                                opt21.setAttribute('value', 'A')
                                opt21.innerText = `A`;
                                selectOption2.appendChild(opt21);

                                const opt22 = document.createElement('option');
                                opt22.setAttribute('value', 'B')
                                opt22.innerText = `B`;
                                selectOption2.appendChild(opt22);
                            }
                        }
                        else if (valueSelectOpt1 == 'show-best-scores') {
                            if ((valueSelectOpt2 == 'colegio') || (valueSelectOpt2 == 'primaria') || (valueSelectOpt2 == 'secundaria') || (valueSelectOpt2 == 'subjects')) {
                                const divShowButton = document.getElementById('div-show-button');
                                if ((document.body.contains(divShowButton) == false)) {
                                    const divSubButton = document.createElement('div');
                                    divSubButton.setAttribute('id', 'div-show-button');
                                    const subButton = document.createElement('input');
                                    subButton.setAttribute('type', 'button');
                                    subButton.setAttribute('value', 'Mostrar Resultado');
                                    subButton.setAttribute('id', 'show-button');
                                    divOption2.appendChild(divSubButton);
                                    divSubButton.appendChild(subButton);
                                }
                            }
                            else if (valueSelectOpt2 == 'grade') {
                                const labelOption2 = document.createElement('label');
                                labelOption2.setAttribute('for', 'func-opt2');

                                const selectOption2 = document.createElement('select');
                                selectOption2.setAttribute('name', 'func-opt2');
                                selectOption2.setAttribute('id', 'func-opt2');

                                divOption2.appendChild(labelOption2);
                                divOption2.appendChild(selectOption2);

                                labelOption2.innerText = `¿En que grado deseas realizar el cálculo?`;

                                const opt20 = document.createElement('option');
                                opt20.setAttribute('value', '')
                                opt20.setAttribute('selected', 'selected')
                                opt20.innerText = `Selecciona una opción`;
                                selectOption2.appendChild(opt20);

                                const opt21 = document.createElement('option');
                                opt21.setAttribute('value', 'primero')
                                opt21.innerText = `Primero`;
                                selectOption2.appendChild(opt21);

                                const opt22 = document.createElement('option');
                                opt22.setAttribute('value', 'segundo')
                                opt22.innerText = `Segundo`;
                                selectOption2.appendChild(opt22);

                                const opt23 = document.createElement('option');
                                opt23.setAttribute('value', 'tercero')
                                opt23.innerText = `Tercero`;
                                selectOption2.appendChild(opt23);

                                const opt24 = document.createElement('option');
                                opt24.setAttribute('value', 'cuarto')
                                opt24.innerText = `Cuarto`;
                                selectOption2.appendChild(opt24);

                                const opt25 = document.createElement('option');
                                opt25.setAttribute('value', 'quinto')
                                opt25.innerText = `Quinto`;
                                selectOption2.appendChild(opt25);

                                const opt26 = document.createElement('option');
                                opt26.setAttribute('value', 'sexto')
                                opt26.innerText = `Sexto`;
                                selectOption2.appendChild(opt26);

                                const opt27 = document.createElement('option');
                                opt27.setAttribute('value', 'septimo')
                                opt27.innerText = `Septimo`;
                                selectOption2.appendChild(opt27);

                                const opt28 = document.createElement('option');
                                opt28.setAttribute('value', 'octavo')
                                opt28.innerText = `Octavo`;
                                selectOption2.appendChild(opt28);

                                const opt29 = document.createElement('option');
                                opt29.setAttribute('value', 'noveno')
                                opt29.innerText = `Noveno`;
                                selectOption2.appendChild(opt29);

                                const opt210 = document.createElement('option');
                                opt210.setAttribute('value', 'decimo')
                                opt210.innerText = `Decimo`;
                                selectOption2.appendChild(opt210);

                                const opt211 = document.createElement('option');
                                opt211.setAttribute('value', 'once')
                                opt211.innerText = `Once`;
                                selectOption2.appendChild(opt211);
                            }
                            else if (valueSelectOpt2 == 'course') {
                                const labelOption2 = document.createElement('label');
                                labelOption2.setAttribute('for', 'func-opt2');

                                const selectOption2 = document.createElement('select');
                                selectOption2.setAttribute('name', 'func-opt2');
                                selectOption2.setAttribute('id', 'func-opt2');

                                divOption2.appendChild(labelOption2);
                                divOption2.appendChild(selectOption2);

                                labelOption2.innerText = `¿En que cursos deseas realizar el cálculo?`;

                                const opt20 = document.createElement('option');
                                opt20.setAttribute('value', '')
                                opt20.setAttribute('selected', 'selected')
                                opt20.innerText = `Selecciona una opción`;
                                selectOption2.appendChild(opt20);

                                const opt21 = document.createElement('option');
                                opt21.setAttribute('value', 'A')
                                opt21.innerText = `A`;
                                selectOption2.appendChild(opt21);

                                const opt22 = document.createElement('option');
                                opt22.setAttribute('value', 'B')
                                opt22.innerText = `B`;
                                selectOption2.appendChild(opt22);
                            }

                        }
                        else if (valueSelectOpt1 == 'show-student') {
                            if (valueSelectOpt2 != '') {
                                const divShowButton = document.getElementById('div-show-button');
                                if ((document.body.contains(divShowButton) == false)) {
                                    const divSubButton = document.createElement('div');
                                    divSubButton.setAttribute('id', 'div-show-button');
                                    const subButton = document.createElement('input');
                                    subButton.setAttribute('type', 'button');
                                    subButton.setAttribute('value', 'Mostrar Resultado');
                                    subButton.setAttribute('id', 'show-button');
                                    divOption2.appendChild(divSubButton);
                                    divSubButton.appendChild(subButton);
                                }
                            }
                        }

                        const checkFunctOpt2 = document.getElementById('func-opt2');
                        if ((document.body.contains(checkFunctOpt2) == true)) {
                            const selectFunctionOpt2 = document.querySelector('#func-opt2');

                            selectFunctionOpt2.addEventListener('change', (eventFunctOpt3) => {
                                const valueSelectOpt3 = eventFunctOpt3.target.value;
                                if (valueSelectOpt3 != '') {
                                    const divShowButton = document.getElementById('div-show-button');
                                    if ((document.body.contains(divShowButton) == false)) {
                                        const divSubButton = document.createElement('div');
                                        divSubButton.setAttribute('id', 'div-show-button');
                                        const subButton = document.createElement('input');
                                        subButton.setAttribute('type', 'button');
                                        subButton.setAttribute('value', 'Mostrar Resultado');
                                        subButton.setAttribute('id', 'show-button');
                                        divOption2.appendChild(divSubButton);
                                        divSubButton.appendChild(subButton);
                                    }
                                }
                                const checkShowButton = document.getElementById('show-button');
                                if ((document.body.contains(checkShowButton) == true)) {

                                    const showResults = document.querySelector('#show-button');
                                    showResults.addEventListener('click', (eventShowResults) => {

                                        const checkDivShowResults = document.getElementById('div-show-results');
                                        if (document.body.contains(checkDivShowResults)) {
                                            divFilter.removeChild(checkDivShowResults);
                                        }
                                        const divShowResults = document.createElement('div');
                                        divShowResults.setAttribute('id', 'div-show-results');

                                        const spanAnswerTemplate = document.createElement('span');
                                        spanAnswerTemplate.setAttribute('id', 'span-answer-template');

                                        divShowResults.appendChild(spanAnswerTemplate);

                                        divFilter.appendChild(divShowResults);

                                        let answerText;
                                        let result;
                                        if (valueSelectOpt1 == 'count-students') {
                                            answerText = answerTemplate.get(0);
                                            if (valueSelectOpt3 == 'any') {
                                                answerText += answerTemplateOption.get('estudiantes');
                                            }
                                            else if (valueSelectOpt3 == 'niños') {
                                                answerText += answerTemplateOption.get('niños');
                                            }
                                            else if (valueSelectOpt3 == 'niñas') {
                                                answerText += answerTemplateOption.get('niñas');
                                            }

                                            if (valueSelectOpt2 == 'colegio') {
                                                answerText += answerTemplateOption.get('colegio');
                                            }
                                            else if (valueSelectOpt2 == 'primaria') {
                                                answerText += answerTemplateOption.get('primaria');
                                            }
                                            else if (valueSelectOpt2 == 'secundaria') {
                                                answerText += answerTemplateOption.get('secundaria');
                                            }
                                            let gender = (valueSelectOpt3 == 'any') ? undefined : valueSelectOpt3;
                                            result = functionsT3.countStudents(schoolJson, valueSelectOpt2, gender);
                                        }
                                        else if (valueSelectOpt1 == 'calc-mean') {

                                            answerText = answerTemplate.get(1);
                                            answerText += `${answerTemplateOption.get(valueSelectOpt2)} ${valueSelectOpt3} es: `;

                                            result = functionsT3.getMean(schoolJson, valueSelectOpt3);
                                        }
                                        else if (valueSelectOpt1 == 'calc-mode') {

                                            answerText = answerTemplate.get(2);
                                            answerText += `${answerTemplateOption.get(valueSelectOpt2)} ${valueSelectOpt3} es: `;

                                            result = functionsT3.getMode(schoolJson, valueSelectOpt3);
                                        }
                                        else if (valueSelectOpt1 == 'calc-median') {

                                            answerText = answerTemplate.get(3);
                                            answerText += `${answerTemplateOption.get(valueSelectOpt2)} ${valueSelectOpt3} es: `;

                                            result = functionsT3.getMedian(schoolJson, valueSelectOpt3);
                                        }
                                        else if (valueSelectOpt1 == 'show-best-scores') {
                                            answerText = answerTemplate.get(41);
                                            answerText += `${answerTemplateOption.get(valueSelectOpt2)} ${valueSelectOpt3} es: `;

                                            result = functionsT3.getStudentHigherAvgScore(schoolJson, valueSelectOpt3);
                                        }

                                        spanAnswerTemplate.innerText = answerText;

                                        if (typeof result == 'object') {
                                            printObject(result, 'div-show-results');
                                        }
                                        else {
                                            const spanResult = document.createElement('span');
                                            spanResult.setAttribute('id', 'span-result');
                                            spanResult.innerText = result;
                                            divShowResults.appendChild(spanResult);
                                        }


                                    }, { once: true });
                                }
                            });
                        }
                        const checkShowButton = document.getElementById('show-button');
                        if ((document.body.contains(checkShowButton) == true)) {
                            const showResults = document.querySelector('#show-button');
                            showResults.addEventListener('click', (eventShowResults) => {
                                const checkDivShowResults = document.getElementById('div-show-results');
                                if (document.body.contains(checkDivShowResults)) {
                                    divFilter.removeChild(checkDivShowResults);
                                }
                                const divShowResults = document.createElement('div');
                                divShowResults.setAttribute('id', 'div-show-results');

                                const spanAnswerTemplate = document.createElement('span');
                                spanAnswerTemplate.setAttribute('id', 'span-answer-template');

                                divShowResults.appendChild(spanAnswerTemplate);

                                divFilter.appendChild(divShowResults);

                                let answerText;
                                let result;
                                if (valueSelectOpt1 == 'calc-mean') {

                                    answerText = answerTemplate.get(1);
                                    answerText += answerTemplateOption.get(valueSelectOpt2);
                                    result = functionsT3.getMean(schoolJson, valueSelectOpt2);
                                }
                                else if (valueSelectOpt1 == 'calc-mode') {

                                    answerText = answerTemplate.get(2);
                                    answerText += answerTemplateOption.get(valueSelectOpt2);
                                    result = functionsT3.getMode(schoolJson, valueSelectOpt2);
                                }
                                else if (valueSelectOpt1 == 'calc-median') {

                                    answerText = answerTemplate.get(3);
                                    answerText += answerTemplateOption.get(valueSelectOpt2);
                                    result = functionsT3.getMedian(schoolJson, valueSelectOpt2);
                                }
                                else if (valueSelectOpt1 == 'show-best-scores') {
                                    if (valueSelectOpt2 == 'subjects') {
                                        answerText = answerTemplate.get(42);
                                        result = functionsT3.getHigherScoresBySubject(schoolJson);
                                    }
                                    else {
                                        answerText = answerTemplate.get(41);
                                        answerText += answerTemplateOption.get(valueSelectOpt2);
                                        result = functionsT3.getStudentHigherAvgScore(schoolJson, valueSelectOpt2);
                                    }
                                }
                                else if (valueSelectOpt1 == 'show-student') {
                                    answerText = `${answerTemplate.get(5)} ${valueSelectOpt2} es: `;
                                    result = functionsT3.getStudentOfGrade(schoolJson, valueSelectOpt2);
                                }
                                spanAnswerTemplate.innerText = answerText;
                                if (typeof result == 'object') {
                                    printObject(result, 'div-show-results');
                                }
                                else {
                                    const spanResult = document.createElement('span');
                                    spanResult.setAttribute('id', 'span-result');
                                    spanResult.innerText = result;
                                    divShowResults.appendChild(spanResult);
                                }
                            }, { once: true });
                        }
                    }
                });
            }
        }
    });
}


