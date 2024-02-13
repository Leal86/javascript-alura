alert('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 100
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1 );
console.log(numeroSecreto);
let chute;
let tentativa = 1;
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break;
        
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
            
        } else {
            alert(`O número secreto e maior que ${chute}`);
        }
        tentativa++;
    }
}

let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa'
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} em ${tentativa} ${palavraTentativa}.`);

