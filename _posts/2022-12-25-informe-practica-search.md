---
title: "Informe practica implementación search"
excerpt_separator: "<!--more-->"
---

<br />
<p align="center">

  <h1 align="center">Informe práctica implementación search </h1>

</p>

## 1. Se ha creado una rama intro2sd para señalar el punto de entrega de la anterior práctica

Al comienzo de la práctica se ha creado una rama intro2sd para señalar el punto de entrega de la anterior práctica mientras que para esta práctica seguiremos usando la rama main. </br>

![ramaNueva]({{ "/assets/images/ramaNueva.png" | relative_url }})

## 2. Creación del archivo search.json

Creamos tres ficheros: search.js, search.json y search.md. El primero de ellos es el que se encarga de la lógica de la búsqueda, el segundo de generar el fichero JSON y el tercero de mostrar el resultado de la búsqueda. </br>
En el fichero **search.json** lo que hacemos es recorrer todas las colecciones del sitio y todas las páginas html que no sean de colección y que tengan título. <br>
Para cada una de ellas, creamos un objeto JSON con el título, el resumen, el contenido y la URL. Al final, todo el contenido se almacena en una variable llamada json que se imprime en la página.
<br>

![searchJson]({{ "/assets/images/searchJson.png" | relative_url }})

## 3. Creación del archivo search.js

En el fichero **search.js** lo que hacemos es crear una clase que se encargará de buscar en el JSON. Para ello, necesitamos crear un objeto con los parámetros que necesitamos para la búsqueda. <br>
En este caso, el JSON que hemos generado, el campo de búsqueda y el contenedor donde se mostrarán los resultados. También necesitamos la URL del sitio para poder generar los enlaces a los resultados. <br>
Los parametros necesarios se les pasarán al constructor de la clase a través de un objeto. <br>

![searchJs1]({{ "/assets/images/searchJs1.png" | relative_url }})

![searchJs2]({{ "/assets/images/searchJs2.png" | relative_url }})

La función **fetchedData()** se encarga de obtener los datos de la busqueda. Para ello, usamos fetch para obtener los datos y los convertimos a JSON. <br>
Después, la función **findResults()** se encarga de buscar los resultados que coincidan con el valor del campo de búsqueda. Para ello, necesitamos crear una expresión regular con el valor del campo de búsqueda y filtrar los resultados que coincidan con el título o el contenido. <br>
**displayResults()** se encarga de mostrar los resultados de la búsqueda. Para ello, primero recoge los resultados de la función **findResults()** y genera un HTML con los resultados. En caso de que no haya resultados o el campo de búsqueda esté vacío, muestra un mensaje de error. Finalmente, muestra el HTML generado en el contenedor de resultados. <br>
En la funcion **init()** se crea un objeto URL para obtener el parámetro de búsqueda en la URL actual. Si existe, se establece el valor del campo de búsqueda en el valor del parámetro de búsqueda. <br> Luego, se llama a la función **displayResults()** para mostrar los resultados de la búsqueda. Si no hay resultados, se muestra un mensaje de error. <br>
El evento keyup se agrega al campo de búsqueda. Cuando el usuario presiona una tecla, se llama a la función displayResults() para actualizar los resultados de la búsqueda. Luego, se establece el parámetro de búsqueda en el campo de búsqueda y se actualiza la URL. <br>
A su vez agregamos también el evento keypress al campo de búsqueda, así que cuando el usuario presione Enter, se evita el comportamiento predeterminado del navegador, que es recargar la página.


## 4. Creación del archivo search.md

En el fichero **search.md** lo que hacemos es crear una página que se encargará de mostrar el resultado de la búsqueda. Para ello, creamos un formulario con un campo de búsqueda y un contenedor donde se mostrarán los resultados. <br>
En el formulario, creamos un evento que se encargará de llamar a la función init() de la clase JekyllSearch. <br>

![searchMd]({{ "/assets/images/searchMd.png" | relative_url }})

## 5. Resumen capitulo 2 del libro Developing Information Systems, editado by James Cadle


