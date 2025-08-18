CREATE TABLE IF NOT EXISTS livros (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo TEXT NOT NULL,
  autor TEXT,
  editora TEXT,
  tema TEXT,
  genero TEXT,
  classificacaoLiteraria TEXT,
  resumo TEXT,
  numeroPaginas INTEGER,
  dataPublicacao TEXT,
  dataCatalogo TEXT,
  capa TEXT,
  mostruario TEXT
);
