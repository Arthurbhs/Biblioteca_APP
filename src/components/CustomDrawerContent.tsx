import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { auth } from '../../firebase';

const generos = ['Fantasia', 'Conto', 'História', 'Educativo'];
const temas = ['Religiões', 'Mitologia', 'Educacional', 'Cultura'];

export default function CustomDrawerContent(props: any) {
  const [generosSelecionados, setGenerosSelecionados] = useState<string[]>([]);
  const [temasSelecionados, setTemasSelecionados] = useState<string[]>([]);

  const toggleGenero = (genero: string) => {
    setGenerosSelecionados((prev) =>
      prev.includes(genero)
        ? prev.filter((g) => g !== genero)
        : [...prev, genero]
    );
  };

  const toggleTema = (tema: string) => {
    setTemasSelecionados((prev) =>
      prev.includes(tema)
        ? prev.filter((t) => t !== tema)
        : [...prev, tema]
    );
  };

  const aplicarFiltro = () => {
    const filtros = [...generosSelecionados, ...temasSelecionados];
    console.log('Filtros selecionados que serão enviados:', filtros);
    props.navigation.navigate('Filtro', { filtros });
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      <View style={styles.filtroContainer}>
       <Text style={styles.filtroTitulo}>Gênero</Text>
<View style={styles.filtroGrupo}>
  {generos.map((genero) => (
    <TouchableOpacity
      key={genero}
      style={[
        styles.filtroBotao,
        generosSelecionados.includes(genero) && styles.botaoSelecionado,
      ]}
      onPress={() => toggleGenero(genero)}
    >
      <Text style={[styles.filtroTexto,
        generosSelecionados.includes(genero) && styles.botaoSelecionado,
      ]}>{genero}</Text>
    </TouchableOpacity>
  ))}
</View>

<Text style={[styles.filtroTitulo, { marginTop: 16 }]}>Tema</Text>
<View style={styles.filtroGrupo}>
  {temas.map((tema) => (
    <TouchableOpacity
      key={tema}
      style={[
        styles.filtroBotao,
        temasSelecionados.includes(tema) && styles.botaoSelecionado,
      ]}
      onPress={() => toggleTema(tema)}
    >
      <Text style={[styles.filtroTexto,
        temasSelecionados.includes(tema) && styles.botaoSelecionado,
      ]}>{tema}</Text>
    </TouchableOpacity>
  ))}
</View>


        <TouchableOpacity style={styles.aplicarBotao} onPress={aplicarFiltro}>
          <Text style={styles.aplicarTexto}>Aplicar Filtros</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20, borderTopWidth: 1, borderTopColor: '#ccc' }} />
      <DrawerItem
        label="Sair"
        labelStyle={{ color: '#ffffff', fontWeight: 'bold' }}
        onPress={async () => {
          try {
            await auth.signOut();
            props.navigation.reset({
              index: 0,
              routes: [{ name: 'autentificacao/loginScreen' }],
            });
          } catch (error) {
            console.error('Erro ao deslogar:', error);
          }
        }}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  filtroContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  filtroTitulo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  filtroBotao: {
    padding: 10,
    backgroundColor: '#ffffff33',
    borderRadius: 8,
    marginBottom: 8,
  },
  botaoSelecionado: {
    backgroundColor: '#ffeb3b',
    color: 'black'
  },
  filtroTexto: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  aplicarBotao: {
    marginTop: 10,
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 8,
  },
  aplicarTexto: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  filtroGrupo: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: 8,
  justifyContent: 'flex-start',

},

});
