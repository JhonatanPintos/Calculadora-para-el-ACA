let descuento = 0.05
let continuar

do {
    const porsentaje = (a, b) => a * b
    let precio = parseInt(prompt("Ingrese un monto"))
    const socio = prompt("Es socio?").toLocaleLowerCase()
    console.log("Es socio? " + socio)

    if (socio == "si") {
        let acumulador = 0
        let resultado1 = (porsentaje(precio, descuento))
        acumulador += resultado1
        console.log("acumulador 1 " + acumulador)

        if (resultado1 > 10) {
            let resultado2 = (porsentaje(resultado1, descuento))
            acumulador += resultado2
            console.log("acumulador 2 " + acumulador)

            if (resultado2 > 10) {
                let resultado3 = (porsentaje(resultado2, descuento))
                acumulador += resultado3
                console.log("acumulador 3 " + acumulador)

                if (resultado3 > 10) {
                    let resultado4 = (porsentaje(resultado3, descuento))
                    acumulador += resultado4
                    console.log("acumulador 4 " + acumulador)

                } else {
                    console.log("Valor inicial " + precio)
                    alert("Le tenes que cargar $" + (acumulador + precio))
                    console.log("Le tenes que cargar $" + (acumulador + precio))
                    continuar = prompt("Desea seguir calculando?").toLowerCase()
                }

            } else {
                console.log("Valor inicial " + precio)
                alert("Le tenes que cargar $" + (acumulador + precio))
                console.log("Le tenes que cargar $" + (acumulador + precio))
                continuar = prompt("Desea seguir calculando?").toLowerCase()
            }

        } else {
            console.log("Valor inicial " + precio)
            alert("Le tenes que cargar $" + (acumulador + precio))
            console.log("Le tenes que cargar $" + (acumulador + precio))
            continuar = prompt("Desea seguir calculando?").toLowerCase()
        }
    } else {
        console.log("Valor inicial " + precio)
        alert("Le tenes que cargar $" + precio)
        console.log("Le tenes que cargar $" + precio)
        continuar = prompt("Desea seguir calculando?").toLowerCase()
    }
} while (continuar != "no")
alert("Gracias por utilizar nuestra aplicacion")