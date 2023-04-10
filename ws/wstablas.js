let table = {
    showTableIngresos(p1){
        let plantilla = /*html*/`
            <table border="solid">
                <caption>Ingresos</caption>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
        `;
        p1.forEach((data) => {
            plantilla += /*html*/ `
                <tr>
                    <td>${data.nombre}</td>
                    <td>${data.valorText}<sup>${data.porcentajeText}</sup></td>
                </tr>
            `;
        });
        return {plantilla : /*html*/`${plantilla}</tbody></table>`, id: "#ingresos"};
    },
    showTableEgresos(p1){
        let plantilla = /*html*/`
            <table border="solid">
                <caption>Egresos</caption>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
        `;
        p1.forEach((data) => {
            plantilla += /*html*/ `
                <tr>
                    <td>${data.nombre}</td>
                    <td>${data.valorText}<sup>${data.porcentajeText}</sup></td>
                </tr>
            `;
        });
        return {plantilla : /*html*/`${plantilla}</tbody></table>`, id: "#egresos"};
    },
    showTableEstado(p1){
        let plantilla = /*html*/`
            <table border="solid">
                <caption>Disponible</caption>
                <thead>
                    <tr>
                        <th>Base</th>
                        <th>Deuda</th>
                        <th>Presupuesto Disponible</th>
                    </tr>
                </thead>
                <tbody>
        `;
        [p1].forEach((data) => {
            plantilla += /*html*/ `
                <tr>
                    <td>${data.baseText}</td>
                    <td>${data.deudaText}<sup>${data.porcentajeText}</sup></td>
                    <td>${data.sobranteText}</td>
                </tr>
            `;
        });
        return {plantilla : /*html*/`${plantilla}</tbody></table>`, id: "#estado"};
    }
}
self.addEventListener("message", (e)=>{
    postMessage(table[e.data.module](e.data.p1));
})