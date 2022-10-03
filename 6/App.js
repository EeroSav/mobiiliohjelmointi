import React, {useState} from 'react';
import { Alert, FlatList, TextInput, Button, View, StatusBar, Text, Image } from 'react-native';

export default function App () {
    const [keyword, setKeyword] = useState('');
    const [recipes, setRecipes] = useState([]);
    
    const getRepositories = () => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i='+ keyword)
        .then(res => res.json())
        .then(resJson => setRecipes(resJson.meals))
        .catch(error =>{
            Alert.alert('Error', error);
        });
    }

    const listSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "80%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "10%"
                }}
            />
        );
    }

    return(
        <View>
            <StatusBar hidden={true} />
            <FlatList
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) =>
            <View>
                <Text> {item.strMeal} </Text>
                <Image source={{uri:item.strMealThumb}} style={{width: 50, height: 50}} />
            </View>}
            data={recipes}
            ItemSeparatorComponent={listSeparator} 
            />
            <TextInput placeholder='keyword' onChangeText={text => setKeyword(text)}/>
            <Button title='FIND' onPress={getRepositories} />
        </View>
    );
}