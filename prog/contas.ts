// Classe em TS - sempre começar maiúscula

class Calculadora{

    num1:number = 10.4;
    num2:number = 23.6;

    //Método
    soma():number{
        
        return this.num1 + this.num2;

    }

    subtrair():number {

        return this.num1 - this.num2;
    }

    multiplicacao():number {

        return this.num1 * this.num2
    }

    divisao():number {

        return this.num1 / this.num2
    }

}


const calc = new Calculadora ();

//console.log(somando.soma());

console.log("A soma é:" + calc.soma()); //concatenação

console.log("A subtração é: " + calc.subtrair());

console.log("A multiplicação é: " + calc.multiplicacao());

console.log("A divisão é: " + calc.divisao());