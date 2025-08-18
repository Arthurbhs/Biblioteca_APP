import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal, Pressable } from "react-native";
import { collection, onSnapshot, doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { Ionicons } from "@expo/vector-icons";

export default function ReservasTabela() {
  const [reservas, setReservas] = useState<any[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [reservaSelecionada, setReservaSelecionada] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "reservas"), async (snapshot) => {
      const lista: any[] = [];

      for (const reservaDoc of snapshot.docs) {
        const reserva = reservaDoc.data();
        let titulo = "";
        let autor = "";

        if (reserva.livroId) {
          try {
            const livroDoc = await getDoc(doc(db, "livros", String(reserva.livroId)));
            if (livroDoc.exists()) {
              const livroData = livroDoc.data();
              titulo = livroData?.titulo || "";
              autor = livroData?.autor || "";
            }
          } catch (err) {
            console.warn("Erro ao buscar livro:", err);
          }
        }

        const usuarioNome = reserva.usuario?.nome || reserva.userName || reserva.nome || "";
        const usuarioEmail = reserva.usuario?.email || "";

        lista.push({
          id: reservaDoc.id,
          titulo,
          autor,
          usuarioNome,
          usuarioEmail,
        });
      }

      setReservas(lista);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async () => {
    if (!reservaSelecionada) return;
    try {
      await deleteDoc(doc(db, "reservas", reservaSelecionada));
      setModalVisible(false);
      setReservaSelecionada(null);
    } catch (err) {
      console.error("Erro delete:", err);
    }
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.titulo || "Sem título"}</Text>
      <Text style={styles.cell}>{item.autor || "Desconhecido"}</Text>
      <Text style={styles.cell}>{item.usuarioNome || "Usuário"}</Text>
      <Text style={styles.cell}>{item.usuarioEmail || "Email"}</Text>
      <TouchableOpacity
        onPress={() => {
          setReservaSelecionada(item.id);
          setModalVisible(true);
        }}
        style={styles.deleteButton}
      >
        <Ionicons name="trash" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Reservas em tempo real</Text>
      <View style={styles.header}>
        <Text style={[styles.cell, styles.headerCell]}>Livro</Text>
        <Text style={[styles.cell, styles.headerCell]}>Autor</Text>
        <Text style={[styles.cell, styles.headerCell]}>Usuário</Text>
        <Text style={[styles.cell, styles.headerCell]}>Email</Text>
        <Text style={[styles.cell, styles.headerCell]}>Ações</Text>
      </View>
      <FlatList data={reservas} renderItem={renderItem} keyExtractor={(item) => item.id} />

      {/* 🔹 Modal de Confirmação */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>Tem certeza que deseja excluir esta reserva?</Text>
            <View style={styles.modalButtons}>
              <Pressable style={[styles.modalButton, { backgroundColor: "red" }]} onPress={handleDelete}>
                <Text style={styles.modalButtonText}>Excluir</Text>
              </Pressable>
              <Pressable
                style={[styles.modalButton, { backgroundColor: "gray" }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  header: { flexDirection: "row", backgroundColor: "#eee", paddingVertical: 5, borderBottomWidth: 1 },
  row: { flexDirection: "row", borderBottomWidth: 1, borderColor: "#ccc", paddingVertical: 5, alignItems: "center" },
  cell: { flex: 1, textAlign: "center", fontSize: 14 },
  headerCell: { fontWeight: "bold" },
  deleteButton: { paddingHorizontal: 10 },

  // 🔹 Estilos do modal
  modalOverlay: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" },
  modalBox: { width: "80%", backgroundColor: "#fff", padding: 20, borderRadius: 10, alignItems: "center" },
  modalText: { fontSize: 16, textAlign: "center", marginBottom: 20 },
  modalButtons: { flexDirection: "row", justifyContent: "space-between", width: "100%" },
  modalButton: { flex: 1, marginHorizontal: 5, padding: 10, borderRadius: 8, alignItems: "center" },
  modalButtonText: { color: "#fff", fontWeight: "bold" },
});
