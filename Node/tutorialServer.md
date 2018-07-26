# Creacion Server

Pasos para crear server:

1. Iniciar visual studio en una carpeta y en la terminal ejecutar

        npm install -g express-generator

2. Ejecutar el comando

        express nombreCarpeta

3. Cambiar al directorio
        
        cd nombreCarpeta

4. Instalar dependencias:

        npm install

5. Ejecutar la app:

        npm start

6. Crear archivo `.gitignore` añadir la carpeta `/node_modules`

7. Instalar dependencias:

        npm i mongoose
        npm i nodemon

8. En el archivo package.json añadir dentro de scripts insertarmos

        ,"start:n":"nodemon ./bin/www"

- ahora para iniciar la app usaremos el comando
        
        npm run start:n