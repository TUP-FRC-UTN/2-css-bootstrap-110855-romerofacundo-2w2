class Persona{
    constructor(nombre, apellido, correo){
        this.nombre = nombre
        this.apellido = apellido
        this.correo = correo
    }
}

const p = new Persona('tomas','rapaccioni','tomi@gmail.com')
console.log(p)