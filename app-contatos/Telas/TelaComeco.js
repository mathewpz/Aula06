import React, {useEffect} from 'react';
import { StyleSheet, FlatList, Platform, View} from 'react-native';
import ContatoItem from '../components/ContatoItem';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import BotaoCabecalho from '../components/BotaoCabecalho';
import {useSelector, useDispatch} from 'react-redux';
import * as contatosActions from '../store/contatos-actions';
import ENV from '../env';

import * as firebase from 'firebase';
import 'firebase/firestore';

if(!firebase.apps.length)
  firebase.initializeApp(ENV);

  const db = firebase.firestore();

const TelaComeco =(props)=>{
  const contatos = useSelector(estado=>estado.contatos.contatos);
  const dispatch = useDispatch();

  useEffect(()=> {
    db.collection('contatos').onSnapshot((snapshot)=>{
      let aux = [];
      snapshot.forEach (doc =>{
        aux.push({
        data: doc.data().data,
        nome: doc.data().nomeContato,
        numero: doc.data().numeroContato,
        chave: doc.id
      })
      })
      setLembretes(aux);
    })
  }, []);


  const removerContato =(chave)=>{
    Alert.alert(
      "Apagar?",
      "Quer mesmo apagar esse lembrete",
      [
        {text: "Cancelar"},
        {text: "Confirmar",
        onPress:()=> db.collection("lembretes").doc(chave).delete()}
      ]
    )
  }


  return (
    <FlatList
      data={contatos}
      renderItem={contato =>
        <ContatoItem
          idContato={contato.item.chave}
          nomeContato={contato.item.nome}
          numeroContato={contato.item.numero}
          dataContato={contato.item.data}
          onDelete={removerContato}
          onSelect={()=>{
            props.navigation.navigate('Contato', 
            {nomeDoContato: contato.item.nome, idContato: contato.id})
          }}
          imagem={contato.item.imagemURI}
        />
      }
    />
  )
}

TelaComeco.navigationOptions = dadosNav =>{
  return{
    headerTitle:'Todos os Contatos',
    headerRight:
      <HeaderButtons
        HeaderButtonComponent={BotaoCabecalho}>
        <Item
          title="Adicionar"
          iconName={Platform.OS === 'android'?'md-add':'ios-add'}
          onPress={()=>{dadosNav.navigation.navigate("NovoContato")}}
        /> 
      </HeaderButtons>
  }
}

const estilos = StyleSheet.create({

});

export default TelaComeco;