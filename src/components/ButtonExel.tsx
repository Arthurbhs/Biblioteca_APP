// ButtonExel.tsx
import React from "react";
import { Platform, Alert } from "react-native";
import * as XLSX from "xlsx";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import * as FileSystem from "expo-file-system";
import { Button } from "react-native-elements";

const toSafeString = (value: any) => {
  if (value == null) return "";
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
};

export default function ButtonExel() {
  const gerarExcel = async () => {
    try {
      const reservasSnapshot = await getDocs(collection(db, "reservas"));
      const dados: any[] = [];

      for (const reservaDoc of reservasSnapshot.docs) {
        const reserva = reservaDoc.data();

        // 🔹 Buscar título e autor do livro
        let titulo = "";
        let autor = "";
        if (reserva.livroId) {
          try {
            const livroDoc = await getDoc(doc(db, "livros", String(reserva.livroId)));
            if (livroDoc.exists()) {
              const livroData = livroDoc.data();
              titulo = livroData?.titulo || "";
              autor = livroData?.autor || "";
            } else {
              console.warn(`Livro ${reserva.livroId} não encontrado no Firestore`);
            }
          } catch (err) {
            console.warn(`Erro ao buscar livro ${reserva.livroId} no Firestore`, err);
          }
        }

        // 🔹 Buscar nome e email do usuário
       // 🔹 Buscar nome e email direto do campo usuario
let nome = reserva.usuario?.nome || reserva.userName || reserva.nome || "";
let email = reserva.usuario?.email || "";


        dados.push({
          Titulo: toSafeString(titulo),
          Autor: toSafeString(autor),
          Nome: toSafeString(nome),
          Email: toSafeString(email),
        });
      }

      // 🔹 Criar planilha Excel
      const worksheet = XLSX.utils.json_to_sheet(dados);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Reservas");

      if (Platform.OS === "web") {
        const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
        const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "reservas.xlsx";
        link.click();
        URL.revokeObjectURL(url);
      } else {
        const excelBase64 = XLSX.write(workbook, { bookType: "xlsx", type: "base64" });
        const filePath = FileSystem.documentDirectory + "reservas.xlsx";
        await FileSystem.writeAsStringAsync(filePath, excelBase64, {
          encoding: FileSystem.EncodingType.Base64,
        });
        Alert.alert("Sucesso", `Arquivo salvo em: ${filePath}`);
      }
    } catch (error) {
      console.error("Erro ao gerar Excel:", error);
      Alert.alert("Erro ao gerar Excel", error instanceof Error ? error.message : String(error));
    }
  };

  return (
    <Button
      title="📄 Gerar Excel"
      onPress={gerarExcel}
      buttonStyle={{ backgroundColor: "#4CAF50", marginTop: 10 }}
    />
  );
}
