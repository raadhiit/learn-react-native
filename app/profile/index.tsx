import { View, StyleSheet } from 'react-native'; 
import ProfileSetting from '@/components/profile/ProfileSetting'; // Adjust the import path as necessary

export default function ProfileScreen() {
    return (
      <View style={styles.container}>
        <ProfileSetting />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
    },
  });