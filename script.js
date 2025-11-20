// 1 - Criar o menu hambúrguer (div e ícone) no HTML.

// 2 - Fora do @media, aplicar display: none na div que guarda o ícone do hambúrguer 
//     e também na lista do menu mobile.

// 3 - Dentro do @media, aplicar display: none no menu desktop.

// 4 - Dentro do @media, aplicar display: flex na div do menu mobile que estava oculta, 
//     tornando-a visível.

// 5 - Realizar a estilização do menu mobile no CSS: alinhamento, cores, transições etc.

// 6 - Fazer o JavaScript interagir com o ícone do menu hambúrguer e executar a ação.


// Seleciona o botão do menu (ícone de hambúrguer) pelo ID definido no HTML
const menuBtn = document.getElementById('menu-btn');

// Seleciona o elemento de navegação (menu que será aberto/fechado)
const navMenu = document.getElementById('nav-menu');

// Dentro do botão, procura o elemento <i> (ícone da fonte Font Awesome)
const menuIcon = menuBtn.querySelector('i');
// querySelector() -> método reservado do JavaScript usado para buscar
// o primeiro elemento que corresponde a um seletor CSS dentro de outro elemento.


// Adiciona um "ouvinte de evento" (listener) que detecta o click no botao do menu. 
menuBtn.addEventListener('click', () => {
// addEventListener() -> metodo reservado usado para executar uma funçao

// toda vez em que um evento especifico o9corre (nesse caso, um click).

// Alterna(liga/desliga) a classe "show" no menu de navegaçao.

// isso faz o menu aparecer ou desaparecer visualmente via css.

navMenu.classList.toggle('show');
// classList.toggle() -> adiciona a classe se ela nao existir ; remove se va existir.

// troca o icone ( de hamburguer para  "x" e vice-versa ), dependendo do estado atual.

// verifica se icone atual tem a classe "fa-bars"  (icone hamburgue )
if (menuIcon.classList.contains('fa-bars')) {
//classList.contains() -> verifica se o elemento contem uma classe especifica (retorna true ou false).

// Se sim , remove a classe do icone de hamburguer ...

menuIcon.classList.remove('fa-bars');
// ...e adiciona o icone de "x" para indicar que o menu popde ser fechado

menuIcon.classList.add('fa-xmark');
} else {
// caso contrario , volta o icone para o estado original (hamburguer)
menuIcon.classList.remove('fa-xmark');
menuIcon.classList.add('fa-bars');

}
});



const typed = new Typed (".auto-type",{
    strings: ["JK FINANCE", "INVESTINDO NOS SEUS SONHOS"],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1200,   // pausa antes de apagar
    loop: true,
    showCursor: false  // Oculta o cursor de digitação
} );



