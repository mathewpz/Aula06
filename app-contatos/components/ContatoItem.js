import React, { useState } from 'react';
import{Text, StyleSheet, TouchableOpacity, Button, Image} from 'react-native';
import Cartao from '../components/Cartao';
import Cores from '../Cores/Cores';

const ContatoItem =(props) =>{
    
    return(
        <TouchableOpacity onPress={props.onSelect} onLongPress={props.onDelete} style={estilos.contatoItem}> 
            <Image
                style={estilos.imagem} 
                source={{uri:props.imagem}}
            />
            <Cartao estilos={estilos.itemNaLista}>
                <Text style={estilos.nomeContato}>Nome: {props.nomeContato}</Text>
                <Text style={estilos.numero}>Telefone: {props.numeroContato}</Text>
                <Text style={estilos.numero}>id: {props.idContato}</Text>
                <Text style={estilos.numero}>Data:<Date>{[props.dataContato]}</Date></Text>
            </Cartao>
        </TouchableOpacity> 
    );
}
const estilos = StyleSheet.create({
    contatoItem: {
        flexDirection: 'row',
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: 'center'
    },
    itemNaLista:{
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    imagem: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#CCC',
        borderColor: Cores.primary,
        borderWidth: 1
    },
    nome: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5
    },
    numero: {
        color: '#666',
        fontSize: 16
    }
});
export default ContatoItem;