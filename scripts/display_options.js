const grades = ['primero', 'segundo', 'tercero', 'cuarto', 'quinto',
    'sexto', 'septimo', 'octavo', 'noveno', 'decimo', 'once'];
let gradesDictionary = new Map();
for (let i = 0; i < grades.length; i++) {
    gradesDictionary.set(i, grades[i]);
}

const checkSelectFunction = document.getElementById('select-function');
if (document.body.contains(checkSelectFunction) == true) {

    const selectFunction = document.querySelector('#select-function');

    selectFunction.addEventListener('change', (eventFunctOpt1) => {

        const selectedFunction = eventFunctOpt1.target.value;
        const checkDivopt1 = document.getElementById('div-opt1');
        if (document.body.contains(checkDivopt1) == true) {
            const check2 = document.getElementById('form-function-selector')
            check2.removeChild(checkDivopt1);
        }
        if (eventFunctOpt1.target.value != '') {
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
            // }
            if (eventFunctOpt1.target.value == 'count-students') {
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
            else if (eventFunctOpt1.target.value == 'calc-mean') {
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
            else if (eventFunctOpt1.target.value == 'calc-mode') {
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
            else if (eventFunctOpt1.target.value == 'calc-median') {
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
            else if (eventFunctOpt1.target.value == 'show-best-scores') {
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
            else if (eventFunctOpt1.target.value == 'show-student') {
                // const labelOption1 = document.createElement('label');
                // labelOption1.setAttribute('for', 'func-opt1');

                // const selectOption1 = document.createElement('select');
                // selectOption1.setAttribute('name', 'func-opt');
                // selectOption1.setAttribute('id', 'func-opt1');

                // divOption1.appendChild(labelOption1);
                // divOption1.appendChild(selectOption1);

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
                opt14.setAttribute('value', 'Cuarto')
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

                    const selectedFunctOpt2 = eventFunctOpt2.target.value;

                    const checkDivOpt2 = document.getElementById('div-opt2');
                    if ((document.body.contains(checkDivOpt2) == true)) {
                        const check2 = document.getElementById('div-opt1')
                        check2.removeChild(checkDivOpt2);
                    }

                    if (eventFunctOpt2.target.value != '') {
                        const divOption2 = document.createElement('div');
                        divOption2.setAttribute('id', 'div-opt2');

                        const divOption1 = document.getElementById('div-opt1');
                        divOption1.appendChild(divOption2);

                        if (eventFunctOpt1.target.value == 'count-students') {
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
                            opt22.setAttribute('value', 'male')
                            opt22.innerText = `Si, contar solo niños`;
                            selectOption2.appendChild(opt22);

                            const opt33 = document.createElement('option');
                            opt33.setAttribute('value', 'female')
                            opt33.innerText = `Si, contar solo niñas`;
                            selectOption2.appendChild(opt33);
                        }
                        else if (eventFunctOpt1.target.value == 'calc-mean') {
                            if ((eventFunctOpt2.target.value == 'colegio') || (eventFunctOpt2.target.value == 'primaria') || (eventFunctOpt2.target.value == 'secundaria')) {

                                const divShowButton = document.getElementById('div-Show-Button');
                                if ((document.body.contains(divShowButton) == false)) {
                                    const divSubButton = document.createElement('div');
                                    divSubButton.setAttribute('id', 'div-Show-Button');
                                    const subButton = document.createElement('input');
                                    subButton.setAttribute('type', 'button');
                                    subButton.setAttribute('value', 'mostrar resultado');
                                    subButton.setAttribute('id', 'show-button');
                                    divOption2.appendChild(divSubButton);
                                    divSubButton.appendChild(subButton);
                                }
                            }
                            else if (eventFunctOpt2.target.value == 'grade') {
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
                                opt24.setAttribute('value', 'Cuarto')
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
                            else if (eventFunctOpt2.target.value == 'course') {
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
                        else if (eventFunctOpt1.target.value == 'calc-mode') {
                            if ((eventFunctOpt2.target.value == 'colegio') || (eventFunctOpt2.target.value == 'primaria') || (eventFunctOpt2.target.value == 'secundaria')) {
                                const divShowButton = document.getElementById('div-Show-Button');
                                if ((document.body.contains(divShowButton) == false)) {
                                    const divSubButton = document.createElement('div');
                                    divSubButton.setAttribute('id', 'div-Show-Button');
                                    const subButton = document.createElement('input');
                                    subButton.setAttribute('type', 'button');
                                    subButton.setAttribute('value', 'mostrar resultado');
                                    subButton.setAttribute('id', 'show-button');
                                    divOption2.appendChild(divSubButton);
                                    divSubButton.appendChild(subButton);
                                }
                            }
                            else if (eventFunctOpt2.target.value == 'grade') {
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
                                opt24.setAttribute('value', 'Cuarto')
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
                            else if (eventFunctOpt2.target.value == 'course') {
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
                        else if (eventFunctOpt1.target.value == 'calc-median') {
                            if ((eventFunctOpt2.target.value == 'colegio') || (eventFunctOpt2.target.value == 'primaria') || (eventFunctOpt2.target.value == 'secundaria')) {
                                const divShowButton = document.getElementById('div-Show-Button');
                                if ((document.body.contains(divShowButton) == false)) {
                                    const divSubButton = document.createElement('div');
                                    divSubButton.setAttribute('id', 'div-Show-Button');
                                    const subButton = document.createElement('input');
                                    subButton.setAttribute('type', 'button');
                                    subButton.setAttribute('value', 'mostrar resultado');
                                    subButton.setAttribute('id', 'show-button');
                                    divOption2.appendChild(divSubButton);
                                    divSubButton.appendChild(subButton);
                                }
                            }
                            else if (eventFunctOpt2.target.value == 'grade') {
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
                                opt24.setAttribute('value', 'Cuarto')
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
                            else if (eventFunctOpt2.target.value == 'course') {
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
                        else if (eventFunctOpt1.target.value == 'show-best-scores') {
                            if ((eventFunctOpt2.target.value == 'colegio') || (eventFunctOpt2.target.value == 'primaria') || (eventFunctOpt2.target.value == 'secundaria') || (eventFunctOpt2.target.value == 'subjects')) {
                                const divShowButton = document.getElementById('div-Show-Button');
                                if ((document.body.contains(divShowButton) == false)) {
                                    const divSubButton = document.createElement('div');
                                    divSubButton.setAttribute('id', 'div-Show-Button');
                                    const subButton = document.createElement('input');
                                    subButton.setAttribute('type', 'button');
                                    subButton.setAttribute('value', 'mostrar resultado');
                                    subButton.setAttribute('id', 'show-button');
                                    divOption2.appendChild(divSubButton);
                                    divSubButton.appendChild(subButton);
                                }
                            }
                            else if (eventFunctOpt2.target.value == 'grade') {
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
                                opt24.setAttribute('value', 'Cuarto')
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
                            else if (eventFunctOpt2.target.value == 'course') {
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
                        else if (eventFunctOpt1.target.value == 'show-student') {
                            if (eventFunctOpt2.target.value != '') {
                                const divShowButton = document.getElementById('div-Show-Button');
                                if ((document.body.contains(divShowButton) == false)) {
                                    const divSubButton = document.createElement('div');
                                    divSubButton.setAttribute('id', 'div-Show-Button');
                                    const subButton = document.createElement('input');
                                    subButton.setAttribute('type', 'button');
                                    subButton.setAttribute('value', 'mostrar resultado');
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
                                const selectedFunctOpt2 = eventFunctOpt3.target.value;
                                if (eventFunctOpt3.target.value != '') {
                                    const divShowButton = document.getElementById('div-Show-Button');
                                    if ((document.body.contains(divShowButton) == false)) {
                                        const divSubButton = document.createElement('div');
                                        divSubButton.setAttribute('id', 'div-Show-Button');
                                        const subButton = document.createElement('input');
                                        subButton.setAttribute('type', 'button');
                                        subButton.setAttribute('value', 'mostrar resultado');
                                        subButton.setAttribute('id', 'show-button');
                                        divOption2.appendChild(divSubButton);
                                        divSubButton.appendChild(subButton);
                                    }
                                }
                                const checkShowButton = document.getElementById('show-button');
                                if ((document.body.contains(checkShowButton) == true)) {
                                    console.log('button exists');
                                    const showResults = document.querySelector('#show-button');
                                    showResults.addEventListener('click', (eventShowResults) => {
                                        console.log(eventFunctOpt1.target.value);
                                        console.log(eventFunctOpt2.target.value);
                                        console.log(eventFunctOpt3.target.value);
                                    });
                                }
                            });
                        }
                        const checkShowButton = document.getElementById('show-button');
                        if ((document.body.contains(checkShowButton) == true)) {
                            console.log('button exists');
                            const showResults = document.querySelector('#show-button');
                            showResults.addEventListener('click', (eventShowResults) => {
                                console.log(eventFunctOpt1.target.value);
                                console.log(eventFunctOpt2.target.value);
                            });
                        }
                    }
                });
            }
        }
    });

}


