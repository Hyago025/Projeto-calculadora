let somar = function(){
    let num1 = window.document.getElementById("txtNum1")
    let num2 = window.document.getElementById("txtNum2")
    let res = window.document.getElementById("res")

    let n1 = Number(num1.value)
    let n2 = Number(num2.value)

    res.innerHTML = `Resultado: ${n1 + n2}`
}

let subtrair = () =>{
    let num1 = window.document.getElementById("txtNum1")
    let num2 = window.document.getElementById("txtNum2")
    let res = window.document.getElementById("res")

    let n1 = Number(num1.value)
    let n2 = Number(num2.value)

    res.innerHTML = `Resultado: ${n1 - n2}`
}

let multiplicar = function(){
    let num1 = window.document.getElementById("txtNum1")
    let num2 = window.document.getElementById("txtNum2")
    let res = window.document.getElementById("res")

    let n1 = Number(num1.value)
    let n2 = Number(num2.value)

    res.innerHTML = `Resultado: ${n1 * n2}`
}

let dividir = () =>{
    let num1 = window.document.getElementById("txtNum1")
    let num2 = window.document.getElementById("txtNum2")
    let res = window.document.getElementById("res")

    let n1 = Number(num1.value)
    let n2 = Number(num2.value)

    res.innerHTML = `Resultado: ${n1 / n2}`
}