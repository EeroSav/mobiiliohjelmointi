import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import MapView, { Marker } from'react-native-maps';

export default function App() {


var lat = 60.200692;
var lon = 24.934302;
var latD = 0.0322;
var lonD = 0.0221;

const [input, setInput] = useState('');
const [coordinates, setCoordinates] = ([]);

const buttonPress = () => {
    fetch(`http://www.mapquestapi.com/geocoding/
    v1/address?key=dGzU2O3K6nHhaZpkdf9mFMc1yxU7BH3D&location=${input}`)
    .then((response) => response.json())
    .then((data) => setCoordinates(data))
    .catch((error) => {Alert.alert("Error", error);
  });
  console.log(coordinates)
}

  return (
    <View style={styles.container}>
    <MapView
      style={styles.map}   
      region={{
        latitude: lat,
        longitude: lon,
        latitudeDelta: latD,
        longitudeDelta: lonD,  }} 
    />
      <TextInput
      style={{width:200, borderColor: 'gray', borderWidth: 1}}
      onChangeText={input => setInput(input)}
      />
      <Button onPress={buttonPress} title="SHOW"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
