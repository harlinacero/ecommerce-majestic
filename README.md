# Ejemplo de Ecommerce con Angular 16 - Docker

Este proyecto fue creado con [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

## Instrucciones de instalación con Docker

```bash
  git clone ...
  cd my-project
  docker build -t majestic .
  docker run -d --rm -p 8085:80 --name majestic majestic
```

 * Abrir en el navegador en http://localhost:8085/

## Instrucciones de Instalación con Agular

* Instalar Node 16
* Instalar Angular cli

```bash
  git clone ...
  cd my-project
  npm install --legacy-per-deps
  npm run start
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


