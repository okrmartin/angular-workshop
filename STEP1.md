# Iniciando y preprando proyecto con angular

## 1. Versión mínima
Para utilizar Angular 7 es necesario tener nodejs versión *8* o *10* 

Para comprobar la versión de NodeJS que tenemos en nuestra máquina desde consola lanzar: `node --version` o `node -v`

## 2. Instalar CLI

Para instalar Angular es necesario lanzar desde la consola el comando: 
`npm install --global @angular/cli`

## 3. Crear la aplicación
Antes de ponernos manos a la obra, es necesario crear nuestro proyecto base de Angular, para ello simplemente lanzamos `ng new angular-workshop`

## 4. Lanzar aplicación para asegurar instalación correcta
Para probar que todo se instaló y funciona correctamente:
1. Nos desplazamos a la carpeta que se acaba de crear con el proyecto.
2. Lanzamos `ng serve` ó `ng serve --open` para abrir el navegador al mismo tiempo.


# Bootstrap y Material Icons

## Instalación
Para instalar Angular en nuestro proyecto solo tenemos que lanzar: `npm install --save bootstrap material-design-icons`

## Uso
Una vez instalado, para poder usar las clases definidas o creadas por Bootstrap tenemos que modificar el archivo principal de configuración de Angular `Angular.json`, tenemos que añadir en enlace a los css de Bootstrap que acabamos de descargarnos con npm.

```javascript
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "angular-workshop": {
      "root": "",
      //...
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
            // ...
            "styles": [
              "src/styles.css"
              "./node_modules/Ruta a los archivos css"
            ],
          },
  //...
    }
  }
}

```

# Configurando proxy
Los navegadores de hoy en día por defecto, tienen una configración restrictiva en CORS, esto es un protocolo de seguridad, que no permite que desde nuestro dominio nos conectemos a otros dominios _"no fiables"_ para permitir que nuestro servidor local *(que por defecto en esta aplicación es http://localhost:3000)* debemos configurar un proxy reverso.

Para ello tenemos que crear un archivo en la carpeta llamado `proxy.conf.js` y añadirlo a la configuración de nuestro servidor local.


