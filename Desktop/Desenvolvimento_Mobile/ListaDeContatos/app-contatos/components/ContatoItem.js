import React, { useState } from 'react';
import{Text, StyleSheet, TouchableOpacity, Button, ShadowPropTypesIOS} from 'react-native';
import Cartao from '../components/Cartao';
import Cores from '../Cores/Cores';
import Medidas from '../Medidas/Medidas';

const ContatoItem =(props) =>{
    const[usuarioConfirmou, setUsuarioConfirmou] = useState(false);

    const confirmarEscolha=()=>{
        setUsuarioConfirmou(true);
    }
    const cancelarEscolha=()=>{
        setUsuarioConfirmou(false)
    }

    let confirmacaoText;

    if (usuarioConfirmou)
        confirmacaoText= 
        <Cartao>
            <Text>Realmente deseja excluir o contato?</Text>
            <Button
                title="sim"
                onPress={props.onDelete.bind(this,props.chave)}
            />
            <Button
                title="não"
                onPress={cancelarEscolha}
            />
        </Cartao>
    return(
        <TouchableOpacity onLongPress={confirmarEscolha}> 
            <Cartao estilos={estilos.itemNaLista}>
                <Text>({props.id}) Nome: {props.nome}</Text>
                <Text>Telefone: {props.numero}</Text>
                {confirmacaoText}
            </Cartao>
            
        </TouchableOpacity> 
    );
}
const estilos = StyleSheet.create({
    itemNaLista:{
        width:Medidas.itemWidth,
        maxWidth:Medidas.itemMaxW,
        alignItems:Medidas.alignGeral,
        backgroundColor:Cores.backItemNa
      }
});
export default ContatoItem;