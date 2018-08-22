1.crear una nueva carpeta
2.abrir con visual studio code
3.en consola escribir
```
ionic start <NOMBRE_APP> super
cd <NOMBRE_APP>
ionic serve

//para este caso

ionic start appPrueba2
cd appPrueba2
ionic serve
```
en el archivo api.ts de la subcarpeta api de la carpeta provider
modificamos la linea
 url: string = 'https://example.com/api/v1';
 //por 
  url: string = 'https://fedesoftambiental.herokuapp.com';
