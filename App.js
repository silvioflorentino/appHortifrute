import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet,Image} from 'react-native';

const request = async (callback) => {
  const response = await fetch('https://apisilvio.azurewebsites.net/v1/api.php?apicall=getFrutas');
  const parsed = await response.json();
  callback(parsed.dadoslista);
};


export default function App() {

  const [registros, setRegistros] = useState([]);

useEffect(() => {
  request(setRegistros);
},[]);
  
  return (
    <View style={estilo.container}>
      <View>
        <Text style={estilo.titulo}> As melhores Frutas </Text>
      </View>
      <FlatList
        data={registros}
        keyExtractor={(item) => item.uid.toString()}
        renderItem={({item}) => 
          <View>
          <Text style={estilo.itens}>
            Nome: {item.nomefruta}  {'\n'} valor: {item.valorfruta}
             </Text>
             
                <Image  resizeMode={'contain'} style={estilo.img} source={{uri:item.imgfruta}}/>
            
            </View>
        }
      />
    </View>
  );
}

const estilo = StyleSheet.create({
container:{
flex:1,
backgroundColor: '#6495ED'
},
titulo:{
fontSize: 25,
textAlign: 'center',
marginBottom: 20,
marginTop: 20
},
itens:{
flex: 1,
textAlign: 'center',
backgroundColor: '#00BFFF',
paddingVertical: 10,
borderRadius: 5,
marginHorizontal: 10,
marginTop:10,
marginBottom: 5
},
    img:{
    width:55,
    height:80
  },
})
