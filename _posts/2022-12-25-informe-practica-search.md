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


El ciclo de desarrollo de sistemas, es el proceso de creación o modificación de los sistemas, modelos y metodologías que la gente usa para desarrollar estos sistemas de software, ya sea hardware o software. <br>
<br>
Las fases que lo componen son: <br>
- **Estudio de viabilidad**: se analiza la viabilidad del proyecto comprobando si el ROI es lo suficientemente bueno como para empezar el proyecto en sí. <br>
- **Análisis de requisitos**: se analizan los requisitos del sistema, se identifican los problemas y se establecen los objetivos que habrá que cumplir. <br>
- **Diseño**: se diseña el sistema considerando varias soluciones para cumplir los requisitos especificados. <br>
- **Desarrollo**: se empieza a construir el sistema, se desarrolla el código y se crean de una a una las distintas funcionalidades. <br>
- **Pruebas**: se prueban las funcionalidades del sistema para comprobar que cumplen los requisitos especificados. <br>
- **Implantación**: se despliega el sistema en el entorno de producción. <br>

### Los elementos que componen el ciclo de desarrollo de sistemas son: <br>

- **Contexto**: es el entorno en el que se desarrolla el proyecto, que es necesario comprender en su totalidad para saber como puede afectar al desarrollo de nuestro sistema. <br>
- **Ciclo de vida**: es el proceso de desarrollo del sistema, que se divide en fases. Puede ser tanto lineal como iterativo. <br>
- **Proceso**: es el conjunto de actividades que se llevan a cabo en cada fase del ciclo de vida para generar un determinado output. <br>
-**Roles**: son los distintos papeles que desempeñan las personas que participan en el proyecto. <br>
- **Entregables**: son los productos que se generan en cada fase del ciclo de vida. Pueden ser componentes software, hardware, documentación, diseños... <br>
- **Técnicas**: son las herramientas que se utilizan para llevar a cabo las actividades del proceso, como por ejemplo el Desarrollo dirigido por pruebas (TDD) o los diagramas UML. Es necesario saber que tipo de herramientas son más adecuadas para la creación de nuestro sistema, para así no entorpecer su desarrollo. <br>
<br>

A lo largo de los años, se han ido desarrollando distintas metodologías para el desarrollo de sistemas, cada una con sus ventajas e inconvenientes. <br>
Aún así no existe una metodología que sea la mejor para todos los proyectos, ya que cada proyecto es diferente y requiere una metodología diferente, por lo que seguir los pasos de un determinado CDS a raja tabla no es siempre la clave para un mejor proyecto. <br>
Se podría decir que normalmente se asocian dos enfoques al ciclo de desarrollo de sistemas (lineal o evolutivo), como también 5 tipos de metodologías (en cascada, metodo-V, espiral, iterativo e incremental). <br>
<br>
Vamos a comparar el enfoque lineal con el enfoque evolutivo: <br>

- **Enfoque lineal**: se desarrolla el sistema en una única fase, en la que se llevan a cabo todas las actividades del proceso. <br>
Esto conlleva ciertas ventajas, como por ejemplo que es más fácil de gestionar, ya que se puede controlar mejor el proyecto o también que es más fácil de planificar, ya que se sabe desde el principio que actividades se van a llevar a cabo. <br>
También tiene ciertas desventajas, como por ejemplo que no se puede comprobar si el sistema cumple los requisitos hasta que no se ha terminado de desarrollar. <br>
Además, en caso de que los requisitos cambien, se tendría que volver a empezar el proyecto practicamente desde cero. <br>
Practicamente, es un enfoque más adecuado para proyectos pequeños o no muy complejos. <br>

- **Enfoque evolutivo**: se desarrolla el sistema en varias fases, en las que se llevan a cabo las actividades del proceso. <br>
Esto conlleva ciertas ventajas, como por ejemplo que se puede comprobar si el sistema cumple los requisitos a lo largo del desarrollo, por lo que se puede corregir cualquier error que se encuentre. <br>
También involucra más al cliente, ya que se le puede mostrar el sistema en cada fase para que pueda dar su opinión. <br>
También tiene ciertas desventajas, como por ejemplo que es más difícil de gestionar, ya que se puede perder el control del proyecto. <br>
Además, los costes de desarrollo son mayores, ya que se llevan a cabo más actividades. <br>
Como podemos ver, es un enfoque más adecuado para proyectos grandes, complejos o con cambios muy frecuentes. <br>
<br>

### Los ciclos de vida basados en el enfoque lineal son: <br>

- **Ciclo de vida en cascada**: en el ciclo de vida en cascada es necesario terminar una fase antes de empezar la siguiente. <br>
En caso de que hay un problema en una fase, volvemos a empezar en la fase anterior para intentar corregirlo. <br>
Se trata de un ciclo de vida muy simple, que se basa en la planificación de las actividades del proceso. <br>
Es bueno para proyectos que sabemos que no van a cambiar mucho en cuanto a requisitos y a la solución que se va a emplear. <br>
También hay que tener en cuenta que no hay una entrega con software funcional hasta que no se ha llegado a la implementación y que implementar cambios en el sistema es muy costoso. <br>

