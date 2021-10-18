import { schoolJson } from '../data/data.js';

//header and main creation
const bodyHeader = document.createElement('header');
bodyHeader.setAttribute('id', 'body-header');
document.body.appendChild(bodyHeader);

const bodyMain = document.createElement('main');
bodyMain.setAttribute('id', 'body-main');
document.body.appendChild(bodyMain);

//header content
const headerElementsContainer = document.createElement('div');
headerElementsContainer.setAttribute('id', 'header-element-container')
bodyHeader.appendChild(headerElementsContainer);

const h1 = document.createElement('h1');
h1.innerText = 'Información Académica de Estudiantes'
headerElementsContainer.appendChild(h1);

const navbar = document.createElement('nav');
navbar.setAttribute('id', 'nav-bar');
headerElementsContainer.appendChild(navbar);

const navBarDiv = document.createElement('div');
navBarDiv.setAttribute('id', 'nav-bar-div')
navbar.appendChild(navBarDiv);

const arrayElementaryGrades = Object.keys(schoolJson[0].colegio.primaria[0]);
const arrayMidHigGrades = Object.keys(schoolJson[0].colegio.secundaria[0]);

const navList = document.createElement('ul');
navList.setAttribute('id', 'nav-list');
navBarDiv.appendChild(navList);

for (let g = 0; g < arrayElementaryGrades.length; g++) {
    const divCourse = document.createElement('div');
    divCourse.setAttribute('id', `nav-list-div-${arrayElementaryGrades[g]}`);
    divCourse.setAttribute('class', 'nav-list-div');
    navList.appendChild(divCourse);

    const navListElement = document.createElement('li');
    navListElement.setAttribute('class', 'nav-list-div-li');
    divCourse.appendChild(navListElement);

    const navListElementA = document.createElement('a');
    navListElementA.setAttribute('class', 'nav-list-div-li-a');
    navListElementA.setAttribute('href','#');
    navListElementA.innerText = `${arrayElementaryGrades[g]}`;
    navListElement.appendChild(navListElementA);

    const coursesList = document.createElement('ul');
    coursesList.setAttribute('id', `nav-list-div-${arrayElementaryGrades[g]}-courses-list`);
    coursesList.setAttribute('class', 'courses-list');
    navListElement.appendChild(coursesList);

    let gradejson = schoolJson[0].colegio.primaria[0][arrayElementaryGrades[g]];
    for (let c in gradejson) {

        const navListCourse = document.createElement('li');
        navListCourse.setAttribute('class', 'nav-list-div-element-course');
        coursesList.appendChild(navListCourse);

        const navListCourseA = document.createElement('a');
        navListCourseA.setAttribute('class', 'nav-list-div-element-course-a');
        navListCourseA.setAttribute('href','#');
        navListCourseA.innerText = `${gradejson[c].curso}`;
        navListCourse.appendChild(navListCourseA);
    }
}

for (let g = 0; g < arrayMidHigGrades.length; g++) {
    const divCourse = document.createElement('div');
    divCourse.setAttribute('id', `nav-list-div-${arrayMidHigGrades[g]}`);
    divCourse.setAttribute('class', 'nav-list-div');
    navList.appendChild(divCourse);

    const navListElement = document.createElement('li');
    navListElement.setAttribute('class', 'nav-list-div-li');
    divCourse.appendChild(navListElement);
    
    const navListElementA = document.createElement('a');
    navListElementA.setAttribute('class', 'nav-list-div-li-a');
    navListElementA.setAttribute('href','#');
    navListElementA.innerText = `${arrayMidHigGrades[g]}`;
    navListElement.appendChild(navListElementA);

    const coursesList = document.createElement('ul');
    coursesList.setAttribute('id', `nav-list-div-${arrayMidHigGrades[g]}-courses-list`);
    coursesList.setAttribute('class', 'courses-list');
    navListElement.appendChild(coursesList);

    let gradejson = schoolJson[0].colegio.secundaria[0][arrayMidHigGrades[g]];
    for (let c in gradejson) {

        const navListCourse = document.createElement('li');
        navListCourse.setAttribute('class', 'nav-list-div-element-course');
        coursesList.appendChild(navListCourse);

        const navListCourseA = document.createElement('a');
        navListCourseA.setAttribute('class', 'nav-list-div-element-course-a');
        navListCourseA.setAttribute('href','#');
        navListCourseA.innerText = `${gradejson[c].curso}`;
        navListCourse.appendChild(navListCourseA);
    }
}

//form
const divFunctions = document.createElement('div');
divFunctions.setAttribute('id','div-filter');

const h2SearchFunctions = document.createElement('h2');
h2SearchFunctions.innerText = 'Funciones de búsqueda';

const formFunctionSelector = document.createElement('form');
formFunctionSelector.setAttribute('id', 'form-function-selector')

const labelFormSelector = document.createElement('label');
labelFormSelector.setAttribute('for', 'select-function');
labelFormSelector.setAttribute('required', 'required');
labelFormSelector.innerText = 'Selecciona una función: ';

const selectFormSelector = document.createElement('select');
selectFormSelector.setAttribute('name', 'select-function');
selectFormSelector.setAttribute('id', 'select-function');
selectFormSelector.setAttribute('required', 'required');

const option0 = document.createElement('option');
option0.setAttribute('value', '');
option0.setAttribute('selected', 'selected');
option0.innerText = 'Elige una opción';

const option1 = document.createElement('option');
option1.setAttribute('value', 'count-students');
option1.innerText = 'Contar número de estudiantes';

const option2 = document.createElement('option');
option2.setAttribute('value', 'calc-mean');
option2.innerText = 'Calcular media de notas';

const option3 = document.createElement('option');
option3.setAttribute('value', 'calc-mode');
option3.innerText = 'Calcular moda de notas';

const option4 = document.createElement('option');
option4.setAttribute('value', 'calc-median');
option4.innerText = 'Calcular mediana de notas';

const option5 = document.createElement('option');
option5.setAttribute('value', 'show-best-scores');
option5.innerText = 'Mostrar estudiantes con mejores notas';

const option6 = document.createElement('option');
option6.setAttribute('value', 'show-student');
option6.innerText = 'Mostrar estudiante aleatorio';

bodyMain.appendChild(divFunctions);
divFunctions.appendChild(h2SearchFunctions);
divFunctions.appendChild(formFunctionSelector);
formFunctionSelector.appendChild(labelFormSelector);
formFunctionSelector.appendChild(selectFormSelector);
selectFormSelector.appendChild(option0);
selectFormSelector.appendChild(option1);
selectFormSelector.appendChild(option2);
selectFormSelector.appendChild(option3);
selectFormSelector.appendChild(option4);
selectFormSelector.appendChild(option5);
selectFormSelector.appendChild(option6);


/*
<form id="form-function-selector">
        <label for="select-function">Selecciona una función:</label>
        <select name="select-funtion" id="select-function" required>
            <option value="" selected>Elige una opción</option>
            <option value="count-students">Contar número de estudiantes</option>
            <option value="calc-mean">Calcular media de notas</option>
            <option value="calc-mode">Calcular moda de notas</option>
            <option value="calc-median">Calcular mediana de notas</option>
            <option value="show-best-scores">Mostrar mejores notas</option>
            <option value="show-student">Mostrar estudiante aleatorio</option>
        </select>
    </form>
*/
