// Array de objetos com os projetos
const projetos = [
  {
    titulo: "Portfólio Pessoal",
    descricao: "Repositório deste mesmo portfólio, desenvolvido com HTML5, CSS3 e JavaScript puro, sem frameworks externos.",
    tag: "Frontend",
    link: "https://github.com/mourapontes/meu_portf-lio"
  },
  {
    titulo: "Avalia-O-IMC",
    descricao: "Calculadora de IMC que gera sugestões personalizadas de cardápio e atividades físicas de acordo com a faixa de IMC do usuário.",
    tag: "Saúde & Web App",
    link: "https://mourapontes.github.io/Avalia-o-IMC/"
  },
  {
    titulo: "Rádios Brasil FM",
    descricao: "Aplicativo de rádio web com as principais rádios FM brasileiras em transmissão ao vivo 24h. Conta com player integrado, interface intuitiva e opção de compartilhamento nas redes sociais.",
    tag: "Streaming & Áudio",
    link: "https://mourapontes.github.io/R-dios-Brasil-FM/"
  }
];

// Renderiza os cards de forma segura usando textContent (sem risco de XSS)
function renderizarProjetos() {
  const container = document.getElementById("lista-projetos");
  if (!container) return;

  projetos.forEach(function (projeto) {
    const card = document.createElement("div");
    card.classList.add("card");

    const tag = document.createElement("span");
    tag.classList.add("card-tag");
    tag.textContent = projeto.tag;

    const titulo = document.createElement("h3");
    titulo.textContent = projeto.titulo;

    const descricao = document.createElement("p");
    descricao.textContent = projeto.descricao;

    const link = document.createElement("a");
    link.textContent = "Ver Projeto →";
    link.href = projeto.link;
    if (projeto.link.startsWith("http")) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }

    card.appendChild(tag);
    card.appendChild(titulo);
    card.appendChild(descricao);
    card.appendChild(link);

    container.appendChild(card);
  });
}

// Executa após o DOM estar completamente carregado
document.addEventListener("DOMContentLoaded", renderizarProjetos);
