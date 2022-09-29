import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput,  FlatList} from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const buttonPlus = () => {
    setData([...data, {key: text}]);
  }

  const buttonMinus = () => {
    setData([]);
  }

  return (
    <View style={styles.container}>
      <TextInput 
      keyboardType='numeric'
      style={{width:200, borderColor: 'gray', borderWidth: 1}}
      onChangeText={text => setText(text)}
      value={text}
      />
      <View style={{flexDirection: "row"}}>
      <Button onPress={buttonPlus} title="Add"> </Button>
      <Text>     </Text>
      <Button onPress={buttonMinus} title="Clear"> </Button>
      </View>
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
