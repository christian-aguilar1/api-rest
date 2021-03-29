# api-rest de una aplicación de mensajería

# estructura del proyecto
- Capa de configuración
1. server.js: llega un mensaje (una petición) de internet al servidor (server.js), server.js está encargado de comprobar si las peticiones son correctas para poder entrarlas al servidor, también es quién se encarga de configurar toda la informacion importante del servidor, co9mo db, cabecera, etc
- Capa de red
2. routes.js: server.js se comunicará con los otros módulos a través de routes.js para gestionar las rutas, routes.js recibe la petición, pregunta hacia donde quiere ir y llama al componente adecuado
3. response.js
- Capa de componentes
4. Components:
    * message: contiene los endpoints de los mensajes, las acciones que queremos hacer, cual es toda la lógica relacionada, dónde se almacena, etc. Contendrá:
        1) network.js, archivo de rutas, los endpoints y todos la informacion que tenga que ver con http
        2) controller, toda la logica del componente (la logica de negocio)
        3) store, archivo encargado de gestionar la db
    * users:
        1) network
        2) controller
        3) store

