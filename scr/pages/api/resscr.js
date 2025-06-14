document.getElementById('plus').addEventListener('click', async () =>{
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then((req) => {return req.json()})
    .then(data => {
        const res = Object.entries(data.Valute)
        .map(([code, currency]) => `"${code}": ${currency.Value}`).join('\n')
        document.getElementById('out').textContent = res 
    })
    .catch(err =>{
        document.getElementById('out').textContent = `Ошибка: ${err.message}`
    })
})