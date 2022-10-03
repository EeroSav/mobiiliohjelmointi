import {Text, View, FlatList} from 'react-native';

export default function History( {route} ) {
    const{ data } = route.params;
    return(
        <View>
            <Text>History</Text>
            <FlatList
                data={data}
                renderItem={({item}) => <Text>{item.key}</Text>}
                keyExtractor={(item, index) => index.toString()} />
        </View>
    )
}