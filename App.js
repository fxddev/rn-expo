import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import PocketBase from 'pocketbase';
import { useState, useEffect } from 'react';
// import { NavigationContainer, createStackNavigator, useNavigation } from '@react-navigation/native';

// const Stack = createStackNavigator();

import Join from "./pages/Join";

const pb = new PocketBase('https://ecommerce.choniki.tk');

export default function App() {
  // const navigation = useNavigation();

  useEffect(() => {
    getProducts()
  }, []);

  const [products, setProducts] = useState([]);
  async function getProducts() {
    const records = await pb.collection('products').getFullList(200 /* batch size */, {
      sort: '-created',
    });

    // alert(JSON.stringify(records))
    console.log(records);

    setProducts(records)
  }

  return (
    <View style={styles.container}>

      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Join" component={Join} />
        </Stack.Navigator>
      </NavigationContainer>

      <TouchableOpacity
        onPress={() => navigation.navigate('Details')}>
        <Text>Go to Details Screen</Text>
      </TouchableOpacity> */}

      {products.map((product, i) => (
        <View key={i}>
          <Text>{product.nama}</Text>
          <Text>{product.harga.diskon == 0 ?
            product.harga.normal
            :
            product.harga.diskon
          }</Text>
          <Button
            title="Beli"
            onPress={() => alert('Button pressed!')}
            color="#841584"
            disabled={false}
          />
        </View>
      ))}

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