- **Ciclo de vida en V**: en el ciclo de vida en V, se desarrolla el sistema en dos "lados" de una V, en las que se llevan a cabo las actividades del proceso. <br>
El lado izquierdo de la V representa la descomposición de las necesidades, y la creación de las especificaciones del sistema. El lado derecho de la V representa la integración de las piezas y su verificación. V significa «Verificación y validación». Es muy similar al modelo de la cascada clásico ya que es muy rígido y contiene una gran cantidad de iteraciones, aunque se puede considerar como una extensión de dicho modelo, apuntando a mejorar el coste de tiempo al introducir cambios en el proyecto. <br>
También existe una versión extendida del ciclo de vida en V, que se llama ciclo de vida en V extendido. <br>
Tiene más enfoque en el desarrollo y pruebas de productos de calidad y también es fácil de escalar. <br>
Hay mucho rigor en el proceso y testeo de los productos. <br>
Esto no es muy adecuado para proyectos más simples, ya que el proceso es muy costoso. <br>
También comparte la desventaja del modelo en cascada de que no hay una entrega con software funcional hasta que no se ha llegado a la implementación. <br>

- **Ciclo de vida incremental**: a diferencia de los dos anteriores ciclos de vida, tras  haber diseñado y comprendido que es lo que se quiere hacer, se desarrolla el sistema pudiendose centar en la entrega de ciertas partes funcionales antes que otras. <br>
Esto conlleva ciertas ventajas, como por ejemplo cumplir primero los requisitos con más prioridad y el poder entregar de forma paralela varios elementos funcionales, resolviendo así el inconveniente de las dos anteriores metodologías de no poder entregar software funcional hasta que no se ha llegado a la fase de implementación. <br>
Es muy bueno para proyectos que requieren una salida rápida al mercado, ya que se pueden entregar partes funcionales del sistema antes de tiempo para ir luego incrementando sus funcionalidades a lo largo del tiempo. <br>
De todas formas sigue requiriendo una gran cantidad de planificación y control, ya que se debe tener en cuenta que las partes funcionales que se van a entregar deben ser compatibles entre sí. <br>
Gracias a este tipo de metodología, se puede ir adaptando el sistema a los cambios que se vayan produciendo en el proyecto, por lo que la gestión de riesgos es mucho más sencilla. <br>
También facilita más la parte de testeos, ya que se pueden ir testeando los pequeños incrementos que se van aportando y con las entregas en paralelo se puede sacar el producto al mercado antes. <br>
Aunque tiene ciertas ventajas, también tiene ciertas desventajas, como por ejemplo que el coste de desarrollo es mayor, ya que se llevan a cabo más actividades paralelas, además de ser algo complicado de gestionar. <br>
También es necesario tener en cuenta que el sistema no estará completo hasta que no se hayan completado todas las fases. <br>
<br>

Los ciclos de vida basados en el enfoque evolutivo son: <br>

- **Ciclo de vida iterativo**: en el ciclo de vida iterativo se divide cada "parte" del proyecto en pequeñas iteraciones, en las que se llevan a cabo las actividades del proceso, como por ejemplo los requisitos, el analisis, el desarrollo o el testeo. <br>
Se podría decir que hay un mínimo de tres iteraciones necesarias y son:
· Investigación: en esta iteración se realiza una investigación sobre el proyecto y se realiza un análisis de riesgos. <br>
· Refinamiento: en esta iteración se realiza un análisis más detallado del proyecto y se realizan los requisitos. <br>
· Consolidación: en esta iteración se realiza la implementación y el testeo. <br>
<br>

Es bueno para proyectos con muchos cambios pero donde queremos controlar más los costes. <br>
También promueve la colaboración entre el cliente y el equipo de desarrollo, ya que se realizan iteraciones cortas y se puede ir adaptando el sistema a los cambios que se vayan produciendo en el proyecto. <br>
Tiene una gran cantidad de iteraciones, por lo que puede llegar a ser muy complejo a la hora de gestionar los diferentes equipos de desarrollo. <br>
Y aunque los costes se pueden controlar más, seguirá siendo muy costoso. <br>
<br>

- **Ciclo de vida en espiral**: en el ciclo de vida en espiral combinamos el modelo de desarrollo iterativo con prototipos de testeo para entender y mejorar los requisitos del proyecto, por lo que no necesitas unos requisitos exactos ya establecidos antes de empezar. <br>
Las fases del ciclo de vida en espiral son:
· Determinación de objetivos: en esta fase se establecen los objetivos del proyecto. <br>
· Análisis y resolución de riesgos: en esta fase se analizan los riesgos del proyecto, que posteriormente irán evolucionando basandose en la retroalimentación proporcionada por las pruebas de los prototipos. <br>
· Desarrollo y testeo: en esta fase se desarrollan prototipos para testear el proyecto. <br>
· Planear la siguiente iteración. <br>

Tiene más o menos las mismas ventajas que el ciclo de vida iterativo, con el añadido de una mejor gestión de riesgos. <br>
Por otro lado los costes llegan a ser incluso mayores y hay más enfoque en la parte funcionante del sistema, por lo que no es muy adecuado para proyectos que requieran una gran cantidad de documentación. <br>
<br>

