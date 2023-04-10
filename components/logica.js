export default{
    config: new Intl.NumberFormat({ minimumFractionDigits: 0 }),
    sumar(p1){
       return p1.reduce((suma, data) => suma + data.valor, 0);
    },
    porcentaje(p1, total){
        return  (p1 / total) * 100;
    },
    detalle(p1){
        let total = this.sumar(p1);
        let calculo = p1.map(data => {
            return {
                nombre: data.nombre,
                porcentaje: this.porcentaje(data.valor, total),
                porcentajeText: `${Math.round(this.porcentaje(data.valor, total))}%`,
                valor: data.valor,
                valorText: `$${this.config.format(data.valor)}`
            }
        });
        calculo["total"] = total;
        return calculo;
    },
    base(p1){
        return {
            base: p1[0],
            baseText: `$${this.config.format(p1[0])}`,
            deuda: p1[1],
            deudaText: `$${this.config.format(p1[1])}`,
            sobrante: p1[0] - p1[1],
            sobranteText: `$${this.config.format(p1[0] - p1[1])}`,
            porcentaje: this.porcentaje(p1[1], (p1[0]) ? p1[0]: 1),
            porcentajeText: `${Math.round(this.porcentaje(p1[1], (p1[0]) ? p1[0]: 1))}%`,
        };
    }
}