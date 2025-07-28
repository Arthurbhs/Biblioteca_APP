


export default {
  async fetch(request) {
    const { method, url } = request;
    const { pathname } = new URL(url);



	  // Dados simulados (substitua por sua lógica real)
	    const livros = [
   
 // Afroestima
{
  id: 1,
  titulo: "Amor de cabelo",
  autor: "Matthew A. Cherry",
  editora: "Galerinha",
  tema: "Afroestima",
  genero: "Literatura infantil",
  classificacaoLiteraria: "Infantil (4-8 anos)",
  numeroPaginas: 32,
  resumo: "Zuri ama seu cabelo porque ele é cheio de possibilidades. Quando precisa de um penteado especial para receber a mãe, seu pai entra em ação e, juntos, eles celebram identidade, cuidado e amor-próprio.",
  dataPublicacao: "2020", // edição brasileira
  dataCatalogo: "2025-07-18",
   capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/AmorCabelo.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/AmorCabelo.jpeg?raw=true"
},
{
  id: 2,
  titulo: "Ananda – Por que sou tão pretinha?",
  autor: "Henrique André",
  editora: "Kitembo",
  tema: "Afroestima",
  genero: "Literatura infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 28,
  resumo: "Ananda pergunta por que é 'tão pretinha' e, com ajuda da família, mergulha em histórias de reis e rainhas africanos, ressignificando sua identidade e celebrando sua cor.",
  dataPublicacao: "16 de novembro de 2023",
  dataCatalogo: "2025-07-18",
   capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/TaoPretinha.jpg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/TaoPretinha.jpeg?raw=true"
},
{
  id: 3,
  titulo: "Com qual penteado eu vou?",
  autor: "Kiusam de Oliveira",
  editora: "Melhoramentos",
  tema: "Afroestima",
  genero: "Infantojuvenil / conto",
  classificacaoLiteraria: "Leitor em processo fluente (aprox. 8+)",
  numeroPaginas: 48,
  resumo: "Na festa de 100 anos do bisavô Seu Benedito, as crianças escolhem penteados e oferecem virtudes como presentes, valorizando herança afro-brasileira, nomes e identidade.",
  dataPublicacao: "15 de junho de 2021",
  dataCatalogo: "2025-07-18",
   capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Conceicao.jpg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Conceicao.jpeg?raw=true"
},
{
  id: 4,
  titulo: "Dadá e o Garfo Mágico",
  autor: "Flávia Pimenta",
  editora: "Kitembo",
  tema: "Afroestima",
  genero: "Literatura infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: null, // não encontrado
  resumo: "Informações insuficientes nos catálogos consultados. Inserir sinopse quando disponível.",
  dataPublicacao: "21 de julho de 2023",
  dataCatalogo: "2025-07-18",
   capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Garfo.jpg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Garfo.jpeg?raw=true"
},

{
  id: 5,
  titulo: "Meu crespo é de rainha",
  autor: "bell hooks",
  editora: "Boitatá",
  tema: "Afroestima",
  genero: "Literatura infantil / poema rimado",
  classificacaoLiteraria: "Infantil (a partir de 3 anos)",
  numeroPaginas: 32,
  resumo: "Poema rimado ilustrado que celebra os cabelos crespos e cacheados como coroas de identidade e poder, convidando meninas negras a se reconhecerem e se orgulharem desde a infância.",
  dataPublicacao: "8 de março de 2018",
  dataCatalogo: "2025-07-18",
   capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Conceicao.jpg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Conceicao.jpeg?raw=true"
},
{
  id: 6,
  titulo: "As tranças de minha mãe",
  autor: "Ana Fátima",
  editora: "Ereginga Educação",
  tema: "Afroestima",
  genero: "Literatura infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 32, // confirmar número exato
  resumo: "Narrado pelo pequeno Akin, o livro celebra o vínculo entre mãe e filho por meio das tranças, símbolos de ancestralidade africana e afetividade.",
    dataPublicacao: "2021-03-05",
  dataCatalogo: "2025-07-18",
   capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/TrancasMae.jpg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/TrancasMae.jpeg?raw=true"
},


//empoderamento feminino
{
   id: 7,
  titulo: "101 Mulheres Incríveis Que Mudaram o Mundo",
  autor: "Julia Adams",
  editora: "Pé da Letra",
  tema: "Empoderamento feminino",
  genero: "Infantil / Juvenil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 128,
  resumo: "Coletânea de breves biografias de 101 mulheres que marcaram a história em diversas áreas, com linguagem envolvente e ilustrações coloridas.",
  dataPublicacao: "2021",
   dataCatalogo: "2025-07-25",
   capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/101.jpg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/101.jpeg?raw=true"
 
},

{
  id: 8,
  titulo: "50 brasileiras incríveis para conhecer antes de crescer",
  autor: "Débora Thomé",
  editora: "Galera (Grupo Record)",
  tema: "empoderamento feminino",
  genero: "Biografia",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 120,
  resumo: "Biografias curtas de brasileiras que marcaram a história em diversas áreas como política, ciência, arte e esportes. Um livro inspirador para jovens leitoras.",
  dataPublicacao: "2018-02-28",
  dataCatalogo: "2025-07-27",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/50Brasileiras.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/50Brasileiras.jpeg?raw=true"
},
{
  id: 9,
  titulo: "A princesa que salvava príncipes",
  autor: "Claudia Souza",
  editora: "Callis",
  tema: "empoderamento feminino",
  genero: "Literatura infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 32,
  resumo: "Subvertendo o clássico conto de fadas, essa história apresenta uma princesa forte e independente que enfrenta seus próprios desafios e salva príncipes.",
  dataPublicacao: "2012-05-18",
  dataCatalogo: "2025-07-27",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/APrincesaQueSalvaPrincipe.jpg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/APrincesaQueSalvaPrincipe.jpg?raw=true"
},
{
  id: 10,
  titulo: "50 personalidades negras revolucionárias",
  autor: "Karina Barbosa dos Santos",
  editora: "Ciranda Cultural",
  tema: "empoderamento feminino",
  genero: "Não ficção infantil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 112,
  resumo: "Apresenta 50 biografias de personalidades negras que marcaram e continuam marcando o mundo — com histórias de resistência, coragem e contribuição social.",
  dataPublicacao: "2023-09-10",
  dataCatalogo: "2025-07-27",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/50PersonalidadesNegras.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/50PersonalidadesNegras.jpeg?raw=true"
},

{
  id: 11,
  titulo: "Ada Batista, Cientista",
  autor: "Andrea Beaty",
  editora: "Intrínseca",
  tema: "empoderamento feminino",
  genero: "Literatura infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 32,
  resumo: "Ada é uma menina curiosa que só começou a falar aos três anos. Com sede de saber, ela questiona o mundo ao seu redor e empreende experimentos engraçados e instigantes, revelando seu espírito de cientista desde cedo.",
  dataPublicacao: "2019-10-07",
  dataCatalogo: "2025-07-27",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/AdaBatistaCientista.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/AdaBatistaCientista.jpeg?raw=true"
}
,

{
  id: 12,
  titulo: "Cinderela e o baile dela",
  autor: "Janaina Tokitaka",
  editora: "Companhia das Letrinhas",
  tema: "empoderamento feminino",
  genero: "Literatura infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 32,
  resumo: "Reconto irreverente da história de Cinderela, com princesas negras e princípios de autonomia e protagonismo feminino.",
  dataPublicacao: "2023-09-01",
  dataCatalogo: "2025-07-27",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/CinderelaBaile.jpg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/CinderelaBaile.jpeg?raw=true"
},
{
  id: 13,
  titulo: "Coisa de menina",
  autor: "Pri Ferrari",
  editora: "Companhia das Letrinhas",
  tema: "empoderamento feminino",
  genero: "Literatura infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 48,
  resumo: "Mostra profissões e atividades fora dos estereótipos de gênero, incentivando meninas a se verem em múltiplas possibilidades.",
  dataPublicacao: "2016-10-04",
  dataCatalogo: "2025-07-27",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/CoisaDeMenina.jpg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/CoisaDeMenina.jpeg?raw=true"
},

{
  id: 14,
  titulo: "Contos de Fadas para Garotas Corajosas",
  autor: "Anita Ganeri",
  editora: "Pé da Letra",
  tema: "empoderamento feminino",
  genero: "Coletânea infantil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 128,
  resumo: "Recontos de quinze contos populares protagonizados por mulheres corajosas que traçam o próprio caminho e desafiam estereótipos.",
  dataPublicacao: "2021-02-10",
  dataCatalogo: "2025-07-27",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/ContosFadasGarotasCorajosas.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/ContosFadasGarotasCorajosas.jpeg?raw=true"
},
{
  id: 15,
  titulo: "Grandes mulheres que mudaram o mundo",
  autor: "Kate Pankhurst",
  editora: "V&R Editoras",
  tema: "empoderamento feminino",
  genero: "Biografia infantil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 32,
  resumo: "Apresentação de mulheres que fizeram história em diversas áreas, incentivando meninas a acreditarem em seus sonhos e serem protagonistas.",
  dataPublicacao: "2018-01-01",
  dataCatalogo: "2025-07-27",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/GrandesMulheresMudaramOMundo.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/GrandesMulheresMudaramOMundo.jpeg?raw=true"
},


{
  id: 18,
  titulo: "Harriet Tubman",
  autor: "Majori Silva",
  editora: "Mostarda",
  tema: "Empoderamento Feminino",
  genero: "Biografia em quadrinhos",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 64,
  resumo: "Biografia em quadrinhos que narra a trajetória de Harriet Tubman, uma guerreira da liberdade que ajudou centenas de pessoas a escapar da escravidão.",
  dataPublicacao: "2023-09-11",
  dataCatalogo: "2025-07-28",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/HarrietTubman.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/HarrietTubman.jpeg?raw=true"
},
   

//infantojuvenil

{
  id: 16,
  titulo: "Letras de Carvão",
  autor: "Irene Vasco & Juan Palomino",
  editora: "Pulo do Gato",
  tema: "Infanto-Juvenil",
  genero: "Narrativa ilustrada",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 36,
  resumo: "Na pequena cidade de Palenque, uma menina aprende a ler com letras escritas no chão com carvão, valorizando cultura quilombola e tradição oral.",
  dataPublicacao: "2016-01-01",
  dataCatalogo: "2025-07-28",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/LetrasDeCarvao.jpg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/LetrasDeCarvao.jpeg?raw=true"
},
{
  id: 17,
  titulo: "Jardim de Marielle",
  autor: "Majori Silva",
  editora: "Mostarda",
  tema: "Infanto-Juvenil",
  genero: "Narrativa metafórica infantil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 16,
  resumo: "Inspirado em Marielle Franco, o livro conta como seu coração se transforma em semente e dá vida a uma árvore que floresce espalhando seu legado.",
  dataPublicacao: "2022-01-01",
  dataCatalogo: "2025-07-28",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/JardimDeMarielle.jpg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/JardimDeMarielle.jpeg?raw=true"
},

{
  id: 19,
  titulo: "Estrelas",
  autor: "Júlio Emílio Braz",
  editora: "Oficina Raquel",
  tema: "infanto‑juvenil",
  genero: "Poesia infantil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 24,
  resumo: "Narrativa poética que acolhe os medos infantis usando a metáfora do céu e das estrelas, trazendo conforto e autoestima às crianças.",
  dataPublicacao: "2021-10-04",
  dataCatalogo: "2025-07-28",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Estrelas.jpg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Estrelas.jpeg?raw=true"
},
{
  id: 20,
  titulo: "Ei, você! Um livro sobre crescer com orgulho de ser negro",
  autor: "Dapo Adeola",
  editora: "Companhia das Letrinhas",
  tema: "Infanto‑Juvenil",
  genero: "Não ficção infantil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 56,
  resumo: "Livro ilustrado que celebra a vida e o crescimento de crianças negras, promovendo autoestima, representatividade e orgulho desde a infância.",
  dataPublicacao: "2021-09-24",
  dataCatalogo: "2025-07-28",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/EiVoce.jpg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/EiVoce.jpeg?raw=true"
},
{
  id: 21,
  titulo: "Gabriela, a princesa do Daomé",
  autor: "Marta Rodrigues",
  editora: "Mazza Edições",
  tema: "Infanto‑Juvenil",
  genero: "Narrativa infantil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 24,
  resumo: "Narrado por Gabriela, princesa de Daomé, que valoriza ancestralidade africana, coragem e vivência familiar, com mensagens de resistência e autoestima.",
  dataPublicacao: "2022-01-01",
  dataCatalogo: "2025‑07‑28",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/GabrielaPrincesaDaome.jpg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/GabrielaPrincesaDaome.jpeg?raw=true"
}
,

{
  id: 22,
  titulo: "Férias fantásticas de Lili",
  autor: "Lívia Natália",
  editora: "Ciclo Contínuo",
  tema: "Infanto‑Juvenil",
  genero: "Poesia infantil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 32,
  resumo: "Lili vive aventuras poéticas durante as férias, com referências aos Orixás, despertando imaginação, ancestralidade e identidade negra.",
  dataPublicacao: "2018-09-30",
  dataCatalogo: "2025-07-28",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/FeriasFantasticasLili.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/FeriasFantasticasLili.jpeg?raw=true"
},
{
  id: 23,
  titulo: "Dona da festa",
  autor: "Elisa Lucinda",
  editora: "Galerinha",
  tema: "Infanto‑Juvenil",
  genero: "Literatura infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 24,
  resumo: "Personagem alto‑astral que celebra o otimismo e a alegria infantis, com poesia e adivinhações apresentadas de forma lúdica.",
  dataPublicacao: "2011-03-14",
  dataCatalogo: "2025-07-28",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/DonaDaFesta.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/DonaDaFesta.jpeg?raw=true"
},
{
  id: 24,
  titulo: "De passinho em passinho",
  autor: "Otávio Júnior",
  editora: "Companhia das Letrinhas",
  tema: "Infanto‑Juvenil",
  genero: "Cultura e dança infantil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 32,
  resumo: "Versos e ilustrações que celebram o ‘passinho’, ritmo nascido nas comunidades cariocas, combinando dança, identidade e expressão cultural.",
  dataPublicacao: "2021-01-01",
  dataCatalogo: "2025-07-28",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/DePassinhoEmPassinho.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/DePassinhoEmPassinho.jpeg?raw=true"
}
,


{
  id: 25,
  titulo: "Menino coração de tambor",
  autor: "Nilma Lino Gomes",
  editora: "Mazza Edições",
  tema: "Infanto‑Juvenil",
  genero: "Narrativa infantil ilustrada",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 32,
  resumo: "O coração de um menino bate conforme os ritmos que ele escuta ainda na barriga da mãe, celebrando música, cultura e movimento afro‑brasileiro.",
  dataPublicacao: "2013-01-01",
  dataCatalogo: "2025-07-28",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/MeninoCoracaoTambor.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/MeninoCoracaoTambor.jpeg?raw=true"
},
{
  id: 26,
  titulo: "Dengos na moringa de Voinha",
  autor: "Ana Fátima",
  editora: "Brinque‑Book",
  tema: "Infanto‑Juvenil",
  genero: "Conto infantil com ancestralidade",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 32,
  resumo: "A menina expressa memórias e afetos por meio da moringa da avó, símbolo de ancestralidade e tradição familiar em narrativas cotidianas.",
  dataPublicacao: "2023-06-27",
  dataCatalogo: "2025-07-28",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/DengosMoringaVoinha.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/DengosMoringaVoinha.jpeg?raw=true"
},
{
  id: 27,
  titulo: "As descobertas de Kito",
  autor: "Douglas Coelho",
  editora: "Letraria",
  tema: "Infanto‑Juvenil",
  genero: "Literatura infantil paradidático",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 24,
  resumo: "Kito é um menino negro curioso que aprende sobre países de língua hispânica e compartilha suas descobertas, promovendo curiosidade, leitura e representatividade.",
  dataPublicacao: "2021-01-01",
  dataCatalogo: "2025-07-28",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/DescobertasKito.jpge?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/DescobertasKito.jpeg?raw=true"
},

{
  id: 28,
  titulo: "Meninas negras",
  autor: "Madu Costa",
  editora: "Mazza Edições",
  tema: "Infanto‑Juvenil",
  genero: "Identidade afrodescendente infantil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 24,
  resumo: "Poemas e textos curtos que valorizam a identidade e cultura de meninas negras, reforçando autoestima e ancestralidade.",
  dataPublicacao: "2011-01-01",
  dataCatalogo: "2025-07-28",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/MeninasNegras.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/MeninasNegras.jpeg?raw=true"
},
{
  id: 29,
  titulo: "Lendas de Dandara",
  autor: "Jarid Arraes",
  editora: "Editora de Cultura",
  tema: "Infanto‑Juvenil",
  genero: "Cordel narrativo / lendas",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 128,
  resumo: "Narrativas em forma de lendas sobre Dandara dos Palmares, valorizando ancestralidade e heroísmo feminino negro.",
  dataPublicacao: "2016-12-01",
  dataCatalogo: "2025‑07‑28",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/LendasDeDandara.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/LendasDeDandara.jpeg?raw=true"
},

{
  id: 31,
  titulo: "A luz de Aisha",
  autor: "Aza Njeri & Luana Rodrigues",
  editora: "Rebuliço",
  tema: "Infanto‑Juvenil",
  genero: "Narrativa filosófica afro-brasileira",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 56,
  resumo: "A pequena Aisha vive uma perda e, com apoio da memória ancestral comunitária e da filosofia bantu, encontra luz e afeto coletivo para seguir em frente.",
  dataPublicacao: "2021-01-01",
  dataCatalogo: "2025-07-28",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/LuzDeAisha.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/LuzDeAisha.jpeg?raw=true"
},
{
  id: 32,
  titulo: "Mar de Manu",
  autor: "Cidinha da Silva",
  editora: "Kuanza Produções",
  tema: "Infanto‑Juvenil",
  genero: "Narrativa poética infantil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 32,
  resumo: "Manu, um menino que pesca estrelas em um universo simbólico de Níger, Mali e Burkina Faso, traz reflexão sobre ancestralidade, pertencimento e sonho.",
  dataPublicacao: "2021-11-19",
  dataCatalogo: "2025-07-28",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/MarDeManu.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/MarDeManu.jpeg?raw=true"
},
{
  id: 33,
  titulo: "Makori, a pequena princesa",
  autor: "Marcos Cajé",
  editora: "Ereginga Educação",
  tema: "Infanto‑Juvenil",
  genero: "Narrativa infantil com ancestralidade",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 44,
  resumo: "Makori é descendente de princesa africana e aprende com a ancestralidade e o samba‑de‑roda sobre força, resistência e identidade cultural.",
  dataPublicacao: "2022-01-01",
  dataCatalogo: "2025-07-28",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/MakoriPequenaPrincesa.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/MakoriPequenaPrincesa.jpeg?raw=true"
},
{
  id: 34,
  titulo: "Makeba vai à escola",
  autor: "Ana Fátima",
  editora: "Cogito",
  tema: "Infanto‑Juvenil",
  genero: "Narrativa infantil de iniciação escolar",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 28,
  resumo: "Makeba, uma menina de 3 anos, encara seu primeiro dia de escola com apoio da família, superando medos e celebrando sua negritude e identidade.",
  dataPublicacao: "2019-01-01",
  dataCatalogo: "2025‑07‑28",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/MakebaVaiEscola.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/MakebaVaiEscola.jpeg?raw=true"
},
{
  id: 35,
  titulo: "Mandisa e a Vovó Alegria",
  autor: "Vagner Amaro",
  editora: "Malê Mirim",
  tema: "Infanto‑Juvenil",
  genero: "Narrativa infantil com ancestralidade",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 24,
  resumo: "Mandisa convive com a avó Alegria, que transmite ensinamentos sobre ancestralidade, cultura e amor familiar por meio de objetos e memória.",
  dataPublicacao: "2023-07-10",
  dataCatalogo: "2025‑07‑28",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/MandisaVovoAlegria.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/MandisaVovoAlegria.jpeg?raw=true"
}
,

// manifestação cultural
{
  id: 30,
  titulo: "Menina Nicinha",
  autor: "Evelyn Sacramento",
  editora: "Lendo Mulheres Negras / Aldir Blanc Bahia",
  tema: "manifestação cultural",
  genero: "Narrativa infantil com memória cultural",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 36,
  resumo: "Relatos da infância da autora no recôncavo baiano, inspirando mulheres negras através de memórias e cultura afro-brasileira.",
  dataPublicacao: "2021-06-01",
  dataCatalogo: "2025‑07‑28",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/MeninaNicinha.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/MeninaNicinha.jpeg?raw=true"
}
,


 // Coleção Black Powe
{
  id: 85,
  titulo: "Conceição Evaristo",
  autor: "Orlando Nilha",
  editora: "Editora Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantil/juvenil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 32,
  resumo: "Biografia ilustrada da escritora Conceição Evaristo, destacando sua trajetória desde a favela Pendura Saia até se tornar professora, doutora em Literatura e uma das maiores vozes negras do Brasil.",
  dataPublicacao: "08 de fevereiro de 2021",
   dataCatalogo: "2025-07-10",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Conceicao.jpg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Conceicao.jpeg?raw=true"
},

{
  id: 86,
  titulo: "Antônio Francisco Lisboa – Aleijadinho",
  autor: "Fabiano Ormaneze e Douglas Reverie",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  resumo: "Retrata a inspiradora trajetória de Antônio Francisco Lisboa, filho de uma escravizada, que, mesmo acometido pela doença que deformou seu corpo, tornou-se um dos maiores escultores e arquitetos do Brasil colonial",
  numeroPaginas: 32,
  dataPublicacao: "2021-XX-XX",
  dataCatalogo: "2025-07-10",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Alejadinho.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Alejadinho.jpeg?raw=true"
},

{
  id: 87,
  titulo: "Glória Maria Matta da Silva",
  autor: "Duílio Fabbri Júnior e Manoela Costa",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  resumo: "Biografia ilustrada da jornalista Glória Maria, sua trajetória desde telefonista até se tornar uma das primeiras grandes repórteres negras da TV brasileira, enfrentando ambientes predominantemente masculinos e embranquecidos.",
  numeroPaginas: 40,
  dataPublicacao: "15 de fevereiro de 2024",
   dataCatalogo: "2025-07-10",
 capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Gloria.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Gloria.jpeg?raw=true"
},


{
  id: 88,
  titulo: "Abdias do Nascimento",
  autor: "Júlio Emílio Braz",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  resumo: "Conta a história de Abdias do Nascimento, ator, dramaturgo, ativista e fundador do Teatro Experimental do Negro, que lutou pelo reconhecimento dos direitos civis da população negra no Brasil",
  numeroPaginas: 32,
  dataPublicacao: "2022-XX-XX",
  dataCatalogo: "2025-07-10",
 capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Abdidas.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Abdidas.jpeg?raw=true",
},

{
  id: 89,
  titulo: "Alice Walker",
  autor: "s/a",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  resumo: "Apresenta a vida de Alice Walker, autora de ‘A Cor Púrpura’ e ativista pelos direitos civis e igualdade racial nos EUA",
  numeroPaginas: 32,
  dataPublicacao: "2021-XX-XX",
  dataCatalogo: "2025-07-10",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Alice.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Alice.jpeg?raw=true",
  
},

{
  id: 90,
  titulo: "Beatriz Nascimento",
  autor: "Maria Julia Maltese",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  resumo: "Conta a história de Maria Beatriz Nascimento, historiadora sergipana e pioneira no modo de pensar a história a partir de saberes africanos, que estudou os quilombos e foi militante antirracista.",
  numeroPaginas: 32,
  dataPublicacao: "2022",
  dataCatalogo: "2025-07-10",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Beatriz.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Beatriz.jpeg?raw=true",
  
},

{
  id: 91,
  titulo: "João Cândido",
  autor: "Júlio Emílio Braz",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  resumo: "Conta a história de João Cândido, o ‘Almirante Negro’, líder da Revolta da Chibata em 1910 na Marinha do Brasil.",
  numeroPaginas: 32,
  dataPublicacao: "11 de setembro de 2023",
  dataCatalogo: "2025-07-10",
   capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Candido.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Candido.jpeg?raw=true",
  
},

{
  id: 92,
  titulo: "Carolina Maria de Jesus",
  autor: "Orlando Nilha",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  resumo: "Trajetória de Carolina Maria de Jesus, catadora de papel e autora de 'Quarto de Despejo', que se tornou uma das mais importantes escritoras negras do Brasil.",
  numeroPaginas: 32,
  dataPublicacao: "2019",
  dataCatalogo: "2025-07-10",
    capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Carolina.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Carolina.jpeg?raw=true",
   
},

{
  id: 93,
  titulo: "Maria Felipa",
  autor: "Luciana Palmeira e Cássia Valle",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  resumo: "Retrata Maria Felipa de Oliveira, líder histórica da resistência negra na Bahia, que lutou contra os portugueses pela independência.",
  numeroPaginas: 32,
  dataPublicacao: "2022",
   dataCatalogo: "2025-07-10",
    capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Felipa.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Felipa.jpeg?raw=true",
   
},

{
  id: 94,
  titulo: "Maria Firmina dos Reis",
  autor: "s/a",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  resumo: "Homenageia Maria Firmina dos Reis, maranhense e pioneira da literatura afro-brasileira, autora de 'Úrsula' (1859), marco abolicionista.",
  numeroPaginas: 32,
  dataPublicacao: "2024",
  dataCatalogo: "2025-07-10",
   capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Firmina.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Firmina.jpeg?raw=true",

},

{
  id: 95,
  titulo: "Lélia Gonzalez",
  autor: "Flávia Martins de Carvalho e Leonardo Malavazzi",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  resumo: "Homenageia a trajetória da intelectual Lélia Gonzalez, antropóloga e filósofa que refletiu sobre racismo, feminismo e identidade negra.",
  numeroPaginas: 40,
  dataPublicacao: "2022",
  dataCatalogo: "2025-07-10",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Gonzalez.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Gonzalez.jpeg?raw=true",
  
},

{
  id: 96,
  titulo: "Mario Juruna",
  autor: "Fabiano Ormeneze",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  resumo: "Conta a história de Mário Juruna, líder indígena e primeiro deputado federal indígena, que lutou contra o Estatuto do Índio para defender os direitos e terras de seu povo Yanomami.",
  numeroPaginas: 32,
  dataPublicacao: "2021",
  dataCatalogo: "2025-07-10",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Juruna.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Juruna.jpeg?raw=true",
  
},

{
  id: 97,
  titulo: "Davi Kopenawa",
  autor: "Orlando Nilha",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  resumo: "Homenageia a trajetória de Davi Kopenawa Yanomami, líder que lutou contra a invasão de terras por garimpeiros e defendeu os direitos dos povos indígenas.",
  numeroPaginas: 32,
  dataPublicacao: "2023",
  dataCatalogo: "2025-07-10",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Kopenawa.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Kopenawa.jpeg?raw=true",
  
},

{
  id: 98,
  titulo: "Ailton Krenak",
  autor: "Francisco Lima Neto",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  resumo: "Conta a história de Ailton Krenak, líder indígena e intelectual do povo Krenak, referência política desde os anos 1970 por seus pensamentos sobre povos indígenas e meio ambiente.",
  numeroPaginas: 32,
  dataPublicacao: "2021",
  dataCatalogo: "2025-07-10",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Krenak.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Krenak.jpeg?raw=true",
  
},

{
  id: 99,
  titulo: "Laudelina de Campos de Melo",
  autor: "Francisco Lima Neto",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  resumo: "Retrata a trajetória de Laudelina de Campos Melo, mineira que fundou o primeiro sindicato de empregadas domésticas e lutou contra o racismo e exploração trabalhista no Brasil.",
  numeroPaginas: 32,
  dataPublicacao: "2021",
  dataCatalogo: "2025-07-10",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Laudalina.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Laudelina.jpeg?raw=true",
  
},

{
  id: 100,
  titulo: "Luiz Gama",
  autor: "Francisco Lima Neto",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  resumo: "Apresenta a trajetória de Luiz Gama, líder abolicionista, jornalista e poeta, que, mesmo impedido de obter diploma, atuou como advogado em prol da libertação de escravizados.",
  numeroPaginas: 32,
  dataPublicacao: "2022",
  dataCatalogo: "2025-07-10",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Luiz.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Luiz.jpeg?raw=true",
  
},

{
  id: 101,
  titulo: "Nelson Mandela",
  autor: "Maria Julia Maltese",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  resumo: "Conta a trajetória de Nelson Mandela, líder contra o apartheid, ex‑presidente da África do Sul e vencedor do Prêmio Nobel da Paz." ,
  numeroPaginas: 32,
  dataPublicacao: "2021",
  dataCatalogo: "2025-07-10",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Mandela.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Mandela.jpeg?raw=true",
  
},

{
  id: 102,
  titulo: "Machado de Assis",
  autor: "s/a",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  resumo: "Revela a vida de Machado de Assis, nascido pobre e negro no Rio de Janeiro, que se tornou um dos maiores escritores brasileiros." ,
  numeroPaginas: 32,
  dataPublicacao: "2021",
  dataCatalogo: "2025-07-10",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Machado.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Machado.jpeg?raw=true",
  
},

{
  id: 103,
  titulo: "Malcolm X",
  autor: "Gabriela Bauerfeldt",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  resumo: "Traça a história de Malcolm X, ativista pelos direitos civis nos EUA nas décadas de 1950/60, símbolo do movimento Black Power.",
  numeroPaginas: 32,
  dataPublicacao: "2021",
  dataCatalogo: "2025-07-10",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Malcolm.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Malcolm.jpeg?raw=true",
  
},

{
  id: 104,
  titulo: "Sônia Guajajara",
  autor: "Rodrigo Luis",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  resumo: "Conta a história da liderança indígena do Maranhão, Sônia Guajajara, sua luta contra a destruição ambiental e pelos direitos dos povos originários.",
  numeroPaginas: 32,
  dataPublicacao: "2024",
  dataCatalogo: "2025-07-10",
   capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Guajajara.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Guajajara.jpeg?raw=true",
   
},

{
  id: 105,
  titulo: "Hamilton Naki",
  autor: "Francisco Lima Neto",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  resumo: "Retrata a trajetória do pesquisador e professor sul-africano Hamilton Naki, que colaborou em cirurgias pioneiras apesar do apartheid.",
  numeroPaginas: 32,
  dataPublicacao: "2021",
  dataCatalogo: "2025-07-10",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Hamilton.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Hamilton.jpeg?raw=true",
   
},

{
  id: 106,
  titulo: "João do Rio",
  autor: "Júlio Emílio Braz",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  resumo: "Conta a vida de João do Rio, pseudônimo de Paulo Barreto, jornalista, cronista e membro da ABL, conhecido por retratar o Rio de Janeiro nas primeiras décadas do século XX.",
  numeroPaginas: 84,
  dataPublicacao: "10 de outubro de 2023",
  dataCatalogo: "2025-07-10",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Joao.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Joao.jpeg?raw=true",
  
},

{
  id: 106,
  titulo: "Júlio Emílio Braz",
  autor: "Júlio Emílio Braz",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  resumo: "Autobiografia ilustrada do próprio Júlio Emílio Braz, que narra sua trajetória pessoal e profissional, mostrando as batalhas da infância até se tornar escritor.",
  numeroPaginas: 31,
  dataPublicacao: "2022",
  dataCatalogo: "2025-07-10",
   capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Julho.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Julho.jpeg?raw=true",
  
  
},

{
  id: 107,
  titulo: "Dandara e Zumbi",
  autor: "Maria Julia Maltese",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  resumo: "Cobre a trajetória dos líderes do Quilombo dos Palmares, Zumbi e Dandara, destacando sua luta contra o racismo e colonização no período colonial.",
  numeroPaginas: 32,
  dataPublicacao: "2021",
  dataCatalogo: "2025-07-10",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Zumbi.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Zumbi.jpeg?raw=true",
},

{
  id: 108,
  titulo: "Barreto – Lima Barreto",
  autor: "André Augustus Diasz",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  resumo: "Biografia do escritor e jornalista Lima Barreto (1881–1922), que denunciou desigualdades, racismo e injustiças sociais na Primeira República, sendo um dos responsáveis pela modernização da literatura brasileira." ,
  numeroPaginas: 40,
  dataPublicacao: "31 de julho de 2023",
  dataCatalogo: "2025-07-10",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Barreto.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Barreto.jpeg?raw=true",
},


  {
    id: 109,
    titulo: "Michelle Obama",
    autor: "Orlando Nilha",
    editora: "Mostarda",
    tema: "Coleção Black Power",
    genero: "Biografia infantojuvenil",
    classificacaoLiteraria: "Infantojuvenil",
    resumo: "Trajetória de Michelle Obama desde sua infância em Chicago até seu papel como ex-primeira-dama dos EUA, advogada e ativista engajada na defesa da educação de meninas, igualdade racial e saúde pública.",
    numeroPaginas: 32,
    dataPublicacao: "2023",
    dataCatalogo: "2025-07-15",
    capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Michele.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Michele.jpeg?raw=true",

  },
  {
    id: 110,
    titulo: "Milton Santos",
    autor: "Fabiano Ormaneze",
    editora: "Mostarda",
    tema: "Coleção Black Power",
    genero: "Biografia infantojuvenil",
    classificacaoLiteraria: "Infantojuvenil",
    resumo: "Conta a vida de Milton Santos, geógrafo brasileiro de renome internacional, crítico da globalização e analista das relações étnico-raciais no Brasil, com impacto acadêmico e social.",
    numeroPaginas: 32,
    dataPublicacao: "2022",
    dataCatalogo: "2025-07-15",
    capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Milton.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Milton.jpeg?raw=true",

  },
  {
    id: 111,
    titulo: "José do Patrocínio",
    autor: "Orlando Nilha",
    editora: "Mostarda",
    tema: "Coleção Black Power",
    genero: "Biografia infantojuvenil",
    classificacaoLiteraria: "Infantojuvenil",
    resumo: "Biografia de José Carlos do Patrocínio, jornalista, escritor e líder abolicionista brasileiro, fundador da Guarda Negra e figura central na campanha pela abolição da escravatura no Brasil imperial.",
    numeroPaginas: 32,
    dataPublicacao: "2023",
    dataCatalogo: "2025-07-15",
    capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Patrocinio.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Patrocinio.jpeg?raw=true",

  },
  {
    id: 112,
    titulo: "Madalena Paraguaçu",
    autor: "Orlando Nilha",
    editora: "Mostarda",
    tema: "Coleção Black Power",
    genero: "Biografia infantojuvenil",
    classificacaoLiteraria: "Infantojuvenil",
    resumo: "Narra a vida de Madalena Paraguaçu, líder indígena tupi e primeira brasileira alfabetizada, que defendeu a educação e os direitos dos povos indígenas durante o período colonial.",
    numeroPaginas: 32,
    dataPublicacao: "2023",
    dataCatalogo: "2025-07-15",
    capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Paraguacu.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Paraguacu.jpeg?raw=true",

  },
  {
    id: 113,
    titulo: "André e Antônio Rebouças",
    autor: "Júlio Emílio Braz",
    editora: "Mostarda",
    tema: "Coleção Black Power",
    genero: "Biografia infantojuvenil",
    classificacaoLiteraria: "Infantojuvenil",
    resumo: "História dos irmãos Rebouças, primeiros homens negros a se tornarem engenheiros no Brasil, destacando sua formação e contribuição para obras como a ferrovia Paranaguá‑Curitiba, e sua atuação contra o racismo.",
    numeroPaginas: 32,
    dataPublicacao: "2022",
    dataCatalogo: "2025-07-15",
    capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Andre.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Andre.jpeg?raw=true",

  },
  {
    id: 114,
    titulo: "Barack Obama",
    autor: "Orlando Nilha",
    editora: "Mostarda",
    tema: "Coleção Black Power",
    genero: "Biografia infantojuvenil",
    classificacaoLiteraria: "Infantojuvenil",
    resumo: "Trajetória de Barack Obama como o primeiro presidente negro dos Estados Unidos, sua atuação baseada na diplomacia, defesa dos direitos LGBT e protagonismo global como símbolo de esperança e representatividade.",
    numeroPaginas: 32,
    dataPublicacao: "2023",
    dataCatalogo: "2025-07-15",
    capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Obama.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Obama.jpeg?raw=true",

  },
  {
    id: 115,
    titulo: "Rosa Parks",
    autor: "Orlando Nilha",
    editora: "Mostarda",
    tema: "Coleção Black Power",
    genero: "Biografia infantojuvenil",
    classificacaoLiteraria: "Infantojuvenil",
    resumo: "Conta a história de Rosa Parks, que desafiou a segregação ao recusar-se a ceder seu lugar no ônibus nos EUA, dando início a um movimento de massa pela igualdade racial e direitos civis.",
    numeroPaginas: 32,
    dataPublicacao: "2022",
    dataCatalogo: "2025-07-15",
    capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Rosa.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Rosa.jpeg?raw=true",

  },
  {
    id: 116,
    titulo: "Sueli Carneiro",
    autor: "Orlando Nilha",
    editora: "Mostarda",
    tema: "Coleção Black Power",
    genero: "Biografia infantojuvenil",
    classificacaoLiteraria: "Infantojuvenil",
    resumo: "Retrata Sueli Carneiro, escritora e filósofa brasileira que lutou por igualdade étnico-racial e de gênero, fundadora do Geledés – Instituto da Mulher Negra e articuladora das cotas e representatividade da mulher negra.",
    numeroPaginas: 32,
    dataPublicacao: "2023",
    dataCatalogo: "2025-07-15",
    capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Sueli.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Sueli.jpeg?raw=true",

  }



];

 // Cabeçalhos CORS padrão
    const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // ou "http://localhost:3000"
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type", // CORRIGIDO
  "Content-Type": "application/json",
};


    // OPTIONS (preflight)
    if (method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    // Rota: /livros/:id
    const matchId = pathname.match(/^\/livros\/(\d+)$/);
    if (matchId) {
      const id = parseInt(matchId[1]);
      const livro = livros.find((l) => l.id === id);

      if (livro) {
        return new Response(JSON.stringify(livro), {
          status: 200,
          headers: corsHeaders,
        });
      } else {
        return new Response(JSON.stringify({ erro: "Livro não encontrado" }), {
          status: 404,
          headers: corsHeaders,
        });
      }
    }

    // Rota: /livros (lista completa)
    if (pathname === "/livros") {
      return new Response(JSON.stringify(livros), {
        status: 200,
        headers: corsHeaders,
      });
    }

    // Rota não encontrada
    return new Response(JSON.stringify({ erro: "Rota não encontrada" }), {
      status: 404,
      headers: corsHeaders,
    });
  },
};