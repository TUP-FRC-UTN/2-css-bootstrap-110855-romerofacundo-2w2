const Persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    fechaNacimiento: new Date(1988,4,27),
    saludar: function(){
        console.log('hola soy Juan')
    }

}

const Persona2 = new Object()
Persona2.nombre = 'Tomas'
Persona2.apellido = 'Rapaccioni'
Persona2.fechaNacimiento = new Date(1999,09,21)
Persona2.saludar = function(){
    console.log('hola me llamo tomas')
}

console.log(Persona1)
console.log(Persona2)
