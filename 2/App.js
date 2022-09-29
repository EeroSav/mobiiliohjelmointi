import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, FlatList, Keyboard } from 'react-native';
var numero = Math.floor(Math.random() * 100) + 1
var arvaukset = 1

export default function App() {
  const [quess, setQuess] = useState('');
  const [text, setText] = useState('Guess a number between 0-100')
  const buttonPress = () => {
    if(quess > numero){
      setText("Your quess is too high")
      arvaukset += 1
    } else if (quess < numero) {
      setText("Your quess is too low")
      arvaukset += 1
    } else if (Number(quess) == numero){
      alert("You quessed the correct number in " + arvaukset + " quesses")
      numero = Math.floor(Math.random() * 100) + 1
      arvaukset = 1
      setText("Guess a number between 0-100")
    }
  };

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput
      keyboardType='numeric'
      style={{width:200, borderColor: 'gray', borderWidth: 1}}
      onChangeText={quess => setQuess(quess)}
      />
      <Button onPress={buttonPress} title="MAKE GUESS"></Button>
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
