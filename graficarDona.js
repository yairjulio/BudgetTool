let i = 0;

const graficarDona = (gastos) => {
    const gastosCategoria = [];
    const arregloSupermercado = gastos.filter(obj => {
        return obj.categoria === 'Supermercado';
    });
    const arregloViajes = gastos.filter(obj => {
        return obj.categoria === 'Viajes';
    });
    const arregloTransporte = gastos.filter(obj => {
        return obj.categoria === "Transporte";
    });
    const arregloServicios = gastos.filter(obj => {
        return obj.categoria === "Servicios";
    });
    const totalSupermercado = arregloSupermercado.reduce((acc,el) => acc + el.costo,0);
    const totalViajes = arregloViajes.reduce((acc,el) => acc + el.costo,0);
    const totalTransporte = arregloTransporte.reduce((acc,el) => acc + el.costo,0);
    const totalServicios = arregloServicios.reduce((acc,el) => acc + el.costo,0);

    gastosCategoria[0] = totalSupermercado;
    gastosCategoria[1] = totalViajes;
    gastosCategoria[2] = totalTransporte;
    gastosCategoria[3] = totalServicios;

    const ctx = document.getElementById('doughnutChart');
    const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Supermercado', 'Viajes', 'Transporte', 'Servicios'],
            datasets: [{
                label: 'Categorias',
                data: gastosCategoria,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                hoverOffset: 4
            }]
        }
    });
}

export {graficarDona}