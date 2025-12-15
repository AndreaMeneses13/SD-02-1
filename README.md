## Requisitos previos

Editor de código (ej. VS Code).

Node.js instalado (para ejecutar programas en la terminal).

## Preparación

1. Ir al repositorio proporcionado y hacer un fork

![Imagen de boton fork](/images/fork.png)

2. Una vez creado el fork, verificar que te encuentras en tu repositorio, puedes verificarlo viendo que en la URL diga tu nombre de usuario y que salga tu imagen de perfil. 

3. Ya que estas en tu fork copiar la URL de tipo ssh del botón verde code.

![Imagen de donde copiar la URL](/images/url.png)

4. Clonar el respositorio
```bash
git clone sshurl
```
5. Moverse al repositorio clonado
```bash
cd nombreDelRepo
```

6. Instalar las dependencias
```bash
npm install
```
7. Abrir en vscode
```bash
code .
```

## Pista

Para este laboratorio tendras que usar el prompt propio de nodejs

ya viene puesto en las dependencias, para usarlo usa el siguiente código de guía.

```javascript
const prompt = require("prompt-sync")();

const name = prompt("Ingresa tu nombre");
```

## Instrucciones

El reto de FizzBuzz es una de las tareas de entrevista de programación más comunes en el mundo. 

El desafío consiste en escribir un programa que muestre una lista de números, reemplazando cada número divisible

por 3 con Fizz, y cada número divisible por 5 con Buzz.

Hoy construirás y mejorarás este reto, y aprenderás por ti mismo cómo usar los bucles for en el proceso.

Para cada tarea, copia tu código de la tarea anterior y extiéndelo en la siguiente.

## Tareas

1. ¿Puedes crear un programa en JavaScript que muestre todos los números del 1 al 105?  
    * Fallarás esta tarea si tu programa se detiene en 104 números. **¡Las computadoras son muy literales!**

2. Copia el código de **task1.js** en **task2.js**. ¿Ahora puedes reemplazar cada número divisible por 3 con Fizz?  
    * Asegúrate de que tu código muestre únicamente Fizz en esos números.  

3. ¿Puedes también reemplazar cada número divisible por 5 con Buzz, y cada número que cumpla ambas condiciones con FizzBuzz?  
    * Asegúrate de que esto muestre FizzBuzz en una sola línea, no en dos líneas separadas ni en el orden incorrecto.  

4. ¿Puedes continuar el patrón reemplazando también cada número divisible por 7 con Woof, junto con las otras condiciones?  
    * El orden lógico de salida cuando un número cumple todas las condiciones es: Fizz, luego Buzz, luego Woof.  

---

## Tareas Extra

Si completaste las tareas anteriores, ¡prueba las siguientes tareas extra para un reto adicional!  

5. ¿Puedes pedirle al usuario que ingrese la cantidad de líneas que se generarán, o que genere una línea específica?  

6. ¿Puedes asignar los números generados de la secuencia a elementos en una lista o arreglo?  

7. ¿Cómo intentarías reemplazar una secuencia de números primos impares con una nueva palabra dentro de una lista o arreglo?  
    *¡Agrega tus propias palabras para números primos más grandes!  

