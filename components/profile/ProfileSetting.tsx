import { View, Text, StyleSheet, Button } from 'react-native';

export default function ProfileSetting() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profil Saya</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Nama:</Text>
        <Text style={styles.value}>Radhitya Harun</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>radhitya@example.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  value: {
    color: '#ffffff',
    paddingLeft: 5,
  },
});
