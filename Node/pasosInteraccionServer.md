# Interaccion con servidor desde Postman

Url del server 192.168.5.254:3443

## Register
- En postman seleccionar metodo `post`
- En la url añadir `/users/register`
- En la pestaña body selecionar la opcion `raw` y en el tipo de entrada seleccionamos `json`
```JSON
{
	"username":"cjvillamil",
	"password":"123456",
	"phone":"987654321",
	"firstname":"Carol"
}
```

- La respuesta que genera el server luce así:
```JSON
{
    "status": "Registration Successful!"
}
```
## Login
- En postman seleccionar metodo `post`
- En la url añadir `/users/login`
```JSON
{
	"username":"cjvillamil",
	"password":"123456"
}
```
- respuesta:
```JSON
{
    "status": "Login successful!",
    "success": true,
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImNqdmlsbGFtaWwiLCJfaWQiOiI1YjU5MTBlOWIwNTAxODI5M2MxMDdhMDgiLCJ1c2VyVHlwZSI6IlVzZXIiLCJpYXQiOjE1MzI1NjM3NjYsImV4cCI6MTUzNTU4Nzc2Nn0.Y0tmhkVRj7cciyp5Ii47cCddixFBxpkD7lCZ2xHbXe4",
    "userType": "User"
}
```
## Notifications get
- En postman seleccionar metodo `get`
- En la url añadir `/notification`

trae todas las notificaciones de los usuarios

## Notifications post
- En postman seleccionar metodo `post`
- En la url añadir `/notification`
- En la pestaña Headers añadir:

        key : x-access-token

       value : token de la respuesta del login

- En la pestaña Body añadir:
```JSON
{
	"message":"Prueba token Carol"
}
```
- respuesta 
```JSON
{
    "_id": "5b59122513c1fe2b4820027b"
}
```
despues puedo interactuar con las notificaciones de cada usuario de la siguiente manera:

## Buscar Notificaciones por usuario

- En postman seleccionar metodo `get`
- En la url añadir `/notification/:idUsuario`
por ejemplo `192.168.5.254:3443/notification/5b59122513c1fe2b4820027b`

- respuesta
```JSON
{
    "_id": "5b59122513c1fe2b4820027b",
    "updatedAt": "2018-07-26T00:13:25.731Z",
    "createdAt": "2018-07-26T00:13:25.731Z",
    "message": "Prueba token Carol",
    "__v": 0,
    "send": "2018-07-26T00:10:18.024Z",
    "read": false
}
```