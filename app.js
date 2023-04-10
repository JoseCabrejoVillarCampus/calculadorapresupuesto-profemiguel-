import tablas from "./components/tablas.js";
import config from "./config.js";
tablas.show();
addEventListener("submit", (e)=>{
    let data = Object.fromEntries(new FormData(e.target));
    data.valor = Number(data.valor);
    let id = data.opcion;
    delete data.opcion;
    let ws = new Worker("./ws/wscalcular.js", {type:"module"});
    config[id].unshift(data);
    localStorage.setItem(id, JSON.stringify(config[id]))
    ws.postMessage(config);
    tablas.show();
    e.target.reset();
    e.preventDefault(); 
})

