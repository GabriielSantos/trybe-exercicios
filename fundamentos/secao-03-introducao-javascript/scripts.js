const peca = 'Rainha';


switch (peca.toLowerCase()) {
    case 'rei':
        console.log('Movimenta uma casa em todas as direções');
        break;
    case 'rainha':
        console.log('Movimenta varias casas em todas as direções');
        break;
    case 'bispo':
        console.log('Movimenta varias casas somente nas diagonais');
        break;
    case 'cavalo':
        console.log('Movimenta em L');
        break;
    case 'torre':
        console.log('Movimenta varias casas na horizontal e na vertical ');
        break;
    case 'peao':
        console.log('Movimenta uma casa para frente e come na diagonal');
        break;

    default:
        console.log('Digite um nome de peça válido');
        break;
}