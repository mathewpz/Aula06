import React, { useState } from 'react';
import{Text, StyleSheet, TouchableOpacity, Button, ShadowPropTypesIOS} from 'react-native';
import Cartao from '../components/Cartao';
import Cores from '../Cores/Cores';
import Medidas from '../Medidas/Medidas';

const ContatoItem =(props) =>{
    const[usuarioConfirmou, setUsuarioConfirmou] = useState(false);
    const[querDetalhes, setQuerDetalhes] = useState(false);

    const confirmarEscolha=()=>{
        setUsuarioConfirmou(true);
    }
    const cancelarEscolha=()=>{
        setUsuarioConfirmou(false)
    }
    const detalhes=()=>{
        setQuerDetalhes(true);
    }

    let confirmacaoText;
    let detalhesText;

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

    else if(querDetalhes)
        detalhesText=
        <Cartao>
            <Button 
                title="detalhes"
                //onPress={props.onMudarTela(props.chave)}
            />
        </Cartao>
    return(
        <TouchableOpacity onLongPress={confirmarEscolha} onPress={detalhes}> 
            <Cartao estilos={estilos.itemNaLista}>
                <Text>({props.id}) Nome: {props.nome}</Text>
                <Text>Telefone: {props.numero}</Text>
                {confirmacaoText}
                {detalhesText}
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