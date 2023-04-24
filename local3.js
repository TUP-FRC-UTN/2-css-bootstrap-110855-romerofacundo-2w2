const obtenerPersonaMasGrande = function(p1,p2,p3){
    let mayor = p1

    if(p1.edad > p1.edad){
        mayor = p2
    }
    else{
        if(p3.edad > p2.edad){
            mayor = p3
        }
    }
    console.log('soy una funcion comun')
    return mayor
}


const obtenerPersonaMasGrande2 = (p1,p2,p3) => {
    let mayor = p1

    if(p1.edad > p1.edad){
        mayor = p2
    }
    else{
        if(p3.edad > p2.edad){
            mayor = p3
        }
    }
    console.log('soy una funcion comun')
    return mayor
}

const p1 = {
    nombre: 'Juan',
    edad: 90
}
const p2 = {
    nombre: 'Tomas',
    edad: 50
}
const p3 = {
    nombre: 'Fran',
    edad: 30
}
console.log(obtenerPersonaMasGrande(p1,p2,p3))
console.log(obtenerPersonaMasGrande2(p1,p2,p3))