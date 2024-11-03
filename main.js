let automotor =[]

const agregarVehiculo = (marca,modelo,tipoSeguro) => {
    automotor.push({
        marca,
        modelo,
        tipoSeguro
    })

    console.log(automotor);
    
}

let hogar =[]

const agregarHogar = (tipoHogar,tipoSeguro) => {
    
    
    hogar.push({
        tipoHogar,
        tipoSeguro,
    })

    console.log(hogar);
}

let riesgosAgricolas =[]

const agregarRiesgo = (tipoRiesgo,tipoSeguroAgricola) => {
    riesgosAgricolas.push({
        tipoRiesgo,
        tipoSeguroAgricola
    })

    console.log(riesgosAgricolas);
    
}

const core  = () => {
    let opcion = Number(prompt("Bienvenido a Su seguro Online\n ¿que seguro le gustaria contratar?\n 1- Automotor\n 2- Hogar\n 3- Riesgos Agricolas "))

    let bandera = true;
    while(bandera){
        
        switch (opcion) {
            case 1:
                let marca = prompt("ingrese la marca de su vehiculo")
                let modelo = prompt("ingrese el modelo (año)")
                let tipoSeguro = Number(prompt("Qué tipo de seguro quiere?\n 1- Responsabilidad civil\n 2- Todo riesgo\n"))
                let nombreSeguro;
                let seguroFlag = true;

                while (seguroFlag) {
                    switch (tipoSeguro) {
                        case 1: nombreSeguro = 'Responsabilidad civil';
                            seguroFlag = false;
                        break;
                        case 2: nombreSeguro = 'Todo riesgo';
                            seguroFlag = false;
                        break;
                        default: alert('Opcion incorrecta.')
                            tipoSeguro = Number(prompt("Qué tipo de seguro quiere?\n 1- Responsabilidad civil\n 2- Todo riesgo\n"))
                        break;
                    }   
                }
                agregarVehiculo(marca,modelo,nombreSeguro)
                
                bandera = confirm("¿Le gustaria tomar otro seguro?")
                break;
            case 2:
                let tipoHogar = prompt("Ingrese tipo de hogar (Ej:casa,departamento etc.)");
                let tipoSeguroHogar = Number(prompt("Qué tipo de seguro quiere?\n 1- Incendio\n 2- Incedio + Robo\n"))
                let nombreSeguroHogar;
                let hogarFlag = true;

                while (hogarFlag) {
                    switch (tipoSeguroHogar) {
                        case 1: nombreSeguroHogar = 'Incendio';
                            hogarFlag = false;
                        break;
                        case 2: nombreSeguroHogar = 'Incedio + Robo';
                            hogarFlag = false;
                        break;
                        default: alert('Opcion incorrecta.')
                            tipoSeguroHogar = Number(prompt("Qué tipo de seguro quiere?\n 1- Incendio\n 2- Robo\n"))
                        break;
                    }   
                }
                agregarHogar(tipoHogar,nombreSeguroHogar)
                
                bandera = confirm("¿Le gustaria tomar otro seguro?")
                break;
            case 3:
                let tipoRiesgo = prompt("Ingrese tipo de riesgo (Ej:cebada,trigo etc.)");
                let tipoSeguroAgricola = Number(prompt("Qué tipo de seguro quiere?\n 1- Granizo e Incendio\n 2- Granizo , Incedio y Helada\n"))
                let nombreSeguroAgricola;
                let AgricolaFlag = true;

                while (AgricolaFlag) {
                    switch (tipoSeguroAgricola) {
                        case 1: nombreSeguroAgricola = 'Granizo e Incendio';
                            AgricolaFlag = false;
                        break;
                        case 2: nombreSeguroAgricola = 'Granizo , Incedio y Helada';
                            AgricolaFlag = false;
                        break;
                        default: alert('Opcion incorrecta.')
                        tipoSeguroAgricola = Number(prompt("Qué tipo de seguro quiere?\n 1- Granizo e Incendio\n 2- Granizo , Incedio y Helada\n"))
                        break;
                    }   
                }
                agregarRiesgo(tipoRiesgo,nombreSeguroAgricola)
                bandera = confirm("¿Le gustaria tomar otro seguro?")
                break;
            default:
                alert("Esa es una opcion incorrecta, por favor elija una correcta")
                bandera = confirm("¿Le gustaria tomar otro seguro?")
                break;
        }
            if(bandera){
                opcion = Number(prompt("Bienvenido a Su seguro Online\n ¿que seguro le gustaria contratar?\n 1- Automotor\n 2- Hogar\n 3- Riesgos Agricolas "))
            }else{
                let precioSegurosAutomotores = 0;
                let precioSegurosHogar = 0;
                let precioSeguroAgricola = 0;
                automotor.forEach(element => {
                    if (element.tipoSeguro === 'Todo riesgo') {
                        precioSegurosAutomotores += 200 * Number((element.modelo).substring(2, 4));
                    }else{
                        precioSegurosAutomotores += 100 * Number((element.modelo).substring(2, 4));
                    }
                });
                hogar.forEach(e => {
                    if (e.tipoSeguro == 'Incendio') {
                        precioSegurosHogar += 1000;
                    }else{
                        precioSegurosHogar += 1500;
                    }
                });
                riesgosAgricolas.forEach(element => {
                    if (element.tipoSeguroAgricola === 'Granizo e Incendio') {
                        precioSeguroAgricola += 20000;
                    }else{
                        precioSeguroAgricola += 40000;
                    }

                });
                alert('Gracias por todo, debe pagar:\n' + ' $' + precioSegurosAutomotores + ' de automotor/es \n' 
                    + ' $' + precioSegurosHogar + ' de su hogar/es \n' + ' $' + precioSeguroAgricola + ' por la proteccion de sus cultivos'
                )
            }
    }
}

core();