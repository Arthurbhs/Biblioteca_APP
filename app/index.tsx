import { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { Asset } from 'expo-asset';
import { useRouter, useRootNavigationState } from 'expo-router';
import { Dimensions } from 'react-native';

export default function LoadingScreen() {
  const router = useRouter();
  const navigationState = useRootNavigationState();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [assetReady, setAssetReady] = useState(false);

  useEffect(() => {
    async function loadVideo() {
      try {
        await Asset.fromModule(require('../assets/images/loadingVideo.mp4')).downloadAsync();
        setAssetReady(true);
      } catch (error) {
        console.log('Erro carregando vídeo:', error);
        router.replace('./autentificacao/loginScreen'); // fallback se o vídeo falhar
      }
    }

    loadVideo();
  }, []);

  const handleVideoEnd = () => {
    if (navigationState?.key) {
      router.replace('./autentificacao/loginScreen');
    }
  };

  if (!assetReady) {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'black', fontSize: 24 }}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Video
        source={require('../assets/images/loadingVideo.mp4')}
        style={styles.video}
         resizeMode={ResizeMode.CONTAIN}  
        shouldPlay
        isLooping={false}
        onLoad={() => setVideoLoaded(true)}
       onPlaybackStatusUpdate={(status) => {
  if (!videoLoaded) return;

  if ('didJustFinish' in status && status.didJustFinish) {
    handleVideoEnd();
  }
}}

      />
    </View>
  );
}
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',    // fundo branco
    justifyContent: 'center',    // centraliza verticalmente
    alignItems: 'center',         // centraliza horizontalmente
  },
  
  video: {
    
  width: width * 1.5,
  height: width * 1.5, // mantém quadrado
},
});

