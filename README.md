## Description

Challenge

## Installation

```bash
# node modules
$ yarn install
```

## Running the app

```bash
Add .env file
$ yarn start:dev
```
## Env example
```bash 
$ URL_GUIDE:
$ URL_TRACKING:
```
## Test

```bash
# unit tests
$ yarn test
```
## Doc

```bash
# Swagger
$ http://localhost:8080/challenge/docs
```
## Questions
```
1) Con sus propias palabras explique que es una inyección de dependencias y para
qué sirve
2) Explique con sus propias palabras las diferencias entre asincrono y sincrono
3) Cual es la importancia del uso de promesas en un proyecto
4) Cual es la importancia de usar ORM dentro de un proyecto, ventaja y desventaja
5) Que diferencia hay entre una base de datos SQL, NOSQL
6) Si hablo de colección y documentos me refiero a
7) Si una aplicación está sacando error de CORS a que se está refiriendo
```
## Answers
```
1) Es una practica de programación orientada a objetos que busca remover la responsabilidad de la creación de las dependencias de una clase de tal forma que estas le sean suministradas en la creación.
2) Sincrono es una ejecución secuencial en donde la proxima instrucción no se ejecutara hasta finalizar la anterior por el contrario asincrono no espera finalizar la instrucción previa para comenzar con la siguiente.
3) Las promesas son importantes ya que estas brindan una forma simple de trabajar con operaciones asincronas, estas operaciones tambien podrian ser resueltas con callbacks pero estos vuelven el código complejo y dificil de mantener. 
4) La ventaja de usar un ORM dentro de un proyecto es que simplifica el codígo ya que permite trabajar con objetos en vez de respuestas de queries, pero al mismo tiempo pueden llegar a reducir el rendimiento de la aplicación si no se usan correctamente al generar problemas como el n+1.
5) Las diferencias es que los motores de bases de datos SQL estan optimizados para trabajar con conjuntos de datos bien estructurados donde es posible normalizar la información por el contrario los motores NOSQL son mas aptos para tarabajar con datos no estructurados o que no siguien un esquema.
6) A bases de datos no relacionales (NOSQL).
7) Se refiere que se esta intentado realizar una petición a un servidor que esta en un dominio diferente al del origen.
```
