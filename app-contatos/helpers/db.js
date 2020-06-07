import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("contatos.db");

export const init = () =>{
    const promise = new Promise((resolve, reject)=>{

        db.transaction((tx)=>{
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS tb_contato (id INTEGER PRIMARY KEY, nomeContato TEXT NOT NULL, numeroContato INTEGER NOT NULL, imagem TEXT NOT NULL, lat REAL, lng REAL, data TEXT);',
                [],
                ()=>{resolve()},
                (_,err)=>{reject(err)}
            );
        });
    });
    return promise;
}

export const inserirContato = (nomeContato, numeroContato, imagem, latContato, lngContato, dataContato)=>{
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
                tx.executeSql(
                'INSERT INTO tb_contato (nomeContato, numeroContato, imagem, lat, lng, data) VALUES(?,?,?,?,?,?);',
                [nomeContato, numeroContato, imagem, latContato, lngContato, dataContato],
                (_,resultado)=>{resolve(resultado)},
                (_,err)=>{reject(err)}
            );
        });
    });
    return promise;
}

export const buscarContatos =()=>{
    const promise = new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                'SELECT * FROM tb_contato',
                [],
                (_,resultado)=>{resolve(resultado)},
                (_,err)=>{reject(err)}
            );
        });
    });
    return promise;
};