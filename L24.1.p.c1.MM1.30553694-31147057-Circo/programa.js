class espectador{
    constructor(n, e, s){
        this.nombre = n;
        this.edad = e;
        this.sexo = s;
    }
    descuento(){
        if (this.edad <= 18)
        return 15 * 0.1;
        else return 0;
    }
    totalPago(){
        return 15 - this.descuento();
    }
}

class circo{
    constructor(){
        this.contNiños = 0;
        this.contAdoles = 0;
        this.acumVNiños = 0;
        this.acumVAdoles = 0;
        this.contEspec = 0;
    }
    procesarEspectador(e){
        if (e.edad <= 12){
            this.contNiños++;
            this.acumVNiños+= e.totalPago();
        }
        else if (e.edad > 12 && e.edad <= 18){
            this.contAdoles++;
            this.acumVAdoles+= e.totalPago();
        }
        this.contEspec++;
    }
    promVAdol(){
        return this.acumVAdoles/this.contAdoles;
    }
    mayorAsistencia(){
        if (this.contNiños > this.contAdoles) return "Niños";
        else return "Adolescentes";
    }
    porcentajeNiños(){
        return (this.contNiños/this.contEspec) * 100;
    }
}

let espectador1 = new espectador("Ana", 8, "F");
let espectador2 = new espectador("Luis", 15, "M");
let espectador3 = new espectador("Valeria", 12, "F");
let espectador4 = new espectador("Fabián", 21, "M");

let Circo = new circo();

Circo.procesarEspectador(espectador1);
Circo.procesarEspectador(espectador2);
Circo.procesarEspectador(espectador3);
Circo.procesarEspectador(espectador4);

let salida = document.getElementById("app");

salida.innerHTML+= "RESULTADOS";
salida.innerHTML+= "";
salida.innerHTML+= `<br> Total a pagar por cada espectador:
${espectador1.nombre} pagó ${espectador1.totalPago()}.
${espectador2.nombre} pagó ${espectador2.totalPago()}.
${espectador3.nombre} pagó ${espectador3.totalPago()}.
${espectador4.nombre} pagó ${espectador4.totalPago()}.
`;
salida.innerHTML+= `<br> Promedio de ventas a espectadores adolescentes: ${Circo.promVAdol()}`;
salida.innerHTML+= `<br> Entre niños y adolescentes, los que más asistieron fueron los ${Circo.mayorAsistencia()}`;
salida.innerHTML+= `<br> Porcentaje de niños que asistieron en relación al total de espectadores: ${Circo.porcentajeNiños()}`;

