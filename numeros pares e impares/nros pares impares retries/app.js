let tries = 3

function randomNumber(){
    let max = 100
    let min = 1
    return Math.floor((Math.random() * (max - min + 1)) + min)
}

function validNumberQuantity(number){
    if(number >= 1 && number <= 100) return true
    return false
}

function promptFirstNumber(){
    let number = prompt('Ingrese un numero. tienes ' + tries + ' intentos')
    number = parseInt(number)
    if(isNaN(number)) return console.log('No es un numero')
    if(!validNumberQuantity(number)) return console.log('El numero no está dentro de los parametro definidos (1 y 100)')
    return number
}

function victory(number){
    alert(`Acertaste! el numero era: ${number}`)
}

function defeat(number){
    alert(`Perdiste :c el numero era: ${number}`)
}

function promptNumberLessThanRandomNumber(thisTries){
    let number = prompt(`El numero a encontrar es mayor. Ingrese nuevamente un numero. Le quedan ${thisTries}`)
    number = parseInt(number)
    if(isNaN(number)) return console.log('No es un numero')
    if(!validNumberQuantity(number)) return console.log('El numero no está dentro de los parametro definidos (1 y 100)')
    return number
}

function promptNumberGreaterThanRandomNumber(thisTries){
    let number = prompt(`El numero a encontrar es menor. Ingrese nuevamente un numero. Le quedan ${thisTries}`)
    number = parseInt(number)
    if(isNaN(number)) return console.log('No es un numero')
    if(!validNumberQuantity(number)) return console.log('El numero no está dentro de los parametro definidos (1 y 100)')
    return number
}

function game(){
    const findNumber = randomNumber()
    let number = promptFirstNumber()
    console.log('Numero a encontrar: ', findNumber)
    console.log('Numero: ', number)
    for(let i = 1; (i <= tries || number === findNumber) ; i++){
        if(validNumberQuantity(number) === false) tries = tries + 1
        if(number === findNumber) break
        if(number < findNumber) number = promptNumberLessThanRandomNumber(tries - i) //15
        else number = promptNumberGreaterThanRandomNumber(tries - i)
    }
    if(findNumber === number) victory(findNumber)
    else defeat(findNumber)
}

game()