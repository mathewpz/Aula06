import React from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';
import Cartao from '../components/Cartao';
import Medidas from '../Medidas/Medidas';

const TelaContato=(props)=> {
  return(
      <View>
        <Text style={estilos.titulo}>Contato</Text>
        <Cartao >
          <Text>contato: {props.valorChave}   </Text>
          <Text>Id: {props.valorId}</Text>
          <Text>Nome: {props.valorNome}</Text>
          <Text>Numero: {props.valorNumero}</Text>
        </Cartao>  
        <Button
         title="voltar"
         onPress={props.onVoltarTela}
        />
      </View>
  );
}
const estilos = StyleSheet.create({
  titulo:{
    fontSize:Medidas.tituloFont,
    marginVertical:Medidas.tituloMargin
}
});

export default TelaContato;
