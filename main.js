const listaDeTeclas = document.querySelectorAll('input[type=button]');
// o comando document.querySelectorAll cria uma lista a partir de class do css, por isso atribuimos esse comando à uma constante, para criá-la
const telefDigitado = document.querySelector('input[type=tel]');
// o comando document.querySeletor seleciona um item dentro da lista de class do css e atribui ao campo de digitação determinado pela const teleDigitado

for (i = 0; i < listaDeTeclas.length; i++) {
// esse comando de repetição permite percorrer pela const lista criada acima, e a partir daí, criar a const tecla, para cada intem da lista 
  const tecla = listaDeTeclas[i];

  tecla.onclick = function () {
      //a função anonima onclick, determina que ao clicar em uma tecla, a função irá adicionar ao campo de digitação (teleDigitado) o valor do espaço de digitação + a tecla criada no for acima, logo o resultado será o número no local de digitação
    telefDigitado.value = telefDigitado.value + tecla.value;
  }
}