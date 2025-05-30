document.addEventListener('DOMContentLoaded',function(){
    const header = document.getElementById('header')

    const info = {
        SN: 'Пахомов Владимир',
        group: '№231'
    }

    const infoElement = document.createElement('h1')
    infoElement.textContent = `${info.Sn} ${info.group}`
    header.appendChild(infoElement)
})