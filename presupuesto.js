
function montoParcial() {
    let personas = parseInt(prompt('Ingrese la cantidad de personas que irán al evento'))
     let entradas = prompt(`Elija un plato de entrada: 
1: Empanadas de bondiola y capresse
2: Brusquetas de jamón crudo y salmón ahumado
`)
    switch (entradas) {
        case "1": 
            montoEntradas = (300 * personas)
            break;
        case "2":
            montoEntradas = (350 * personas)
            break
        default:
            alert("Ingresar entrada válida")
    }
        
      let platoPrincipal = prompt(`Elija un plato principal:
    1: Goulash con spaetzle
    2: Tacos de pollo
    `)
    switch (platoPrincipal) {
        case "1": 
            montoPlatoPrincipal = (600 * personas)
            break;
        case "2":
            montoPlatoPrincipal = (450 * personas)
            break
        default:
            alert("Ingresar entrada válida")
    }
    
      let postre = prompt(`Elije un postre:
    1: Tiramisú
    2: Chocotorta
    `)
    switch (postre) {
        case "1": 
            montoPostre = (150 * personas)
            break;
        case "2":
            montoPostre = (100 * personas)
            break
        default:
            alert("Ingresar entrada válida")
    } 
    let presupuesto = (montoEntradas + montoPlatoPrincipal + montoPostre)
    alert(`El presupuesto para ${personas} personas es de $${presupuesto}`)
}

alert("Bienvenido/a a Gordo Random, pulse enter para pedir un presupeusto")
let respuesta = "si";

while (respuesta != "no") {
    montoParcial()
   
    respuesta = prompt(`¿Desea pedir otro presupuesto? si/no`)
}
alert("Gracias por su interés, le enviaremos un email con más información")



// alert("Bienvenido/a a Gordo Random, pulse enter para pedir un presupeusto")
// let respuesta = "si";

// while (respuesta != "no") {
//     let personas = parseInt(prompt('Ingrese la cantidad de personas que irán al evento'))
//     let entradas = prompt(`Elija un plato de entrada: 
// 1: Empanadas de bondiola y capresse
// 2: Brusquetas de jamón crudo y salmón ahumado
// `)
 
// switch (entradas) {
//     case "1": 
//         montoEntradas = (300 * personas)
//         break;
//     case "2":
//         montoEntradas = (350 * personas)
//         break
//     default:
//         alert("Ingresar entrada válida")
// }
    
//   let platoPrincipal = prompt(`Elija un plato principal:
// 1: Goulash con spaetzle
// 2: Tacos de pollo
// `)
// switch (platoPrincipal) {
//     case "1": 
//         montoPlatoPrincipal = (600 * personas)
//         break;
//     case "2":
//         montoPlatoPrincipal = (450 * personas)
//         break
//     default:
//         alert("Ingresar entrada válida")
// }

//   let postre = prompt(`Elije un postre:
// 1: Tiramisú
// 2: Chocotorta
// `)
// switch (postre) {
//     case "1": 
//         montoPostre = (150 * personas)
//         break;
//     case "2":
//         montoPostre = (100 * personas)
//         break
//     default:
//         alert("Ingresar entrada válida")
// }
//     let presupuesto = (montoEntradas + montoPlatoPrincipal + montoPostre)

//     alert(`El presupuesto para ${personas} personas es de $${presupuesto}`)
//     respuesta = prompt(`¿Desea pedir otro presupuesto? si/no`)
// }
// alert("Gracias por su interés, le enviaremos un email con más información")

