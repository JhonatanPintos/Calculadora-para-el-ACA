let descuento = 0.05
let continuar

    const porsentaje = (a, b) => a * b
    const socio = document.querySelector("#botonHtml")
    socio.onclick = () => {
        calcular()
    }

    const calcular = () => {
        const precio = parseFloat(document.querySelector("#datosHtml").value)
        let acumulador = 0
        let resultado1 = (porsentaje(precio, descuento))
        acumulador += resultado1

        if (resultado1 > 10) {
            let resultado2 = (porsentaje(resultado1, descuento))
            acumulador += resultado2

            if (resultado2 > 10) {
                let resultado3 = (porsentaje(resultado2, descuento))
                acumulador += resultado3

                if (resultado3 > 10) {
                    let resultado4 = (porsentaje(resultado3, descuento))
                    acumulador += resultado4

                } else {
                    let total = (precio + acumulador).toFixed(2)
                    console.log("Valor inicial " + precio)
                    alert("Le tenes que cargar $" + (total) + "\n El Socio tendra que pagar $" + ((total)-(total)*descuento).toFixed(2))
                    console.log("Le tenes que cargar $" + (total))
                }

            } else {
                let total = (precio + acumulador).toFixed(2)
                console.log("Valor inicial " + precio)
                alert("Le tenes que cargar $" + (total) + "\n El Socio tendra que pagar $" + ((total)-(total)*descuento).toFixed(2))
                console.log("Le tenes que cargar $" + (total))
            }

        } else {
            let total = precio + acumulador
            console.log("Valor inicial " + precio)
            alert("Le tenes que cargar $" + (total) + "\n El Socio tendra que pagar $" + ((total)-(total)*descuento).toFixed(2))
            console.log("Le tenes que cargar $" + (total))
        }
    }