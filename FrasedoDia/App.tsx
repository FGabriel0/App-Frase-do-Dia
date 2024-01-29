import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import { frases } from './Frase';

export default function App() {

  function gerarNovaFrase (){
    let num = Math.floor(Math.random() * frases.frase.length)
    let fraseEscolhida = frases.frase[num].nome
      alert(fraseEscolhida)
    
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.Logo}
        source={require('./src/assets/logo.png')}
      />
      <TouchableOpacity style={styles.button} onPress={gerarNovaFrase}>
        <Text style={styles.textobotao}>Nova Frase</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    display:"flex",
    justifyContent:"center",
    flex:1,
    alignItems:"center"
  },
  frase:{
    fontSize: 50,
  },
  button:{
    backgroundColor:"green",
    paddingVertical:10,
    paddingHorizontal:30,
    color:"#000",
    marginTop: 20

  },
  textobotao:{
    color:"white",
    fontSize:16,
    fontWeight:"bold"
  },
  Logo:{
    display:"flex"
  }
});
