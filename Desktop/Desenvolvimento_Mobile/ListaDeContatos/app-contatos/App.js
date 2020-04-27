import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import TelaComeco from './Telas/TelaComeco';
import Cabecalho from './components/Cabecalho';
import Medidas from './Medidas/Medidas';
import TelaContato from './Telas/TelaContato';

export default function App() {
  const[chave, setChave] = useState();

  const chaveEscolhida =(chave)=>{
    setChave(chave);
  }
  const voltarTela = (chave)=>{
    setChave(null);
  }

  let conteudo = <TelaComeco onChaveEscolhida={chaveEscolhida}/>
  if(chave==null){
    conteudo = <TelaComeco onChaveEscolhida={chaveEscolhida}/>
  }
  else if(chave<=0){
    conteudo = <TelaContato valorChave={chave} onVoltarTela={voltarTela}/>
  }
  
  return (
    <View style={estilos.tela}>
      <Cabecalho titulo={"Lista De Contatos"}/>
      {conteudo}
    </View>
  );
}

const estilos = StyleSheet.create({
    tela:{
      flex:Medidas.flexGeral
    }
});