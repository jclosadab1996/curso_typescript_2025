let variableAny: any; // La sentencia any permite asignar cualquier tipo de valor a la variable, lo que puede ser útil en algunos casos, pero también puede llevar a errores si no se maneja con cuidado.
//variableAny = "Hello";
variableAny = 42;
//variableAny = true;
console.log("Valor de variable any " + variableAny);

let variableDesconocida: unknown; // La sentencia unknown es más segura que any porque no permite que se asignen valores de tipos no definidos.

//variableDesconocida = "Hello";
variableDesconocida = 42;
//variableDesconocida = true;

if (typeof variableDesconocida === "string") {
  console.log("Variable unknown is a string:", variableDesconocida);
}

/*function throwError(message: string): never { // La sentencia never indica que la función nunca regresará, lo que puede ser útil para funciones que lanzan excepciones o entran en un bucle infinito.
    throw new Error(message);
}

throwError("Este es un error");*/

function logMessage(message: string): void {
  // La sentencia void indica que la función no regresará ningún valor, lo que es útil para funciones que realizan una acción pero no necesitan devolver un resultado.
  console.log("Log message:", message);
}

logMessage("Este es un mensaje de log");
