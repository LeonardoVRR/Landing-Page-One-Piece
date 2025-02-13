const btnImagePersonagem = document.querySelectorAll(
  ".personagem__botaoImagem"
);

const nomePersonagem = document.querySelector(".personagem__nome");
const descricaoPersonagem = document.querySelector(".personagem__descricao");
const imagemPersonagem = document.querySelector(".personagem__foto");

const listaPersonagem = [
  {
    id: "personagem__botaoImagem botaoChopper",
    nome: "Tony Chopper",
    descricao:
      "Esta pequena rena ganhou a habilidade de mudar sua forma e de pensar como humanos após comer a fruta Hito Hito no Mi. Chopper é um valioso membro da tripulação dos Piratas do Chapéu de Palha, atuando como médico da tripulação.",
    imagem: "imagens/personagem-tony-chopper.png",
  },
  {
    id: "personagem__botaoImagem botaoZoro",
    nome: "Roronoa Zoro",
    descricao:
      "Primeiro pirata (segundo membro se contarmos com Luffy) a se juntar à tripulação de Piratas do Chapéu de Palha, Zoro aceitou o convite de Luffy após o capitão salvar sua vida.",
    imagem: "imagens/personagem-roronoa-zoro.png",
  },
  {
    id: "personagem__botaoImagem botaoLuffy",
    nome: "Monkey D. Luffy",
    descricao:
      'Luffy do "Chapéu de Palha", como ficou conhecido, é o protagonista do anime, e o fundador e capitão da tripulação Piratas do Chapéu de Palha. Desde muito jovem, tem como seu maior sonho um dia encontrar o lendário tesouro de Gol D. Roger, para se tornar o novo Rei dos Piratas.',
    imagem: "imagens/personagem-monkey-d-luffy.png",
  },
  {
    id: "personagem__botaoImagem botaoNami",
    nome: "Nami",
    descricao:
      "Uma órfã de guerra, ainda criança Nami foi adotada por Bell-mère, uma mulher da Marinha. Enquanto crescia ao lado de sua irmã adotiva Nojiko, Nami já demonstrava sua paixão por desenhar mapas, sonhando em um dia fazer o mapa de todo o mundo.",
    imagem: "imagens/personagem-nami.png",
  },
  {
    id: "personagem__botaoImagem botaoSanji",
    nome: "Sanji",
    descricao:
      'Também conhecido como "Perna Negra" Sanji, este pirata foi o quinto a integrar a tripulação de Luffy. Suas ações como pirata lhe renderam a terceira maior recompensa entre os membros do Chapéu de Palha, além de atuar como cozinheiro oficial do grupo.',
    imagem: "imagens/personagem-sanji.png",
  },
];

btnImagePersonagem.forEach(function (item) {
  item.addEventListener("click", trocarImagem);
});

let btnAnterior = "";

function trocarImagem(event) {
  let btnAtual = event.currentTarget;

  listaPersonagem.forEach(function (personagem) {
    if (personagem.id == btnAtual.classList.value) {
      nomePersonagem.textContent = personagem.nome;
      descricaoPersonagem.textContent = personagem.descricao;
      imagemPersonagem.setAttribute("src", `${personagem.imagem}`);
    }
  }); 

  btnAtual.classList.add("personagem__botaoImagem--selecionado");

  if (btnAtual !== btnAnterior && btnAnterior !== "") {
    btnAnterior.classList.remove("personagem__botaoImagem--selecionado");
  }

  btnAnterior = btnAtual;
}
