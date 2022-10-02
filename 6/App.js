import React, {useState} from 'react';
import { Alert, FlatList, TextInput, Button, View } from 'react-native';

export default function App () {
    const [keyword, setKeyword] = useState('');
    const [recipes, setRecipes] = useState([]);
    
    const getRepositories = () => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i='+ keyword)
        .then(res => res.json())
        .then(resJson => setRecipes(resJson.items))
        .catch(error =>{
            Alert.alert('Error', error);
        }); 
    }

    return(
        <View>
            <FlatList
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item})}
            data={recipes}
            />
            <TextInput title='keyword' onChangeText={text => setKeyword(text)}/>
            <Button title='FIND' onPress={getRepositories} />
        </View>
    );
}