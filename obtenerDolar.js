let i = 0;


const obtenerDolar = async () => {
    try{
        const response = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales");
        const data = await response.json();
        let tbody = document.getElementById("cotizacion");
    
        for (i=0;i<2;i++){    
            let row = document.createElement("tr");
            let tabtip = document.createElement("td");
            tabtip.innerHTML = data[i].casa.nombre;
            let tabcom = document.createElement("td");
            tabcom.innerHTML = data[i].casa.compra;
            let tabven = document.createElement("td");
            tabven.innerHTML = data[i].casa.venta;
    
            row.appendChild(tabtip);
            row.appendChild(tabcom);
            row.appendChild(tabven);

            tbody.appendChild(row);
        }
        return data;
    } catch (error) {
        console.log('Hubo un error',error)
    }
}

export { obtenerDolar }
