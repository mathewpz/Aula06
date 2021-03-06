import React,{useState} from 'react';
import { View, StyleSheet, TextInput, ScrollView, Text, Button} from 'react-native';
import Cores from '../Cores/Cores';
import {useDispatch} from 'react-redux';
import * as contatosActions from '../store/contatos-actions';
import TirarFoto from '../components/TirarFoto';
import CapturaLocalizaçao from '../components/CapturaLocalizaçao';
import ENV from '../env';

import * as firebase from 'firebase';
import 'firebase/firestore';

if(!firebase.apps.length)
  firebase.initializeApp(ENV);

  const db = firebase.firestore();


const TelaNovoContato=(props)=>{
    const[nomeContato, setNovoNome] = useState('');
    const[numeroContato, setNovoNumero] = useState('');
    //const[imagemURI, setImagemURI] = useState();

    const novoNomeAlterado = (nomeContato) =>{
        setNovoNome(nomeContato);
    }

    const novoNumeroAlterado = (numeroContato) =>{
        setNovoNumero(numeroContato);
    }
    // const dispatch = useDispatch();

    // const adicionarContato=()=>{
    //     dispatch(contatosActions.addContato(nomeContato, numeroContato, imagemURI));
    //     props.navigation.goBack();
    // }
    // const fotoTirada = imagemURI=>{
    //     setImagemURI(imagemURI);
    // }
    const adicionarContato = ()=>{
        db.collection('contatos').add({
          nome: nomeContato,
          numero:numeroContato,
          data: new Date
        });
        setNovoNome('');
        setNovoNumero('');
      }

    return(
        <View>
            <ScrollView>
                <View style={estilos.form}>
                    <Text style={estilos.titulo}>Novo Contato</Text>
                    <TextInput
                        placeholder="nome"
                        style={estilos.textInput}
                        onChangeText={novoNomeAlterado}
                        value={nomeContato}
                    />
                    <TextInput
                        placeholder="numero"
                        keyboardType="number-pad" 
                        maxLength={12}
                        style={estilos.textInput}
                        onChangeText={novoNumeroAlterado}
                        value={numeroContato}
                    />
                    {/* <TirarFoto onFotoTirada={fotoTirada}/>
                    <CapturaLocalizaçao/> */}
                    <Button
                        title="Salvar Contato"
                        color={Cores.primary}
                        onPress={adicionarContato}
                    />
                </View>
            </ScrollView> 
        </View>
    );
}
const estilos = StyleSheet.create({
    form: {
        margin: 30
    },
    titulo: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: "#DDD",
        borderBottomWidth: 2,
        marginBottom: 15,
        paddingVertical: 4
    }
});
export default TelaNovoContato;