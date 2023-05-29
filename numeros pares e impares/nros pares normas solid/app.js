function validNumber() {
    let number = parseInt(prompt("Ingrese un número entero que sea positivo"));
    while (number < 0 || number === 0) {
        alert("Error, ingrese un número válido");
        number = parseInt(prompt("Ingrese un número entero que sea positivo"));
    }
    return number;
}

function countEvenNumbers(number) {
    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            console.log(`Números pares: ${i}`);
        }
    }
}

function countOddNumbers(number) {
    let a = 0;
    while (a < number) {
        a++;
        if (a % 2 === 1) {
            console.log(`Números impares ${a}`);
        }
    }
}

function addEvenNumbers(number) {
    let b = 0;
    let cont = 0;
    do {
        if (cont % 2 === 0) {
            b = b + cont;
        }

        console.log("El resultado de la suma es: " + b);
        cont++
    }
    while (cont <= number);
}

const main = function () {
    let number = validNumber()
    countOddNumbers(number);
    countEvenNumbers(number);
    addEvenNumbers(number);
}

main()