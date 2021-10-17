import {schoolJson} from '../data/data.js';

const formFunctionSelector = document.createElement('form');
formFunctionSelector.setAttribute('id','form-function-selector')

const labelFormSelector = document.createElement('label');
labelFormSelector.setAttribute('for','select-function');
labelFormSelector.setAttribute('required','required');
labelFormSelector.innerText= 'Selecciona una función: ';

const selectFormSelector = document.createElement('select');
selectFormSelector.setAttribute('name','select-function');
selectFormSelector.setAttribute('id','select-function');
selectFormSelector.setAttribute('required','required');

const option0 = document.createElement('option');
option0.setAttribute('value','');
option0.setAttribute('selected','selected');
option0.innerText = 'Elige una opción';

const option1 = document.createElement('option');
option1.setAttribute('value','count-students');
option1.innerText = 'Contar número de estudiantes';

const option2 = document.createElement('option');
option2.setAttribute('value','calc-mean');
option2.innerText = 'Calcular media de notas';

const option3 = document.createElement('option');
option3.setAttribute('value','calc-mode');
option3.innerText = 'Calcular moda de notas';

const option4 = document.createElement('option');
option4.setAttribute('value','calc-median');
option4.innerText = 'Calcular mediana de notas';

const option5 = document.createElement('option');
option5.setAttribute('value','show-best-scores');
option5.innerText = 'Mostrar estudiantes con mejores notas';

const option6 = document.createElement('option');
option6.setAttribute('value','show-student');
option6.innerText = 'Mostrar estudiante aleatorio';

formFunctionSelector.appendChild(labelFormSelector);
formFunctionSelector.appendChild(selectFormSelector);
selectFormSelector.appendChild(option0);
selectFormSelector.appendChild(option1);
selectFormSelector.appendChild(option2);
selectFormSelector.appendChild(option3);
selectFormSelector.appendChild(option4);
selectFormSelector.appendChild(option5);
selectFormSelector.appendChild(option6);

document.body.appendChild(formFunctionSelector);


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
