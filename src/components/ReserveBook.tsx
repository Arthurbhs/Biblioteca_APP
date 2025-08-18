import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { collection, getDocs, doc, updateDoc, getDoc, query, where } from 'firebase/firestore';
import { db } from '../../firebase';
import Toast from 'react-native-toast-message';
import { deleteDoc } from 'firebase/firestore';

interface LivroReservado {
  id: string;
  livroId: number;
  titulo: string;
  dataReserva?: string;
}

interface Props {
  uid: string;
  mostrarCancelar?: boolean;
}

export default function LivrosReservados({ uid, mostrarCancelar = false }: Props) {
  const [livros, setLivros] = useState<LivroReservado[]>([]);
  const [loading, setLoading] = useState(true);

  const carregar = async () => {
    setLoading(true);
    console.log("🟡 Iniciando carregamento das reservas...");

    try {
      const reservasSnap = await getDocs(collection(db, 'reservas'));
      console.log("🔍 Total de reservas:", reservasSnap.docs.length);

      const promessas = reservasSnap.docs.map(async (docReserva) => {
        const data = docReserva.data();
        const reservaId = docReserva.id;

        if (data.reservadoPor !== uid) return null;

        try {
          // 🔹 Busca o livro pelo campo 'id' na coleção livros
          const q = query(collection(db, "livros"), where("id", "==", data.livroId));
          const livroSnap = await getDocs(q);

          if (livroSnap.empty) {
            console.warn(`⚠️ Livro ${data.livroId} não encontrado no Firestore`);
            return null;
          }

          const livroData = livroSnap.docs[0].data();

          return {
            id: reservaId,
            livroId: data.livroId,
            titulo: livroData?.titulo || 'Título não encontrado',
            dataReserva: data.dataReserva,
          } as LivroReservado;

        } catch (error) {
          console.error(`❌ Erro ao buscar livro no Firestore (id ${data.livroId}):`, error);
          return null;
        }
      });

      const resultados = await Promise.all(promessas);
      const livrosFiltrados = resultados.filter((livro): livro is LivroReservado => livro !== null);
      setLivros(livrosFiltrados);
    } catch (error) {
      console.error("❌ Erro ao carregar reservas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!uid) {
      console.warn("⛔ UID indefinido, não carregando reservas.");
      return;
    }

    console.log("🔁 useEffect executando carregar() com UID:", uid);
    carregar();
  }, [uid]);

  const deixarDeReservar = async (reservaId: string) => {
    const ref = doc(db, 'reservas', reservaId);
    const snap = await getDoc(ref);
    if (!snap.exists()) return;

    const data = snap.data();
    const novaFila: string[] = data.fila || [];

    if (novaFila.length === 0) {
      await deleteDoc(ref);
      Toast.show({ type: 'success', text1: 'Reserva cancelada e removida' });
    } else {
      const novoReservado = novaFila.shift(); 
      await updateDoc(ref, { reservadoPor: novoReservado, fila: novaFila });
      Toast.show({ type: 'success', text1: 'Reserva cancelada, próximo da fila foi promovido' });
    }

    carregar();
  };

  if (loading) return <Text>Carregando reservas...</Text>;
  if (!loading && livros.length === 0) return <Text>Sem livros reservados.</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Seus livros reservados</Text>
      <FlatList
        data={livros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.livroId}>Título: {item.titulo}</Text>
            {item.dataReserva && (
              <Text style={styles.data}>
                Reservado em: {new Date(item.dataReserva).toLocaleDateString()}
              </Text>
            )}
            {mostrarCancelar && (
              <TouchableOpacity
                onPress={() => deixarDeReservar(item.id)}
                style={styles.botaoCancelar}
              >
                <Text style={styles.textoCancelar}>Deixar de reservar</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 20, paddingHorizontal: 16 },
  titulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  item: { backgroundColor: '#f0f0f0', padding: 12, borderRadius: 8, marginBottom: 10 },
  livroId: { fontSize: 16 },
  data: { fontSize: 14, color: '#666' },
  botaoCancelar: { marginTop: 8, padding: 8, backgroundColor: '#f44336', borderRadius: 6 },
  textoCancelar: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});
