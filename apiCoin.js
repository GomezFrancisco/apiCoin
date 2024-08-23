async function obtenerDatosCriptomonedas() {
    const apiKey = '';
    const url = 'https://rest.coinapi.io/v1/exchanges';

    try {
        const response = await fetch(url, {
            headers: { 'X-CoinAPI-Key': apiKey }
        });

        if (!response.ok) throw new Error(`Error${response.status}`);

        const datos = await response.json();
        const lista = document.getElementById('lista-exchanges');

        datos.slice(0, 16).forEach(exchange => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>Nombre:</strong> ${exchange.name} <br>
                <strong>Cotización por hora:</strong> ${exchange.volume_1hrs_usd.toFixed(2)} USD <br>
                <strong>Cotización del día:</strong> ${exchange.volume_1day_usd.toFixed(2)} USD
            `;
            lista.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}

obtenerDatosCriptomonedas();