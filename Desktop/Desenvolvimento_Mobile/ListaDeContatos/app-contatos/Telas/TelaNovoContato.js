import React,{useState} from 'react';
import { View, StyleSheet, TextInput, Button} from 'react-native';
import ContatoInput from '../components/ContatoInput';
import Cores from '../Cores/Cores';
import Medidas from '../Medidas/Medidas'


const TelaNovoContato=(props)=>{
    const[id, setId]= useState(10);
    const [contatos, setContatos] = useState ([]);
    const[contadorContatos, setContadorContatos] = useState(0);
    
    //para add oque foi digitado
    const adicionarContato=(nome, numero)=>{
        contato=(id, nome, numero);

        setContatos((contatos)=>{
            console.log(contatos);
            setId(id+2);
            setContadorContatos(contadorContatos+1);
            return[{key:contadorContatos.toString(),value:contato=(id),value2:contato=(nome),value3:contato=(numero)}, ...contatos];
        });
    };
    const[nome, setNome]=useState('');
    const[numero, setNumero]=useState('');
    //captura o texto digitado
    const capturaNome=(nome)=>{
        setNome(nome)
    };
    const capturaNumero=(numero)=>{
        setNumero(numero)
    };
    return(
        <View style={estilos.tela}>
            <View style={estilos.contatosView}>
                <TextInput placeholder="nome"style={estilos.contatosInputText} onChangeText={capturaNome} value={nome}/>
                <TextInput placeholder="numero"style={estilos.contatosInputText} keyboardType="number-pad" maxLength={10}onChangeText={capturaNumero} value={numero}/>
                <Button title="Add"
                    color={Cores.botao}
                    onPress={adicionarContato} 
                />
            </View>
        </View>
    );
}
const estilos = StyleSheet.create({
    tela:{
        flex:Medidas.flexGeral,
        padding:Medidas.telaPadding,
        alignItems:Medidas.alignGeral
    },
    contatosView:{
        flexDirection:Medidas.viewFlex,
        justifyContent:Medidas.viewJustify,
        alignItems:Medidas.alignGeral,
        height:Medidas.viewHeight, 
        marginVertical:Medidas.viewMargin
      },
      contatosInputText:{
        width:Medidas.inputWidth,
        borderBottomColor:Cores.borderInputT,
        borderBottomWidth:Medidas.inputBorder,
        padding:Medidas.inputPadding,
        borderRadius:Medidas.inputBorderR
      }
});
export default TelaNovoContato;