Ágil es un término popular que ahora se da a los enfoques de desarrollo evolutivo tras el
Manifiesto Ágil" de 2001. 
El Manifiesto Ágil dio lugar a una nueva forma de pensar sobre el desarrollo de software
y surgió una nueva moda de métodos, procesos y ciclos de vida de desarrollo Agile.
Los ciclos de vida lineales, como el de cascada, el modelo en "V" y el incremental cedieron paso a enfoques más evolutivos como Scrum y el Proceso Ágil Unificado.
<br>
Para tener éxito, muchos métodos ágiles dependen
del rigor y el cumplimiento de las normas. Aunque puede que no dependan de mucha documentación previa al desarrollo, sí dependen de procesos muy rigurosos.
<br>
Debido a que los enfoques ágiles han nacido para equipos pequeños y altamente colaborativos, funcionan muy bien en ese tipo de entornos.
<br>
<br>

### Enfoques de desarrollo

Los enfoques de desarrollo son una forma de organizar el desarrollo de software. <br>
Algunos de ellos son: <br>
- **SSADM** (Structured Systems Analysis and Design Methodology): El método SSADM implica la aplicación de una secuencia de tareas de análisis, documentación y diseño relacionados con las siguientes etapas: <br>

**Etapa 0 - Estudio de viabilidad** <br>

**Etapa 1 - Investigación de la situación actual** <br>

**Etapa 2 - opciones del sistema de negocios** <br>

**Etapa 3 - Requisitos de especificación** <br> 

**Etapa 4 - opciones del sistema Técnicas** <br>

**Etapa 5 - Diseño lógico** <br>

**Etapa 6 - Diseño físico** <br>

También las tres técnicas más importantes que se utilizan en SSADM son los siguientes:

**Modelado de datos lógicos** <br>

**Modelado de flujo de datos** <br>

**Modelado Entidad Evento** <br>

<br>

- **DSDM** (Dynamic Systems Development Method): 
El éxito de DSDM se debe a su convicción de que cualquier proyecto debe estar alineado con objetivos estratégicos claramente definidos y centrarse en la entrega temprana. El respaldo de esta filosofía con los ocho principios permite a los equipos mantener el enfoque y alcanzar los objetivos del proyecto. <br>
Dichos principios son: <br>

Centrarse en la necesidad comercial <br>
Entregar a tiempo <br>
Colaborar <br>
Nunca comprometer la calidad <br>
Construir incrementalmente a partir de cimientos firmes <br>
Desarrollar iterativamente <br>
Comunicarse de forma continua y clara <br>
Demostrar control <br>

- **Scrum**: es un enfoque de desarrollo que se basa en la metodología ágil. <br>
Es un proceso en el que se aplican de manera regular un conjunto de buenas prácticas para trabajar colaborativamente, en equipo y obtener el mejor resultado posible de proyectos. <br>
Scrum es un marco de trabajo que define un conjunto de eventos, prácticas y roles,​ y que puede tomarse como conjunto base para definir el proceso de producción que usará un equipo de trabajo o dentro de un proyecto. <br>
Los roles principales en Scrum son el Scrum Master, que procura facilitar la aplicación de Scrum y gestionar cambios, el Product Owner, que representa a los interesados, y el Team que ejecuta el desarrollo y demás elementos relacionados con él. <br>
Durante cada sprint el equipo crea un incremento de software entregable. El conjunto de características que forma parte de cada sprint viene del Product Backlog, que es un conjunto de requisitos de alto nivel priorizados que definen el trabajo a realizar. Los elementos del Product Backlog que forman parte del sprint se determinan durante la reunión de Sprint Planning. Durante esta reunión, el Product Owner identifica los elementos del Product Backlog que quiere ver completados y los da a conocer al equipo. 

- **RUP** (Rational Unified Process): El proceso Rational Unified (RUP) es un proceso de ingeniería de software iterativo, evolutivo e incremental, construido sobre los cimientos del modelo espiral, que asigna y gestiona tareas y responsabilidades de forma disciplinada dentro de una organización desarrollo. <br>
El proceso RUP se basa en cuatro fases: <br>
  · Inicio <br>
  · Elaboración <br>
  · Construcción <br>
  · Transición <br>
Al ser un proceso de software, RUP es popular entre los equipos de desarrolladores y utiliza uso extensivo de UML (el Lenguaje Unificado de Modelado) para el Análisis y Diseño
orientado a objetos (OOA&D) y el modelado de casos. Esto puede resultar abrumador pero fomenta un diseño sólido y una buena trazabilidad. <br>
<br>

- **Lean Software Development**: Se trata de un conjunto de técnicas y herramientas que pueden aplicarse para eliminar el malgasto de dinero en la fabricación y mejorar así la productividad. Se basa en los siguientes principios son: <br>

  · Centrarse en los clientes;
  · Dinamizar a los trabajadores;
  · Eliminar el despilfarro;
  · Aprender rápido;
  · Entregar rápido;
  · Incorporar la calidad;
  · Seguir mejorando;
  · Optimizar el conjunto.



