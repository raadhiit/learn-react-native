import {
  Alert,
  ScrollView,
  StyleSheet,
  Pressable,
  Image
} from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useAuth } from '@/context/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import { MotiView, MotiText, View } from 'moti';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  const { logout } = useAuth();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.profileIconContainer}>
          <Pressable
            onPress={() => {
              Alert.alert('Logout', 'Are you sure?', [
                { text: 'Cancel', style: 'cancel' },
                {
                  text: 'Logout',
                  style: 'destructive',
                  onPress: () => {
                    logout();
                  },
                },
              ]);
            }}
          >
            <Ionicons name="log-out-outline" size={28} color="black" />
          </Pressable>
        </View>

        <View style={styles.container}>
          <View style={styles.hero}>
            <MotiView
              from={{ opacity: 0, translateY: -20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 100, type: 'timing', duration: 800 }}
              style={{ alignItems: 'center' }}
            >
              <Image
                source={require('@/assets/images/harmul.png')}
                style={styles.logo}
                resizeMode="contain"
              />
              <MotiText
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 300, duration: 800 }}
                style={styles.title}
              >
                PT Contoh Teknologi
              </MotiText>
              <MotiText style={styles.subtitle}>
                Solusi Inovatif untuk Bisnis Anda
              </MotiText>
            </MotiView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    width: '100%',
    maxWidth: 768,
    alignSelf: 'center',
    minHeight: '100%', // Tambah ini agar konten bisa memenuhi layar
  },
  hero: {
    marginTop: 50, // Tambah jarak dari atas
    marginBottom: 32,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  
  logo: {
    width: 900,
    height: 250,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // <-- putih
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666', // <-- abu terang
    textAlign: 'center',
    marginTop: 4,
  },
  
  profileIconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
});
