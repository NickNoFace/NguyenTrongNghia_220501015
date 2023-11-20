import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

// chèn hình trong <card>
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Thông tin cá nhân
      </Text>
      <Text style={styles.text}>
        Họ và Tên: Nguyễn Trọng Nghĩa
      </Text>
      <Text style={styles.text}>
        Số điện thoại: 0913092998
      </Text>
      <Text style={styles.text}>
        Mã số sinh viên: 220501015
      </Text>
      <Text style={styles.text}>
        Email: 220501015@student.bdu.edu.vn
      </Text>
      <Text style={styles.text}>
        Sở thích: Chơi điện tử, nghe nhạc, xem video giải trí,...
      </Text>
      <Card> 
        <AssetExample />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    margin: 1,
    fontSize: 16,
    textAlign: 'left'
  }
});
