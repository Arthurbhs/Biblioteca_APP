import { db } from './firebase';
import { setDoc, doc } from 'firebase/firestore';
import livros from '../../livros.json'; // ajuste o caminho conforme onde você salvou

async function importarLivros() {
  try {
    for (const livro of livros) {
      // cria documento usando o id como nome do doc
      await setDoc(doc(db, 'livros', livro.id.toString()), livro);
      console.log(`Livro "${livro.titulo}" adicionado com sucesso!`);
    }
    console.log('Todos os livros foram importados!');
  } catch (error) {
    console.error('Erro ao importar livros:', error);
  }
}

importarLivros();
