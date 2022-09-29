import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput,  FlatList} from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [result, setResult] = useState('');
  const [data, setData] = useState([]);

  const buttonPlus = () => {
    setResult([parseInt(text) + parseInt(text2)])
    setData([...data, {key: text + ' + ' + text2 + ' = ' + (parseInt(text) + parseInt(text2))}]);
  }

  const buttonMinus = () => {
    setResult([parseInt(text) - parseInt(text2)])
    setData([...data, {key: text + ' - ' + text2 + ' = ' + (parseInt(text) - parseInt(text2))}]);
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput 
      keyboardType='numeric'
      style={{width:200, borderColor: 'gray', borderWidth: 1}}
      onChangeText={text => setText(text)}
      value={text}
      />
      <TextInput 
      keyboardType='numeric'
      style={{width:200, borderColor: 'gray', borderWidth: 1}}
      onChangeText={text2 => setText2(text2)}
      value={text2}
      />
      <View style={{flexDirection: "row"}}>
      <Button onPress={buttonPlus} title="+"> </Button>
      <Text>     </Text>
      <Button onPress={buttonMinus} title="-"> </Button>
      </View>
      <StatusBar style="auto" />
      <Text>History</Text>
      <FlatList
        data = {data}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
      />
      
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
