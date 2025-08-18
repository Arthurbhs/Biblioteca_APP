// app/livros/Gerenciador.tsx
import React, { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import {
  DataTable,
  TextInput,
  Button,
  Modal,
  Portal,
  Provider,
} from "react-native-paper";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase";
import CustomHeader from '@/src/components/Header';

interface Livro {
  id: number;
  titulo: string;
  autor: string;
  editora: string;
  tema: string;
  genero: string;
  classificacaoLiteraria: string;
  numeroPaginas: number;
  resumo: string;
  dataPublicacao: string;
  dataCatalogo: string;
  capa: string;
  mostruario: string;
  docId?: string; // <- ID real do Firestore
}

export default function Gerenciador() {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [livroSelecionado, setLivroSelecionado] = useState<Livro | null>(null);

  useEffect(() => {
    const fetchLivros = async () => {
      const snapshot = await getDocs(collection(db, "livros"));
      const lista: Livro[] = snapshot.docs.map((docSnap) => ({
        ...(docSnap.data() as Livro),
        docId: docSnap.id,
      }));
      setLivros(lista);
    };
    fetchLivros();
  }, []);

  const handleEditar = (livro: Livro) => {
    setLivroSelecionado(livro);
    setOpenModal(true);
  };

 const salvarEdicao = async () => {
  if (!livroSelecionado || !livroSelecionado.docId) return;

  const docRef = doc(db, "livros", livroSelecionado.docId);

  await updateDoc(docRef, {
    titulo: livroSelecionado.titulo,
    autor: livroSelecionado.autor,
    editora: livroSelecionado.editora,
    tema: livroSelecionado.tema,
    genero: livroSelecionado.genero,
    classificacaoLiteraria: livroSelecionado.classificacaoLiteraria,
    numeroPaginas: livroSelecionado.numeroPaginas,
    resumo: livroSelecionado.resumo,
    dataPublicacao: livroSelecionado.dataPublicacao,
    dataCatalogo: livroSelecionado.dataCatalogo,
    capa: livroSelecionado.capa,
    mostruario: livroSelecionado.mostruario,
  });

  // Atualiza a lista local
  const snapshot = await getDocs(collection(db, "livros"));
  const livrosAtualizados: Livro[] = snapshot.docs.map((docSnap) => {
    const data = docSnap.data() as Livro;
    return {
      ...data,
      docId: docSnap.id,
    };
  });

  setLivros(livrosAtualizados);
  setOpenModal(false);
};


  return (
    <>
    <CustomHeader/>
    <Provider>
      <ScrollView>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Título</DataTable.Title>
            <DataTable.Title>Autor</DataTable.Title>
            <DataTable.Title>Ações</DataTable.Title>
          </DataTable.Header>

          {livros.map((livro, index) => (
            <DataTable.Row key={index}>
              <DataTable.Cell>{livro.titulo}</DataTable.Cell>
              <DataTable.Cell>{livro.autor}</DataTable.Cell>
              <DataTable.Cell>
                <Button mode="outlined" onPress={() => handleEditar(livro)}>
                  Editar
                </Button>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>

      {/* Modal de edição */}
      <Portal>
         <Modal
    visible={openModal}
    onDismiss={() => setOpenModal(false)}
    contentContainerStyle={styles.modalContainer}
  >
    <ScrollView contentContainerStyle={styles.scrollContent}>
            <TextInput
              label="Título"
              value={livroSelecionado?.titulo}
              onChangeText={(text) =>
                setLivroSelecionado({ ...livroSelecionado!, titulo: text })
              }
              style={styles.input}
            />
            <TextInput
              label="Autor"
              value={livroSelecionado?.autor}
              onChangeText={(text) =>
                setLivroSelecionado({ ...livroSelecionado!, autor: text })
              }
              style={styles.input}
            />
            <TextInput
              label="Editora"
              value={livroSelecionado?.editora}
              onChangeText={(text) =>
                setLivroSelecionado({ ...livroSelecionado!, editora: text })
              }
              style={styles.input}
            />
            <TextInput
              label="Tema"
              value={livroSelecionado?.tema}
              onChangeText={(text) =>
                setLivroSelecionado({ ...livroSelecionado!, tema: text })
              }
              style={styles.input}
            />
            <TextInput
              label="Gênero"
              value={livroSelecionado?.genero}
              onChangeText={(text) =>
                setLivroSelecionado({ ...livroSelecionado!, genero: text })
              }
              style={styles.input}
            />
            <TextInput
              label="Classificação Literária"
              value={livroSelecionado?.classificacaoLiteraria}
              onChangeText={(text) =>
                setLivroSelecionado({
                  ...livroSelecionado!,
                  classificacaoLiteraria: text,
                })
              }
              style={styles.input}
            />
            <TextInput
              label="Número de Páginas"
              value={livroSelecionado?.numeroPaginas?.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                setLivroSelecionado({
                  ...livroSelecionado!,
                  numeroPaginas: parseInt(text) || 0,
                })
              }
              style={styles.input}
            />
            <TextInput
              label="Resumo"
              value={livroSelecionado?.resumo}
              multiline
              onChangeText={(text) =>
                setLivroSelecionado({ ...livroSelecionado!, resumo: text })
              }
              style={styles.input}
            />
            <TextInput
              label="Data de Publicação"
              value={livroSelecionado?.dataPublicacao}
              onChangeText={(text) =>
                setLivroSelecionado({
                  ...livroSelecionado!,
                  dataPublicacao: text,
                })
              }
              style={styles.input}
            />
            <TextInput
              label="Data de Catálogo"
              value={livroSelecionado?.dataCatalogo}
              onChangeText={(text) =>
                setLivroSelecionado({
                  ...livroSelecionado!,
                  dataCatalogo: text,
                })
              }
              style={styles.input}
            />
            <TextInput
              label="Capa (URL)"
              value={livroSelecionado?.capa}
              onChangeText={(text) =>
                setLivroSelecionado({ ...livroSelecionado!, capa: text })
              }
              style={styles.input}
            />
            <TextInput
              label="Mostruário (URL)"
              value={livroSelecionado?.mostruario}
              onChangeText={(text) =>
                setLivroSelecionado({ ...livroSelecionado!, mostruario: text })
              }
              style={styles.input}
            />

            <Button mode="contained" onPress={salvarEdicao} style={styles.saveBtn}>
              Salvar
            </Button>
          </ScrollView>
        </Modal>
      </Portal>
    </Provider>
    </>
  );
}

const styles = StyleSheet.create({
 modalContainer: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 10,
    maxHeight: "80%", // 👈 limita altura do modal
  },
  scrollContent: {
    paddingBottom: 20, // espaço extra no fim
  },
  input: {
    marginBottom: 10,
  },
  saveBtn: {
    marginTop: 15,
  },
});
