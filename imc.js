let peso = parseFloat(prompt("informe seu peso"));
let altura = parseFloat(prompt("informe sua altura"));
if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    document.write("informe valores validos <=0")

} else {

    let imc = (peso/(altura*altura)).toFixed(2);
    document.write("SEU IMC É IGUAL A: ", imc);
    document.write("<br>")
    console.log(imc)
    


    if (imc < 18.5) {
        document.write("imc abaixo do normal")

    } else if (imc >= 18.5 && imc < 24.9) {
        document.write("imc abaixo do normal")


    } else if (imc < 18.5 || 24, 9) {
        document.write("Peso normal")
    }
    else if (imc < 25 || 29, 9) {
        document.write("sobrepeso")
    }
    else if (imc < 30 || 34,9) {
        document.write("obsidade grau I")
    }
    else if (imc < 35 || 39, 9) {
        document.write("obsidade grau II")
    }
    else if (imc < 40 || 49, 9) {
        document.write("obsidade grau III")
    }
    else if (imc < 50 || 59, 9) {
        document.write("obsidade grau IV")
    }
    else if (imc <=60) {
        document.write("obsidade grau V")
    }

}
