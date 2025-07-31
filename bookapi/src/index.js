


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
   capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/TaoPretinha.jpeg?raw=true",
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
   capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Conceicao.jpeg?raw=true",
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
   capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Garfo.jpeg?raw=true",
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
   capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Conceicao.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Conceicao.jpeg?raw=true"
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
   capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/101.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/101.jpeg?raw=true"
 
},

{
  id: 106,
  titulo: "Sejamos Todos Feministas (versão adaptada para jovens)",
  autor: "Chimamanda Ngozi Adichie",
  editora: "Companhia das Letrinhas",
  tema: "Empoderamento Feminino",
  genero: "Ensaio / Sociedade",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 64,
  resumo: "Uma introdução poderosa ao feminismo, adaptada especialmente para o público jovem, escrita por uma das maiores vozes contemporâneas.",
  dataPublicacao: "2017-11-01",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/SejamosTodosFeministas.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/SejamosTodosFeministas.jpeg?raw=true"
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
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/APrincesaQueSalvaPrincipe.jpeg?raw=true"
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
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/CinderelaBaile.jpeg?raw=true",
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
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/CoisaDeMenina.jpeg?raw=true",
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

{
  id: 98,
  titulo: "Meninas Sonhadoras, Mulheres Cientistas – Linguagens e Ciências Humanas",
  autor: "Flávia Martins de Carvalho",
  editora: "Mostarda",
  tema: "Empoderamento Feminino",
  genero: "Biografia / Educação",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 40,
  resumo: "Inspira meninas a seguirem carreiras nas ciências humanas, mostrando a trajetória de grandes mulheres da área.",
  dataPublicacao: "2022-10-01",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/MeninasSonhadorasCienciasHumanas.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/MeninasSonhadorasCienciasHumanas.jpeg?raw=true"
},

{
  id: 99,
  titulo: "Mulheres Incríveis que Mudaram o Mundo",
  autor: "Alice Ramos",
  editora: "Ciranda Cultural",
  tema: "Empoderamento Feminino",
  genero: "Biografia",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 28,
  resumo: "Apresenta a vida de mulheres notáveis que impactaram a história, incentivando novas gerações com suas conquistas.",
  dataPublicacao: "2021-03-20",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/MulheresIncriveis.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/MulheresIncriveis.jpeg?raw=true"
},

{
  id: 100,
  titulo: "Meninas Sonhadoras, Mulheres Cientistas – Sustentabilidade I",
  autor: "Flávia Martins de Carvalho",
  editora: "Mostarda",
  tema: "Empoderamento Feminino",
  genero: "Ciência / Sustentabilidade",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 42,
  resumo: "Retrata o protagonismo feminino em pesquisas ligadas à sustentabilidade, destacando cientistas que atuam pela preservação do planeta.",
  dataPublicacao: "2023-05-12",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/MeninasSonhadorasSustentabilidade.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/MeninasSonhadorasSustentabilidade.jpeg?raw=true"
},

{
  id: 101,
  titulo: "Menina que Brincava de Tudo",
  autor: "Carolina Magalhães",
  editora: "Carolina Magalhães",
  tema: "Empoderamento Feminino",
  genero: "Ficção Infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 24,
  resumo: "Uma história sobre liberdade, criatividade e empoderamento, mostrando que meninas podem brincar e ser o que quiserem.",
  dataPublicacao: "2021-07-01",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/MeninaQueBrincavaDeTudo.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/MeninaQueBrincavaDeTudo.jpeg?raw=true"
},

{
  id: 102,
  titulo: "Tarsila, Menina Pintora",
  autor: "Lúcia Fidalgo",
  editora: "Paulus",
  tema: "Empoderamento Feminino",
  genero: "Biografia / Arte",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 32,
  resumo: "A trajetória da artista Tarsila do Amaral desde a infância, incentivando meninas a valorizarem a arte e sua identidade.",
  dataPublicacao: "2020-02-15",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/TarsilaMeninaPintora.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/TarsilaMeninaPintora.jpeg?raw=true"
},

{
  id: 103,
  titulo: "Pequenas Grandes Líderes: Mulheres Importantes da História Negra",
  autor: "Vashti Harrison",
  editora: "Harperkids",
  tema: "Empoderamento Feminino",
  genero: "Biografia / História Negra",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 96,
  resumo: "Retrata mulheres negras que marcaram a história com coragem, talento e liderança, inspirando novas gerações.",
  dataPublicacao: "2019-09-01",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/PequenasGrandesLideres.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/PequenasGrandesLideres.jpeg?raw=true"
},


//familias diversar

{
  id: 108,
  titulo: "O Amor é Animal",
  autor: "José Roberto Torero",
  editora: "Padaria de Livros",
  tema: "Famílias Diversas",
  genero: "Infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 32,
  resumo: "Uma história divertida e sensível que mostra como o amor pode existir de diferentes formas e em diferentes tipos de famílias.",
  dataPublicacao: "2018-05-01",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/OAmorEAnimal.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/OAmorEAnimal.jpeg?raw=true"
},
   
{
  id: 110,
  titulo: "Família",
  autor: "Núria Roca",
  editora: "Ibep JR",
  tema: "Famílias Diversas",
  genero: "Infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 28,
  resumo: "Este livro mostra, de forma simples e inclusiva, os diferentes tipos de famílias existentes, promovendo respeito e empatia.",
  dataPublicacao: "2017-08-20",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Familia.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Familia.jpeg?raw=true"
},
{
  id: 111,
  titulo: "Mãe Não é Uma Só, Eu Tenho Duas",
  autor: "Nanda Matheus e Raphaela Comisso",
  editora: "Saíra",
  tema: "Famílias Diversas",
  genero: "Infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 32,
  resumo: "Uma obra que apresenta com delicadeza a vivência de uma criança com duas mães, valorizando a diversidade e o amor familiar.",
  dataPublicacao: "2021-03-12",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/MaeNaoEUmaSoEuTenhoDuas.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/MaeNaoEUmaSoEuTenhoDuas.jpeg?raw=true"
},

{
  id: 113,
  titulo: "Pequeno Sereio",
  autor: "Janaína Tokitaka",
  editora: "Companhia das Letrinhas",
  tema: "Famílias Diversas",
  genero: "Infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 28,
  resumo: "Uma releitura moderna e inclusiva do clássico, em que o pequeno sereio vive entre mundos e identidades, abordando a diversidade familiar e de gênero.",
  dataPublicacao: "2020-10-15",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/PequenoSereio.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/PequenoSereio.jpeg?raw=true"
},

{
  id: 114,
  titulo: "Minhas Duas Avós",
  autor: "Ana Teixeira",
  editora: "Pólen",
  tema: "Famílias Diversas",
  genero: "Infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 24,
  resumo: "Uma narrativa carinhosa sobre o vínculo com duas avós de culturas diferentes, valorizando a diversidade familiar e afetiva.",
  dataPublicacao: "2018-04-08",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/MinhasDuasAvos.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/MinhasDuasAvos.jpeg?raw=true"
},
{
  id: 115,
  titulo: "Olívia Tem Dois Pais",
  autor: "Márcia Leite",
  editora: "Companhia das Letrinhas",
  tema: "Famílias Diversas",
  genero: "Infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 30,
  resumo: "A história de Olívia, uma menina com dois pais, que lida com curiosidades e desafios de maneira afetuosa e divertida.",
  dataPublicacao: "2021-01-22",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/OliviaTemDoisPais.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/OliviaTemDoisPais.jpeg?raw=true"
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
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/LetrasDeCarvao.jpeg?raw=true",
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
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/JardimDeMarielle.jpeg?raw=true",
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
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Estrelas.jpeg?raw=true",
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
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/EiVoce.jpeg?raw=true",
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
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/GabrielaPrincesaDaome.jpeg?raw=true",
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
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/DescobertasKito.jpeg?raw=true",
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
},

{
  id: 36,
  titulo: "Caderno de rimas do João",
  autor: "Lázaro Ramos",
  editora: "Pallas",
  tema: "Infanto‑Juvenil",
  genero: "Poesia infantil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 40,
  resumo: "Primeiro livro infantil do autor, reúne rimas espontâneas sobre cotidiano, cultura e família, ilustrado por Mauricio Negro.",
  dataPublicacao: "2010-12-21",
  dataCatalogo: "2025‑07‑28",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/CadernoRimasJoao.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/CadernoRimasJoao.jpeg?raw=true"
},
{
  id: 37,
  titulo: "Caderno sem rimas da Maria",
  autor: "Lázaro Ramos",
  editora: "Pallas",
  tema: "Infanto‑Juvenil",
  genero: "Poesia infantil criativa",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 36,
  resumo: "Inspirado na filha Maria, brinca com palavras inventadas e dá visibilidade à linguagem infantil plena de inventividade.",
  dataPublicacao: "2018‑02‑01",
  dataCatalogo: "2025‑07‑28",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/CadernoSemRimasMaria.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/CadernoSemRimasMaria.jpeg?raw=true"
},
{
  id: 38,
  titulo: "Calu: uma menina cheia de histórias",
  autor: "Cássia Vale & Luciana Palmeira",
  editora: "Malê Editora",
  tema: "Infanto‑Juvenil",
  genero: "Narrativa infantil comunitária",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 32,
  resumo: "Calu transforma seu bairro em um museu a céu aberto, celebrando memória coletiva, pertencimento e pertencimento cultural.",
  dataPublicacao: "2017‑01‑01",
  dataCatalogo: "2025‑07‑28",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/CaluMeninaCheiaHistorias.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/CaluMeninaCheiaHistorias.jpeg?raw=true"
},

{
  id: 39,
  titulo: "Antônia e os cabelos que carregavam os segredos do Universo",
  autor: "Alan Alves Brito",
  editora: "Artêrinha",
  tema: "Infanto‑Juvenil",
  genero: "Narrativa infantil sobre identidade negra",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 36,
  resumo: "Antônia, menina negra nordestina, usa seus cabelos crespos como porta‑voz de ancestralidade e indagações cósmicas, conectando identidade e ciência.",
  dataPublicacao: "2022‑02‑24",
  dataCatalogo: "2025‑07‑29",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/AntoniaCabelosSegredosUniverso.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/AntoniaCabelosSegredosUniverso.jpeg?raw=true"
},
{
  id: 40,
  titulo: "Chuva de manga",
  autor: "James Rumford",
  editora: "Brinque‑Book",
  tema: "Infanto‑Juvenil",
  genero: "Literatura infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 32,
  resumo: "Tomás, menino chadiano, vive a espera da chuva que fará mangueiras florirem. Um relato sobre esperança, imaginação e vida no Chade.",
  dataPublicacao: "2005‑11‑04",
  dataCatalogo: "2025‑07‑29",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/ChuvaDeManga.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/ChuvaDeManga.jpeg?raw=true"
},
{
  id: 41,
  titulo: "Casas de Unzó",
  autor: "Ciano",
  editora: "Norte / Jandaíra",
  tema: "Infanto‑Juvenil",
  genero: "Narrativa periférica em realismo mágico",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 72,
  resumo: "Unzó e sua avó perdem a casa e vivem uma noite mágica de resistência, identidade e moradia por meio de símbolos e linguagens populares.",
  dataPublicacao: "2021‑11‑27",
  dataCatalogo: "2025‑07‑29",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/CasasDeUnzo.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/CasasDeUnzo.jpeg?raw=true"
},

{
  id: 42,
  titulo: "Aqui no morro, tem princesa sim!",
  autor: "Simone Botelho",
  editora: "Albatrozinho",
  tema: "Infanto‑Juvenil",
  genero: "Narrativa infantil periférica",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 40,
  resumo: "Alika, menina negra periférica, sonha ser princesa de verdade e descobre sua ancestralidade e realeza nos ritmos do samba e na cultura popular.",
  dataPublicacao: "2022‑01‑11",
  dataCatalogo: "2025‑07‑29",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/AquiNoMorroTemPrincesaSim.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/AquiNoMorroTemPrincesaSim.jpeg?raw=true"
},
{
  id: 43,
  titulo: "Bruna e a galinha d'Angola",
  autor: "Gercilga de Almeida",
  editora: "Pallas",
  tema: "Infanto‑Juvenil",
  genero: "Narrativa infantil mitológica",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 24,
  resumo: "Bruna cria um vínculo mágico com uma galinha d’angola, descobrindo lendas africanas, oralidade e pertencimento a partir da ancestralidade da avó.",
  dataPublicacao: "2009‑03‑19",
  dataCatalogo: "2025‑07‑29",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/BrunaGalinhaDAngola.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/BrunaGalinhaDAngola.jpeg?raw=true"
},

{
  id: 44,
  titulo: "Brincar na rua",
  autor: "Magna Domingues",
  editora: "Baú Encantado",
  tema: "Infanto‑Juvenil",
  genero: "Narrativa infantil periférica",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 22,
  resumo: "Maria Eunice e outras crianças da periferia se reúnem para brincar na rua, entre memórias e o direito de ocupar a cidade com autonomia e alegria.",
  dataPublicacao: "2022‑01‑01",
  dataCatalogo: "2025‑07‑29",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/BrincarNaRua.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/BrincarNaRua.jpeg?raw=true"
},
{
  id: 45,
  titulo: "Omo: o rio da liberdade",
  autor: "Vanessa Alexandre",
  editora: "PAE Editora",
  tema: "Infanto‑Juvenil",
  genero: "Narrativa infantil sobre natureza e liberdade",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 32,
  resumo: "Sadiki e Ayana vivem às margens do rio Omo, na Nigéria; desconhecem a escravidão e são libertos pela natureza, criatividade e arte.",
  dataPublicacao: "2021‑01‑01",
  dataCatalogo: "2025‑07‑29",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/OmoRioLiberdade.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/OmoRioLiberdade.jpeg?raw=true"
},

{
  id: 46,
  titulo: "Bolota: uma certa jabuticaba muito esperta",
  autor: "Iray Galrão",
  editora: "Escritinha",
  tema: "Infanto‑Juvenil",
  genero: "Poesia infantil / pictórica",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 32,
  resumo: "Bolota aprende sobre virtude das diferenças, igualdade racial e continuidade da vida ao observar sua jabuticabeira, com imagens bordadas feitas pela autora.",
  dataPublicacao: "2014‑01‑01",
  dataCatalogo: "2025‑07‑29",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/BolotaJabuticaba.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/BolotaJabuticaba.jpeg?raw=true"
},

{
  id: 48,
  titulo: "Bucalá: a pequena princesa do Quilombo Cabula",
  autor: "Davi Nunes",
  editora: "Malê Mirim",
  tema: "Infanto‑Juvenil",
  genero: "Narrativa infantil com ancestralidade",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 32,
  resumo: "Bucalá vive no Quilombo Cabula e encanta com sua conexão com a natureza, fortalecimento de identidade quilombola e herança cultural.",
  dataPublicacao: "2023‑04‑01",
  dataCatalogo: "2025‑07‑29",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/BucalaPrincesaCabula.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/BucalaPrincesaCabula.jpeg?raw=true"
},

{
  id: 49,
  titulo: "Imani",
  autor: "Marcos Cajé",
  editora: "Mostarda",
  tema: "Infanto‑Juvenil",
  genero: "Literatura infantil com ancestralidade",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 24,
  resumo: "Imani vive no quilombo Rio da Lua e deseja participar das rodas de capoeira; em sua jornada descobre que ver vai além dos olhos, construindo autonomia e magia.",
  dataPublicacao: "2024‑???‑??", // data não divulgada no site da editora
  dataCatalogo: "2025‑07‑29",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Imani.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Imani.jpeg?raw=true"
},
{
  id: 50,
  titulo: "Omo‑Obá; histórias de princesas",
  autor: "Kiusam de Oliveira",
  editora: "Mazza Edições",
  tema: "Infanto‑Juvenil",
  genero: "Coletânea ilustrada de mitos africanos",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 64,
  resumo: "Narrativas de seis princesas-príncipes iorubás (orixás) que enfrentam desafios, amadurecem e ressignificam seu lugar no mundo, com muita força e ancestralidade.",
  dataPublicacao: "2009‑01‑01",
  dataCatalogo: "2025‑07‑29",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/OmoOba.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/OmoOba.jpeg?raw=true"
},
{
  id: 51,
  titulo: "África recontada para crianças",
  autor: "Avani Souza Silva",
  editora: "Martin Claret",
  tema: "Infanto‑Juvenil",
  genero: "Coletânea de contos africanos",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 120,
  resumo: "Seleção de fábulas e contos tradicionais de países africanos de língua portuguesa, com adivinhas, músicas, gastronomia e elementos culturais diversos.",
  dataPublicacao: "2020‑04‑01",
  dataCatalogo: "2025‑07‑29",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/AfricaRecontadaParaCriancas.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/AfricaRecontadaParaCriancas.jpeg?raw=true"
},

{
  id: 52,
  titulo: "África: contos do rio, da selva e da savana",
  autor: "Silvana Salerno",
  editora: "Girassol",
  tema: "Infanto‑Juvenil",
  genero: "Antologia de contos africanos",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 80,
  resumo: "Coletânea de contos orais de diversos países africanos (Congo, Guiné‑Bissau, Benin, Nigéria, Angola, Moçambique, Senegal), resgatando griôs e tradição ancestral.",
  dataPublicacao: "2022‑11‑30",
  dataCatalogo: "2025‑07‑30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/AfricaContosRioSelvaSavana.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/AfricaContosRioSelvaSavana.jpeg?raw=true"
},
{
  id: 53,
  titulo: "Pequenos contos negros",
  autor: "Blaise Cendrars",
  editora: "SM Educação",
  tema: "Infanto‑Juvenil",
  genero: "Contos africanos recontados",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 96,
  resumo: "Histórias inspiradas em fontes etnográficas africanas, misturando animais, seres sobrenaturais e folclore, pela primeira vez publicadas no Brasil.",
  dataPublicacao: "2014‑01‑01",
  dataCatalogo: "2025‑07‑30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/PequenosContosNegros.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/PequenosContosNegros.jpeg?raw=true"
},

{
  id: 54,
  titulo: "África que você fala",
  autor: "Claudio Fragata",
  editora: "Globinho",
  tema: "Infanto-Juvenil",
  genero: "História e identidade africana",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 40,
  resumo: "De forma leve e divertida, A África que você fala faz um passeio por palavras que pegamos emprestadas de idiomas como quimbundo, iorubá, jeje e banto. ",
  dataPublicacao: "2021-01-15",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/AfricaQueVoceFala.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/AfricaQueVoceFala.jpeg?raw=true"
},


//maternidade


{
  id: 6,
  titulo: "As tranças de minha mãe",
  autor: "Ana Fátima",
  editora: "Ereginga Educação",
  tema: "maternidade",
  genero: "Literatura infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 32, // confirmar número exato
  resumo: "Narrado pelo pequeno Akin, o livro celebra o vínculo entre mãe e filho por meio das tranças, símbolos de ancestralidade africana e afetividade.",
    dataPublicacao: "2021-03-05",
  dataCatalogo: "2025-07-18",
   capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/TrancasMae.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/TrancasMae.jpeg?raw=true"
},

{
  id: 104,
  titulo: "Ashanti, Nossa Pretinha",
  autor: "Taís Espirito Santo",
  editora: "Malê Mirim",
  tema: "Maternidade",
  genero: "Infantil / Cultura Afro-brasileira",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 28,
  resumo: "A história sensível de uma criança negra e sua relação de afeto com a mãe e sua ancestralidade.",
  dataPublicacao: "2022-03-10",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/AshantiNossaPretinha.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/AshantiNossaPretinha.jpeg?raw=true"
},

{
  id: 105,
  titulo: "Mãe Dinha",
  autor: "Maria do Carmo",
  editora: "Maza Edições",
  tema: "Maternidade",
  genero: "Literatura Afro-brasileira",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 30,
  resumo: "Uma homenagem às mulheres negras que transmitem sabedoria, acolhimento e resistência por meio da maternidade.",
  dataPublicacao: "2021-06-05",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/MaeDinha.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/MaeDinha.jpeg?raw=true"
},

{
  id: 107,
  titulo: "Cheirinho de Neném",
  autor: "Patrícia Santana",
  editora: "Maza Edições",
  tema: "Maternidade",
  genero: "Infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 24,
  resumo: "Uma narrativa delicada sobre os primeiros momentos de vida e o vínculo entre mãe e bebê.",
  dataPublicacao: "2020-02-14",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/CheirinhoDeNenem.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/CheirinhoDeNenem.jpeg?raw=true"
},

{
  id: 109,
  titulo: "Mamãe Sangra",
  autor: "Cláudia Pacheco",
  editora: "Cláudia Pacheco",
  tema: "Maternidade",
  genero: "Educação / Corpo Humano",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 36,
  resumo: "Um livro que aborda a menstruação com naturalidade e afeto, ajudando crianças a compreenderem esse processo com empatia.",
  dataPublicacao: "2022-10-10",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/MamaeSangra.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/MamaeSangra.jpeg?raw=true"
},

{
  id: 112,
  titulo: "Lenço de Cetim da Mamãe",
  autor: "Chimamanda Ngozi Adichie",
  editora: "Companhia das Letrinhas",
  tema: "Maternidade",
  genero: "Infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 20,
  resumo: "Uma história sensível sobre a relação entre mãe e filha, com toques culturais e afetivos.",
  dataPublicacao: "2019-06-05",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/LencoDeCetimDaMamae.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/LencoDeCetimDaMamae.jpeg?raw=true"
},


//comportamento e sentimento

{
  id: 47,
  titulo: "Sinto o que sinto: um passeio pelos sentimentos",
  autor: "Lázaro Ramos",
  editora: "Sextante",
  tema: "Comportamento/Sentimentos",
  genero: "Narrativa sensorial infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 48,
  resumo: "Dan, com ajuda do Mundo Bita, explora emoções como raiva, alegria, tristeza e orgulho, aprendendo a reconhecê-las e aceitá-las como parte natural da vida.",
  dataPublicacao: "2025‑02‑05",
  dataCatalogo: "2025‑07‑29",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/SintoOQueSinto.jpg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/SintoOQueSinto.jpeg?raw=true"
},

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
// afrofuturismo
{
  id: 57,
  titulo: "A Dáie de Vários Nomes",
  autor: "Taslim",
  editora: "Kitembo",
  tema: "Afrofuturismo",
  genero: "Ficção infantojuvenil afrofuturista",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 160,
  resumo: "Maisha é uma dáie que viaja no tempo para registrar eventos da pandemia de 2020 no Rio de Janeiro – uma ficção afrofuturista que mistura memórias, identidade negra e viagem temporal.",
  dataPublicacao: "2024-09-07",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/ADaieDeVariosNomes.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/ADaieDeVariosNomes.jpeg?raw=true"
},

{
  id: 58,
  titulo: "Pensamentos Afrofuturistas",
  autor: "Lu Ain Zaila (org.)",
  editora: "Kitembo",
  tema: "Afrofuturismo",
  genero: "Ensaio literário / antologia afrofuturista",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 144,
  resumo: "Antologia organizada por Lu Ain Zaila com textos e reflexões de artistas e artivistas negros que exploram o Afrofuturismo à brasileira de forma poética e engajada.",
  dataPublicacao: "2025-01-01",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/PensamentosAfrofuturistas.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/PensamentosAfrofuturistas.jpeg?raw=true"
},

{
  id: 59,
  titulo: "Máscaras do Poder: A Origem",
  autor: "Márcio Roberto do Carmo",
  editora: "Mostarda",
  tema: "Afrofuturismo",
  genero: "HQ / Ficção infantil afrocêntrica",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 64,
  resumo: "História em quadrinhos que traz máscaras místicas inspiradas na mitologia africana, conferindo poderes ancestrais a jovens protagonistas negros que enfrentam ameaça global.",
  dataPublicacao: "2024-04-15",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/MascarasDoPoder.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/MascarasDoPoder.jpeg?raw=true"
},

{
  id: 61,
  titulo: "Beto, o garoto batuque",
  autor: "Rodrigo Mendes & Thaís Ferreira",
  editora: "Kitembo",
  tema: "Afrofuturismo",
  genero: "Literatura ilustrada infantil com afrofuturismo",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 48,
  resumo: "Beto adora batucar e sambar, unindo afeto e ancestralidade em uma batucada na escola — uma história visual com estética afrofuturista e celebração da cultura negra.",
  dataPublicacao: "2024-11-20",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/BetoOGarotoBatuque.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/BetoOGarotoBatuque.jpeg?raw=true"
},

{
  id: 62,
  titulo: "Ubuntu 2048",
  autor: "Raphael Silva & Inara Régia (Isdruxula)",
  editora: "Kitembo",
  tema: "Afrofuturismo",
  genero: "Ficção cyberpunk afrofuturista juvenil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 204,
  resumo: "Em um futuro distópico, Teshai e a androide Kinaya enfrentam desafios para manter a filosofia Ubuntu viva — uma trama afrofuturista sobre identidade, tecnologia e solidariedade.",
  dataPublicacao: "2021-05-19",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Ubuntu2048.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Ubuntu2048.jpeg?raw=true"
},

{
  id: 63,
  titulo: "Cabeça de Zumbi",
  autor: "Israel Neto",
  editora: "Kitembo",
  tema: "Afrofuturismo",
  genero: "Suspense afrofuturista infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 124,
  resumo: "Uma sociedade secreta busca garantir a passagem de Zumbi dos Palmares pela Kalunga. Jornalistas precisam usar suas vozes para preservar a memória e enfrentar uma trama ancestral.",
  dataPublicacao: "2024-08-01",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/CabecaDeZumbi.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/CabecaDeZumbi.jpeg?raw=true"
},

{
  id: 60,
  titulo: "Por um fio",
  autor: "Laura de Paula & Will Rez",
  editora: "Kitembo",
  tema: "Afrofuturismo",
  genero: "Conto afrofuturista infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: null,
  resumo: "Conto afrofuturista que mescla realismo mágico e especulação tecnológica, com protagonistas negras em um universo permeado por ancestralidade e resiliência.",
  dataPublicacao: "2024-??-??",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/PorUmFio.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/PorUmFio.jpeg?raw=true"
},

{
  id: 64,
  titulo: "Omi Ipalolo: águas silenciosas",
  autor: "Will Braga & Douglas S. T. Reverie",
  editora: "Kitembo",
  tema: "Afrofuturismo",
  genero: "Afrofuturismo quântico / graphic novel",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 148,
  resumo: "Expressionismo afro‑surreal se encontra ao futurismo quântico africano em uma jornada sobre colonização, mutação humana e resistências multissem domínio do multiverso.",
  dataPublicacao: "2022-01-01",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/OmiIpaloloAguasSilenciosas.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/OmiIpaloloAguasSilenciosas.jpeg?raw=true"
},
{
  id: 65,
  titulo: "Almanaque Kitembo 2K23 - Quadrinhos Afrofuturistas",
  autor: "Vários autores",
  editora: "Kitembo",
  tema: "Afrofuturismo",
  genero: "Antologia em HQ / quadrinhos infantis afrofuturistas",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 150,
  resumo: "Volume anual com nove histórias em quadrinhos de criadoras e criadores negros por todo o Brasil, explorando propostas estéticas, políticas e afrofuturas narrativas plurais.",
  dataPublicacao: "2024-04-24",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/AlmanaqueKitembo2K23.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/AlmanaqueKitembo2K23.jpeg?raw=true"
}
,
{
  id: 66,
  titulo: "3 Esús e o Tempo: o mundo de Eleguá",
  autor: "Israel Neto & Rodrigo Cândido",
  editora: "Kitembo",
  tema: "Afrofuturismo",
  genero: "Graphic novel / quadrinhos especulativos africanos",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 44,
  resumo: "Eleguá se torna um andarilho em um mundo devastado por uma chuva interminável; retirante ancestral que recorre à profecia, herança espiritual e resistência para restaurar equilíbrio.",
  dataPublicacao: "2023-12-01",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/3EsusOTempoElegua.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/3EsusOTempoElegua.jpeg?raw=true"
}
,

{
  id: 67,
  titulo: "Ancestral",
  autor: "Israel Neto & Gê Mendes",
  editora: "Kitembo",
  tema: "Afrofuturismo",
  genero: "Space opera afrofuturista",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 230,
  resumo: "Uma space opera ambiciosa que entrelaça civilizações humanas em planetas do sistema estelar de Rá com conhecimentos ancestrais africanos, questionamentos sobre colonização galáctica e esperança coletiva.",
  dataPublicacao: "2021-01-01",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Ancestral.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Ancestral.jpeg?raw=true"
},

{
  id: 68,
  titulo: "Afrofuturismo: O Futuro é Nosso – Vol. 1",
  autor: "Vários autores",
  editora: "Kitembo",
  tema: "Afrofuturismo",
  genero: "Antologia afrofuturista infantil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 108,
  resumo: "Coletânea com contos que exploram futuros possíveis a partir de perspectivas afro-brasileiras — tecnologia ancestral, representatividade e inovação cultural, valorizando a imaginação negra.",
  dataPublicacao: "2020-??-??",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/AfrofuturismoOFuturoENossoVol1.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/AfrofuturismoOFuturoENossoVol1.jpeg?raw=true"
},

{
  id: 69,
  titulo: "Afrofuturismo: O Futuro é Nosso – Vol. 3",
  autor: "Vários autores",
  editora: "Kitembo",
  tema: "Afrofuturismo",
  genero: "Antologia em HQ / textos infantis",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 116,
  resumo: "Terceiro volume da série antológica afrofuturista da Kitembo, com nove contos e histórias em quadrinhos escritos e ilustrados por autores negros do Brasil, destacando identidades negras e imaginação futurista.",
  dataPublicacao: "2024-04-24",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/AfrofuturismoOFuturoENossoVol3.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/AfrofuturismoOFuturoENossoVol3.jpeg?raw=true"
},

{
  id: 70,
  titulo: "Akin: o rei de Igbo",
  autor: "Marcos Cajé",
  editora: "Malê Mirim",
  tema: "Afrofuturismo",
  genero: "Ficção infantojuvenil mitológica africana",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 54,
  resumo: "Akin recebe a profecia de salvar o reino Igbo, embarcando numa viagem espiritual com ensinamentos dos mitos africanos até tornar-se líder e guerreiro ancestral.",
  dataPublicacao: "2020-10-01",
  dataCatalogo: "2025‑07‑30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/AkinOReiDeIgbo.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/AkinOReiDeIgbo.jpeg?raw=true"
},

{
  id: 71,
  titulo: "Antologia Afro‑Caribenha: ficção científica e literatura fantástica (edição República Dominicana)",
  autor: "Vários autores",
  editora: "Kitembo / ADFE",
  tema: "Afrofuturismo",
  genero: "Antologia de ficção especulativa afro‑caribenha",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 102,
  resumo: "Contos especulativos de autoras e autores negros da República Dominicana, transitando entre Afrofuturismo, Taíno futurismo e víru­s‑punk.",
  dataPublicacao: "2023-01-01",
  dataCatalogo: "2025‑07‑30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/AntologiaAfroCaribenha.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/AntologiaAfroCaribenha.jpeg?raw=true"
},

{
  id: 72,
  titulo: "Afrofuturo ancestral do amanhã",
  autor: "Henrique André & Tutano Nômade",
  editora: "Kitembo",
  tema: "Afrofuturismo",
  genero: "Poema ilustrado afrofuturista",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 44,
  resumo: "A professora Amara convida crianças a projetarem o futuro a partir da ancestralidade negra — uma introdução afrofuturista para crianças sonhadoras.",
  dataPublicacao: "2022-08-29",
  dataCatalogo: "2025‑07‑30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/AfrofuturoAncestralDoAmanha.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/AfrofuturoAncestralDoAmanha.jpeg?raw=true"
},

{
  id: 73,
  titulo: "Afrofuturismo: O Futuro é Nosso – Vol. 2",
  autor: "Vários autores",
  editora: "Kitembo",
  tema: "Afrofuturismo",
  genero: "Antologia infantojuvenil de contos afrofuturistas",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 126,
  resumo: "Volume com contos de jovens autores negros brasileiros ambientados em universos futuristas, space‑opera, tramas policiais e androides.",
  dataPublicacao: "2020‑01‑01",
  dataCatalogo: "2025‑07‑30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/AfrofuturismoOFuturoENossoVol2.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/AfrofuturismoOFuturoENossoVol2.jpeg?raw=true"
},

{
  id: 66,
  titulo: "Os 3 Esús e o Tempo",
  autor: "Israel Neto & Rodrigo Cândido",
  editora: "Kitembo",
  tema: "Afrofuturismo",
  genero: "Graphic novel / HQ afrofuturista",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 40,
  resumo: "Uma aventura afrofuturista em que um aprendiz de Orunmilá quebra o tempo, promovendo o encontro de três dimensões e refletindo sobre legados, ancestralidade e profecia.",
  dataPublicacao: "2021-01-08",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Os3EsusETempo.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Os3EsusETempo.jpeg?raw=true"
},

{
  id: 67,
  titulo: "(Amor)Talhamento e Os Fantasmas da Rua Sete",
  autor: "Juciane Reis & Danilo Celso",
  editora: "Kitembo / Festival Literaturas Negras",
  tema: "Afrofuturismo",
  genero: "Coletânea infantojuvenil afrofuturista",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 116,
  resumo: "Volume 1 da Coleção ‘Literaturas Negras’, reúne dois contos: (Amor)Talhamento, sobre luto e feminicídio negro, e Os Fantasmas da Rua Sete, que entrelaça ancestralidade, medicina e reencarnação.",
  dataPublicacao: "2021-07-17",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/AmorTalhamentoFantasmaRuaSete.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/AmorTalhamentoFantasmaRuaSete.jpeg?raw=true"
},

{
  id: 68,
  titulo: "Almanaque Kitembo: Quadrinhos Afrofuturismol 2k24",
  autor: "Vários autores",
  editora: "Kitembo",
  tema: "Afrofuturismo",
  genero: "Quadrinhos / HQ afrofuturista",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 48,
  resumo: "Edição especial do Almanaque Kitembo com histórias em quadrinhos que exploram o afrofuturismo sob múltiplos olhares. Reúne artistas negros em narrativas que mesclam ancestralidade, tecnologia e crítica social.",
  dataPublicacao: "2024-03-22",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Afrofuturismol2k24.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Afrofuturismol2k24.jpeg?raw=true"
},

{
  id: 69,
  titulo: "Almanaque Kitembo: Quadrinhos Afrofuturismo 2k22",
  autor: "Vários autores",
  editora: "Kitembo",
  tema: "Afrofuturismo",
  genero: "Quadrinhos / HQ afrofuturista",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 52,
  resumo: "Primeira edição do Almanaque Kitembo com histórias em quadrinhos que exploram o afrofuturismo por meio de personagens negros, mitologias afro-brasileiras e ficção especulativa.",
  dataPublicacao: "2022-11-20",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/AlmanaqueKitembo2k22.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/AlmanaqueKitembo2k22.jpeg?raw=true"
},

{
  id: 70,
  titulo: "Multiverso em Multiverso",
  autor: "Poeta Afroluffy",
  editora: "Independente",
  tema: "Afrofuturismo",
  genero: "Poesia especulativa",
  classificacaoLiteraria: "Adulto",
  numeroPaginas: 110,
  resumo: "Obra poética que atravessa tempos, dimensões e identidades negras. Com uma linguagem futurista e lírica, o autor questiona a realidade e propõe existências múltiplas, afrorreferenciadas e interplanetárias.",
  dataPublicacao: "2023-12-08",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/MultiversoEmMultiverso.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/MultiversoEmMultiverso.jpeg?raw=true"
},

{
  id: 71,
  titulo: "Crianças nas Sombras",
  autor: "Hedjan CS e Amora Moreira",
  editora: "Kitembo",
  tema: "Afrofuturismo",
  genero: "Romance distópico juvenil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 168,
  resumo: "Uma distopia afrofuturista em que crianças negras com dons especiais enfrentam um mundo que as quer invisíveis. A obra denuncia o racismo estrutural e propõe resistência por meio da imaginação.",
  dataPublicacao: "2024-05-17",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/CriancasNasSombras.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/CriancasNasSombras.jpeg?raw=true"
},

{
  id: 72,
  titulo: "Caçador Cibernético da Rua 13",
  autor: "Fábio Kabral",
  editora: "Malê Mirim",
  tema: "Afrofuturismo",
  genero: "Ficção científica afrofuturista",
  classificacaoLiteraria: "Juvenil / Adulto",
  numeroPaginas: 180,
  resumo: "Em uma metrópole futurista do Brasil, um jovem caçador de recompensas se envolve em uma missão que coloca à prova sua ancestralidade e seu vínculo com as tecnologias dos orixás.",
  dataPublicacao: "2017-10-10",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/CacadorCiberneticoRua13.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/CacadorCiberneticoRua13.jpeg?raw=true"
},

{
  id: 73,
  titulo: "Uzuri: A Guerreira de Ketu",
  autor: "Marcos Cajé",
  editora: "Quadrinhos da Mostarda",
  tema: "Afrofuturismo",
  genero: "Quadrinhos / HQ",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 48,
  resumo: "Uzuri, uma jovem guerreira do Reino de Ketu, usa armas tecnológicas e conhecimentos ancestrais para proteger seu povo. Uma aventura afrofuturista repleta de ação e mitologia afro-brasileira.",
  dataPublicacao: "2023-03-21",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/UzuriGuerreiraDeKetu.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/UzuriGuerreiraDeKetu.jpeg?raw=true"
},

{
  id: 74,
  titulo: "A Cientista Guerreira do Facão Furioso",
  autor: "Fábio Kabral",
  editora: "Malê Mirim",
  tema: "Afrofuturismo",
  genero: "Ficção científica",
  classificacaoLiteraria: "Juvenil / Adulto",
  numeroPaginas: 196,
  resumo: "Um afrofuturo em que uma cientista se transforma em guerreira para proteger sua comunidade. Repleto de referências às culturas afro-brasileiras e orixás, a obra mistura ciência, resistência e misticismo.",
  dataPublicacao: "2020-09-15",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/CientistaGuerreiraFacaoFurioso.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/CientistaGuerreiraFacaoFurioso.jpeg?raw=true"
},

{
  id: 75,
  titulo: "Eu Conheço Uzomi",
  autor: "Kinaya",
  editora: "Kitembo",
  tema: "Afrofuturismo",
  genero: "Ficção afrofuturista",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 32,
  resumo: "A história de Uzomi é uma celebração da ancestralidade, identidade e tecnologia em um mundo onde o futuro ecoa as raízes africanas.",
  dataPublicacao: "2023-05-20",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/EuConhecoUzomi.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/EuConhecoUzomi.jpeg?raw=true"
},

{
  id: 76,
  titulo: "Imortal",
  autor: "Sabine Mendes",
  editora: "Kitembo",
  tema: "Afrofuturismo",
  genero: "Ficção científica",
  classificacaoLiteraria: "Juvenil",
  numeroPaginas: 140,
  resumo: "Imortal é uma jornada pelo tempo e espaço conduzida por saberes ancestrais e resistências negras. Uma narrativa potente sobre o legado imaterial africano no futuro.",
  dataPublicacao: "2022-11-10",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Imortal.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Imortal.jpeg?raw=true"
},

{
  id: 75,
  titulo: "Pantera Negra: O Jovem Príncipe",
  autor: "Ronald L. Smith",
  editora: "Excelsior Book One",
  tema: "Afrofuturismo",
  genero: "Aventura juvenil / ficção especulativa Marvel",
  classificacaoLiteraria: "Juvenil",
  numeroPaginas: 208,
  resumo: "T’Challa é um jovem príncipe de Wakanda que é enviado para estudar em Chicago. Entre experiências típicas da adolescência e missões heroicas, ele precisa encontrar seu lugar, esconder sua identidade real e enfrentar forças místicas e ameaças sobrenaturais.",
  dataPublicacao: "2020-03-10",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/PanteraNegraOJovemPrincipe.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/PanteraNegraOJovemPrincipe.jpeg?raw=true"
},

{
  id: 76,
  titulo: "Ubuntu",
  autor: "Raphael Silva",
  editora: "Kitembo",
  tema: "Afrofuturismo",
  genero: "Ficção afrofuturista",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 96,
  resumo: "Uma jornada afrofuturista sobre coletividade, tecnologia ancestral e conexão espiritual, onde o jovem protagonista redescobre a força de seus ancestrais para transformar o futuro.",
  dataPublicacao: "2022-10-18",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Ubuntu.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Ubuntu.jpeg?raw=true"
},


// comportamento / sentimento

{
  id: 78,
  titulo: "Há um monstro debaixo da minha cama",
  autor: "Clemency Pearce",
  editora: "Ciranda Cultural",
  tema: "Comportamento / Sentimentos",
  genero: "Literatura infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 32,
  resumo: "Uma história divertida e sensível sobre enfrentar medos noturnos, mostrando que o que parece assustador pode ser só imaginação.",
  dataPublicacao: "2017-03-15",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/HaUmMonstroDebaixoDaMinhaCama.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/HaUmMonstroDebaixoDaMinhaCama.jpeg?raw=true"
},

{
  id: 79,
  titulo: "Fantasma Equilibrista",
  autor: "Tânia Alexandre Martinelli",
  editora: "Positivo",
  tema: "Comportamento / Sentimentos",
  genero: "Literatura infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 48,
  resumo: "A história de um fantasma que sonha em ser equilibrista, mostrando que coragem e persistência são essenciais para superar inseguranças.",
  dataPublicacao: "2015-05-10",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/FantasmaEquilibrista.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/FantasmaEquilibrista.jpeg?raw=true"
},

{
  id: 80,
  titulo: "Ela e os Chega do Mimimi: A Busca pela Palavra Secreta",
  autor: "Eliane Ramos de Sousa",
  editora: "Dialética",
  tema: "Comportamento / Sentimentos",
  genero: "Literatura juvenil contemporânea",
  classificacaoLiteraria: "Juvenil",
  numeroPaginas: 92,
  resumo: "Em uma jornada criativa e cheia de reflexões, uma garota enfrenta dilemas emocionais e sociais em busca da palavra que transforma relações.",
  dataPublicacao: "2021-08-30",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/ElaEOsChegaDoMimimi.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/ElaEOsChegaDoMimimi.jpeg?raw=true"
},


{
  id: 81,
  titulo: "Ernesto",
  autor: "Biandina Franco",
  editora: "Companhia das Letrinhas",
  tema: "Comportamento / Sentimentos",
  genero: "Literatura infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 36,
  resumo: "A história sensível de Ernesto, um menino que aprende a lidar com suas emoções e encontrar seu lugar no mundo.",
  dataPublicacao: "2013-10-05",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Ernesto.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Ernesto.jpeg?raw=true"
},

{
  id: 82,
  titulo: "O Monstro das Cores",
  autor: "Anna Llenas",
  editora: "Aletria",
  tema: "Comportamento / Sentimentos",
  genero: "Literatura infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 48,
  resumo: "O Monstro das Cores está confuso e precisa entender seus sentimentos com a ajuda das cores. Uma história encantadora sobre educação emocional.",
  dataPublicacao: "2015-03-12",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/MonstroDasCores.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/MonstroDasCores.jpeg?raw=true"
},

{
  id: 83,
  titulo: "Não Fui Eu! Aprendendo Sobre Honestidade",
  autor: "Brian Moses e Mike Gordon",
  editora: "Scipione",
  tema: "Comportamento / Sentimentos",
  genero: "Literatura educativa infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 32,
  resumo: "Com histórias do dia a dia, o livro ensina às crianças o valor da honestidade e a importância de assumir a responsabilidade por seus atos.",
  dataPublicacao: "2010-06-20",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/NaoFuiEu.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/NaoFuiEu.jpeg?raw=true"
},

{
  id: 84,
  titulo: "Jogo limpo, diversão garantida",
  autor: "Daniel Grippo",
  editora: "Terapia Infantil",
  tema: "Comportamento / Sentimentos",
  genero: "Literatura educativa infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 32,
  resumo: "Este livro ensina às crianças a importância do jogo limpo e do respeito nas brincadeiras, promovendo valores como empatia e honestidade.",
  dataPublicacao: "2011-04-10",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/JogoLimpo.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/JogoLimpo.jpeg?raw=true"
},

{
  id: 85,
  titulo: "O que Fazer Quando Você se Preocupa Demais: Um Guia para as Crianças Superarem a Ansiedade",
  autor: "Dawn Huebner",
  editora: "Artmed",
  tema: "Comportamento / Sentimentos",
  genero: "Autoajuda infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 88,
  resumo: "Com linguagem acessível, este guia ajuda as crianças a lidarem com a ansiedade, oferecendo atividades práticas para enfrentar as preocupações do dia a dia.",
  dataPublicacao: "2006-09-15",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/PreocupaDemais.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/PreocupaDemais.jpeg?raw=true"
},

{
  id: 86,
  titulo: "Por favor, aprendendo sobre boas maneiras",
  autor: "Beatriz Meirelles",
  editora: "Scipione",
  tema: "Comportamento / Sentimentos",
  genero: "Literatura educativa infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 28,
  resumo: "Este livro divertido apresenta às crianças os conceitos básicos de boas maneiras, como dizer 'por favor' e 'obrigado', de forma leve e ilustrada.",
  dataPublicacao: "2014-02-18",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/PorFavorBoasManeiras.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/PorFavorBoasManeiras.jpeg?raw=true"
},



{
  id: 88,
  titulo: "Raiva",
  autor: "Blandina Franco",
  editora: "Pequena Zahar",
  tema: "Comportamento / Sentimentos",
  genero: "Literatura infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 36,
  resumo: "Com ilustrações expressivas e linguagem acessível, o livro fala sobre a emoção da raiva e como lidar com ela no cotidiano infantil.",
  dataPublicacao: "2019-10-10",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Raiva.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Raiva.jpeg?raw=true"
},

{
  id: 89,
  titulo: "Sentimentos",
  autor: "Núria Roca",
  editora: "Ibep JR",
  tema: "Comportamento / Sentimentos",
  genero: "Literatura educativa infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 30,
  resumo: "Um guia ilustrado que apresenta diferentes sentimentos de forma clara e acessível, ajudando as crianças a reconhecerem e expressarem suas emoções.",
  dataPublicacao: "2015-04-12",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Sentimentos.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Sentimentos.jpeg?raw=true"
},

//questões sociais

{
  id: 87,
  titulo: "Não é brincadeira",
  autor: "Shirley Souza",
  editora: "Escala Integrada",
  tema: "Questões sociais",
  genero: "Literatura infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 40,
  resumo: "O livro aborda de maneira sensível temas como bullying e respeito às diferenças, incentivando o diálogo entre crianças e educadores.",
  dataPublicacao: "2013-08-22",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/NaoBrincadeira.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/NaoBrincadeira.jpeg?raw=true"
},

{
  id: 90,
  titulo: "Menina que abraça o vento",
  autor: "Fernanda Paraguassu",
  editora: "Vooinho",
  tema: "Questões sociais",
  genero: "Literatura infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 32,
  resumo: "A obra traz uma narrativa sensível sobre identidade, pertencimento e a força do afeto na construção da autoestima.",
  dataPublicacao: "2017-03-15",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/MeninaAbraçaVento.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/MeninaAbraçaVento.jpeg?raw=true"
},

{
  id: 92,
  titulo: "Pequenas confissões",
  autor: "Georgina Martins",
  editora: "Positivo",
  tema: "Questões sociais",
  genero: "Literatura infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 40,
  resumo: "Coletânea de histórias curtas e tocantes que revelam sentimentos e desafios do cotidiano infantil, promovendo empatia e reflexão.",
  dataPublicacao: "2016-09-04",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/PequenasConfissoes.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/PequenasConfissoes.jpeg?raw=true"
},

{
  id: 93,
  titulo: "Revolta dos Guarda-Chuvas",
  autor: "Sidónio Muralha",
  editora: "Global",
  tema: "Questões sociais",
  genero: "Literatura infantojuvenil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 36,
  resumo: "Uma metáfora poética e crítica sobre resistência, onde os guarda-chuvas ganham vida para protestar contra a opressão e injustiças do cotidiano.",
  dataPublicacao: "2014-11-01",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/RevoltaGuardaChuvas.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/RevoltaGuardaChuvas.jpeg?raw=true"
},

{
  id: 94,
  titulo: "Serafina e a Criança que Trabalha",
  autor: "Jô Azevedo e Iolanda Huzak",
  editora: "Ática",
  tema: "Questões sociais",
  genero: "Literatura educativa",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 32,
  resumo: "Serafina conhece a realidade de uma criança em situação de trabalho infantil e aprende sobre empatia, justiça e os direitos das crianças.",
  dataPublicacao: "2017-05-20",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/SerafinaCriancaTrabalha.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/SerafinaCriancaTrabalha.jpeg?raw=true"
},

{
  id: 95,
  titulo: "Refugiadas: Escapando do Céu em Perigo",
  autor: "Maribel Vazquez",
  editora: "Urutau",
  tema: "Questões sociais",
  genero: "Literatura contemporânea",
  classificacaoLiteraria: "Juvenil",
  numeroPaginas: 48,
  resumo: "Histórias reais e ficcionais entrelaçadas para mostrar a dura realidade enfrentada por meninas refugiadas em zonas de conflito.",
  dataPublicacao: "2020-08-12",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/RefugiadasCéuPerigo.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/RefugiadasCéuPerigo.jpeg?raw=true"
},

{
  id: 96,
  titulo: "Se os Tubarões Fossem Homens",
  autor: "Bertolt Brecht",
  editora: "Olhodevidro",
  tema: "Questões sociais",
  genero: "Literatura crítica",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 24,
  resumo: "Uma fábula provocadora em que tubarões imaginários assumem o lugar de humanos para questionar estruturas de poder e dominação.",
  dataPublicacao: "2013-06-15",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/TubaroesHomens.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/TubaroesHomens.jpeg?raw=true"
},

{
  id: 97,
  titulo: "Somos Iguais Mesmo Sendo Diferentes",
  autor: "Marcos Ribeiro",
  editora: "Moderna",
  tema: "Questões sociais",
  genero: "Literatura educativa",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 32,
  resumo: "Um convite ao respeito à diversidade e à empatia, mostrando como podemos conviver em harmonia mesmo com diferenças de aparência, cultura e crenças.",
  dataPublicacao: "2010-03-10",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/SomosIguaisDiferentes.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/SomosIguaisDiferentes.jpeg?raw=true"
},

{
  id: 116,
  titulo: "Boneco do Marcinho",
  autor: "Ermeson Alcalde",
  editora: "Edicon",
  tema: "Questões Sociais",
  genero: "Infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 32,
  resumo: "Marcinho ganha um boneco especial que o ajuda a entender temas como inclusão e respeito às diferenças sociais.",
  dataPublicacao: "2019-06-05",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/BonecoDoMarcinho.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/BonecoDoMarcinho.jpeg?raw=true"
},

{
  id: 117,
  titulo: "Aprendendo a Ser Cidadão",
  autor: "Celia Siqueira",
  editora: "Nobel",
  tema: "Questões Sociais",
  genero: "Infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 36,
  resumo: "Uma introdução ao conceito de cidadania para crianças, com exemplos práticos de direitos e deveres.",
  dataPublicacao: "2017-09-18",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/AprendendoASerCidadao.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/AprendendoASerCidadao.jpeg?raw=true"
},

{
  id: 118,
  titulo: "Aporofobia",
  autor: "Padre Julio Lancellotti",
  editora: "Companhia das Letrinhas",
  tema: "Questões Sociais",
  genero: "Infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 40,
  resumo: "Uma obra sensível que aborda o preconceito contra pessoas em situação de pobreza e incentiva a empatia e o acolhimento.",
  dataPublicacao: "2022-03-12",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Aporofobia.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Aporofobia.jpeg?raw=true"
},

{
  id: 119,
  titulo: "De Onde Você Veio",
  autor: "Liliana Iacocca e Michele Iacocca",
  editora: "Ática",
  tema: "Questões Sociais",
  genero: "Infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 32,
  resumo: "Uma história lúdica que ajuda as crianças a entenderem suas origens, identidades e histórias de vida.",
  dataPublicacao: "2016-08-12",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/DeOndeVoceVeio.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/DeOndeVoceVeio.jpeg?raw=true"
},

{
  id: 120,
  titulo: "Conversando sobre Violência Sexual contra a Criança",
  autor: "Adriana Costa de Miranda",
  editora: "Liber Livro",
  tema: "Questões Sociais",
  genero: "Infantil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 40,
  resumo: "Com linguagem acessível, este livro orienta crianças sobre como identificar e denunciar abusos, promovendo a prevenção e proteção.",
  dataPublicacao: "2018-10-10",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/ConversandoViolenciaSexual.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/ConversandoViolenciaSexual.jpeg?raw=true"
},

{
  id: 121,
  titulo: "Da Minha Janela",
  autor: "Otávio Júnior",
  editora: "Companhia das Letrinhas",
  tema: "Questões Sociais",
  genero: "Infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 28,
  resumo: "Um menino observa o mundo a partir de sua janela em uma favela carioca, trazendo reflexões sobre realidade e sonhos.",
  dataPublicacao: "2020-01-20",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/DaMinhaJanela.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/DaMinhaJanela.jpeg?raw=true"
},


{
  id: 122,
  titulo: "Diversidade",
  autor: "Núria Roca",
  editora: "Ibep JR",
  tema: "Questões Sociais",
  genero: "Infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 32,
  resumo: "Um livro que apresenta às crianças a importância de respeitar as diferenças entre as pessoas, promovendo empatia e inclusão.",
  dataPublicacao: "2014-05-01",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/Diversidade.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/Diversidade.jpeg?raw=true"
},

{
  id: 123,
  titulo: "Guerra e Paz",
  autor: "Mônica",
  editora: "Martins Editora",
  tema: "Questões Sociais",
  genero: "Infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 30,
  resumo: "Com linguagem acessível, o livro aborda o contraste entre a guerra e a paz, incentivando reflexões sobre convivência e empatia.",
  dataPublicacao: "2017-04-12",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/GuerraEPaz.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/GuerraEPaz.jpeg?raw=true"
},

{
  id: 124,
  titulo: "Ester Conhece Paulo Freire",
  autor: "Alê Oliveira",
  editora: "Baioque",
  tema: "Questões Sociais",
  genero: "Infantil",
  classificacaoLiteraria: "Infantil",
  numeroPaginas: 36,
  resumo: "Ester conhece o educador Paulo Freire e descobre como a educação pode ser um instrumento de transformação social.",
  dataPublicacao: "2021-09-15",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/EsterConhecePauloFreire.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/EsterConhecePauloFreire.jpeg?raw=true"
},


// meio ambiente / reciclagem

{
  id: 91,
  titulo: "Meu lugar no mundo - Cubatão",
  autor: "Célia de Souza Pinto",
  editora: "Cia da Cultura",
  tema: "Meio ambiente / Reciclagem",
  genero: "Literatura educativa",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 28,
  resumo: "O livro destaca o papel das crianças na preservação do meio ambiente, explorando a cidade de Cubatão como exemplo de transformação ecológica.",
  dataPublicacao: "2018-06-09",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/MeuLugarCubatão.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/MeuLugarCubatão.jpeg?raw=true"
},

 // Coleção Black Powe


{
  id: 55,
  titulo: "Mário de Andrade – Edição Especial",
  autor: "André Augustus Diasz",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantil",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 28,
  resumo: "Biografia especialmente adaptada para crianças sobre o modernista Mário de Andrade, destacando sua relação com cultura afro-brasileira e folclore.",
  dataPublicacao: "2024-01-01",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/MarioDeAndradeSpecial.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/MarioDeAndradeSpecial.jpeg?raw=true"
},
{
  id: 56,
  titulo: "Mestre Didi: Deoscóredes M. dos Santos",
  autor: "Marcos Cajé",
  editora: "Mostarda",
  tema: "Coleção Black Power",
  genero: "Biografia infantil ilustrada",
  classificacaoLiteraria: "Infantojuvenil",
  numeroPaginas: 32,
  resumo: "Retrato de Mestre Didi, artista-sacerdote de Candomblé, mostrando como sua arte e religiosidade influenciaram a cultura afro-brasileira.",
  dataPublicacao: "2023-01-01",
  dataCatalogo: "2025-07-30",
  capa: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/capa/MestreDidi.jpeg?raw=true",
  mostruario: "https://github.com/Arthurbhs/Biblioteca_APP/blob/main/assets/images/thumbnaill/MestreDidi.jpeg?raw=true"
},

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