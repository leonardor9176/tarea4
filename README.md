# tarea4
Este repositorio contiene la solución de la tarea 4 del bootcamp full stack BICTIA. por medio de la maniputación del DOM (Document Object Model) y el uso de funciones externas se interactua con los elementos de la página, creando y eliminando nodos para presentar los resultados de las funciones, que realizán operaciones de conteo, cálculos estadísticos de notas (media, moda y mediana) y presentación de a información de estudiantes basada en filtro de notas o selección de grados. La información presentada está contenida en un objeto tipo json almacenado en un archivo escrito en **javascript** (***js***) al que se accede de manera externa desde los archivos que manipulan el DOM.
Las carpetas y archivos del proyecto son:
## data
Carpeta que contiene el archivo con el objeto tipo json, que a su vez contiene los datos suministrados para el ejercicio.
### data.js
Archivo en js con el objeto tipo json que contiene los datos de el colegio del ejercicio propuesto. El archivo está configurado con la declaración *export* para que permita acceder al objeto desde archivos externos.
## src
Carpeda que contiene los recursos de medios a ser incluidos en la página web.
# scripts
Carpeta que contiene los archivos de código escritos en lenguaje js para realizar manipulación del DOM, cálculos de las funciones requeridas y presentación de los datos.
## display_json.js
Archivo escrito en lenguaje js que manipula el DOM de la página web para crear la visualización inicial de la página. Incluye la creación de un formulario con los campos que permiten seleccionar las funciones que se desean ejecutar.
## events.js
Archivo escrito en lenguaje js que crea los métodos **addEventListener** a los nodos de la página para registrar la interacción del usuario y crear o eliminar los elementos necesaios, basado en las opciones seleccionadas.
## functions.js
Archivo escrito en lenguaje js que contiene las funciones de los cálculos requeridos para el proyecto (conteo de conteo, cálculos estadísticos de notas -media, moda y mediana- y presentación de a información de estudiantes según opciones seleccionadas en el archivo **events.js**). la descripción de las funciones y sus parámetros se encuentran en el siguiente [README](https://github.com/leonardor9176/tarea3/blob/main/README.md).
## styles
Carpeta que contiene las hojas de estilos en formato CSS para dar la apariencia al contenido de la página.
### styles_display_json.css
Archivo en formato CSS con los estilos asignados a los elementos creados en la página.
## Otros archivos
### index.html
Archivo escrito en lenguaje html con la estructura básica de una pagina web (etiquetas html, head y body) y la invocación de los scripts **display_json.js** y **events.js**. El contenido adicional se agrega al manipular el DOM de la página desde los archivos **display_json.js** y **events.js**.
