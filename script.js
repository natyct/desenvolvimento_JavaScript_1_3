const titulo = document.getElementById("titulo");
const listaNaoOrdenada = document.querySelector("ul");
const link = document.querySelector("a");
const listaOrdenada = document.getElementById("lista-ordenada");

// Adicionando texto ao h1
titulo.innerText = "Bem-vindo a Proz Educação";

// Adicionando texto ao link
link.innerText = "Acesse a Proz Educação";

// Adicionando itens à lista não ordenada
listaNaoOrdenada.innerHTML = `
    <li>Instituição de Ensino</li>
    <li>Perfil de aluno</li>
    <li>ArcelorMittal Brasil</li>
`;

// Adicionando itens com links à lista ordenada
listaOrdenada.innerHTML = `
    <li><a href="https://github.com/natyct?tab=repositories" target="_blank">Repositório Natyct</a></li>
    <li><a href="https://www.linkedin.com/in/nathália-trindade/" target="_blank">LinkedIn de Nathália Trindade</a></li>
    <li><a href="https://brasil.arcelormittal.com" target="_blank">ArcelorMittal Brasil</a></li>
`;