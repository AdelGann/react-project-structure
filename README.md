### Estructura de proyecto

```
src/
-- assets
-- components
-- features
-- router
-- hooks
-- helpers
-- store
```

### assets

> En assets van a estar todos los archivos de tipo img, svg etc... Son reutilizables

### components

> En components, van a estar todos los inputs, botones, y demas cosas que sean reutilizables, en caso de editar, Ej. Un boton, y se desee cambiar el estilo, no se van a tener que cambiar los estilos de todos los botones usados en features, sino que se van a cambiar el estilo en components

### features

> En features, van a estar todas las vistas entregables de la pagina es decir, todo lo que se vaya a renderizar en router importante aclarar, nada de lo que vaya en components debe renderizarse en router.

### router

> En Router debe ir todo lo que se vaya a renderizar desde features, solo lo de features

### hooks

> En hooks, se van a alojar todos los custom hooks que se vayan a crear. Cuidado, un hook no es lo mismo que un helper, todo hook es el que usa dependencias directas de react, por ejemplo useState o useEffect.

### helpers

> Los helpers son lo contrario a los hooks, son todas aquellas funciones que no dependen directamente de react, funciones que vas a crear y las vas a reutilizar constantemente y no depende de un useState

### store

> El storage, se va a almacenar toda logica de almacenamiento web, es decir, logica para validar tokens y demas.


## Recomendación

usa custom components, mi recomendación es shadcn, pero se va a tener que realizar una logica extra para instalar tailwind. https://ui.shadcn.com.

si vas a realizar custom components, tienes que hacer todo como te lo plantee, usando buenas practicas, esto es typescript, no debe haber ningun tipo implicito ni tampoco any's

NO quiero ver ningun tipo de componente renderizado en el router, un componente es algo que se va a reutilizar, y solo se usan en features y de ser necesario dentro de otros componentes

Suerte :)