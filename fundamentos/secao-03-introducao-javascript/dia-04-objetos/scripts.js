//FIXAÇÃO

//OBJETOS

/* let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
}

player['fullname'] = player.name + ' ' + player.lastName;
player['bestInTheWord'] = [2006, 2007, 2008, 2009, 2010, 2018];


console.log('Olá, sou a jogadora', player['fullname'] + ',', 'tenho', player.age, 'anos, e possuo', player.medals.golden, 'medalhas de ouro', 'e', player.medals.silver, 'medalhas de prata, e foi eleita a melhor do mundo 6 vezes, nos seguintes anos:', player.bestInTheWord);

console.table(player); */


// FOR/IN - FOR/OF


/* let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let index in names){
    console.log('Olá,', names[index]);
  }


  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let index in car){
    console.log(index, car[index]);
  } */



/*   let student = {};

  function addProperty(object, key, value) {
    object[key] = value;
  };
  
  addProperty(student, `nome`, `Gabriel Santos`);
  addProperty(student, `email`, `exemplo-fulano.silva@email.com`);
  addProperty(student, `telefone`, `11 1111-1111`);
  addProperty(student, `github`, `github.com/exemplo-fulano-da-silva`);
  addProperty(student, `linkedIn`, `linkedin.com/exemplo-fulano-da-silva`);

  console.log(student); */


 /*  let student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
  };
  
  let student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom', // chave adicionada
  };
  
  function listSkills(student) {
    let arrayOfSkills = Object.keys(student);
    for (let index in arrayOfSkills) {
      console.log(arrayOfSkills[index] + ', Nível: ' + student[arrayOfSkills[index]]);
    }
  };
  
  console.log('Estudante 1');
  listSkills(student1);
  
  console.log('Estudante 2');
  listSkills(student2); */


 /*  let countries = {
    franca: 'Paris',
    brasil: 'Brasília',
    espanha: 'Madrid',
    portugal: 'Lisboa',
  };
  let pairKeyValue = Object.entries(countries);
  console.log(pairKeyValue);

  for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  }; */

/* 
  let object = { a: 1, b: 2, c: 3 };

for (let property in object) {
  console.log(property + ' = ' + object[property]);
} */


/* let band = {
    name: 'Blind Guardian',
    formedIn: 1986,
    lastAlbum: 'Beyond the Red Mirror',
  };
  
  let info = {
    genre: 'Power Metal',
    lastAlbum: 'Twilight Orchestra: Legacy of the Dark Lands',
  };

  console.log(Object.assign(band, info)); */


  // EXERCÍCIOS

  //Objetos e for/in


  /* Imprima no console uma mensagem de boas-vindas para a personagem acima, na qual tenha o nome dela. Para isso, utilize a sintaxe meuObjeto.chave. Então, o valor esperado no console é: */


  // let info = {
  //   personagem: 'Margarida',
  //   origem: 'Pato Donald',
  //   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  // };

  // console.log('Bem vinda,', info.personagem); 



  /* Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave'] = valor. Então, o valor esperado no console é: */


  // info['recorrente'] = 'Sim';
  // console.log(info);



/*   Faça um for/in que mostre todas as chaves do objeto. O valor esperado no console é: */


  // for (let key in info){
  //   console.log(key);
  // }



/*   Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto. O valor esperado no console é: */


  // for (let key in info){
  //   console.log(info[key]);
  // }


  
  /* Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. O valor esperado no console é:
 */


  // let info = {
  //   personagem: 'Margarida',
  //   origem: 'Pato Donald',
  //   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  //   recorrente: 'Sim',
  // };
  
  // let info2 = {
  //   personagem: 'Tio Patinhas',
  //   origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  //   nota: 'O último MacPatinhas',
  //   recorrente: 'Sim',
  // };
  
  // for (let key in info) {
  //   if (
  //     key === 'recorrente' &&
  //     info[key] === 'Sim' &&
  //     info2[key] === 'Sim'
  //   ) {
  //     console.log('Ambos recorrentes');
  //   } else {
  //     console.log(info[key] + ' e ' + info2[key]);
  //   }
  // }



  // LEITURA DE OBJETOS

  /*  Acesse as chaves nome, sobrenome e titulo – esta encontra-se dentro da chave livrosFavoritos – e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”. */

  // let leitor = {
  //   nome: 'Julia',
  //   sobrenome: 'Pessoa',
  //   idade: 21,
  //   livrosFavoritos: [
  //     {
  //       titulo: 'O Pior Dia de Todos',
  //       autor: 'Daniela Kopsch',
  //       editora: 'Tordesilhas',
  //     },
  //   ],
  // };

  // console.log('O livro favorita de', leitor.nome + ' ' + leitor.sobrenome, 'se chama ', leitor.livrosFavoritos[0].titulo);



  /* Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto que contenha as seguintes informações: */


  // leitor.livrosFavoritos.push({
  //   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  //   autor: 'JK Rowling',
  //   editora: 'Rocco',
  // });

  // console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length, 'livros favoritos');


  // EXERCICIO 'PEDIDO DE CLIENTES'

  // let order = {
  //   name: 'Luiz Silva',
  //   phoneNumber: '11-98763-1416',
  //   address: {
  //     street: 'Rua das Flores',
  //     number: '389',
  //     apartment: '701',
  //   },
  //   order: {
  //     pizza: {
  //       marguerita: {
  //         amount: 1,
  //         price: 25,
  //       },
  //       pepperoni: {
  //         amount: 1,
  //         price: 20,
  //       },
  //     },
  //     drinks: {
  //       coke: {
  //         type: 'Coca-Cola Zero',
  //         price: 10,
  //         amount: 1,
  //       },
  //     },
  //     delivery: {
  //       deliveryPerson: 'Ana Silveira',
  //       price: 5,
  //     },
  //   },
  //   payment: {
  //     total: 50,
  //   },
  // };
  
  // function customerInfo(order) {
  //   return 'Olá ' + order.order.delivery.deliveryPerson + ', entrega para: ' +  order.name + ', Telefone: ' + order.phoneNumber + ', R. ' + order.address.street + ', Nº: ' + order.address.number + ', AP: ' + order.address.apartment;
  // }
  
  // console.log(customerInfo(order)); 



  // function orderModifier(order) {
  //   return 'Olá, ' + order.name + ', ' +  'o valor total de seu pedido de ' +  order.order.pizza[0] + ', ' + order.order.pizza[1] + ' e ' + order.order.drinks.coke.type +  ' é R$ ' + order.payment.total;
  // }
  
  // console.log(orderModifier(order));