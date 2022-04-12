document.querySelector('#convert').addEventListener('click', convert)

const unitOne = document.querySelector('#unitOne')
const unitTwo = document.querySelector('#unitTwo')
//place to display converted temp
const display = document.querySelector('#newTemp')
//input temperature
const temp = document.querySelector('#temp')


function allToF() {
    if (unitOne.value == 'celsius') {
        return temp.value * 1.8 + 32
    }
    if (unitOne.value == 'kelvin') {
        return temp.value * 1.8 - 459.67
    }
    if (unitOne.value == 'rankine') {
        return temp.value - 459.67
    }
    if (unitOne.value == 'reaumur') {
        return temp.value * (9/4) +32
    }
    if (unitOne.value == 'fahrenheit') {
        return temp.value
    }
}

function fToOther() {
    const fTemp = allToF()
    background(fTemp)
    if (unitTwo.value == 'celsius') {
        return (fTemp-32)/1.8 + '°C'
    }
    if (unitTwo.value == 'kelvin') {
        return (fTemp+459.67)/1.8 + 'K'
    }
    if (unitTwo.value == 'rankine') {
        return fTemp + 459.67 + '°Ra'
    }
    if (unitTwo.value == 'reaumur') {
        return (fTemp-32)*4/9 + '°Re'
    }
    if (unitTwo.value == 'fahrenheit') {
        return fTemp + '°F'
    }
}

function background(temp) {
    document.querySelector('#tool').classList.add('hidden')
    if (temp >= 90) {
        document.querySelector('html:hover').style.background = '#ffb3ba'
        document.querySelector('html:hover').style.color = '#b27d82'
        document.querySelector('#hell').classList.toggle('hidden')
        document.querySelector('#hot').classList.add('hidden')
        document.querySelector('#warm').classList.add('hidden')
        document.querySelector('#good').classList.add('hidden')
        document.querySelector('#cold').classList.add('hidden')
    }
    else if (temp >=85) {
        document.querySelector('html:hover').style.background = '#ffdfba'
        document.querySelector('html:hover').style.color = '#b29c82'
        document.querySelector('#hot').classList.remove('hidden')
        document.querySelector('#hell').classList.add('hidden')
        document.querySelector('#warm').classList.add('hidden')
        document.querySelector('#good').classList.add('hidden')
        document.querySelector('#cold').classList.add('hidden')
    }
    else if (temp > 77) {
        document.querySelector('html:hover').style.background = '#ffffba'
        document.querySelector('html:hover').style.color = '#b2b282'
        document.querySelector('#warm').classList.remove('hidden')
        document.querySelector('#hot').classList.add('hidden')
        document.querySelector('#hell').classList.add('hidden')
        document.querySelector('#good').classList.add('hidden')
        document.querySelector('#cold').classList.add('hidden')
    }
    else if (temp > 66) {
        document.querySelector('html:hover').style.background = '#baffc9'
        document.querySelector('html:hover').style.color = '#82b28c'
        document.querySelector('#good').classList.remove('hidden')
        document.querySelector('#hot').classList.add('hidden')
        document.querySelector('#warm').classList.add('hidden')
        document.querySelector('#hell').classList.add('hidden')
        document.querySelector('#cold').classList.add('hidden')
    }
    else {
        document.querySelector('html:hover').style.background = '#bae1ff'
        document.querySelector('html:hover').style.color = '#829db2'
        document.querySelector('#cold').classList.remove('hidden')
        document.querySelector('#hot').classList.add('hidden')
        document.querySelector('#warm').classList.add('hidden')
        document.querySelector('#good').classList.add('hidden')
        document.querySelector('#hell').classList.add('hidden')
    }
}

function convert() {
    if (isNaN(temp.value)) {
        display.innerText = 'Enter a Temperature'
    } else{
        display.innerText = fToOther()
    }
}