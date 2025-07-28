//=========TIPOS BÁSICOS=========

// String
let string: string = "Pildora";
string="Esther"; // Cambiando el valor de la variable

// Number
let age: number = 30;
age = 32; // Cambiando el valor de la variable

// Boolean
let activo: boolean = true;
activo = false; // Cambiando el valor de la variable

// =========TIPOS ESPECIALES=========

//Null
let nulo: null = null;// Null es un tipo especial que representa la ausencia de valor

// Undefined
let indefinido: undefined = undefined;// Undefined es un tipo especial que representa una variable sin valor asignado

// Any
let variable: any = "Pildora"; // Puede ser de cualquier tipo
variable = 42; // Cambia a número
variable = true; // Cambia a booleano

// Tipos especiales (union)
type ID = string | number; // Unión de tipos (string o number)
let id: ID = "123"; // Puede ser un string
id = 456; // O un número

// =========FUNCIONES=========

function myName(): string {
    return "Esther";
}

function saludo(name:string): string {
    return `Hola como estás ${name}`;
}

const saludoV2 = (name:string): string=> {
    return `Hola como estás ${name}`;
}


