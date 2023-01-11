import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://ecommerce.choniki.tk');


export default function App() {

  getProducts()

  async function getProducts() {
    const records = await pb.collection('products').getFullList(200 /* batch size */, {
      sort: '-created',
    });

    alert(JSON.stringify(records))
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Hello tecno bro!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
